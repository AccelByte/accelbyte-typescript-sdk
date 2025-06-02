/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateConfig = z.object({ isPublic: z.boolean(), key: z.string(), value: z.string() })

export interface CreateConfig extends z.TypeOf<typeof CreateConfig> {}
