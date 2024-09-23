/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { BanType, IamHelper } from '@accelbyte/sdk-iam'
import { describe, expect, test } from 'vitest'
import { HEADLESS_USER } from '../test/constants'

describe('currentUserIsHeadlessAccount', () => {
  test('null input', () => {
    expect(IamHelper.currentUserIsHeadlessAccount(null)).toBe(false)
  })

  test('headless account', () => {
    expect(IamHelper.currentUserIsHeadlessAccount(HEADLESS_USER)).toBe(true)
  })

  test('headed account', () => {
    expect(
      IamHelper.currentUserIsHeadlessAccount({
        ...HEADLESS_USER,
        emailAddress: 'test-email@accelbyte.net'
      })
    ).toBe(false)
  })
})

describe('currentUserNeedsVerification', () => {
  test('null input', () => {
    expect(IamHelper.currentUserNeedsVerification(null)).toBe(false)
  })

  test("user hasn't verified their email", () => {
    expect(
      IamHelper.currentUserNeedsVerification({
        ...HEADLESS_USER,
        emailAddress: 'test-email@accelbyte.net',
        emailVerified: false
      })
    ).toBe(true)
  })

  test('user has verified their email', () => {
    expect(
      IamHelper.currentUserNeedsVerification({
        ...HEADLESS_USER,
        emailAddress: 'test-email@accelbyte.net',
        emailVerified: true
      })
    ).toBe(false)
  })
})

describe('currentUserIsUpdatingEmail', () => {
  test('null input', () => {
    expect(IamHelper.currentUserIsUpdatingEmail(null)).toBe(false)
  })

  test('not updating email', () => {
    expect(IamHelper.currentUserIsUpdatingEmail(HEADLESS_USER)).toBe(false)
  })

  test('currently updating email', () => {
    expect(
      IamHelper.currentUserIsUpdatingEmail({
        ...HEADLESS_USER,
        newEmailAddress: 'test-new-email@accelbyte.net',
        emailAddress: 'test-email@accelbyte.net',
        emailVerified: false
      })
    ).toBe(true)
  })
})

describe('currentUserIsEligible', () => {
  test('null input', () => {
    expect(IamHelper.currentUserIsEligible(null)).toBe(false)
  })

  test('ineligible user', () => {
    // TODO: is it possible that there is an ineligible user?
  })

  test('eligible user', () => {
    expect(IamHelper.currentUserIsEligible(HEADLESS_USER)).toBe(true)
  })
})

describe('isUserBanned', () => {
  test('null input', () => {
    expect(IamHelper.isUserBanned(null)).toBe(false)
  })

  test('user is banned', () => {
    expect(
      IamHelper.isUserBanned({
        ...HEADLESS_USER,
        bans: [
          {
            ban: BanType.enum.ORDER_AND_PAYMENT,
            banId: '1234',
            endDate: new Date(Date.now() + 3600).toISOString(),
            targetedNamespace: 'test'
          }
        ]
      })
    ).toBe(true)
  })

  test('user was banned', () => {
    expect(
      IamHelper.isUserBanned({
        ...HEADLESS_USER,
        bans: [
          {
            ban: BanType.enum.ORDER_AND_PAYMENT,
            banId: '1234',
            endDate: new Date(Date.now() - 3600).toISOString(),
            targetedNamespace: 'test'
          }
        ]
      })
    ).toBe(false)
  })

  test('user is clean of bans', () => {
    expect(IamHelper.isUserBanned(HEADLESS_USER)).toBe(false)
  })
})
