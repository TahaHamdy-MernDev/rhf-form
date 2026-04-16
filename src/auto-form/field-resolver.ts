import { z } from "zod";
import * as React from "react";
import {
  getComponentForZodType,
  FieldOverrideComponents,
} from "./zod-field-mapper";

function extractEnumOptions(zodType: z.ZodTypeAny) {
  const typeName = zodType._def.typeName;

  if (typeName === z.ZodFirstPartyTypeKind.ZodEnum) {
    const enumValues = (zodType as z.ZodEnum<any>)._def.values;
    if (!enumValues) return undefined;
    return enumValues.map((val: string) => ({ label: val, value: val }));
  }

  if (typeName === z.ZodFirstPartyTypeKind.ZodNativeEnum) {
    const nativeValues = (zodType as z.ZodNativeEnum<any>)._def.values;
    if (!nativeValues) return undefined;
    const enumValues = Object.values(nativeValues);
    return enumValues
      .filter((val) => typeof val === "string")
      .map((val) => ({ label: val, value: String(val) }));
  }

  return undefined;
}

export function resolveFieldInfo(
  path: string,
  zodType: z.ZodTypeAny,
  overrides?: FieldOverrideComponents,
) {
  // Use .description() for label if available, otherwise capitalize field path
  const description = zodType.description;
  const defaultLabel =
    path.charAt(0).toUpperCase() + path.slice(1).replace(/_/g, " ");
  const label = description || defaultLabel;

  const {
    component: DefaultComponent,
    props: defaultProps,
    unwrappedType,
  } = getComponentForZodType(zodType);

  const Component = overrides?.[path] || DefaultComponent;

  const options = extractEnumOptions(unwrappedType);

  return {
    Component,
    props: {
      label,
      ...defaultProps,
      ...(options ? { options } : {}),
    },
  };
}
