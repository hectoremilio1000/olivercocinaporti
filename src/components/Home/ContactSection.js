import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import ContactForm from "@/components/forms/ContactForm";
import { CONTACT } from "@/data/site";

export default function ContactSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
        <div className="lg:col-span-2">
          <p className="text-sm font-semibold uppercase tracking-widest text-[var(--oliver-blue)] mb-3">Contacto</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--oliver-navy)] mb-5 leading-tight">Cuéntanos de tu proyecto</h2>
          <p className="text-lg text-[var(--neutral-700)] mb-10 leading-relaxed">Te respondemos en menos de 24 horas hábiles con una propuesta inicial.</p>
          <div className="space-y-5">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center"><Phone size={18} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)] mb-1">Teléfono</p>
                <a href={`tel:${CONTACT.phoneRaw}`} className="text-[var(--oliver-navy)] font-semibold hover:underline">{CONTACT.phone}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center"><FaWhatsapp size={18} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)] mb-1">WhatsApp</p>
                <a href={`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`} target="_blank" rel="noopener noreferrer" className="text-[var(--oliver-navy)] font-semibold hover:underline">Chat directo</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center"><Mail size={18} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)] mb-1">Email</p>
                <a href={`mailto:${CONTACT.email}`} className="text-[var(--oliver-navy)] font-semibold hover:underline">{CONTACT.email}</a>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center"><MapPin size={18} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)] mb-1">Ubicación</p>
                <p className="text-[var(--oliver-navy)] font-semibold">{CONTACT.address}</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[var(--oliver-navy)] text-white flex items-center justify-center"><Clock size={18} /></div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-[var(--neutral-500)] mb-1">Horario</p>
                <p className="text-[var(--oliver-navy)] font-semibold">{CONTACT.hours}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:col-span-3 bg-[var(--neutral-100)] rounded-lg p-6 lg:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
