/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { JwtBanV3 } from './JwtBanV3'
import { NamespaceRole } from './NamespaceRole'
import { PermissionV3 } from './PermissionV3'

export const TokenResponseV3 = z.object({
  access_token: z.string(),
  bans: z.array(JwtBanV3).nullish(),
  display_name: z.string(),
  expires_in: z.number().int(),
  is_comply: z.boolean().nullish(),
  jflgs: z.number().int().nullish(),
  namespace: z.string(),
  namespace_roles: z.array(NamespaceRole).nullish(),
  permissions: z.array(PermissionV3),
  platform_id: z.string().nullish(),
  platform_user_id: z.string().nullish(),
  refresh_expires_in: z.number().int(),
  refresh_token: z.string(),
  roles: z.array(z.string()).nullish(),
  scope: z.string(),
  token_type: z.string(),
  user_id: z.string(),
  xuid: z.string().nullish()
})

export type TokenResponseV3 = z.TypeOf<typeof TokenResponseV3>
