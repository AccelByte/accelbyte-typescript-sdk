/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { describe, expect, test } from 'vitest'

import { RouteUtils } from './RouteUtils'

describe('createWidgetRoutes', () => {
  test('default routes', () => {
    const result = RouteUtils.createWidgetRoutes({})

    expect(result.store.index.link).toBe('/store')
    expect(result.store.index.makePath({})).toBe('/store')

    expect(result.store.apps.detail.makePath({ params: { itemId: 'test' } })).toBe('/store/apps/test')

    // Test error paths.
    expect(result.error.err400.link).toBe('/error/400')
    expect(result.error.err401.link).toBe('/error/401')
    expect(result.error.err404.link).toBe('/error/404')

    // Test account paths.
    expect(result.account.index.link).toBe('/account')
    expect(result.account.profile.link).toBe('/account/profile')
    expect(result.account.accountHistory.index.link).toBe('/account/account-history')
    expect(result.account.accountHistory.displayNameHistory.link).toBe('/account/account-history/display-name')

    // Test query params.
    expect(
      result.store.apps.detail.makePath({
        params: { itemId: 'test' },
        query: { q: 'test' }
      })
    ).toBe('/store/apps/test?q=test')
  })

  test('change store and error base path', () => {
    const result = RouteUtils.createWidgetRoutes({ store: '/shop', error: '/err' })

    // Test store paths.
    expect(result.store.index.link).toBe('/shop')
    expect(result.store.index.makePath({})).toBe('/shop')

    expect(result.store.apps.detail.makePath({ params: { itemId: 'test' } })).toBe('/shop/apps/test')

    // Test error paths.
    expect(result.error.err400.link).toBe('/err/400')
    expect(result.error.err401.link).toBe('/err/401')
    expect(result.error.err404.link).toBe('/err/404')
  })

  test('query parameter', () => {
    const result = RouteUtils.createWidgetRoutes({})

    // Test store paths.
    expect(result.account.purchasedItems.optionboxes.makePath({ query: { page: 5 } })).toBe('/account/purchased-items/optionboxes?page=5')
  })
})
