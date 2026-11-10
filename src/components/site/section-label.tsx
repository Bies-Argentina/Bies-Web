import { cn } from "@/lib/utils";

export const SectionLabel = ({
  number,
  children,
  className,
  tone = "default",
}: {
  number?: string;
  children: React.ReactNode;
  className?: string;
  tone?: "default" | "inverse";
}) => (
  <div className={cn("flex items-center gap-3", className)}>
    {number ? (
      <span
        className={cn(
          "label-xs",
          tone === "inverse" && "text-primary-foreground/55",
        )}
      >
        {number}
      </span>
    ) : null}
    <span
      className={cn(
        "label-xs",
        tone === "inverse" && "text-primary-foreground/55",
      )}
    >
      {children}
    </span>
    <span
      className={cn(
        "h-px w-10 bg-border",
        tone === "inverse" && "bg-primary-foreground/25",
      )}
    />
  </div>
);
