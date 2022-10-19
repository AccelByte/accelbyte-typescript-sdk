/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventLevel } from './EventLevel'

export const MultipleEventLevel = z.object({ EventLevel: z.array(EventLevel) })

export type MultipleEventLevel = z.TypeOf<typeof MultipleEventLevel>
