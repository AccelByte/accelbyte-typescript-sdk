/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { JwtBanV3 } from './JwtBanV3'
import { NamespaceRole } from './NamespaceRole'
import { PermissionV3 } from './PermissionV3'

export const TokenWithDeviceCookieResponseV3 = z.object({
  access_token: z.string(),
  auth_trust_id: z.string().nullish(),
  bans: z.array(JwtBanV3),
  display_name: z.string().nullish(),
  expires_in: z.number().int(),
  is_comply: z.boolean().nullish(),
  jflgs: z.number().int().nullish(),
  namespace: z.string(),
  namespace_roles: z.array(NamespaceRole),
  permissions: z.array(PermissionV3),
  platform_id: z.string().nullish(),
  platform_user_id: z.string().nullish(),
  refresh_expires_in: z.number().int().nullish(),
  refresh_token: z.string().nullish(),
  roles: z.array(z.string()),
  scope: z.string(),
  token_type: z.string(),
  user_id: z.string().nullish(),
  xuid: z.string().nullish()
})

export type TokenWithDeviceCookieResponseV3 = z.TypeOf<typeof TokenWithDeviceCookieResponseV3>
