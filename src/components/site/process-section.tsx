import * as Accordion from "@radix-ui/react-accordion";
import { ArrowUpRight } from "lucide-react";
import { RevealGroup, RevealItem } from "./reveal";
import { SectionLabel } from "./section-label";
const steps = [{
  title: "Entendemos y definimos",
  description: "Conocemos tu marca, tus referencias, el producto que imaginás y tus prioridades. Definimos juntos el alcance que tiene sentido para tu proyecto.",
  meta: "Brief · Objetivos · Alcance"
}, {
  title: "Diseñamos y desarrollamos",
  description: "Bajamos la idea a decisiones concretas: diseño, textiles, avíos, fichas técnicas y moldería según lo que el proyecto necesite.",
  meta: "Diseño · Técnica · Materiales"
}, {
  title: "Probamos y ajustamos",
  description: "La muestra nos permite revisar calce, construcción y terminaciones. Ajustamos y validamos el producto antes de avanzar a producción.",
  meta: "Muestra · Calce · Aprobación"
}, {
  title: "Coordinamos la producción",
  description: "Organizamos materiales y procesos involucrados. Hacemos seguimiento de las etapas acordadas y de la calidad del producto.",
  meta: "Planificación · Seguimiento · Control"
}, {
  title: "Cuidamos la entrega",
  description: "Revisamos las terminaciones y coordinamos la presentación final, el etiquetado y el packaging que se hayan definido para tu proyecto.",
  meta: "Terminaciones · Presentación · Entrega"
}];
export const ProcessSection = () => {
  return <section id="proceso" className="scroll-mt-24 border-t border-border/70">
      <div className="container py-20 md:py-28 lg:py-32">
        <div className="grid gap-x-12 gap-y-10 lg:grid-cols-12">
          <RevealGroup className="lg:col-span-4">
            <RevealItem>
              <SectionLabel number="03">Cómo trabajamos</SectionLabel>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-6 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.05] text-foreground">
                Un proceso claro.
                <br />
                <span className="italic text-terracotta">Un mismo hilo.</span>
              </h2>
            </RevealItem>
            <RevealItem>
              <p className="mt-6 max-w-xs text-pretty text-[15.5px] leading-[1.7] text-muted-foreground">
                Dejamos espacio para la creatividad y ponemos orden en lo que hace
                falta resolver.
              </p>
            </RevealItem>
            <RevealItem>
              
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="lg:col-span-7 lg:col-start-6">
            <RevealItem>
              <Accordion.Root type="single" collapsible defaultValue="step-1" className="border-t border-border">
                {steps.map((step, index) => <Accordion.Item key={step.title} value={`step-${index + 1}`} className="border-b border-border">
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-center gap-5 py-6 text-left">
                        <span className="font-sans text-[10px] tracking-label text-terracotta">
                          0{index + 1}
                        </span>
                        <span className="flex-1 font-display text-[20px] leading-tight text-foreground transition-colors group-hover:text-terracotta md:text-[23px]">
                          {step.title}
                        </span>
                        <span className="relative flex size-4 shrink-0 items-center justify-center text-foreground/70">
                          <span className="absolute h-px w-4 bg-current" />
                          <span className="absolute h-4 w-px bg-current transition-transform duration-500 group-data-[state=open]:scale-y-0" />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <div className="pb-7 pl-8 pr-8">
                        <p className="max-w-[52ch] text-pretty text-[14.5px] leading-[1.7] text-muted-foreground">
                          {step.description}
                        </p>
                        <p className="mt-4 font-sans text-[9px] uppercase tracking-kicker text-muted-foreground/70">
                          {step.meta}
                        </p>
                      </div>
                    </Accordion.Content>
                  </Accordion.Item>)}
              </Accordion.Root>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>;
};