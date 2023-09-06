/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventAdditionalData } from './EventAdditionalData.js'

export const StreamEventBody = z.object({
  account: z.string().nullish(),
  additionalData: EventAdditionalData.nullish(),
  originalTitleName: z.string().nullish(),
  paymentProductSKU: z.string().nullish(),
  purchaseDate: z.string().nullish(),
  sourceOrderItemId: z.string().nullish(),
  titleName: z.string().nullish()
})

export interface StreamEventBody extends z.TypeOf<typeof StreamEventBody> {}
