/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ForgotPasswordRequestV3 = z.object({ emailAddress: z.string(), languageTag: z.string().nullish() })

export interface ForgotPasswordRequestV3 extends z.TypeOf<typeof ForgotPasswordRequestV3> {}
