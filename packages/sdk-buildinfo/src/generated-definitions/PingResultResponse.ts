/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PingResultResponse = z.object({ resp: z.string().nullish() })

export interface PingResultResponse extends z.TypeOf<typeof PingResultResponse> {}
