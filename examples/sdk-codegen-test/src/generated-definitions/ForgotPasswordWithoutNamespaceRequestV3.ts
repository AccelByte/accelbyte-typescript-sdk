/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ForgotPasswordWithoutNamespaceRequestV3 = z.object({
  clientId: z.string().nullish(),
  emailAddress: z.string(),
  languageTag: z.string().nullish()
})

export interface ForgotPasswordWithoutNamespaceRequestV3 extends z.TypeOf<typeof ForgotPasswordWithoutNamespaceRequestV3> {}
