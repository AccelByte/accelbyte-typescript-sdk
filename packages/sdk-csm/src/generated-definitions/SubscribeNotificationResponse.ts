/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SubscriberItemResponse } from './SubscriberItemResponse.js'

export const SubscribeNotificationResponse = z.object({ notificationType: z.string(), subscriptions: z.array(SubscriberItemResponse) })

export interface SubscribeNotificationResponse extends z.TypeOf<typeof SubscribeNotificationResponse> {}
