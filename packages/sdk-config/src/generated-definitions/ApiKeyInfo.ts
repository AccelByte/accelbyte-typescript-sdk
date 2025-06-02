/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ApiKeyInfo = z.object({ account: z.string(), namespace: z.string() })

export interface ApiKeyInfo extends z.TypeOf<typeof ApiKeyInfo> {}
