/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Notification } from './Notification.js'

export const NotificationsResponse = z.object({ notifications: z.array(Notification) })

export interface NotificationsResponse extends z.TypeOf<typeof NotificationsResponse> {}
