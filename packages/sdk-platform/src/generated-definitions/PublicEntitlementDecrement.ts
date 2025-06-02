/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicEntitlementMetadata } from './PublicEntitlementMetadata.js'

export const PublicEntitlementDecrement = z.object({
  metadata: PublicEntitlementMetadata.nullish(),
  options: z.array(z.string()).nullish(),
  requestId: z.string().nullish(),
  useCount: z.number().int().nullish()
})

export interface PublicEntitlementDecrement extends z.TypeOf<typeof PublicEntitlementDecrement> {}
