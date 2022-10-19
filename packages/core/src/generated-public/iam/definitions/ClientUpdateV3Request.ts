/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
  namespace: z.string().nullish(),
  oauthAccessTokenExpiration: z.number().int().nullish(),
  oauthRefreshTokenExpiration: z.number().int().nullish(),
  redirectUri: z.string().nullish(),
  twoFactorEnabled: z.boolean().nullish()
})

export type ClientUpdateV3Request = z.TypeOf<typeof ClientUpdateV3Request>
