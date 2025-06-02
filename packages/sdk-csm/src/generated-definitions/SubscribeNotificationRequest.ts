/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { SubscriberItemRequest } from './SubscriberItemRequest.js'

export const SubscribeNotificationRequest = z.object({ notificationType: z.string(), subscribers: z.array(SubscriberItemRequest) })

export interface SubscribeNotificationRequest extends z.TypeOf<typeof SubscribeNotificationRequest> {}
