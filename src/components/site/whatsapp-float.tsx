import { whatsappHref } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";

export const WhatsAppFloat = () => {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex size-[54px] items-center justify-center rounded-full bg-chocolate text-cream shadow-editorial ring-1 ring-cream/30 transition-all duration-500 hover:bg-terracotta hover:ring-cream/50 md:bottom-8 md:right-8 md:size-14"
    >
      <WhatsAppIcon className="size-6 md:size-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap bg-cream px-3 py-2 font-sans text-[9px] uppercase tracking-label text-chocolate opacity-0 shadow-soft transition-opacity duration-300 group-hover:opacity-100 md:block">
        Escribinos
      </span>
    </a>
  );
};

export default WhatsAppFloat;
