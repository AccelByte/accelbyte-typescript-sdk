/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { JwtBanV3 } from './JwtBanV3'
import { NamespaceRole } from './NamespaceRole'
import { Permission } from './Permission'

export const TokenResponse = z.object({
  access_token: z.string(),
  bans: z.array(JwtBanV3),
  display_name: z.string(),
  expires_in: z.number().int(),
  is_comply: z.boolean().nullish(),
  jflgs: z.number().int().nullish(),
  namespace: z.string(),
  namespace_roles: z.array(NamespaceRole),
  permissions: z.array(Permission),
  platform_id: z.string().nullish(),
  platform_user_id: z.string().nullish(),
  refresh_token: z.string(),
  roles: z.array(z.string()),
  token_type: z.string(),
  user_id: z.string()
})

export type TokenResponse = z.TypeOf<typeof TokenResponse>
