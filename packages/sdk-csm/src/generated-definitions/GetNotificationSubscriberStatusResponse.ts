/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetNotificationSubscriberStatusResponse = z.object({
  displayName: z.string().nullish(),
  emailAddress: z.string().nullish(),
  maxSubscription: z.number().int(),
  notificationType: z.string(),
  subscribed: z.boolean(),
  subscriptionsCount: z.number().int(),
  userId: z.string()
})

export interface GetNotificationSubscriberStatusResponse extends z.TypeOf<typeof GetNotificationSubscriberStatusResponse> {}
