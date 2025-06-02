/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SendVerificationCodeRequestV3 = z.object({
  context: z.string().nullish(),
  emailAddress: z.string(),
  languageTag: z.string().nullish(),
  upgradeToken: z.string().nullish()
})

export interface SendVerificationCodeRequestV3 extends z.TypeOf<typeof SendVerificationCodeRequestV3> {}
