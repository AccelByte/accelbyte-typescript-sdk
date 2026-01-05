/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateConfigResponse = z.object({ apiKey: z.string(), namespace: z.string() })

export interface UpdateConfigResponse extends z.TypeOf<typeof UpdateConfigResponse> {}
