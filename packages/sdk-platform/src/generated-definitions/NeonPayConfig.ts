/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NeonPayConfig = z.object({ apiKey: z.string().nullish(), webhookSecretKey: z.string().nullish() })

export interface NeonPayConfig extends z.TypeOf<typeof NeonPayConfig> {}
