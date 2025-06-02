/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PublicEntitlementMetadata } from './PublicEntitlementMetadata.js'

export const EntitlementTransferRequest = z.object({
  entitlementId: z.string().nullish(),
  metadata: PublicEntitlementMetadata.nullish(),
  useCount: z.number().int().nullish()
})

export interface EntitlementTransferRequest extends z.TypeOf<typeof EntitlementTransferRequest> {}
