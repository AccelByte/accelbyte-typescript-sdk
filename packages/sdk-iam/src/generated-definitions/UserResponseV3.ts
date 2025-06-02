/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceRole } from './NamespaceRole.js'
import { TagDetail } from './TagDetail.js'
import { UserActiveBanResponseV3 } from './UserActiveBanResponseV3.js'
import { UserPermissionsResponseV3 } from './UserPermissionsResponseV3.js'
import { UserPlatformInfo } from './UserPlatformInfo.js'

export const UserResponseV3 = z.object({
  authType: z.string(),
  avatarUrl: z.string().nullish(),
  bans: z.array(UserActiveBanResponseV3),
  country: z.string(),
  createdAt: z.string(),
  dateOfBirth: z.string().nullish(),
  deletionDate: z.string().nullish(),
  deletionStatus: z.boolean(),
  displayName: z.string(),
  emailAddress: z.string(),
  emailVerified: z.boolean(),
  enabled: z.boolean(),
  lastDateOfBirthChangedTime: z.string(),
  lastEnabledChangedTime: z.string(),
  namespace: z.string(),
  namespaceRoles: z.array(NamespaceRole),
  newEmailAddress: z.string().nullish(),
  oldEmailAddress: z.string().nullish(),
  permissions: z.array(UserPermissionsResponseV3),
  phoneNumber: z.string().nullish(),
  phoneVerified: z.boolean(),
  platformAvatarUrl: z.string().nullish(),
  platformDisplayName: z.string().nullish(),
  platformId: z.string().nullish(),
  platformInfos: z.array(UserPlatformInfo).nullish(),
  platformUserId: z.string().nullish(),
  roles: z.array(z.string()),
  skipLoginQueue: z.boolean().nullish(),
  tags: z.array(TagDetail).nullish(),
  testAccount: z.boolean().nullish(),
  uniqueDisplayName: z.string().nullish(),
  userId: z.string(),
  userName: z.string().nullish()
})

export interface UserResponseV3 extends z.TypeOf<typeof UserResponseV3> {}
