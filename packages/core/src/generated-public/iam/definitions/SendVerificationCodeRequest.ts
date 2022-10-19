/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SendVerificationCodeRequest = z.object({ Context: z.string().nullish(), LanguageTag: z.string(), LoginID: z.string() })

export type SendVerificationCodeRequest = z.TypeOf<typeof SendVerificationCodeRequest>
