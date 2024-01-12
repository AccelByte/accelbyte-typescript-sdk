/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventLevel } from './EventLevel.js'

export const MultipleEventLevel = z.object({ EventLevel: z.array(EventLevel) })

export interface MultipleEventLevel extends z.TypeOf<typeof MultipleEventLevel> {}
