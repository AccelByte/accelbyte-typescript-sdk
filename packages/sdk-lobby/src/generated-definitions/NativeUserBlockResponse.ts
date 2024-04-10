/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NativeUserBlockResponse = z.object({ detail: z.string().nullish(), platformId: z.string(), status: z.string() })

export interface NativeUserBlockResponse extends z.TypeOf<typeof NativeUserBlockResponse> {}
