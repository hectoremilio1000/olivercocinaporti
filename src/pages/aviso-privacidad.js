import Head from "next/head";
import PageHero from "@/components/pages-sections/PageHero";
import { SITE, CONTACT } from "@/data/site";

export default function PrivacidadPage() {
  return (
    <>
      <Head>
        <title>Aviso de privacidad — {SITE.name}</title>
        <meta name="description" content="Aviso de privacidad de Oliver Cocina por Ti. Cómo tratamos tus datos personales." />
        <meta property="og:title" content={`Aviso de privacidad — ${SITE.name}`} />
        <meta property="og:description" content="Cómo tratamos tus datos personales." />
        <meta property="og:url" content={`${SITE.url}/aviso-privacidad`} />
      </Head>
      <PageHero eyebrow="Legal" title="Aviso de privacidad" subtitle="Compromiso con el tratamiento responsable de tus datos personales." />

      <article className="max-w-3xl mx-auto px-4 lg:px-6 py-16 lg:py-20 text-[var(--neutral-700)] leading-relaxed">
        <p className="mb-6 text-sm bg-[var(--neutral-100)] border-l-4 border-[var(--oliver-blue)] px-4 py-3 rounded">
          <strong>[PENDIENTE LEGAL]</strong> — Este documento es un borrador pendiente de revisión por el equipo legal de Oliver Cocina por Ti antes de su publicación definitiva. Si necesitas información formal, escríbenos a <a className="underline" href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>.
        </p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">1. Identidad del responsable</h2>
        <p className="mb-4">Oliver Cocina por Ti es responsable del tratamiento de los datos personales que nos proporcionas a través de este sitio web, formularios de contacto, WhatsApp, correo electrónico o cualquier otro medio de comunicación. <em>[PENDIENTE: razón social completa, RFC y domicilio fiscal]</em>.</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">2. Datos personales recabados</h2>
        <p className="mb-4">Recabamos los siguientes datos cuando contactas con nosotros: nombre, empresa, correo electrónico, teléfono, tipo y etapa del proyecto, así como cualquier información que voluntariamente incluyas en tu mensaje. No solicitamos datos personales sensibles.</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">3. Finalidades del tratamiento</h2>
        <p className="mb-4">Tus datos se utilizan para responder tu solicitud de cotización, dar seguimiento comercial al proyecto, enviar propuestas técnicas y, en su caso, formalizar la relación comercial. No comercializamos ni compartimos tus datos con terceros para fines promocionales.</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">4. Derechos ARCO</h2>
        <p className="mb-4">Tienes derecho a Acceder, Rectificar, Cancelar u Oponerte al tratamiento de tus datos personales en cualquier momento, así como a revocar el consentimiento que hayas otorgado. Para ejercer estos derechos, envía una solicitud por escrito al correo de contacto de Oliver Cocina por Ti.</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">5. Transferencias</h2>
        <p className="mb-4">No transferimos tus datos a terceros sin tu consentimiento, salvo cuando sea legalmente requerido o necesario para la prestación del servicio que solicitaste (por ejemplo, instaladores, transportistas o proveedores autorizados).</p>

        <h2 className="text-2xl font-bold text-[var(--oliver-navy)] mt-10 mb-4">6. Modificaciones al aviso</h2>
        <p className="mb-4">Cualquier modificación a este aviso será publicada en esta misma página. Te recomendamos consultarlo periódicamente.</p>

        <p className="mt-12 text-xs text-[var(--neutral-500)]">Última actualización: <em>[PENDIENTE: fecha oficial de publicación]</em>.</p>
      </article>
    </>
  );
}
