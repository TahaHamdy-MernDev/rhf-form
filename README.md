# @tahahamdy/rhf-form

A reusable, UI-agnostic React Hook Form component system with built-in Zod schema-driven `AutoForm` capabilities.

## Features

- **UI Agnostic**: Built to inject your own UI components (e.g., shadcn/ui, Material UI) via a simple `FormConfigProvider`.
- **Type-safe**: Fully built with TypeScript.
- **AutoForm**: Automatically generate forms from Zod schemas with complete customization and layout control.
- **Rich Fields**: Includes a comprehensive set of pre-built React Hook Form field wrappers containing inputs, selects, creatables, date pickers, conditional fields, etc.
- **Tree-shakable**: Exported via modern ESM and CJS formats.

## Installation

Install the library using your preferred package manager:

```bash
npm install @tahahamdy/rhf-form
```

### Peer Dependencies

Ensure you have the following peer dependencies installed in your project:

```bash
npm install react react-dom react-hook-form tailwindcss
```

---

## Getting Started

### 1. Setup FormConfigProvider

Wrap your app or form area with `FormConfigProvider`. Provide the required UI components from your designated design system.

```tsx
import { FormConfigProvider } from "@tahahamdy/rhf-form";
// Standard UI imports, e.g., from shadcn/ui
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
// ... import other required UI primitives

export function AppProviders({ children }) {
  return (
    <FormConfigProvider
      components={{
        Input,
        Button,
        Label,
        // ... inject all required UI components according to FormUIComponents type
      }}
    >
      {children}
    </FormConfigProvider>
  );
}
```

### 2. Manual Field Usage

You can use the rich field variants in your form setup manually.

```tsx
import { useForm } from "react-hook-form";
import { RHFInputField, RHFFormCard } from "@tahahamdy/rhf-form";

function MyForm() {
  const form = useForm({ defaultValues: { name: "" } });

  const onSubmit = (data) => console.log(data);

  return (
    <RHFFormCard form={form} onSubmit={onSubmit} title="Basic Form">
      <RHFInputField control={form.control} name="name" label="Full Name" />
    </RHFFormCard>
  );
}
```

### 3. AutoForm Configuration (Schema-driven forms)

Use `AutoForm` to construct entire forms rapidly directly from a Zod schema!

```tsx
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AutoForm, RHFFormCard } from "@tahahamdy/rhf-form";

// Define your schema
const schema = z.object({
  fullName: z.string().min(2).describe("Full Name"),
  email: z.string().email().describe("Email Address"),
  notifications: z.boolean().describe("Receive updates?").optional(),
});

export function UserRegistrationForm() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: { fullName: "", email: "", notifications: false },
  });

  return (
    <RHFFormCard
      form={form}
      onSubmit={(data) => console.log(data)}
      title="Register"
    >
      <AutoForm
        schema={schema}
        control={form.control}
        layout="stack" // or "grid"
      />
    </RHFFormCard>
  );
}
```

## Available Fields

- `RHFInputField`
- `RHFPasswordInputField`
- `RHFTextareaField`
- `RHFSelectField`
- `RHFCreatableSelectField`
- `RHFCheckboxField`
- `RHFSwitchField`
- `RHFDatePickerField`
- `RHFDateRangePickerField`
- `RHFInternationalPhoneField`
- `RHFImageUpload`

## Structure Wrappers

- `RHFFormCard`
- `RHFDialogForm`
- `RHFFormSection`

## License

MIT License.
