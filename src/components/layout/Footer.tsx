import { MessageCircle, Music2 } from "lucide-react";
import { whatsappUrl } from "@/lib/config";

export function Footer() {
  return (
    <footer className="bg-[#11120f] text-white">
      <div className="section-shell grid gap-12 py-16 lg:grid-cols-[1.4fr_1.4fr_1fr] lg:py-20">
        <div><a href="#inicio" className="font-display text-4xl tracking-[0.14em]">LuisAmador</a><p className="mt-2 text-[0.58rem] uppercase tracking-[0.3em] text-gold">Alta Sastrería</p><p className="mt-6 max-w-xs text-sm leading-7 text-white/50">El arte de vestir bien, creado con paciencia, precisión y una atención profundamente personal.</p></div>
        <div className="grid grid-cols-2 gap-8 sm:gap-12 lg:gap-8">
          <div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Explora</h3><div className="mt-5 space-y-3 text-sm text-white/60"><a className="block hover:text-white" href="#colecciones">Colecciones</a><a className="block hover:text-white" href="#proceso">Cómo funciona</a><a className="block hover:text-white" href="#lookbook">Lookbook</a></div></div>
          <div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">LuisAmador</h3><div className="mt-5 space-y-3 text-sm text-white/60"><a className="block hover:text-white" href="#nosotros">Nuestra historia</a><a className="block hover:text-white" href="#faq">Preguntas frecuentes</a><a className="block hover:text-white" href="#contacto">Contacto</a></div></div>
        </div>
        <div><h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Conversemos</h3><p className="mt-5 text-sm leading-6 text-white/60">Jr. Huallaga 305<br />Centro de Lima</p><div className="mt-6 flex gap-3"><a href={whatsappUrl("Hola, deseo información sobre LuisAmador.")} aria-label="WhatsApp" className="grid size-11 place-items-center border border-white/20 transition hover:border-gold hover:text-gold"><MessageCircle size={17} /></a><a href="#" aria-label="Instagram" className="grid size-11 place-items-center border border-white/20 transition hover:border-gold hover:text-gold"><svg viewBox="0 0 24 24" aria-hidden="true" className="size-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg></a><a href="#" aria-label="TikTok" className="grid size-11 place-items-center border border-white/20 transition hover:border-gold hover:text-gold"><Music2 size={17} /></a></div></div>
      </div>
      <div className="section-shell"><div className="flex flex-col gap-3 border-t border-white/10 py-6 text-[0.62rem] uppercase tracking-widest text-white/35 sm:flex-row sm:justify-between"><p>© 2026 LuisAmador — Alta Sastrería</p><p>Hecho en Lima, Perú</p></div></div>
    </footer>
  );
}