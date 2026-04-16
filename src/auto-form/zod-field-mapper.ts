import * as React from "react";
import { z } from "zod";
import { RHFInputField } from "../components/fields/rhf-input-field";
import { RHFCheckboxField } from "../components/fields/rhf-checkbox-field";
import { RHFSelectField } from "../components/fields/rhf-select-field";
import { RHFDatePickerField } from "../components/fields/rhf-date-picker-field";

export type FieldOverrideComponents = Record<string, React.ElementType>;

export function unwrapZodType(zodType: z.ZodTypeAny): z.ZodTypeAny {
  let currentType = zodType;
  if (!currentType?._def) return currentType;

  let typeName = currentType._def.typeName;

  while (
    typeName === "ZodOptional" ||
    typeName === "ZodNullable" ||
    typeName === "ZodDefault" ||
    typeName === "ZodEffects"
  ) {
    if ("unwrap" in currentType._def && typeof (currentType as any).unwrap === "function") {
      currentType = (currentType as any).unwrap();
    } else if (currentType._def.innerType) {
      currentType = currentType._def.innerType;
    } else if (currentType._def.schema) {
      currentType = currentType._def.schema;
    } else {
      break;
    }
    if (!currentType?._def) break;
    typeName = currentType._def.typeName;
  }
  return currentType;
}

export function getComponentForZodType(zodType: z.ZodTypeAny) {
  const currentType = unwrapZodType(zodType);
  if (!currentType?._def) return { component: RHFInputField, props: {}, unwrappedType: zodType };
  
  const typeName = currentType._def.typeName;

  let component: React.ElementType = RHFInputField;
  let props: Record<string, any> = {};

  switch (typeName) {
    case "ZodString":
      component = RHFInputField;
      break;
    case "ZodNumber":
      component = RHFInputField;
      props = { type: "number" };
      break;
    case "ZodBoolean":
      component = RHFCheckboxField;
      break;
    case "ZodEnum":
    case "ZodNativeEnum":
      component = RHFSelectField;
      break;
    case "ZodDate":
      component = RHFDatePickerField;
      break;
    case "ZodObject":
      component = React.Fragment;
      break;
    default:
      component = RHFInputField;
      break;
  }

  return { component, props, unwrappedType: currentType };
}
