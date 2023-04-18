/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
  AllowedClients: z.array(z.string()).nullish(),
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
  NetflixCertificates,
  OrganizationId: z.string(),
  PlatformName: z.string(),
  RedirectUri: z.string(),
  RegisteredDomains: z.array(RegisteredDomain),
  Secret: z.string(),
  TeamID: z.string(),
  TokenAuthenticationType: z.string(),
  TokenClaimsMapping: z.record(z.string()).nullish(),
  TokenEndpoint: z.string(),
  UserInfoEndpoint: z.string(),
  UserInfoHTTPMethod: z.string(),
  scopes: z.array(z.string())
})

export interface ThirdPartyLoginPlatformCredentialRequest extends z.TypeOf<typeof ThirdPartyLoginPlatformCredentialRequest> {}
