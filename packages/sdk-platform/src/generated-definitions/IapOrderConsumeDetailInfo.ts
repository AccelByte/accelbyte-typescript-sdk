/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const IapOrderConsumeDetailInfo = z.object({
  correlationId: z.string().nullish(),
  iapOrderNo: z.string().nullish(),
  id: z.string().nullish(),
  itemId: z.string().nullish(),
  itemSku: z.string().nullish(),
  lineItemOrderId: z.string().nullish(),
  namespace: z.string().nullish(),
  orderId: z.string().nullish(),
  platform: z.string().nullish(),
  productId: z.string().nullish(),
  quantityConsumed: z.number().int().nullish(),
  quantityRevoked: z.number().int().nullish(),
  status: z.enum(['FULFILLED', 'RECONNECTED', 'REVOKED']).nullish(),
  userId: z.string().nullish()
})

export interface IapOrderConsumeDetailInfo extends z.TypeOf<typeof IapOrderConsumeDetailInfo> {}
