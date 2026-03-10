import { Control, FieldValues, Path } from "react-hook-form";
type RHFSwitchFieldProps<T extends FieldValues> = {
    control: Control<T>;
    name: Path<T>;
    label: string;
    description?: string;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    containerClassName?: string;
    /** Optional callback when value changes */
    onCheckedChange?: (checked: boolean) => void;
};
export declare function RHFSwitchField<T extends FieldValues>({ control, name, label, description, disabled, required, className, containerClassName, onCheckedChange, }: RHFSwitchFieldProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-switch-field.d.ts.map