import * as React from "react";
import { UseFormReturn, SubmitHandler, FieldValues } from "react-hook-form";
type RHFFormCardProps<T extends FieldValues> = {
    form: UseFormReturn<T>;
    onSubmit: SubmitHandler<T>;
    title?: string;
    description?: string;
    children: React.ReactNode;
    show_actions?: boolean;
    loading?: boolean;
};
export declare function RHFFormCard<T extends FieldValues>({ form, title, description, onSubmit, children, show_actions, loading, }: RHFFormCardProps<T>): import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=rhf-form-card.d.ts.map