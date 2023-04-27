/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NetflixCertificates } from './NetflixCertificates.js'
import { RegisteredDomain } from './RegisteredDomain.js'

export const ThirdPartyLoginPlatformCredentialResponse = z.object({
  ACSURL: z.string(),
  AWSCognitoRegion: z.string(),
  AWSCognitoUserPool: z.string(),
  AllowedClients: z.array(z.string()).nullish(),
  AppId: z.string(),
  AuthorizationEndpoint: z.string().nullish(),
  ClientId: z.string(),
  Environment: z.string(),
  FederationMetadataURL: z.string(),
  GenericOauthFlow: z.boolean(),
  IsActive: z.boolean(),
  Issuer: z.string(),
  JWKSEndpoint: z.string(),
  KeyID: z.string(),
  Namespace: z.string(),
  NetflixCertificates: NetflixCertificates.nullish(),
  OrganizationId: z.string(),
  PlatformId: z.string(),
  PlatformName: z.string(),
  RedirectUri: z.string(),
  Secret: z.string(),
  TeamID: z.string(),
  TokenAuthenticationType: z.string(),
  TokenClaimsMapping: z.record(z.string()).nullish(),
  TokenEndpoint: z.string().nullish(),
  UserInfoEndpoint: z.string().nullish(),
  UserInfoHTTPMethod: z.string().nullish(),
  registeredDomains: z.array(RegisteredDomain).nullish(),
  scopes: z.array(z.string()).nullish()
})

export interface ThirdPartyLoginPlatformCredentialResponse extends z.TypeOf<typeof ThirdPartyLoginPlatformCredentialResponse> {}
