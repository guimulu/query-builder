import { z } from "zod";

import { type Rule, ruleSchema } from "@schemas/RuleSchema";

const baseGroupSchema = z.object({
  combinator: z.enum(["AND", "OR"]),
});

export type Group = z.infer<typeof baseGroupSchema> & {
  conditions?: (Rule | Group)[];
  subConditions?: (Rule | Group)[];
};

// @ts-expect-error I'm not sure way I'm getting this error, all the types and interfaces match
export const groupSchema: z.ZodType<Group> = baseGroupSchema.extend({
  conditions: z.lazy(() =>
    z.array(z.union([ruleSchema, groupSchema])).optional(),
  ),
  subConditions: z.lazy(() =>
    z.array(z.union([ruleSchema, groupSchema])).optional(),
  ),
});
