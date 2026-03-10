import * as React from "react";
import { UseFormReturn, SubmitHandler, FieldValues } from "react-hook-form";
import { useFormConfig, useFormUI } from "../../providers/form-config-provider";
import MainCard from "../cards/main-card";

type RHFFormCardProps<T extends FieldValues> = {
  form: UseFormReturn<T>;
  onSubmit: SubmitHandler<T>;
  title?: string;
  description?: string;
  children: React.ReactNode;
  show_actions?: boolean;
  loading?: boolean;
};

export function RHFFormCard<T extends FieldValues>({
  form,
  title,
  description,
  onSubmit,
  children,
  show_actions = true,
  loading = false,
}: RHFFormCardProps<T>) {
  const { dictionary } = useFormConfig();
  const { Button, CardFooter } = useFormUI();

  function handleCancel() {
    form.reset();
  }

  async function handleSubmit(data: T) {
    await onSubmit(data);
    form.reset();
  }

  return (
    <MainCard
      title={title || ""}
      description={description || ""}
      classes={{ card: "gap-0!", content: "mt-0!" }}
      with_hover={false}
    >
      <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
        {children}
        {show_actions && (
          <CardFooter className="flex justify-end gap-2 px-0!">
            <Button
              type="button"
              variant="ghost"
              disabled={loading}
              onClick={handleCancel}
            >
              {dictionary.cancel}
            </Button>
            <Button type="submit" disabled={loading} is_loading={loading}>
              {dictionary.save}
            </Button>
          </CardFooter>
        )}
      </form>
    </MainCard>
  );
}
