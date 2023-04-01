/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EntitlementRevokeResult = z.object({
  userId: z.string().nullish(),
  entitlementId: z.string().nullish(),
  reason: z.string().nullish()
})

export interface EntitlementRevokeResult extends z.TypeOf<typeof EntitlementRevokeResult> {}
