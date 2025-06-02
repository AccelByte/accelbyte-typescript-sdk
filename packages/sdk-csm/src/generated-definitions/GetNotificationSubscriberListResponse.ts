/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetNotificationSubscriberItem } from './GetNotificationSubscriberItem.js'

export const GetNotificationSubscriberListResponse = z.object({
  maxSubscriptions: z.number().int(),
  subscriptions: z.array(GetNotificationSubscriberItem)
})

export interface GetNotificationSubscriberListResponse extends z.TypeOf<typeof GetNotificationSubscriberListResponse> {}
