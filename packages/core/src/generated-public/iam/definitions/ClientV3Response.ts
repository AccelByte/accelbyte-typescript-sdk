/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { PermissionV3 } from './PermissionV3'

export const ClientV3Response = z.object({
  audiences: z.array(z.string()),
  baseUri: z.string(),
  clientId: z.string(),
  clientName: z.string(),
  clientPermissions: z.array(PermissionV3),
  clientPlatform: z.string(),
  createdAt: z.string(),
  modifiedAt: z.string(),
  namespace: z.string(),
  oauthAccessTokenExpiration: z.number().int().nullish(),
  oauthClientType: z.string(),
  oauthRefreshTokenExpiration: z.number().int().nullish(),
  redirectUri: z.string(),
  scopes: z.array(z.string()),
  twoFactorEnabled: z.boolean()
})

export type ClientV3Response = z.TypeOf<typeof ClientV3Response>
