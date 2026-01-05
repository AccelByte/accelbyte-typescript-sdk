/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SubscriberItemResponse = z.object({
  displayName: z.string().nullish(),
  emailAddress: z.string().nullish(),
  id: z.string(),
  notificationType: z.string().nullish(),
  userId: z.string()
})

export interface SubscriberItemResponse extends z.TypeOf<typeof SubscriberItemResponse> {}
