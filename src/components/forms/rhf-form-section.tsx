import * as React from "react";
import { cn } from "../../utils/cn";
import { useFormUI } from "../../providers/form-config-provider";

type FormSectionProps = {
  title: string;
  children: React.ReactNode;
  endContent?: React.ReactNode;
  className?: string;
};

export function RHFFormSection({
  title,
  children,
  endContent,
  className,
}: FormSectionProps) {
  const { FieldGroup } = useFormUI();
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
        {endContent}
      </div>

      <FieldGroup
        className={cn(
          "ltr:pl-3 rtl:pr-3 ltr:border-l rtl:border-r border-border",
          className,
        )}
      >
        {children}
      </FieldGroup>
    </div>
  );
}
