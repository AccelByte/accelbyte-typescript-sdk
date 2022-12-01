/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SendRegisterVerificationCodeRequest = z.object({ emailAddress: z.string(), languageTag: z.string().nullish() })

export type SendRegisterVerificationCodeRequest = z.TypeOf<typeof SendRegisterVerificationCodeRequest>
