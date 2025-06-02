/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Entry = z.object({ additionalData: z.record(z.any()).nullish(), hidden: z.boolean().nullish(), point: z.number() })

export interface Entry extends z.TypeOf<typeof Entry> {}
