/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ClientRequestParameter } from './ClientRequestParameter.js'
import { ConsumeItem } from './ConsumeItem.js'
import { RequestHistory } from './RequestHistory.js'

export const IapConsumeHistoryInfo = z.object({
  clientRequestParameter: ClientRequestParameter.nullish(),
  consumeItems: z.array(ConsumeItem).nullish(),
  iapType: z.enum(['APPLE', 'EPICGAMES', 'GOOGLE', 'OCULUS', 'PLAYSTATION', 'STADIA', 'STEAM', 'TWITCH', 'XBOX']).nullish(),
  id: z.string().nullish(),
  namespace: z.string().nullish(),
  requestBody: z.record(z.any()).nullish(),
  requestHistories: z.array(RequestHistory).nullish(),
  requestUrl: z.string().nullish(),
  status: z.enum(['FAIL', 'PENDING', 'SUCCESS']).nullish(),
  userId: z.string().nullish()
})

export interface IapConsumeHistoryInfo extends z.TypeOf<typeof IapConsumeHistoryInfo> {}
