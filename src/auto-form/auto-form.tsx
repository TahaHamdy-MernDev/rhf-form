import * as React from "react";
import { z } from "zod";
import { Control, FieldValues, Path } from "react-hook-form";
import { resolveFieldInfo } from "./field-resolver";
import { FieldOverrideComponents } from "./zod-field-mapper";
import { cn } from "../utils/cn";

export interface AutoFormProps<T extends FieldValues> {
  schema: z.ZodObject<any, any, any>;
  control: Control<T>;
  fieldOverrides?: FieldOverrideComponents;
  layout?: "stack" | "grid";
  className?: string;
}

export function AutoForm<T extends FieldValues>({
  schema,
  control,
  fieldOverrides,
  layout = "stack",
  className,
}: AutoFormProps<T>) {
  const shape = schema.shape;
  const keys = Object.keys(shape);

  return (
    <div
      className={cn(
        layout === "stack"
          ? "flex flex-col gap-4"
          : "grid grid-cols-1 md:grid-cols-2 gap-4",
        className,
      )}
    >
      {keys.map((key) => {
        const fieldSchema = shape[key];
        const { Component, props } = resolveFieldInfo(
          key,
          fieldSchema,
          fieldOverrides,
        );

        return (
          <Component
            key={key}
            name={key as Path<T>}
            control={control}
            {...props}
          />
        );
      })}
    </div>
  );
}
