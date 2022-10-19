/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { UserActiveBanResponseV3 } from '@od-web-sdk/generated-public/iam/definitions/UserActiveBanResponseV3'
import { UserResponseV3 } from '@od-web-sdk/generated-public/iam/definitions/UserResponseV3'
/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { BanType, EligibleUser } from '@od-web-sdk/models/UserTypes'

export class IamHelper {
  static currentUserIsHeadlessAccount(user: UserResponseV3 | null): boolean {
    if (!user) return false
    return user.emailAddress === ''
  }

  static currentUserNeedsVerification(user: UserResponseV3 | null): boolean {
    if (!user) return false
    return !!user.emailAddress && !user.emailVerified
  }

  static currentUserIsUpdatingEmail(user: UserResponseV3 | null): boolean {
    if (!user) return false
    return (
      EligibleUser.safeParse(user).success &&
      !!user.newEmailAddress &&
      user.emailAddress !== user.newEmailAddress &&
      IamHelper.currentUserNeedsVerification(user)
    )
  }

  static currentUserIsEligible(user: UserResponseV3 | null): boolean {
    if (!user) return false
    return EligibleUser.safeParse(user).success
  }

  static currentUserCanOrder(user: UserResponseV3 | null): boolean {
    if (EligibleUser.safeParse(user).success && user && user.bans) {
      const now = new Date().getTime()
      return !user.bans.filter(
        (ban: UserActiveBanResponseV3) => ban.ban === BanType.enum.ORDER_AND_PAYMENT && new Date(ban.endDate).getTime() > now
      ).length
    }

    return true
  }
}
