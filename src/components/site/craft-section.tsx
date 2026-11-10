import { detailImage } from "@/lib/site";
import { RevealGroup, RevealItem } from "./reveal";
const swatches = [{
  name: "Lino",
  className: "bg-[hsl(42_38%_88%)]"
}, {
  name: "Salvia",
  className: "bg-[hsl(101_18%_72%)]"
}, {
  name: "Terracota",
  className: "bg-[hsl(20_46%_48%)]"
}, {
  name: "Chocolate",
  className: "bg-[hsl(16_38%_26%)]"
}];
export const CraftSection = () => {
  return <section className="border-t border-border/70 bg-background">
      <div className="container py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <RevealGroup className="lg:col-span-5">
            <RevealItem>
              <figure>
                <div className="overflow-hidden bg-sand">
                  <img src={detailImage} crossOrigin="anonymous" alt="Cuatro detalles de confección: botón de nácar en una camisa de lino, costuras de sastrería en un pantalón chocolate, sarga terracota y etiqueta Bies en una prenda verde salvia" className="aspect-square w-full object-cover transition-transform duration-1000 hover:scale-[1.03]" loading="lazy" />
                </div>
                <figcaption className="mt-4 flex items-baseline justify-between">
                  
                  
                </figcaption>
              </figure>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="lg:col-span-6 lg:col-start-7">
            <RevealItem>
              <p className="label-xs">El producto también habla</p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-6 max-w-[20ch] font-display text-[clamp(2.1rem,4.2vw,3.5rem)] leading-[1.06] text-foreground">
                La identidad se construye{" "}
                <span className="italic text-terracotta">en los detalles.</span>
              </h2>
            </RevealItem>
            <RevealItem>
              <div className="mt-8 max-w-[42ch] space-y-5 text-pretty text-[16px] leading-[1.7] text-muted-foreground">
                <p>
                  La caída de una tela. La proporción de un bolsillo. Una etiqueta,
                  una terminación, una forma de presentar.
                </p>
                <p>
                  Pensamos cada parte para que el resultado se sienta propio de tu
                  marca.
                </p>
              </div>
            </RevealItem>
            <RevealItem>
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <div className="flex items-center gap-2">
                  {swatches.map(swatch => <span key={swatch.name} title={swatch.name} className={`size-7 rounded-full ring-1 ring-inset ring-chocolate/10 ${swatch.className}`} />)}
                </div>
                
              </div>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>;
};