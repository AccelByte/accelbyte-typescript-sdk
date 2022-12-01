/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Event } from './Event'
import { Pagination } from './Pagination'

export const EventResponse = z.object({ Data: z.array(Event), Pagination: Pagination })

export type EventResponse = z.TypeOf<typeof EventResponse>
