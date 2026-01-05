/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientTransaction } from './ClientTransaction.js'

export const AdditionalDataEntitlement = z.object({
  clientTransaction: z.array(ClientTransaction).nullish(),
  entitlementId: z.string().nullish(),
  usageCount: z.number().int().nullish()
})

export interface AdditionalDataEntitlement extends z.TypeOf<typeof AdditionalDataEntitlement> {}
