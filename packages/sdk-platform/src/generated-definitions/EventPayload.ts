/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EventPayload = z.object({ payload: z.record(z.any()).nullish() })

export interface EventPayload extends z.TypeOf<typeof EventPayload> {}
