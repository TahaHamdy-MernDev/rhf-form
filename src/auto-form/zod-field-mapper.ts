import * as React from "react";
import { z } from "zod";
import { RHFInputField } from "../components/fields/rhf-input-field";
import { RHFCheckboxField } from "../components/fields/rhf-checkbox-field";
import { RHFSelectField } from "../components/fields/rhf-select-field";
import { RHFDatePickerField } from "../components/fields/rhf-date-picker-field";

export type FieldOverrideComponents = Record<string, React.ElementType>;

export function getComponentForZodType(zodType: z.ZodTypeAny) {
  let currentType = zodType;
  let typeName = currentType._def.typeName;

  // Unwrap optional, nullable, or default to get the underlying type
  while (
    typeName === z.ZodFirstPartyTypeKind.ZodOptional ||
    typeName === z.ZodFirstPartyTypeKind.ZodNullable ||
    typeName === z.ZodFirstPartyTypeKind.ZodDefault
  ) {
    if ("unwrap" in currentType._def) {
      currentType = (currentType as any).unwrap();
    } else if ("innerType" in currentType._def) {
      currentType = currentType._def.innerType;
    } else {
      break;
    }
    typeName = currentType._def.typeName;
  }

  let component: React.ElementType = RHFInputField;
  let props: Record<string, any> = {};

  switch (typeName) {
    case z.ZodFirstPartyTypeKind.ZodString:
      component = RHFInputField;
      // If it's an email or password, the user can override it using `fieldOverrides`
      // or we can add basic checks here based on string validations if preferred,
      // but standard string defaults to input.
      break;
    case z.ZodFirstPartyTypeKind.ZodNumber:
      component = RHFInputField;
      props = { type: "number" };
      break;
    case z.ZodFirstPartyTypeKind.ZodBoolean:
      component = RHFCheckboxField;
      break;
    case z.ZodFirstPartyTypeKind.ZodEnum:
    case z.ZodFirstPartyTypeKind.ZodNativeEnum:
      component = RHFSelectField;
      break;
    case z.ZodFirstPartyTypeKind.ZodDate:
      component = RHFDatePickerField;
      break;
    default:
      component = RHFInputField;
      break;
  }

  return { component, props, unwrappedType: currentType };
}
