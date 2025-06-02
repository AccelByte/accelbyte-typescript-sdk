/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SendVerificationCodeRequest = z.object({ Context: z.string().nullish(), LanguageTag: z.string(), LoginID: z.string() })

export interface SendVerificationCodeRequest extends z.TypeOf<typeof SendVerificationCodeRequest> {}
