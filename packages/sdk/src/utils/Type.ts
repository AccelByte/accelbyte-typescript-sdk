/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z, ZodTypeAny } from 'zod'

export type MakeOptional<Type, UnionKeys extends keyof Type> = Omit<Type, UnionKeys> & Partial<Pick<Type, UnionKeys>>
export type MakeRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }

export function isType<T extends ZodTypeAny>(schema: T, data: unknown): data is z.infer<T> {
  return schema.safeParse(data).success
}
