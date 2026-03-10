import * as React from "react";
import { UseFormReturn, SubmitHandler, FieldValues } from "react-hook-form";
type RHFDialogFormProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
    trigger: string | React.ReactNode;
    title: string;
    description?: string;
    children: React.ReactNode;
    loading?: boolean;
    width?: string;
};
export declare function RHFDialogForm<T extends FieldValues>({ form, trigger, title, description, onSubmit, children, loading, width, }: RHFDialogFormProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-form-dialog.d.ts.map