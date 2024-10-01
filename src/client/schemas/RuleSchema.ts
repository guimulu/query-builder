import { z } from "zod";

export enum TransactionState {
  SUCCEEDED = "SUCCEEDED",
  REJECTED = "REJECTED",
  ERROR = "ERROR",
  TIMEOUT = "TIMEOUT",
  CANCELLED = "CANCELLED",
  FAILED = "FAILED",
  ABORTED = "ABORTED",
}

const defaultOperationEnum = z.enum(["EQUAL", "NOT_EQUAL"]).default("EQUAL");
const extraOperationEnum = z.enum(["LESS_THAN", "GREATER_THAN"]);

const currencySchema = z.enum(["EUR", "USD", "BRL"]).default("EUR");

export type Currency = z.infer<typeof currencySchema>;

const amountValueSchema = z
  .object({
    amount: z.number().nonnegative(),
    currency: currencySchema,
  })
  .default({ amount: 0, currency: "EUR" });

export type AmountValue = z.infer<typeof amountValueSchema>;

export const nameSchema = z.object({
  fieldName: z.literal("name"),
  operation: defaultOperationEnum,
  value: z.string().min(1).max(255),
});

export const amountSchema = z.object({
  fieldName: z.literal("amount"),
  operation: z.union([defaultOperationEnum, extraOperationEnum]),
  value: amountValueSchema,
});

export const idSchema = z.object({
  fieldName: z.literal("id"),
  operation: defaultOperationEnum,
  value: z.string().min(1).max(255),
});

export const transactionStateSchema = z.object({
  fieldName: z.literal("transaction_state"),
  operation: defaultOperationEnum,
  value: z.nativeEnum(TransactionState).default(TransactionState.SUCCEEDED),
});

export const deviceIpSchema = z.object({
  fieldName: z.literal("device_ip"),
  operation: defaultOperationEnum,
  value: z.string().min(1).ip({ version: "v4" }),
});

export const installmentsSchema = z.object({
  fieldName: z.literal("installments"),
  operation: z.union([defaultOperationEnum, extraOperationEnum]),
  value: z.number(),
});

export const ruleSchema = z.discriminatedUnion("fieldName", [
  nameSchema,
  amountSchema,
  idSchema,
  transactionStateSchema,
  deviceIpSchema,
  installmentsSchema,
]);

export type Rule = z.infer<typeof ruleSchema>;
