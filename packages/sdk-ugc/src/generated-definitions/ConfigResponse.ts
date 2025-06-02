/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ConfigResponse = z.object({ key: z.string(), namespace: z.string(), value: z.string() })

export interface ConfigResponse extends z.TypeOf<typeof ConfigResponse> {}
