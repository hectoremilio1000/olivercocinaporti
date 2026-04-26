import { useState } from "react";
import { Send, Check, AlertCircle } from "lucide-react";

const PROJECT_TYPES = ["Restaurante", "Hotel", "Comedor industrial", "Cafetería / Barra", "Catering / Producción", "Otro"];
const PROJECT_STAGES = ["Solo idea", "Tengo plano / anteproyecto", "Quiero remodelar", "Quiero ampliar"];

export default function ContactForm() {
  const [form, setForm] = useState({ nombre: "", empresa: "", email: "", telefono: "", tipo: "", etapa: "", mensaje: "" });
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState(null);

  const update = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: null }));
    if (serverError) setServerError(null);
  };

  const validate = () => {
    const e = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.email.trim()) e.email = "Requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email inválido";
    if (!form.telefono.trim()) e.telefono = "Requerido";
    if (!form.tipo) e.tipo = "Selecciona una opción";
    return e;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length > 0) { setErrors(v); return; }
    setStatus("submitting");
    setServerError(null);
    try {
      const resp = await fetch("https://oliverbackendadonis-production.up.railway.app/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await resp.json();
      if (!resp.ok) {
        if (data.errors) setErrors(data.errors);
        else setServerError(data.error || "No pudimos enviar tu solicitud. Intenta de nuevo.");
        setStatus("idle");
        return;
      }
      setStatus("success");
    } catch (err) {
      console.error(err);
      setServerError("No pudimos conectar con el servidor. Intenta de nuevo o escríbenos por WhatsApp.");
      setStatus("idle");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-lg p-8 border border-[var(--neutral-200)] text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-green-100 text-green-600 mb-5"><Check size={28} /></div>
        <h3 className="text-xl font-bold text-[var(--oliver-navy)] mb-2">¡Solicitud enviada!</h3>
        <p className="text-[var(--neutral-700)]">Te respondemos en menos de 24 horas hábiles con una propuesta inicial.</p>
      </div>
    );
  }

  const inputCls = (field) => `w-full px-4 py-3 rounded border bg-white text-[var(--neutral-900)] placeholder-[var(--neutral-500)] focus:outline-none focus:border-[var(--oliver-navy)] transition-colors ${errors[field] ? "border-red-400" : "border-[var(--neutral-300)]"}`;
  const labelCls = "block text-sm font-semibold text-[var(--neutral-700)] mb-1.5";

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Nombre completo <span className="text-red-500">*</span></label>
          <input type="text" value={form.nombre} onChange={(e) => update("nombre", e.target.value)} className={inputCls("nombre")} placeholder="Tu nombre" required />
          {errors.nombre && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.nombre}</p>}
        </div>
        <div>
          <label className={labelCls}>Empresa</label>
          <input type="text" value={form.empresa} onChange={(e) => update("empresa", e.target.value)} className={inputCls("empresa")} placeholder="Tu empresa (opcional)" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Email <span className="text-red-500">*</span></label>
          <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} className={inputCls("email")} placeholder="tu@correo.com" required />
          {errors.email && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
        </div>
        <div>
          <label className={labelCls}>Teléfono / WhatsApp <span className="text-red-500">*</span></label>
          <input type="tel" value={form.telefono} onChange={(e) => update("telefono", e.target.value)} className={inputCls("telefono")} placeholder="55 0000 0000" required />
          {errors.telefono && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.telefono}</p>}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Tipo de proyecto <span className="text-red-500">*</span></label>
          <select value={form.tipo} onChange={(e) => update("tipo", e.target.value)} className={inputCls("tipo")} required>
            <option value="">Selecciona…</option>
            {PROJECT_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
          {errors.tipo && <p className="mt-1 text-xs text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.tipo}</p>}
        </div>
        <div>
          <label className={labelCls}>Etapa del proyecto</label>
          <select value={form.etapa} onChange={(e) => update("etapa", e.target.value)} className={inputCls("etapa")}>
            <option value="">Selecciona…</option>
            {PROJECT_STAGES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
      </div>
      <div>
        <label className={labelCls}>Mensaje</label>
        <textarea rows={4} value={form.mensaje} onChange={(e) => update("mensaje", e.target.value)} className={inputCls("mensaje")} placeholder="Cuéntanos brevemente sobre tu proyecto…" />
      </div>
      {serverError && (
        <div className="px-4 py-3 rounded border border-red-300 bg-red-50 text-sm text-red-700 flex items-start gap-2">
          <AlertCircle size={16} className="flex-shrink-0 mt-0.5" /> {serverError}
        </div>
      )}
      <button type="submit" disabled={status === "submitting"} className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-8 py-4 rounded font-semibold bg-[var(--oliver-navy)] text-white hover:bg-[var(--oliver-navy-deep)] disabled:opacity-60 transition-colors">
        {status === "submitting" ? "Enviando…" : (<>Enviar solicitud de cotización <Send size={18} /></>)}
      </button>
    </form>
  );
}
