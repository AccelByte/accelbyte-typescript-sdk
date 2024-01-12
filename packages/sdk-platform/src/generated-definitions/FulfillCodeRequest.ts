/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillCodeRequest = z.object({ code: z.string(), language: z.string().nullish(), region: z.string().nullish() })

export interface FulfillCodeRequest extends z.TypeOf<typeof FulfillCodeRequest> {}
