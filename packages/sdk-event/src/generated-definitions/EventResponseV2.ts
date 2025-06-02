/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventV2 } from './EventV2.js'
import { Paging } from './Paging.js'

export const EventResponseV2 = z.object({ data: z.array(EventV2), paging: Paging })

export interface EventResponseV2 extends z.TypeOf<typeof EventResponseV2> {}
