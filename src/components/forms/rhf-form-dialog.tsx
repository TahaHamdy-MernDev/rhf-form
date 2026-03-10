import * as React from "react";
import { UseFormReturn, SubmitHandler, FieldValues } from "react-hook-form";
import { useFormConfig, useFormUI } from "../../providers/form-config-provider";
import { cn } from "../../utils/cn";

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

export function RHFDialogForm<T extends FieldValues>({
  form,
  trigger,
  title,
  description,
  onSubmit,
  children,
  loading,
  width,
}: RHFDialogFormProps<T>) {
  const [open, setOpen] = React.useState(false);
  const { dictionary } = useFormConfig();
  const {
    Button,
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } = useFormUI();

  function handleCancel() {
    form.reset();
    setOpen(false);
  }

  async function handleSubmit(data: T) {
    await onSubmit(data);
    form.reset();
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {typeof trigger === "string" ? <Button>{trigger}</Button> : trigger}
      </DialogTrigger>
      <DialogContent className={cn("sm:max-w-[425px]", width)}>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description && <DialogDescription>{description}</DialogDescription>}
        </DialogHeader>

        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          {children}

          <DialogFooter className="gap-2">
            <DialogClose
              type="button"
              onClick={handleCancel}
              className="cursor-pointer"
              disabled={loading}
            >
              {dictionary.cancel}
            </DialogClose>
            <Button
              type="submit"
              variant={"default"}
              is_loading={loading}
              disabled={loading}
            >
              {dictionary.save}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
