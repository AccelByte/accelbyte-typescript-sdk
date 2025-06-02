/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TagInfo = z.object({ created_at: z.string(), tag: z.string() })

export interface TagInfo extends z.TypeOf<typeof TagInfo> {}
