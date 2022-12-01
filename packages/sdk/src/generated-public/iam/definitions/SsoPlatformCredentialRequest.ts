/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SsoPlatformCredentialRequest = z.object({
  acsUrl: z.string(),
  apiKey: z.string(),
  appId: z.string(),
  federationMetadataUrl: z.string(),
  isActive: z.boolean(),
  redirectUri: z.string(),
  secret: z.string(),
  ssoUrl: z.string()
})

export type SsoPlatformCredentialRequest = z.TypeOf<typeof SsoPlatformCredentialRequest>
