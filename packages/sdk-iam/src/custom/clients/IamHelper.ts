/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { BanType, EligibleUser } from '../models/UserTypes.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3'
import { UserActiveBanResponseV3 } from '../../generated-definitions/UserActiveBanResponseV3'
import { UserResponseV4 } from '../../generated-definitions/UserResponseV4'
import { UserActiveBanResponseV4 } from '../../generated-definitions/UserActiveBanResponseV4'

export class IamHelper {
  static getAuthorizationCodeParams(urlSearchParams: string) {
    const searchParams = new URLSearchParams(urlSearchParams)
    const code = searchParams.get('code')
    const error = searchParams.get('error')
    const state = searchParams.get('state') || ''
    return {
      code,
      error,
      state
    }
  }

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

  static isUserBanned(user: UserResponseV3 | UserResponseV4 | null): boolean {
    const parsed = EligibleUser.safeParse(user)
    if (parsed.success) {
      const now = new Date().getTime()
      return (
        parsed.data.bans.find(
          (ban: UserActiveBanResponseV3 | UserActiveBanResponseV4) =>
            ban.ban === BanType.enum.ORDER_AND_PAYMENT && new Date(ban.endDate).getTime() > now
        ) !== undefined
      )
    }

    return false
  }

  static currentUserDisplayNameIsEmpty(user: UserResponseV3 | UserResponseV4 | null, checkUniqueDisplayName = false): boolean {
    if (!user || !checkUniqueDisplayName) return false

    const isUniqueDisplayNameEmpty = !user.uniqueDisplayName?.length

    return isUniqueDisplayNameEmpty
  }
}
