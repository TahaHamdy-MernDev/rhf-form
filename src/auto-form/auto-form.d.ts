import { z } from "zod";
import { Control, FieldValues } from "react-hook-form";
import { FieldOverrideComponents } from "./zod-field-mapper";
export interface AutoFormProps<T extends FieldValues> {
    schema: z.ZodObject<any, any, any>;
    control: Control<T>;
    fieldOverrides?: FieldOverrideComponents;
    layout?: "stack" | "grid";
    className?: string;
}
export declare function AutoForm<T extends FieldValues>({ schema, control, fieldOverrides, layout, className, }: AutoFormProps<T>): import("react/jsx-runtime").JSX.Element;
//# sourceMappingURL=auto-form.d.ts.map