/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { UserResponseV4 } from '@od-web-sdk/generated-public/iam/definitions/UserResponseV4'
import { z } from 'zod'

export const BanType = z.enum(['ORDER_AND_PAYMENT'])
export type BanType = z.infer<typeof BanType>

export const EligibleUser = UserResponseV4.pick({
  userId: true,
  emailVerified: true,
  displayName: true,
  country: true,
  dateOfBirth: true,
  emailAddress: true,
  bans: true,
  username: true,
  newEmailAddress: true,
  oldEmailAddress: true,
  deletionStatus: true
})

export type EligibleUser = z.TypeOf<typeof EligibleUser>
