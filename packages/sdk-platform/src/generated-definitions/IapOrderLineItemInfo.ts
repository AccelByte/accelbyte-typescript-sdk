/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FulfillmentV2Result } from './FulfillmentV2Result.js'
import { RevokeFulfillmentV2Result } from './RevokeFulfillmentV2Result.js'

export const IapOrderLineItemInfo = z.object({
  amount: z.number().int().nullish(),
  iapOrderNo: z.string().nullish(),
  id: z.string().nullish(),
  itemIdentity: z.string().nullish(),
  itemIdentityType: z.enum(['ITEM_ID', 'ITEM_SKU']).nullish(),
  lastFulfillmentV2Result: FulfillmentV2Result.nullish(),
  lastRevokeFulfillmentV2Result: RevokeFulfillmentV2Result.nullish(),
  lineItemId: z.string().nullish(),
  namespace: z.string().nullish(),
  platform: z.enum(['STEAM']).nullish(),
  qty: z.number().int().nullish(),
  sandbox: z.boolean().nullish(),
  status: z.enum(['FULFILLED', 'VERIFIED']).nullish(),
  statusReason: z.string().nullish(),
  thirdPartyItemId: z.string().nullish(),
  thirdPartyOrderId: z.string().nullish(),
  userId: z.string().nullish(),
  vat: z.number().int().nullish()
})

export interface IapOrderLineItemInfo extends z.TypeOf<typeof IapOrderLineItemInfo> {}
