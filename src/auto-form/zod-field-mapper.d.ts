import * as React from "react";
import { z } from "zod";
export type FieldOverrideComponents = Record<string, React.ElementType>;
export declare function getComponentForZodType(zodType: z.ZodTypeAny): {
    component: React.FunctionComponent<any>;
    props: Record<string, any>;
    unwrappedType: z.ZodTypeAny;
};
//# sourceMappingURL=zod-field-mapper.d.ts.map