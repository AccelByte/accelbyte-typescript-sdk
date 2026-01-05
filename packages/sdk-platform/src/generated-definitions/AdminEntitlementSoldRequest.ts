/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminEntitlementSoldRequest = z.object({
  platform: z.string().nullish(),
  requestId: z.string().nullish(),
  useCount: z.number().int().nullish()
})

export interface AdminEntitlementSoldRequest extends z.TypeOf<typeof AdminEntitlementSoldRequest> {}
