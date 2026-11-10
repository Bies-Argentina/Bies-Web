import { agencyImage } from "@/lib/site";
import { RevealGroup, RevealItem } from "./reveal";
import { SectionLabel } from "./section-label";

export const AgencySection = () => {
  return (
    <section id="agencia" className="scroll-mt-24 border-t border-border/70">
      <div className="container py-20 md:py-28 lg:py-32">
        <RevealGroup>
          <RevealItem>
            <SectionLabel number="01">La agencia</SectionLabel>
          </RevealItem>
        </RevealGroup>

        <div className="mt-8 grid gap-x-12 gap-y-10 lg:mt-10 lg:grid-cols-12">
          <RevealGroup className="lg:col-span-4">
            <RevealItem>
              <figure className="max-w-sm lg:max-w-none">
                <div className="overflow-hidden bg-sand shadow-soft">
                  <img
                    src={agencyImage}
                    crossOrigin="anonymous"
                    alt="Manos revisando fichas técnicas de una camisa y un pantalón sobre una mesa con muestras de tela"
                    className="aspect-[4/5] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </figure>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="lg:col-span-7 lg:col-start-6">
            <RevealItem>
              <h2 className="max-w-[22ch] font-display text-[clamp(2.1rem,4.2vw,3.6rem)] leading-[1.04] text-foreground">
                Una mirada integral.
                <br />
                <span className="italic text-terracotta">En cada decisión.</span>
              </h2>
            </RevealItem>

            <RevealItem>
              <div className="mt-9 grid gap-7 sm:grid-cols-2 sm:gap-10">
                <p className="text-pretty text-[16px] leading-[1.65] text-muted-foreground">
                  Somos Bies, una agencia de moda y producto terminado. Integramos
                  la mirada creativa y el desarrollo técnico con la gestión de
                  producción para que cada decisión responda a tu marca.
                </p>
                <p className="text-pretty text-[16px] leading-[1.65] text-muted-foreground">
                  Podemos acompañarte desde cero o sumarnos a una etapa puntual.
                  Entendemos lo que querés hacer, ordenamos el camino y conectamos
                  las partes para llegar al producto final.
                </p>
              </div>
            </RevealItem>

            <RevealItem>
              <div className="mt-12 flex flex-col gap-2 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <p className="font-serif text-[13px] italic text-muted-foreground">
                  Un equipo. Todo el proceso.
                </p>
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};
