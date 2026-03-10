import { z } from "zod";
import { getComponentForZodType, } from "./zod-field-mapper";
function extractEnumOptions(zodType) {
    const typeName = zodType._def.typeName;
    if (typeName === z.ZodFirstPartyTypeKind.ZodEnum) {
        const enumValues = zodType._def.values;
        return enumValues.map((val) => ({ label: val, value: val }));
    }
    if (typeName === z.ZodFirstPartyTypeKind.ZodNativeEnum) {
        const enumValues = Object.values(zodType._def.values);
        return enumValues
            .filter((val) => typeof val === "string")
            .map((val) => ({ label: val, value: String(val) }));
    }
    return undefined;
}
export function resolveFieldInfo(path, zodType, overrides) {
    // Use .description() for label if available, otherwise capitalize field path
    const description = zodType.description;
    const defaultLabel = path.charAt(0).toUpperCase() + path.slice(1).replace(/_/g, " ");
    const label = description || defaultLabel;
    const { component: DefaultComponent, props: defaultProps, unwrappedType, } = getComponentForZodType(zodType);
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
