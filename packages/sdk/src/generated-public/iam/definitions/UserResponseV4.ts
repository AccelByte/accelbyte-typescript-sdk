/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserActiveBanResponseV4 } from './UserActiveBanResponseV4'
import { UserPermissionsResponseV4 } from './UserPermissionsResponseV4'

export const UserResponseV4 = z.object({
  authType: z.string(),
  bans: z.array(UserActiveBanResponseV4),
  country: z.string(),
  createdAt: z.string(),
  dateOfBirth: z.string(),
  deletionStatus: z.boolean(),
  displayName: z.string(),
  emailAddress: z.string(),
  emailVerified: z.boolean(),
  enabled: z.boolean(),
  lastDateOfBirthChangedTime: z.string(),
  lastEnabledChangedTime: z.string(),
  namespace: z.string(),
  newEmailAddress: z.string().nullish(),
  oldEmailAddress: z.string(),
  permissions: z.array(UserPermissionsResponseV4),
  phoneNumber: z.string().nullish(),
  phoneVerified: z.boolean(),
  platformId: z.string().nullish(),
  platformUserId: z.string().nullish(),
  roles: z.array(z.string()),
  userId: z.string(),
  username: z.string().nullish()
})

export type UserResponseV4 = z.TypeOf<typeof UserResponseV4>
