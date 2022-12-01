/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NamespaceRole } from './NamespaceRole'
import { UserActiveBanResponseV3 } from './UserActiveBanResponseV3'
import { UserPermissionsResponseV3 } from './UserPermissionsResponseV3'

export const PublicUserResponseV3 = z.object({
  authType: z.string(),
  avatarUrl: z.string().nullish(),
  bans: z.array(UserActiveBanResponseV3),
  createdAt: z.string(),
  deletionStatus: z.boolean(),
  displayName: z.string(),
  emailVerified: z.boolean(),
  enabled: z.boolean(),
  lastDateOfBirthChangedTime: z.string(),
  lastEnabledChangedTime: z.string(),
  namespace: z.string(),
  namespaceRoles: z.array(NamespaceRole),
  permissions: z.array(UserPermissionsResponseV3),
  phoneVerified: z.boolean(),
  platformId: z.string().nullish(),
  platformUserId: z.string().nullish(),
  roles: z.array(z.string()),
  userId: z.string(),
  userName: z.string().nullish()
})

export type PublicUserResponseV3 = z.TypeOf<typeof PublicUserResponseV3>
