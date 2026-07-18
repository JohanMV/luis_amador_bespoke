import { Link } from "react-router-dom";
import { Reveal } from "@/components/ui";
import type { Audience } from "@/types";

type AudienceFilter = "todos" | Audience;

export interface OccasionCategory {
  id: string;
  eyebrow: string;
  label: string;
  description: string;
  image: string;
  audience: AudienceFilter;
  category: string;
}

const occasions: OccasionCategory[] = [
  { id: "ejecutivo", eyebrow: "Trabajo y liderazgo", label: "Ejecutivo", description: "Sastrería precisa para reuniones, presentaciones y decisiones importantes.", image: "/images/products/savile-main.webp", audience: "todos", category: "Ejecutivo" },
  { id: "novios", eyebrow: "Bodas", label: "Novios", description: "Smoking y ternos ceremoniales pensados para un día irrepetible.", image: "/images/products/monaco-main.webp", audience: "hombre", category: "Novio" },
  { id: "novias-ceremonia", eyebrow: "Bodas y gala", label: "Novias y ceremonia", description: "Siluetas de autor para protagonistas e invitadas memorables.", image: "/images/products/amalfi-main.webp", audience: "mujer", category: "novias-ceremonia" },
  { id: "quinceanera", eyebrow: "Celebraciones", label: "Quinceañera", description: "Volumen, color y acabados artesanales para una entrada inolvidable.", image: "/images/products/luna-main.webp", audience: "mujer", category: "Quinceañera" },
];

interface OccasionCategoriesProps {
  activeCategory?: string;
  onSelect?: (occasion: OccasionCategory) => void;
}

function occasionHref(occasion: OccasionCategory) {
  const params = new URLSearchParams();
  if (occasion.audience !== "todos") params.set("publico", occasion.audience);
  params.set("categoria", occasion.category);
  return `/tienda?${params.toString()}`;
}

export function OccasionCategories({ activeCategory, onSelect }: OccasionCategoriesProps) {
  return (
    <section className="bg-ivory-light py-20 sm:py-28 lg:py-36">
      <div className="section-shell">
        <div>
          <Reveal><p className="eyebrow">Elige tu ocasión</p><h2 className="mt-4 max-w-2xl font-display text-4xl leading-tight sm:text-5xl">Vestimos el momento que importa</h2></Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {occasions.map((occasion, index) => {
              const active = activeCategory === occasion.category;
              const className = `group relative min-h-72 w-full overflow-hidden text-left text-white outline-offset-4 ${active ? "ring-2 ring-gold ring-offset-4 ring-offset-ivory-light" : ""}`;
              const content = (
                <>
                  <img src={occasion.image} alt="" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute inset-0 bg-gradient-to-t from-ink via-ink/25 to-transparent" />
                  <span className="absolute inset-x-0 bottom-0 p-5">
                    <span className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-gold-light">{occasion.eyebrow}</span>
                    <span className="mt-2 block font-display text-2xl">{occasion.label}</span>
                    <span className="mt-2 block text-xs leading-5 text-white/80">{occasion.description}</span>
                  </span>
                </>
              );

              return (
                <Reveal key={occasion.id} delay={index * 0.06}>
                  {onSelect ? (
                    <button type="button" onClick={() => onSelect(occasion)} aria-pressed={active} className={className}>
                      {content}
                    </button>
                  ) : (
                    <Link to={occasionHref(occasion)} className={`block ${className}`}>
                      {content}
                    </Link>
                  )}
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
