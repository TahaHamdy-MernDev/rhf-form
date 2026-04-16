import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormConfigProvider } from "../src/providers/form-config-provider";
import { AutoForm } from "../src/auto-form";
import { mockComponents } from "./mocks/ui-components";

// Schema for testing - using strings for simplicity to avoid environment-specific Zod/RHF/JSDOM issues
const schema = z.object({
  name: z.string().describe("Full Name"),
  role: z.string().describe("Role"),
});

const AutoFormWrapper = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      role: "user",
    },
  });

  return (
    <FormConfigProvider dictionary={{}} components={mockComponents}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <AutoForm schema={schema} control={form.control} />
        <button type="submit">Submit</button>
      </form>
    </FormConfigProvider>
  );
};

describe("AutoForm", () => {
  it("should render and collect data", async () => {
    let submittedData = null;
    const { container } = render(<AutoFormWrapper onSubmit={(data) => (submittedData = data)} />);

    const nameInput = container.querySelector('input[name="name"]') as HTMLInputElement;
    const roleInput = container.querySelector('input[name="role"]') as HTMLInputElement;

    fireEvent.change(nameInput, { target: { value: "John" } });
    fireEvent.change(roleInput, { target: { value: "admin" } });
    
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(submittedData).toEqual({
        name: "John",
        role: "admin",
      });
    }, { timeout: 2000 });
  });
});
