import { describe, it, expect } from "vitest";
import { z } from "zod";
import { getComponentForZodType } from "../src/auto-form/zod-field-mapper";
import { RHFInputField } from "../src/components/fields/rhf-input-field";
import { RHFCheckboxField } from "../src/components/fields/rhf-checkbox-field";
import { RHFSelectField } from "../src/components/fields/rhf-select-field";
import { RHFDatePickerField } from "../src/components/fields/rhf-date-picker-field";

describe("zod-field-mapper", () => {
  it("should map z.string() to RHFInputField", () => {
    const { component } = getComponentForZodType(z.string());
    expect(component).toBe(RHFInputField);
  });

  it("should map z.number() to RHFInputField with type number", () => {
    const { component, props } = getComponentForZodType(z.number());
    expect(component).toBe(RHFInputField);
    expect(props.type).toBe("number");
  });

  it("should map z.boolean() to RHFCheckboxField", () => {
    const { component } = getComponentForZodType(z.boolean());
    expect(component).toBe(RHFCheckboxField);
  });

  it("should map z.enum() to RHFSelectField", () => {
    const { component } = getComponentForZodType(z.enum(["A", "B"]));
    expect(component).toBe(RHFSelectField);
  });

  it("should map z.date() to RHFDatePickerField", () => {
    const { component } = getComponentForZodType(z.date());
    expect(component).toBe(RHFDatePickerField);
  });

  describe("unwrapping logic", () => {
    it("should unwrap z.optional()", () => {
      const { component } = getComponentForZodType(z.string().optional());
      expect(component).toBe(RHFInputField);
    });

    it("should unwrap z.nullable()", () => {
      const { component } = getComponentForZodType(z.string().nullable());
      expect(component).toBe(RHFInputField);
    });

    it("should unwrap z.default()", () => {
      const { component } = getComponentForZodType(z.string().default("test"));
      expect(component).toBe(RHFInputField);
    });

    it("should handle deeply nested wrappers", () => {
      const { component } = getComponentForZodType(
        z.string().optional().nullable().default("test")
      );
      expect(component).toBe(RHFInputField);
    });
  });
});
