/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { RevokeCurrency } from './RevokeCurrency'
import { RevokeEntitlement } from './RevokeEntitlement'
import { RevokeItem } from './RevokeItem'

export const RevokeEntry = z.object({
  type: z.enum(['ITEM', 'CURRENCY', 'ENTITLEMENT']).nullish(),
  item: RevokeItem.nullish(),
  entitlement: RevokeEntitlement.nullish(),
  currency: RevokeCurrency.nullish(),
  quantity: z.number().int().nullish()
})

export type RevokeEntry = z.TypeOf<typeof RevokeEntry>
