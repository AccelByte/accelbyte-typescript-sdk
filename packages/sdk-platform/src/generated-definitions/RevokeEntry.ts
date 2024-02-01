/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RevokeCurrency } from './RevokeCurrency.js'
import { RevokeEntitlement } from './RevokeEntitlement.js'
import { RevokeItem } from './RevokeItem.js'

export const RevokeEntry = z.object({
  currency: RevokeCurrency.nullish(),
  entitlement: RevokeEntitlement.nullish(),
  item: RevokeItem.nullish(),
  quantity: z.number().int().nullish(),
  type: z.enum(['CURRENCY', 'ENTITLEMENT', 'ITEM']).nullish()
})

export interface RevokeEntry extends z.TypeOf<typeof RevokeEntry> {}
