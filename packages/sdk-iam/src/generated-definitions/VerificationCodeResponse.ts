/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const VerificationCodeResponse = z.object({
  accountRegistration: z.string(),
  accountUpgrade: z.string(),
  passwordReset: z.string(),
  updateEmail: z.string()
})

export interface VerificationCodeResponse extends z.TypeOf<typeof VerificationCodeResponse> {}
