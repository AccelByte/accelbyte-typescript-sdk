/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionV3 } from './PermissionV3'

export const ClientUpdateV3Request = z.object({
  audiences: z.array(z.string()).nullish(),
  baseUri: z.string().nullish(),
  clientName: z.string().nullish(),
  clientPermissions: z.array(PermissionV3).nullish(),
  clientPlatform: z.string(),
  deletable: z.boolean().nullish(),
  description: z.string(),
  namespace: z.string().nullish(),
  oauthAccessTokenExpiration: z.number().int().nullish(),
  oauthAccessTokenExpirationTimeUnit: z.string().nullish(),
  oauthRefreshTokenExpiration: z.number().int().nullish(),
  oauthRefreshTokenExpirationTimeUnit: z.string().nullish(),
  redirectUri: z.string().nullish(),
  scopes: z.array(z.string()).nullish(),
  twoFactorEnabled: z.boolean().nullish()
})

export interface ClientUpdateV3Request extends z.TypeOf<typeof ClientUpdateV3Request> {}
