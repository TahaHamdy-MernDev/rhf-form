import { Control, FieldValues, Path } from "react-hook-form";
type Option = {
    label: string;
    value: string;
    disabled?: boolean;
};
type RHFSelectFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    options?: Option[];
    placeholder?: string;
    disabled?: boolean;
    className?: string;
    onChange?: (value: string) => void;
};
export declare function RHFSelectField<T extends FieldValues>({ control, name, label, options, placeholder, disabled, className, onChange, }: RHFSelectFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-select-field.d.ts.map