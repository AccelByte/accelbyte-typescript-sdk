/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { JwtBanV3 } from './JwtBanV3.js'
import { NamespaceRole } from './NamespaceRole.js'
import { PermissionV3 } from './PermissionV3.js'

export const TokenWithDeviceCookieResponseV3 = z.object({
  access_token: z.string(),
  auth_trust_id: z.string().nullish(),
  bans: z.array(JwtBanV3).nullish(),
  display_name: z.string().nullish(),
  expires_in: z.number().int(),
  is_comply: z.boolean().nullish(),
  jflgs: z.number().int().nullish(),
  namespace: z.string(),
  namespace_roles: z.array(NamespaceRole).nullish(),
  permissions: z.array(PermissionV3),
  platform_id: z.string().nullish(),
  platform_user_id: z.string().nullish(),
  refresh_expires_in: z.number().int().nullish(),
  refresh_token: z.string().nullish(),
  roles: z.array(z.string()).nullish(),
  scope: z.string(),
  simultaneous_platform_id: z.string().nullish(),
  simultaneous_platform_user_id: z.string().nullish(),
  token_type: z.string(),
  unique_display_name: z.string().nullish(),
  user_id: z.string().nullish(),
  xuid: z.string().nullish()
})

export interface TokenWithDeviceCookieResponseV3 extends z.TypeOf<typeof TokenWithDeviceCookieResponseV3> {}
