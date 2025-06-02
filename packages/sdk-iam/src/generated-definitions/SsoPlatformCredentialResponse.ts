/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SsoPlatformCredentialResponse = z.object({
  acsUrl: z.string(),
  appId: z.string(),
  federationMetadataUrl: z.string(),
  isActive: z.boolean(),
  namespace: z.string(),
  platformId: z.string(),
  redirectUri: z.string(),
  secret: z.string(),
  ssoUrl: z.string(),
  truncatedApiKey: z.string()
})

export interface SsoPlatformCredentialResponse extends z.TypeOf<typeof SsoPlatformCredentialResponse> {}
