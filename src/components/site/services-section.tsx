import { useState } from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealGroup, RevealItem } from "./reveal";
import { SectionLabel } from "./section-label";

type Service = {
  id: string;
  title: string;
  kicker: string;
  heading: string;
  description: string;
  items: string[];
  outcome: string;
};

const services: Service[] = [
  {
    id: "direccion",
    title: "Diseño",
    kicker: "Para construir una dirección",
    heading: "Una idea con criterio de marca.",
    description:
      "Traducimos tu universo en una propuesta de producto coherente. Definimos qué hacer, para quién y con qué intención antes de pasar al desarrollo.",
    items: [
      "Concepto, referencias y dirección visual",
      "Propuesta de prendas, siluetas y color",
      "Selección inicial de textiles y avíos",
    ],
    outcome: "Una propuesta de diseño que orienta las siguientes decisiones.",
  },
  {
    id: "desarrollo",
    title: "Desarrollo técnico",
    kicker: "Para volverlo real",
    heading: "La idea, resuelta en el papel.",
    description:
      "Convertimos el diseño en información precisa para producir: moldería, fichas técnicas, especificación de telas, avíos y terminaciones.",
    items: [
      "Moldería y curva de talles",
      "Fichas técnicas y despiece de prenda",
      "Telas, avíos, etiquetas y terminaciones.",
    ],
    outcome: "Un producto documentado, listo para muestrear y cotizar.",
  },
  {
    id: "muestras",
    title: "Muestras y calce",
    kicker: "Para que calce como debe",
    heading: "El calce se prueba, no se supone.",
    description:
      "Desarrollamos muestras y las revisamos con vos. Ajustamos proporciones y terminaciones.",
    items: [
      "Desarrollo de muestras y prototipos",
      "Revisión de calce y caída",
      "Correcciones y aprobación final",
    ],
    outcome: "Una muestra aprobada que reduce riesgos en producción.",
  },
  {
    id: "produccion",
    title: "Producción y producto terminado",
    kicker: "Para llegar al mercado",
    heading: "De la idea a la prenda final.",
    description:
      "Coordinamos la producción, los materiales y los tiempos. Seguimos cada etapa y controlamos la calidad para que lo aprobado sea lo que recibís.",
    items: [
      "Gestión de producción y materiales.",
      "Seguimiento y control de calidad",
      "Etiquetado, packaging y entrega",
    ],
    outcome: "Producto terminado, consistente y listo para tu marca.",
  },
];

const ServiceDetail = ({
  service,
  variant,
}: {
  service: Service;
  variant: "panel" | "inline";
}) => {
  const isPanel = variant === "panel";

  return (
    <div className={isPanel ? "bg-gradient-sage p-7 shadow-soft sm:p-10 md:p-12" : "pb-8"}>
      <p
        className={cn(
          "font-sans text-[9px] uppercase tracking-kicker",
          isPanel ? "text-sage-deep/70" : "text-terracotta",
        )}
      >
        {service.kicker}
      </p>
      <h3
        className={cn(
          "mt-5 max-w-[18ch] font-display text-[clamp(1.65rem,2.8vw,2.4rem)] leading-[1.08]",
          isPanel ? "text-sage-deep" : "text-foreground",
        )}
      >
        {service.heading}
      </h3>
      <p
        className={cn(
          "mt-5 max-w-[40ch] text-pretty text-[14.5px] leading-[1.65]",
          isPanel ? "text-sage-deep/80" : "text-muted-foreground",
        )}
      >
        {service.description}
      </p>

      <ul className={cn("mt-7 border-t", isPanel ? "border-sage-deep/15" : "border-border/80")}>
        {service.items.map((item) => (
          <li
            key={item}
            className={cn(
              "flex items-start gap-3 border-b py-3 text-[14px] leading-snug",
              isPanel
                ? "border-sage-deep/15 text-sage-deep/90"
                : "border-border/80 text-foreground/85",
            )}
          >
            <Plus className="mt-0.5 size-3.5 shrink-0 text-terracotta" />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <p
          className={cn(
            "font-sans text-[9px] uppercase tracking-kicker",
            isPanel ? "text-sage-deep/60" : "text-muted-foreground/70",
          )}
        >
          El punto de llegada
        </p>
        <p
          className={cn(
            "mt-2 max-w-[38ch] text-[14px] leading-relaxed",
            isPanel ? "text-sage-deep/85" : "text-muted-foreground",
          )}
        >
          {service.outcome}
        </p>
      </div>

      <a
        href="#contacto"
        className={cn(
          "group mt-8 inline-flex items-center gap-3 border-b pb-2 font-sans text-[10px] font-medium uppercase tracking-label transition-colors",
          isPanel
            ? "border-sage-deep/40 text-sage-deep hover:border-sage-deep"
            : "border-foreground/30 text-foreground hover:border-foreground",
        )}
      >
        Necesito esta etapa
        <ArrowUpRight className="size-3.5 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </a>
    </div>
  );
};

export const ServicesSection = () => {
  const [active, setActive] = useState(services[0].id);
  const current = services.find((s) => s.id === active) ?? services[0];

  return (
    <section
      id="servicios"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/70 bg-cream-deep/35 grain"
    >
      <div className="container relative py-20 md:py-28 lg:py-32">
        <div className="grid items-end gap-x-12 gap-y-8 lg:grid-cols-12">
          <RevealGroup className="lg:col-span-6">
            <RevealItem>
              <SectionLabel number="02">Lo que hacemos</SectionLabel>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-6 font-display text-[clamp(2.1rem,4.4vw,3.7rem)] leading-[1.02] text-foreground">
                De la visión
                <br />
                <span className="italic text-terracotta">al detalle.</span>
              </h2>
            </RevealItem>
          </RevealGroup>
          <RevealGroup className="lg:col-span-5 lg:col-start-8">
            <RevealItem>
              <p className="max-w-xs text-pretty text-[15px] leading-relaxed text-muted-foreground lg:ml-auto lg:text-right">
                Elegí una etapa y descubrí cómo podemos acompañarte.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>

        {/* Mobile: cada etapa se despliega en el lugar */}
        <div className="mt-10 lg:hidden">
          <RevealGroup>
            <RevealItem>
              <Accordion.Root type="single" collapsible defaultValue={services[0].id} className="border-t border-border">
                {services.map((service, index) => (
                  <Accordion.Item
                    key={service.id}
                    value={service.id}
                    className="border-b border-border"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center gap-4 py-5 text-left">
                        <span className="font-sans text-[10px] tracking-label text-terracotta">
                          0{index + 1}
                        </span>
                        <span className="flex-1 font-display text-[20px] leading-tight text-foreground transition-colors group-hover:text-terracotta">
                          {service.title}
                        </span>
                        <span className="relative flex size-4 shrink-0 items-center justify-center text-foreground/60">
                          <span className="absolute h-px w-4 bg-current" />
                          <span className="absolute h-4 w-px bg-current transition-transform duration-500 group-data-[state=open]:scale-y-0" />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <ServiceDetail service={service} variant="inline" />
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 font-serif text-[13px] italic leading-relaxed text-muted-foreground">
                Cada proyecto tiene su recorrido. Podemos integrar todas las etapas
                o trabajar sobre una necesidad concreta.
              </p>
            </RevealItem>
          </RevealGroup>
        </div>

        {/* Desktop: listado de etapas + panel fijo */}
        <div className="mt-12 hidden gap-x-12 gap-y-10 lg:mt-16 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div role="tablist" aria-label="Etapas de trabajo" className="border-t border-border">
              {services.map((service, index) => {
                const isActive = service.id === active;
                return (
                  <button
                    key={service.id}
                    role="tab"
                    aria-selected={isActive}
                    aria-controls={`panel-${service.id}`}
                    id={`tab-${service.id}`}
                    onClick={() => setActive(service.id)}
                    className={cn(
                      "group flex w-full items-center gap-5 border-b border-border py-5 text-left transition-colors duration-300 md:py-6",
                      isActive ? "text-terracotta" : "text-foreground hover:text-terracotta",
                    )}
                  >
                    <span
                      className={cn(
                        "font-sans text-[10px] tracking-label transition-colors",
                        isActive ? "text-terracotta" : "text-muted-foreground",
                      )}
                    >
                      0{index + 1}
                    </span>
                    <span className="flex-1 font-display text-[21px] leading-tight md:text-[24px]">
                      {service.title}
                    </span>
                    <ArrowRight
                      className={cn(
                        "size-4 shrink-0 transition-all duration-500",
                        isActive
                          ? "translate-x-0 opacity-100"
                          : "-translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-50",
                      )}
                    />
                  </button>
                );
              })}
            </div>
            <p className="mt-6 max-w-sm font-serif text-[13px] italic leading-relaxed text-muted-foreground">
              Cada proyecto tiene su recorrido. Podemos integrar todas las etapas o
              trabajar sobre una necesidad concreta.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div
              key={current.id}
              id={`panel-${current.id}`}
              role="tabpanel"
              aria-labelledby={`tab-${current.id}`}
              className="animate-fade-rise"
            >
              <ServiceDetail service={current} variant="panel" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
