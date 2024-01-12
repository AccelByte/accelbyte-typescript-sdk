/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceRole } from './NamespaceRole.js'
import { Permission } from './Permission.js'
import { UserActiveBanResponse } from './UserActiveBanResponse.js'

export const PublicUserResponse = z.object({
  AuthType: z.string(),
  Bans: z.array(UserActiveBanResponse),
  CreatedAt: z.string(),
  DeletionStatus: z.boolean(),
  DisplayName: z.string(),
  EmailVerified: z.boolean(),
  Enabled: z.boolean(),
  LastEnabledChangedTime: z.string(),
  LoginId: z.string(),
  Namespace: z.string(),
  NamespaceRoles: z.array(NamespaceRole),
  Permissions: z.array(Permission),
  PhoneVerified: z.boolean(),
  PlatformId: z.string().nullish(),
  PlatformUserId: z.string().nullish(),
  Roles: z.array(z.string()),
  UserId: z.string(),
  Username: z.string().nullish(),
  XUID: z.string().nullish()
})

export interface PublicUserResponse extends z.TypeOf<typeof PublicUserResponse> {}
