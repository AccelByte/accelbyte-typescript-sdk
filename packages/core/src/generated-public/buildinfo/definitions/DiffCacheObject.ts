/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DiffCacheObject = z.object({ filePath: z.string(), diffFile: z.string(), url: z.string() })

export type DiffCacheObject = z.TypeOf<typeof DiffCacheObject>
