import * as React from "react";
import { Control, FieldValues, Path } from "react-hook-form";
type Option = {
    label: string | React.ReactNode;
    value: string;
};
type RHFCreatableSelectFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    options: Option[];
    placeholder?: string;
    addLabel?: (value: string) => string;
    disabled?: boolean;
    className?: string;
    normalize?: (value: string) => string;
};
export declare function RHFCreatableSelectField<T extends FieldValues>({ control, name, label, options, placeholder, addLabel, disabled, className, normalize, }: RHFCreatableSelectFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-creatable-with-input-field.d.ts.map