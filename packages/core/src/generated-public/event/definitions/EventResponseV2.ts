/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventV2 } from './EventV2'
import { Paging } from './Paging'

export const EventResponseV2 = z.object({ data: z.array(EventV2), paging: Paging })

export type EventResponseV2 = z.TypeOf<typeof EventResponseV2>
