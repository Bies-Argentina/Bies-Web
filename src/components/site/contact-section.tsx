import { BriefForm } from "./brief-form";
import { RevealGroup, RevealItem } from "./reveal";
import { SectionLabel } from "./section-label";

export const ContactSection = () => {
  return (
    <section
      id="contacto"
      className="relative scroll-mt-24 overflow-hidden border-t border-border/70 bg-gradient-sage grain"
    >
      <div className="container relative py-20 md:py-28 lg:py-32">
        <RevealGroup className="mx-auto max-w-2xl text-center">
          <RevealItem>
            <SectionLabel number="04" className="justify-center">
              Tu punto de partida
            </SectionLabel>
          </RevealItem>
          <RevealItem>
            <h2 className="mt-7 font-display text-[clamp(2.2rem,4.8vw,3.9rem)] leading-[1.03] text-foreground">
              No hace falta tener
              <br />
              <span className="italic text-terracotta">todo resuelto.</span>
            </h2>
          </RevealItem>
          <RevealItem>
            <p className="mx-auto mt-6 max-w-md text-pretty text-[15.5px] leading-[1.7] text-chocolate/85">
              Contanos dónde estás. Te ayudamos a ordenar lo que necesitás y a
              preparar tu proyecto.
            </p>
          </RevealItem>
        </RevealGroup>

        <RevealGroup className="mx-auto mt-12 max-w-3xl lg:mt-16">
          <RevealItem>
            <BriefForm />
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
};
