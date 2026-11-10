import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { heroImage, site } from "@/lib/site";
import { RevealGroup, RevealItem } from "./reveal";
export const HeroSection = () => {
  return <section id="inicio" className="relative overflow-hidden pt-[72px] md:pt-[84px]">
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[420px] w-[420px] rounded-full bg-sage/40 blur-3xl" />
      <div className="container relative pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="grid items-start gap-x-12 gap-y-12 lg:grid-cols-12">
          <RevealGroup className="lg:col-span-6 lg:flex lg:flex-col lg:self-stretch xl:col-span-6">
            <RevealItem>
              
            </RevealItem>

            <RevealItem>
              <h1 className="mt-7 font-display text-[clamp(2.85rem,6.2vw,5.15rem)] leading-[0.95] tracking-[-0.025em] text-foreground">
                Tu idea.
                <br />
                Nuestra mirada.
                <br />
                <span className="italic text-terracotta">Un producto.</span>
              </h1>
            </RevealItem>

            <RevealItem>
              <p className="mt-7 max-w-[27rem] text-pretty text-[17px] leading-[1.6] text-muted-foreground md:text-[18px]">
                Conectamos creatividad, técnica y producción para transformar las
                ideas de tu marca en prendas con identidad.
              </p>
            </RevealItem>

            <RevealItem>
              <div className="mt-10">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="#contacto">
                    Dale forma a tu proyecto
                    <ArrowUpRight className="ml-3 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </Button>
              </div>
            </RevealItem>

            <RevealItem className="lg:mt-auto">
              
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="lg:col-span-6" amount={0.1}>
            <RevealItem>
              <div className="flex items-baseline justify-between border-b border-border pb-3">
                <span className="label-xs">El universo Bies</span>
                
              </div>
            </RevealItem>

            <RevealItem>
              <div className="relative mt-5">
                <div className="relative overflow-hidden bg-sand">
                  <img src={heroImage} crossOrigin="anonymous" alt="Flat lay de prendas de la colección Bies: camisa de lino, pantalón sastrero, chaleco de punto, remera de rayas y campera" className="aspect-[9/10] w-full object-cover" loading="eager" />
                  <div className="absolute inset-0 bg-gradient-to-t from-chocolate/10 to-transparent" />
                </div>

                
              </div>
            </RevealItem>

            <RevealItem>
              <div className="mt-14 flex items-baseline justify-between sm:mt-12">
                
                
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>

      <div className="border-y border-border bg-cream-deep/40">
        
      </div>

      <span className="sr-only">{site.tagline}</span>
    </section>;
};