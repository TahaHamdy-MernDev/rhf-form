import * as React from "react";
import { z } from "zod";
import { Control, FieldValues, Path } from "react-hook-form";
import { resolveFieldInfo } from "./field-resolver";
import { FieldOverrideComponents, unwrapZodType } from "./zod-field-mapper";
import { cn } from "../utils/cn";
import { RHFFormSection } from "../components/forms/rhf-form-section";

export interface AutoFormProps<T extends FieldValues> {
  schema: z.ZodObject<any, any, any>;
  control: Control<T>;
  fieldOverrides?: FieldOverrideComponents;
  layout?: "stack" | "grid";
  className?: string;
  subObjectLayout?: "inline" | "section";
  parentPath?: string;
}

export function AutoForm<T extends FieldValues>({
  schema,
  control,
  fieldOverrides,
  layout = "stack",
  className,
  subObjectLayout = "inline",
  parentPath = "",
}: AutoFormProps<T>) {
  const unwrappedSchema = unwrapZodType(schema) as z.ZodObject<any>;

  if (!unwrappedSchema) {
    console.warn("AutoForm: provided schema is undefined.");
    return null;
  }

  const shape = unwrappedSchema.shape;

  if (!shape) {
    console.warn("AutoForm: provided schema does not have a shape. Ensure it is a ZodObject.");
    return null;
  }

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
        const fieldPath = parentPath ? `${parentPath}.${key}` : key;

        // Check if it's a nested object
        const currentType = unwrapZodType(fieldSchema);

        if (currentType?._def?.typeName === "ZodObject") {
          const nestedAutoForm = (
            <AutoForm
              key={fieldPath}
              schema={currentType as z.ZodObject<any>}
              control={control}
              fieldOverrides={fieldOverrides}
              layout={layout}
              subObjectLayout={subObjectLayout}
              parentPath={fieldPath}
            />
          );

          if (subObjectLayout === "section") {
            return (
              <RHFFormSection
                key={fieldPath}
                title={fieldSchema.description || key}
              >
                {nestedAutoForm}
              </RHFFormSection>
            );
          }

          return nestedAutoForm;
        }

        const { Component, props } = resolveFieldInfo(
          fieldPath,
          fieldSchema,
          fieldOverrides,
        );

        return (
          <Component
            key={fieldPath}
            name={fieldPath as Path<T>}
            control={control}
            {...props}
          />
        );
      })}
    </div>
  );
}
