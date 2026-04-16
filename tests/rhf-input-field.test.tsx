import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { useForm } from "react-hook-form";
import { FormConfigProvider } from "../src/providers/form-config-provider";
import { RHFInputField } from "../src/components/fields/rhf-input-field";
import { mockComponents } from "./mocks/ui-components";

const TestForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
  const form = useForm({
    defaultValues: {
      testInput: "",
    },
  });

  return (
    <FormConfigProvider dictionary={{}} components={mockComponents}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <RHFInputField
          control={form.control}
          name="testInput"
          label="Test Label"
          placeholder="Test Placeholder"
        />
        <button type="submit">Submit</button>
      </form>
    </FormConfigProvider>
  );
};

describe("RHFInputField", () => {
  it("should render correctly and match snapshot", () => {
    const { asFragment } = render(<TestForm onSubmit={() => {}} />);
    expect(screen.getByTestId("mock-label")).toHaveTextContent("Test Label");
    expect(screen.getByTestId("mock-input")).toHaveAttribute("placeholder", "Test Placeholder");
    expect(asFragment()).toMatchSnapshot();
  });

  it("should update form value on change", async () => {
    let submittedData = null;
    render(<TestForm onSubmit={(data) => (submittedData = data)} />);

    const input = screen.getByTestId("mock-input");
    fireEvent.change(input, { target: { value: "Hello World" } });
    
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(submittedData).toEqual({ testInput: "Hello World" });
    });
  });

  it("should handle numeric inputs correctly", async () => {
    const NumericForm = ({ onSubmit }: { onSubmit: (data: any) => void }) => {
      const form = useForm({ defaultValues: { val: 0 } });
      return (
        <FormConfigProvider dictionary={{}} components={mockComponents}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <RHFInputField control={form.control} name="val" label="Num" type="number" />
            <button type="submit">Submit</button>
          </form>
        </FormConfigProvider>
      );
    };

    let submittedData = null;
    render(<NumericForm onSubmit={(data) => (submittedData = data)} />);

    const input = screen.getByTestId("mock-input");
    fireEvent.change(input, { target: { value: "42" } });
    
    fireEvent.click(screen.getByText("Submit"));

    await waitFor(() => {
      expect(submittedData).toEqual({ val: 42 });
    });
  });
});
