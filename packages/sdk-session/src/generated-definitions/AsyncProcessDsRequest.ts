/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AsyncProcessDsRequest = z.object({ async: z.boolean().nullish(), timeout: z.number().int().nullish() })

export interface AsyncProcessDsRequest extends z.TypeOf<typeof AsyncProcessDsRequest> {}
