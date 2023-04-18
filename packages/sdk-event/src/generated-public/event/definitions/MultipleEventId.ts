/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EventId } from './EventId'

export const MultipleEventId = z.object({ EventIDs: z.array(EventId) })

export interface MultipleEventId extends z.TypeOf<typeof MultipleEventId> {}
