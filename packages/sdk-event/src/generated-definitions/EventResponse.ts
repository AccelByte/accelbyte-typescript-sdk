/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Event } from './Event.js'
import { Pagination } from './Pagination.js'

export const EventResponse = z.object({ Data: z.array(Event), Pagination: Pagination })

export interface EventResponse extends z.TypeOf<typeof EventResponse> {}
