/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DiffCacheObject = z.object({ diffFile: z.string(), filePath: z.string(), url: z.string() })

export interface DiffCacheObject extends z.TypeOf<typeof DiffCacheObject> {}
