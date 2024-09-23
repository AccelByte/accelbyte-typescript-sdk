/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AccountLimits = z.object({
  allowedNodeClasses: z.array(z.string()).nullish(),
  allowedRegions: z.array(z.string()).nullish(),
  fleetCount: z.number().int().nullish(),
  fleetVmCount: z.number().int().nullish(),
  imageStorageQuotaBytes: z.number().int().nullish()
})

export interface AccountLimits extends z.TypeOf<typeof AccountLimits> {}
