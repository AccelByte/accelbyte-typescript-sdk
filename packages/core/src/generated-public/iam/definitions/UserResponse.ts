/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceRole } from './NamespaceRole'
import { Permission } from './Permission'
import { UserActiveBanResponse } from './UserActiveBanResponse'

export const UserResponse = z.object({
  AuthType: z.string(),
  AvatarUrl: z.string().nullish(),
  Bans: z.array(UserActiveBanResponse),
  Country: z.string(),
  CreatedAt: z.string(),
  DateOfBirth: z.string(),
  DeletionStatus: z.boolean(),
  DisplayName: z.string(),
  EmailAddress: z.string().nullish(),
  EmailVerified: z.boolean(),
  Enabled: z.boolean(),
  LastDateOfBirthChangedTime: z.string(),
  LastEnabledChangedTime: z.string(),
  LoginId: z.string(),
  Namespace: z.string(),
  NamespaceRoles: z.array(NamespaceRole),
  NewEmailAddress: z.string().nullish(),
  OldEmailAddress: z.string(),
  Permissions: z.array(Permission),
  PhoneNumber: z.string().nullish(),
  PhoneVerified: z.boolean(),
  PlatformId: z.string().nullish(),
  PlatformUserId: z.string().nullish(),
  Roles: z.array(z.string()),
  UserId: z.string(),
  Username: z.string().nullish(),
  XUID: z.string().nullish()
})

export type UserResponse = z.TypeOf<typeof UserResponse>
