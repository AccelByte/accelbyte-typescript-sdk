/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NetflixCertificates } from './NetflixCertificates'
import { RegisteredDomain } from './RegisteredDomain'

export const ThirdPartyLoginPlatformCredentialRequest = z.object({
  ACSURL: z.string(),
  AWSCognitoRegion: z.string(),
  AWSCognitoUserPool: z.string(),
  AllowedClients: z.array(z.string()),
  AppId: z.string(),
  AuthorizationEndpoint: z.string(),
  ClientId: z.string(),
  Environment: z.string(),
  FederationMetadataURL: z.string(),
  GenericOauthFlow: z.boolean(),
  IsActive: z.boolean(),
  Issuer: z.string(),
  JWKSEndpoint: z.string(),
  KeyID: z.string(),
  NetflixCertificates: NetflixCertificates,
  OrganizationId: z.string(),
  PlatformName: z.string(),
  RedirectUri: z.string(),
  RegisteredDomains: z.array(RegisteredDomain),
  Secret: z.string(),
  TeamID: z.string(),
  TokenAuthenticationType: z.string(),
  TokenClaimsMapping: z.record(z.string()),
  TokenEndpoint: z.string()
})

export type ThirdPartyLoginPlatformCredentialRequest = z.TypeOf<typeof ThirdPartyLoginPlatformCredentialRequest>
