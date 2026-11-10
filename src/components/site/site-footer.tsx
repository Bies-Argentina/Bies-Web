import { ArrowUp, ArrowUpRight } from "lucide-react";
import { site, whatsappHref } from "@/lib/site";
export const SiteFooter = () => {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <footer className="bg-chocolate text-primary-foreground">
      <div className="container py-16 md:py-20">
        <div className="grid gap-10 border-b border-primary-foreground/15 pb-12 lg:grid-cols-12 lg:items-end">
          <h2 className="max-w-[20ch] font-display text-[clamp(2rem,4.4vw,3.4rem)] leading-[1.08] lg:col-span-7">
            Las buenas ideas merecen{" "}
            <span className="italic text-sand">un buen proceso.</span>
          </h2>
          <div className="lg:col-span-4 lg:col-start-9">
            
            
          </div>
        </div>

        <div className="grid gap-10 pt-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <img src="/brand/bies-wordmark-light.png" alt="Bies" className="h-9 w-auto md:h-12" width={458} height={152} />
            <p className="mt-4 max-w-[150px] font-sans text-[9px] uppercase leading-[1.8] tracking-label text-primary-foreground/45">
              Agencia de moda &amp;
              <br />
              producto terminado
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans text-[9px] uppercase tracking-kicker text-primary-foreground/40">
              Contacto
            </p>
            <div className="mt-4 flex flex-col gap-2">
              <a href={`mailto:${site.email}`} className="font-serif text-[14px] text-primary-foreground/80 transition-colors hover:text-sand">
                {site.email}
              </a>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="font-serif text-[14px] text-primary-foreground/80 transition-colors hover:text-sand">
                {site.phoneDisplay}
              </a>
              <a href={site.instagram} target="_blank" rel="noreferrer" className="font-serif text-[14px] text-primary-foreground/80 transition-colors hover:text-sand">
                {site.instagramHandle}
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="font-sans text-[9px] uppercase tracking-kicker text-primary-foreground/40">
              Estudio
            </p>
            <p className="mt-4 font-serif text-[14px] leading-relaxed text-primary-foreground/80">
              {site.location}
            </p>
            
          </div>

          <div className="flex items-start justify-start md:col-span-2 md:justify-end">
            <button type="button" onClick={backToTop} className="group inline-flex items-center gap-2 font-sans text-[9px] uppercase tracking-label text-primary-foreground/60 transition-colors hover:text-cream">
              Volver arriba
              <ArrowUp className="size-3.5 transition-transform duration-500 group-hover:-translate-y-1" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-primary-foreground/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[9px] uppercase tracking-label text-primary-foreground/35">
            © {new Date().getFullYear()} Bies. Todos los derechos reservados.
          </p>
          <p className="font-serif text-[11px] italic text-primary-foreground/35">
            Diseño, técnica y producción.
          </p>
        </div>
      </div>
    </footer>;
};