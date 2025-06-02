/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetNotificationSubscriberItem = z.object({
  displayName: z.string().nullish(),
  emailAddress: z.string().nullish(),
  notificationType: z.record(z.boolean()),
  subscriptionId: z.string(),
  userId: z.string()
})

export interface GetNotificationSubscriberItem extends z.TypeOf<typeof GetNotificationSubscriberItem> {}
