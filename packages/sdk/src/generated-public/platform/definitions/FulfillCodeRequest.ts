/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const FulfillCodeRequest = z.object({ code: z.string(), region: z.string().nullish(), language: z.string().nullish() })

export type FulfillCodeRequest = z.TypeOf<typeof FulfillCodeRequest>
