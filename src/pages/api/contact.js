// Endpoint: POST /api/contact
// Recibe leads del formulario, valida y los guarda/notifica.
// MVP: log + opcional envio a email via Resend (si RESEND_API_KEY esta seteada).

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { nombre, empresa, email, telefono, tipo, etapa, mensaje } = req.body || {};

  // Validacion server-side (defensa en profundidad — el cliente ya valida)
  const errors = {};
  if (!nombre || typeof nombre !== "string" || !nombre.trim()) errors.nombre = "Requerido";
  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Email invalido";
  if (!telefono || typeof telefono !== "string" || !telefono.trim()) errors.telefono = "Requerido";
  if (!tipo || typeof tipo !== "string" || !tipo.trim()) errors.tipo = "Requerido";

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  // Sanitizacion basica
  const lead = {
    nombre: String(nombre).slice(0, 200).trim(),
    empresa: empresa ? String(empresa).slice(0, 200).trim() : "",
    email: String(email).slice(0, 200).trim().toLowerCase(),
    telefono: String(telefono).slice(0, 50).trim(),
    tipo: String(tipo).slice(0, 100).trim(),
    etapa: etapa ? String(etapa).slice(0, 100).trim() : "",
    mensaje: mensaje ? String(mensaje).slice(0, 2000).trim() : "",
    receivedAt: new Date().toISOString(),
    userAgent: req.headers["user-agent"] || "",
    ip: req.headers["x-forwarded-for"]?.split(",")[0]?.trim() || req.socket?.remoteAddress || "",
  };

  // Log: en Vercel se ve en Functions logs
  console.log("[contact] new lead:", JSON.stringify(lead));

  // Envio opcional por email via Resend
  // Para activar: setear env vars RESEND_API_KEY y CONTACT_TO_EMAIL en Vercel
  if (process.env.RESEND_API_KEY && process.env.CONTACT_TO_EMAIL) {
    try {
      const resp = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || "Oliver Cocina por Ti <onboarding@resend.dev>",
          to: [process.env.CONTACT_TO_EMAIL],
          reply_to: lead.email,
          subject: `Nueva cotizacion: ${lead.tipo} - ${lead.nombre}`,
          html: `
            <h2>Nueva solicitud de cotizacion</h2>
            <p><strong>Nombre:</strong> ${escapeHtml(lead.nombre)}</p>
            <p><strong>Empresa:</strong> ${escapeHtml(lead.empresa) || "(no proporcionada)"}</p>
            <p><strong>Email:</strong> ${escapeHtml(lead.email)}</p>
            <p><strong>Telefono:</strong> ${escapeHtml(lead.telefono)}</p>
            <p><strong>Tipo de proyecto:</strong> ${escapeHtml(lead.tipo)}</p>
            <p><strong>Etapa:</strong> ${escapeHtml(lead.etapa) || "(no especificada)"}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${escapeHtml(lead.mensaje).replace(/\n/g, "<br>") || "(sin mensaje)"}</p>
            <hr>
            <p style="color:#888;font-size:12px;">Recibido: ${lead.receivedAt} - IP: ${lead.ip}</p>
          `,
        }),
      });
      if (!resp.ok) {
        const err = await resp.text();
        console.error("[contact] resend error:", resp.status, err);
        // No bloqueamos al usuario por fallo de email; ya tenemos el log
      }
    } catch (e) {
      console.error("[contact] resend exception:", e);
    }
  }

  return res.status(200).json({ ok: true });
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
