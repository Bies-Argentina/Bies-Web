import * as Accordion from "@radix-ui/react-accordion";
import { RevealGroup, RevealItem } from "./reveal";

const questions = [
  {
    question: "¿Puedo acercarme si todavía no tengo diseños?",
    answer:
      "Sí. Podemos empezar por entender tu marca y definir una dirección de producto. Las referencias, ideas o imágenes que tengas nos ayudan a abrir esa conversación.",
  },
  {
    question: "¿Trabajan con marcas nuevas y establecidas?",
    answer:
      "Acompañamos distintos momentos: desde una primera propuesta hasta el desarrollo de nuevas líneas o la gestión de una producción. El alcance se adapta a lo que tu equipo ya tiene resuelto.",
  },
  {
    question: "¿Tengo que contratar todo el proceso?",
    answer:
      "No. Podés consultar por el servicio integral o por una etapa específica. Primero revisamos qué existe y qué hace falta para que las distintas partes se conecten.",
  },
  {
    question: "¿Cómo se definen las cantidades y los tiempos?",
    answer:
      "Dependen del tipo de prenda, los materiales, los procesos, la cantidad de modelos y las validaciones necesarias. Los evaluamos al definir el alcance de cada proyecto.",
  },
  {
    question: "¿Cuál es el costo del servicio?",
    answer:
      "Cada artículo es único y hay que realizar una cotización. Contactanos y cotizamos tu proyecto.",
  },
  {
    question: "¿Qué conviene tener para la primera consulta?",
    answer:
      "Una idea del producto, referencias visuales y, si lo sabés, cantidades, fecha objetivo y presupuesto orientativo. Si ya tenés fichas técnicas o una muestra, también sirven.",
  },
  {
    question: "¿Hacen envíos a todo el país?",
    answer:
      "Sí. Hacemos envíos a toda Argentina mediante correo. También podés retirar tu muestra o producción en San Isidro, Buenos Aires.",
  },
];

export const FaqSection = () => {
  return (
    <section id="preguntas" className="scroll-mt-24 border-t border-border/70">
      <div className="container py-20 md:py-28">
        <div className="grid gap-x-14 gap-y-12 lg:grid-cols-12">
          <RevealGroup className="lg:col-span-4">
            <RevealItem>
              <p className="label-xs">Antes de empezar</p>
            </RevealItem>
            <RevealItem>
              <h2 className="mt-6 font-display text-[clamp(2.1rem,4.2vw,3.4rem)] leading-[1.05] text-foreground">
                Algunas
                <br />
                <span className="italic text-terracotta">respuestas.</span>
              </h2>
            </RevealItem>
          </RevealGroup>

          <RevealGroup className="lg:col-span-7 lg:col-start-6">
            <RevealItem>
              <Accordion.Root type="single" collapsible className="border-t border-border">
                {questions.map((item, index) => (
                  <Accordion.Item
                    key={item.question}
                    value={`faq-${index}`}
                    className="border-b border-border"
                  >
                    <Accordion.Header>
                      <Accordion.Trigger className="group flex w-full items-start gap-5 py-5 text-left">
                        <span className="flex-1 font-serif text-[16px] leading-snug text-foreground transition-colors group-hover:text-terracotta md:text-[17px]">
                          {item.question}
                        </span>
                        <span className="relative mt-1.5 flex size-4 shrink-0 items-center justify-center text-foreground/60">
                          <span className="absolute h-px w-4 bg-current" />
                          <span className="absolute h-4 w-px bg-current transition-transform duration-500 group-data-[state=open]:scale-y-0" />
                        </span>
                      </Accordion.Trigger>
                    </Accordion.Header>
                    <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                      <p className="max-w-[54ch] pb-7 pr-8 text-pretty text-[14.5px] leading-[1.7] text-muted-foreground">
                        {item.answer}
                      </p>
                    </Accordion.Content>
                  </Accordion.Item>
                ))}
              </Accordion.Root>
            </RevealItem>
          </RevealGroup>
        </div>
      </div>
    </section>
  );
};
