/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PsnEventData } from './PsnEventData.js'

export const PsnEvent = z.object({ dateTime: z.string(), eventData: PsnEventData, eventId: z.string(), version: z.string() })

export interface PsnEvent extends z.TypeOf<typeof PsnEvent> {}
