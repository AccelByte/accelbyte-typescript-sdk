/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NotificationTopicResponseV1 } from './NotificationTopicResponseV1.js'
import { Pagination } from './Pagination.js'

export const GetAllNotificationTopicsResponse = z.object({ data: z.array(NotificationTopicResponseV1), paging: Pagination })

export interface GetAllNotificationTopicsResponse extends z.TypeOf<typeof GetAllNotificationTopicsResponse> {}
