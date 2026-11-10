import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { navLinks, site } from "@/lib/site";
import { cn } from "@/lib/utils";
export const SiteHeader = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, {
      passive: true
    });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-500", scrolled ? "border-border/80 bg-background/90 backdrop-blur-md" : "border-transparent bg-background/60 backdrop-blur-sm")}>
      <div className="container flex h-[72px] items-center justify-between md:h-[84px]">
        <a href="#inicio" className="group flex items-center gap-4" aria-label="Bies — inicio">
          <img src="/brand/bies-wordmark.png" alt="Bies" className="h-[26px] w-auto md:h-[32px]" width={458} height={152} />
          <span className="hidden h-8 w-px bg-border sm:block" />
          <span className="hidden max-w-[140px] font-sans text-[8px] uppercase leading-[1.7] tracking-label text-muted-foreground sm:block">
            Agencia de moda
            <br />
            y producto terminado
          </span>
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {navLinks.map(link => <a key={link.href} href={link.href} className="group relative font-sans text-[11px] font-medium uppercase tracking-label text-foreground/75 transition-colors hover:text-foreground">
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-px w-full origin-left scale-x-0 bg-foreground transition-transform duration-500 group-hover:scale-x-100" />
            </a>)}
        </nav>

        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden h-11 px-5 md:inline-flex">
            <a href="#contacto">
              Empecemos
              <ArrowUpRight className="transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      <div className={cn("overflow-hidden border-t border-border bg-background transition-[max-height,opacity] duration-500 md:hidden", open ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0")}>
        <nav className="container flex flex-col gap-1 py-6">
          {navLinks.map((link, index) => <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="flex items-baseline justify-between border-b border-border/70 py-4 font-display text-2xl text-foreground">
              {link.label}
              <span className="label-xs">0{index + 1}</span>
            </a>)}
          <a href="#contacto" onClick={() => setOpen(false)} className="mt-5 inline-flex items-center justify-between bg-primary px-5 py-4 font-sans text-[11px] uppercase tracking-label text-primary-foreground">
            Empecemos
            <ArrowUpRight className="size-4" />
          </a>
          
        </nav>
      </div>
    </header>;
};