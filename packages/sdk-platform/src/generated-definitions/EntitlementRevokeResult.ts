/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementRevokeResult = z.object({
  entitlementId: z.string().nullish(),
  reason: z.string().nullish(),
  userId: z.string().nullish()
})

export interface EntitlementRevokeResult extends z.TypeOf<typeof EntitlementRevokeResult> {}
