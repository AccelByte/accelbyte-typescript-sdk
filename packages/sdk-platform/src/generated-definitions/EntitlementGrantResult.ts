/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EntitlementGrant } from './EntitlementGrant.js'

export const EntitlementGrantResult = z.object({
  entitlementGrants: EntitlementGrant.nullish(),
  reason: z.string().nullish(),
  userId: z.string().nullish()
})

export interface EntitlementGrantResult extends z.TypeOf<typeof EntitlementGrantResult> {}
