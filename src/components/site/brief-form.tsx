import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { Check, ChevronDown, Loader2, Mail } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { web3forms, whatsappLink } from "@/lib/site";
import { WhatsAppIcon } from "./whatsapp-icon";
type BriefFormState = {
  name: string;
  brand: string;
  phone: string;
  email: string;
  stage: string;
  product: string;
  volume: string;
  message: string;
};
type Channel = "email" | "whatsapp";
const emptyForm: BriefFormState = {
  name: "",
  brand: "",
  phone: "",
  email: "",
  stage: "",
  product: "",
  volume: "",
  message: ""
};
const stages = ["Tengo una idea", "Ya tengo diseños", "Tengo una muestra", "Ya estoy produciendo"];
const volumes = ["Todavía no lo sé", "Menos de 100 unidades", "100 a 300 unidades", "301 a 1.000 unidades", "Más de 1.000 unidades"];
const fieldClass = "w-full border-b border-border bg-transparent pb-2.5 pt-1 font-serif text-[16px] text-foreground placeholder:text-muted-foreground/50 transition-colors focus:border-terracotta focus:outline-none";
const Field = ({
  label,
  htmlFor,
  optional,
  error,
  children,
  className
}: {
  label: string;
  htmlFor: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
  className?: string;
}) => <div className={cn("flex flex-col gap-2.5", className)}>
    <label htmlFor={htmlFor} className="flex items-baseline justify-between gap-3">
      <span className="label-xs text-foreground/70">{label}</span>
      {optional ? <span className="font-serif text-[11px] italic text-muted-foreground/70">opcional</span> : null}
    </label>
    {children}
    {error ? <p className="font-sans text-[11px] text-destructive">{error}</p> : null}
  </div>;
const buildWhatsAppMessage = (form: BriefFormState) => {
  const lines = ["Hola Bies, me contacto desde la web.", "", `Nombre: ${form.name.trim()}`];
  if (form.brand.trim()) lines.push(`Empresa / marca: ${form.brand.trim()}`);
  if (form.phone.trim()) lines.push(`Teléfono: ${form.phone.trim()}`);
  if (form.email.trim()) lines.push(`Correo: ${form.email.trim()}`);
  if (form.stage) lines.push(`Estado del proyecto: ${form.stage}`);
  if (form.product.trim()) lines.push(`Tipo de producto: ${form.product.trim()}`);
  if (form.volume) lines.push(`Cantidad estimada: ${form.volume}`);
  if (form.message.trim()) lines.push("", `Detalles: ${form.message.trim()}`);
  return lines.join("\n");
};
export const BriefForm = () => {
  const [form, setForm] = useState<BriefFormState>(emptyForm);
  const [errors, setErrors] = useState<Partial<Record<keyof BriefFormState, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sentName, setSentName] = useState("");
  const onChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const {
      name,
      value
    } = event.target;
    setForm(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors(prev => ({
      ...prev,
      [name]: undefined
    }));
  };
  const validate = () => {
    const next: Partial<Record<keyof BriefFormState, string>> = {};
    if (form.name.trim().length < 2) next.name = "Contanos cómo te llamás.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(form.email.trim())) next.email = "Necesitamos un correo válido para responderte.";
    if (form.message.trim().length < 5) next.message = "Contanos brevemente qué querés desarrollar.";
    setErrors(next);
    const firstError = Object.keys(next)[0];
    if (firstError) {
      document.getElementById(firstError)?.focus({
        preventScroll: false
      });
    }
    return !firstError;
  };

  // Guarda la consulta en la base del proyecto sin bloquear el envío elegido.
  const saveLead = (channel: Channel) => {
    supabase.from("bies_briefs").insert({
      name: form.name.trim(),
      email: form.email.trim(),
      brand: form.brand.trim() || null,
      phone: form.phone.trim() || null,
      stage: form.stage || null,
      product: form.product.trim() || null,
      volume: form.volume || null,
      message: form.message.trim() || null,
      channel
    }).then(() => undefined, () => undefined);
  };
  const openWhatsApp = () => {
    if (!validate()) return;
    window.open(whatsappLink(buildWhatsAppMessage(form)), "_blank", "noopener,noreferrer");
    saveLead("whatsapp");
  };
  const sendEmail = async () => {
    if (!validate()) return;
    setStatus("sending");
    saveLead("email");
    try {
      const response = await fetch(web3forms.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          access_key: web3forms.accessKey,
          subject: `Nueva consulta web — ${form.brand.trim() || form.name.trim()}`,
          from_name: "Web Bies",
          botcheck: false,
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          brand: form.brand.trim(),
          stage: form.stage,
          product: form.product.trim(),
          volume: form.volume,
          message: form.message.trim()
        })
      });
      const data = (await response.json()) as {
        success?: boolean;
      };
      if (!response.ok || !data.success) throw new Error("No se pudo enviar");
      setSentName(form.name.trim().split(" ")[0]);
      setForm(emptyForm);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  // En desktop el envío formal es por e-mail; en mobile todo va por WhatsApp.
  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (window.matchMedia("(min-width: 768px)").matches) {
      void sendEmail();
    } else {
      openWhatsApp();
    }
  };
  if (status === "sent") {
    return <div className="flex min-h-[460px] flex-col justify-center bg-card p-8 md:p-12">
        <span className="flex size-11 items-center justify-center rounded-full bg-sage text-sage-deep">
          <Check className="size-5" />
        </span>
        <h3 className="mt-7 font-display text-[clamp(1.8rem,3vw,2.4rem)] leading-tight text-foreground">
          Gracias, {sentName || "gracias"}.
          <br />
          <span className="italic text-terracotta">Recibimos tu consulta.</span>
        </h3>
        <p className="mt-5 max-w-sm text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Te escribiremos en breve para conversar sobre tu proyecto y ver cómo
          podemos acompañarte en el desarrollo.
        </p>
        <button type="button" onClick={() => setStatus("idle")} className="hairline-link mt-8 self-start text-muted-foreground">
          Enviar otra consulta
        </button>
        
      </div>;
  }
  return <form onSubmit={onFormSubmit} className="bg-card p-6 md:p-10" noValidate>
      <div className="border-b border-border pb-4">
        <span className="label-xs text-foreground/70">Contacto</span>
      </div>

      <div className="mt-7 grid gap-x-8 gap-y-7 sm:grid-cols-2">
        <Field label="Nombre" htmlFor="name" error={errors.name}>
          <input id="name" name="name" value={form.name} onChange={onChange} placeholder="Juli Pérez" autoComplete="name" className={fieldClass} />
        </Field>

        <Field label="Correo" htmlFor="email" error={errors.email}>
          <input id="email" name="email" type="email" value={form.email} onChange={onChange} placeholder="juli@tumarca.com" autoComplete="email" className={fieldClass} />
        </Field>

        <Field label="Empresa o marca" htmlFor="brand" optional>
          <input id="brand" name="brand" value={form.brand} onChange={onChange} placeholder="Tu marca" autoComplete="organization" className={fieldClass} />
        </Field>

        <Field label="Teléfono" htmlFor="phone" optional>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} placeholder="+54 9 11 0000-0000" autoComplete="tel" className={fieldClass} />
        </Field>

        <Field label="¿En qué momento está tu proyecto?" htmlFor="stage" optional className="sm:col-span-2">
          <div className="relative">
            <select id="stage" name="stage" value={form.stage} onChange={onChange} className={cn(fieldClass, "appearance-none pr-6")}>
              <option value="">Elegí una opción</option>
              {stages.map(stage => <option key={stage} value={stage}>
                  {stage}
                </option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </Field>

        <Field label="Tipo de producto textil a desarrollar" htmlFor="product" optional className="sm:col-span-2">
          <input id="product" name="product" value={form.product} onChange={onChange} placeholder="Remeras, buzos, denim, accesorios, packaging…" className={fieldClass} />
        </Field>

        <Field label="Cantidad de prendas totales" htmlFor="volume" optional className="sm:col-span-2">
          <div className="relative">
            <select id="volume" name="volume" value={form.volume} onChange={onChange} className={cn(fieldClass, "appearance-none pr-6")}>
              <option value="">Elegí un rango</option>
              {volumes.map(volume => <option key={volume} value={volume}>
                  {volume}
                </option>)}
            </select>
            <ChevronDown className="pointer-events-none absolute right-0 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
          </div>
        </Field>

        <Field label="Mensaje y detalles" htmlFor="message" error={errors.message} className="sm:col-span-2">
          <textarea id="message" name="message" value={form.message} onChange={onChange} rows={4} placeholder="Contanos la idea, las referencias, cantidades estimadas o la etapa en la que necesitás acompañamiento." className={cn(fieldClass, "resize-none leading-relaxed")} />
        </Field>
      </div>

      <div className="mt-9 border-t border-border pt-6">
        
        

        {/* Desktop: envío formal por e-mail o directo por WhatsApp */}
        <div className="mt-5 hidden gap-3 md:flex">
          <Button type="submit" size="lg" disabled={status === "sending"} className="flex-1">
            {status === "sending" ? <>
                Enviando
                <Loader2 className="size-3.5 animate-spin" />
              </> : <>
                Enviar por E-mail
                <Mail className="size-3.5" />
              </>}
          </Button>
          <Button type="button" variant="outline" size="lg" onClick={openWhatsApp} className="flex-1">
            <WhatsAppIcon className="size-4" />
            Enviar por WhatsApp
          </Button>
        </div>

        {/* Mobile: envío unificado por WhatsApp */}
        <Button type="button" size="lg" onClick={openWhatsApp} className="mt-5 w-full md:hidden">
          <WhatsAppIcon className="size-4" />
          Enviar por WhatsApp
        </Button>

        {status === "error" ? <p className="mt-4 border-l border-destructive/60 pl-3 font-sans text-[11.5px] leading-relaxed text-destructive">
            No pudimos enviar el correo. Probá de nuevo en unos minutos o enviános
            la consulta por WhatsApp.
          </p> : null}
      </div>
    </form>;
};