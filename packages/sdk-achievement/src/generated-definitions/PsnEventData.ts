/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PsnEventData = z.object({ eventName: z.string(), properties: z.record(z.any()) })

export interface PsnEventData extends z.TypeOf<typeof PsnEventData> {}
