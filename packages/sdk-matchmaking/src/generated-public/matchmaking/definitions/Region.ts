/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Region = z.object({ latency: z.number().int(), region: z.string() })

export interface Region extends z.TypeOf<typeof Region> {}
