/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PreviewUrl = z.object({ source: z.string().nullish(), url: z.string().nullish() })

export interface PreviewUrl extends z.TypeOf<typeof PreviewUrl> {}
