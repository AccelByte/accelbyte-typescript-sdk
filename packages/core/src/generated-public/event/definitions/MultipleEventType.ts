/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventType } from './EventType'

export const MultipleEventType = z.object({ EventType: z.array(EventType) })

export type MultipleEventType = z.TypeOf<typeof MultipleEventType>
