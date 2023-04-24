/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PodConfig = z.object({ cpu_limit: z.number().int(), mem_limit: z.number().int(), params: z.string() })

export interface PodConfig extends z.TypeOf<typeof PodConfig> {}
