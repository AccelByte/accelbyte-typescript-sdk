/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientRequestParameter } from './ClientRequestParameter'
import { ConsumeItem } from './ConsumeItem'
import { RequestHistory } from './RequestHistory'

export const IapConsumeHistoryInfo = z.object({
  id: z.string().nullish(),
  namespace: z.string().nullish(),
  userId: z.string().nullish(),
  status: z.enum(['PENDING', 'FAIL', 'SUCCESS']).nullish(),
  iapType: z.enum(['APPLE', 'GOOGLE', 'PLAYSTATION', 'STEAM', 'XBOX', 'STADIA', 'EPICGAMES', 'TWITCH']).nullish(),
  requestUrl: z.string().nullish(),
  requestBody: z.record(z.any()).nullish(),
  requestHistories: z.array(RequestHistory).nullish(),
  consumeItems: z.array(ConsumeItem).nullish(),
  clientRequestParameter: ClientRequestParameter.nullish()
})

export interface IapConsumeHistoryInfo extends z.TypeOf<typeof IapConsumeHistoryInfo> {}
