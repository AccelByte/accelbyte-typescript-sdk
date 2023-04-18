/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { z } from 'zod'
import type { WidgetHistory } from '~/hooks/routes/useHistory'

// Simplified routes.
export const SimplifiedWidgetRoutes = z.object({
  /** The path to news page. */
  news: z.string().default('/news'),

  /** The path to the store page. */
  store: z.string().default('/store'),

  /** The path to the account page. */
  account: z.string().default('/account'),

  /** The path to the order page. */
  orders: z.string().default('/orders'),

  /** The path to the error pages. */
  error: z.string().default('/error'),

  /** The path to the twitch pages. */
  twitchDrops: z.string().default('/twitch-drops')
})
export type SimplifiedWidgetRoutes = z.infer<typeof SimplifiedWidgetRoutes>

// Expanded routes.
const StoreRouteObject = z.object({ index: z.string(), detail: z.string() })
const AccountHistoryRouteObject = z.object({
  index: z.string(),
  displayNameHistory: z.string(),
  passwordHistory: z.string(),
  emailHistory: z.string()
})
const PurchasedItemsRouteObject = z.object({
  index: z.string(),
  games: z.string(),
  keys: z.string(),
  optionboxes: z.string()
})
const OrderHistoryRouteObject = z.object({
  index: z.string(),
  detail: z.string()
})

const AllWidgetRoutes = z.object({
  home: z.string(),
  game: StoreRouteObject,
  news: z.string(),

  linkAccount: z.string(),
  linkAccountOneTimeCode: z.string(),
  verifyUser: z.string(),
  accountDeletionSuccess: z.string(),
  paymentSuccessCallback: z.string(),

  store: z.object({
    index: z.string(),
    apps: StoreRouteObject,
    dlcs: StoreRouteObject,
    bundles: StoreRouteObject,
    ingameitems: StoreRouteObject,
    codes: StoreRouteObject,
    optionboxes: StoreRouteObject
  }),

  // The orders don't have `index` route so we're not using `StoreRouteObject`.
  orders: z.object({
    detail: z.string()
  }),

  account: z.object({
    index: z.string(),
    overview: z.string(),
    profile: z.string(),
    accountHistory: AccountHistoryRouteObject,
    paymentMethods: z.string(),
    changeEmail: z.string(),
    changePassword: z.string(),
    linkedAccounts: z.string(),
    purchasedItems: PurchasedItemsRouteObject,
    orderHistory: OrderHistoryRouteObject,
    redeemCode: z.string(),
    notificationPreferences: z.string(),
    legalAgreements: z.string(),
    personalData: z.string(),
    accountDeletion: z.string()
  }),

  twitchDrops: z.object({
    index: z.string(),
    claim: z.string()
  }),

  error: z.object({
    index: z.string(),
    err400: z.string(),
    err401: z.string(),
    err404: z.string(),
    err500: z.string(),
    network: z.string(),
    sessionExpired: z.string(),
    alreadyAuthenticated: z.string()
  })
})
type AllWidgetRoutes = z.infer<typeof AllWidgetRoutes>

type RouteObject<T = any, QueryType = any> = {
  link: string
  makePath: (obj: {
    params?: Record<keyof T, T[keyof T] | number>
    state?: any
    query?: Record<keyof QueryType, QueryType[keyof QueryType] | number>
  }) => WidgetHistory['location'] | string
}

export interface AllWidgetRoutesWithPathMaker {
  home: RouteObject
  news: RouteObject
  linkAccount: RouteObject
  linkAccountOneTimeCode: RouteObject
  verifyUser: RouteObject
  accountDeletionSuccess: RouteObject
  paymentSuccessCallback: RouteObject

  game: {
    index: RouteObject
    detail: RouteObject<{ gameId: string }>
  }

  store: {
    index: RouteObject
    apps: {
      index: RouteObject
      detail: RouteObject<{ itemId: string }>
    }
    dlcs: {
      index: RouteObject
      detail: RouteObject<{ itemId: string }>
    }
    bundles: {
      index: RouteObject
      detail: RouteObject<{ itemId: string }>
    }
    ingameitems: {
      index: RouteObject
      detail: RouteObject<{ itemId: string }>
    }
    codes: {
      index: RouteObject
      detail: RouteObject
    }
    optionboxes: {
      index: RouteObject
      detail: RouteObject<{ itemId: string }>
    }
  }

  orders: {
    detail: RouteObject<{ orderNo: string }>
  }

  account: {
    index: RouteObject
    overview: RouteObject
    profile: RouteObject
    accountHistory: {
      index: RouteObject
      displayNameHistory: RouteObject
      passwordHistory: RouteObject
      emailHistory: RouteObject
    }
    paymentMethods: RouteObject
    changeEmail: RouteObject
    changePassword: RouteObject
    linkedAccounts: RouteObject
    purchasedItems: {
      index: RouteObject
      games: RouteObject
      keys: RouteObject
      optionboxes: RouteObject<any, { page: number }>
    }
    orderHistory: {
      index: RouteObject<any, { page: number }>
      detail: RouteObject<{ orderNo: string }>
    }
    redeemCode: RouteObject
    notificationPreferences: RouteObject
    legalAgreements: RouteObject
    personalData: RouteObject
    accountDeletion: RouteObject
  }

  twitchDrops: {
    index: RouteObject
    claim: RouteObject
  }

  error: {
    index: RouteObject
    err400: RouteObject
    err401: RouteObject
    err404: RouteObject
    err500: RouteObject
    network: RouteObject
    sessionExpired: RouteObject
    alreadyAuthenticated: RouteObject
  }
}

// Utility class.
export class RouteUtils {
  static createWidgetRoutes = (routes: Partial<SimplifiedWidgetRoutes>): AllWidgetRoutesWithPathMaker => {
    const storeIndex = routes.store || '/store'
    const gameIndex = '/game'
    const accountIndex = routes.account || `/account`
    const ordersIndex = routes.orders || `/orders`
    const errorIndex = routes.error || `/error`
    const newsIndex = routes.news || '/news'
    const twitchDrops = routes.twitchDrops || '/twitch-drops'
    const linkAccountIndex = '/link-account'
    const linkAccountOneTimeCodeIndex = '/account/activate'
    const verifyUserIndex = '/verify-user'
    const accountDeletionSuccess = '/account-deletion-success'
    const paymentSuccessCallback = '/callback/order/success'

    // Then, we patch it to the entire routes.
    const patchedBaseRoutes: AllWidgetRoutes = {
      home: '/',
      game: {
        index: gameIndex,
        detail: `${gameIndex}/:gameId`
      },
      news: newsIndex,

      linkAccount: linkAccountIndex,
      linkAccountOneTimeCode: linkAccountOneTimeCodeIndex,
      verifyUser: verifyUserIndex,
      accountDeletionSuccess,
      paymentSuccessCallback,

      store: {
        index: storeIndex,
        apps: {
          index: `${storeIndex}/apps`,
          detail: `${storeIndex}/apps/:itemId`
        },
        dlcs: {
          index: `${storeIndex}/dlcs`,
          detail: `${storeIndex}/dlcs/:itemId`
        },
        bundles: {
          index: `${storeIndex}/bundles`,
          detail: `${storeIndex}/bundles/:itemId`
        },
        ingameitems: {
          index: `${storeIndex}/in-game-items`,
          detail: `${storeIndex}/in-game-items/:itemId`
        },
        codes: {
          index: `${storeIndex}/codes`,
          detail: `${storeIndex}/codes/:itemId`
        },
        optionboxes: {
          index: `${storeIndex}/optionboxes`,
          detail: `${storeIndex}/optionboxes/:itemId`
        }
      },

      orders: {
        detail: `${ordersIndex}/:orderNo`
      },

      account: {
        index: accountIndex,
        overview: `${accountIndex}/overview`,
        profile: `${accountIndex}/profile`,
        accountHistory: {
          index: `${accountIndex}/account-history`,
          displayNameHistory: `${accountIndex}/account-history/display-name`,
          passwordHistory: `${accountIndex}/account-history/password`,
          emailHistory: `${accountIndex}/account-history/email-address`
        },
        paymentMethods: `${accountIndex}/payment-methods`,
        changeEmail: `${accountIndex}/change-email`,
        changePassword: `${accountIndex}/change-password`,
        linkedAccounts: `${accountIndex}/linked-accounts`,
        purchasedItems: {
          index: `${accountIndex}/purchased-items`,
          games: `${accountIndex}/purchased-items/games`,
          keys: `${accountIndex}/purchased-items/keys`,
          optionboxes: `${accountIndex}/purchased-items/optionboxes`
        },
        orderHistory: {
          index: `${accountIndex}/order-history`,
          detail: `${accountIndex}/order-history/:orderNo`
        },
        redeemCode: `${accountIndex}/redeem-code`,
        notificationPreferences: `${accountIndex}/notification-preferences`,
        legalAgreements: `${accountIndex}/legal-agreements`,
        personalData: `${accountIndex}/personal-data`,
        accountDeletion: `${accountIndex}/account-deletion`
      },

      twitchDrops: {
        index: twitchDrops,
        claim: `${twitchDrops}/claim`
      },

      error: {
        index: errorIndex,
        err400: `${errorIndex}/400`,
        err401: `${errorIndex}/401`,
        err404: `${errorIndex}/404`,
        err500: `${errorIndex}/500`,
        network: `${errorIndex}/network-error`,
        sessionExpired: `${errorIndex}/login-session-expired`,
        alreadyAuthenticated: `${errorIndex}/already-authenticated`
      }
    }

    // After that, we create the entire route paths.
    // This should be only done once, so the recursive effect should be minimal.
    return createNestedRoute(patchedBaseRoutes)
  }
}

// Since it's a nested record, then we need to do this recursively.
// Dev's note: feel free to benchmark it in the unit tests when the performance suffers.
function createNestedRoute(allRoutes: Record<string, string | object>) {
  const result = {} as AllWidgetRoutesWithPathMaker
  for (const key in allRoutes) {
    const value = allRoutes[key]
    if (typeof value === 'string') {
      result[key] = createRoute(value)
      continue
    }

    const parsed = z.record(z.any()).safeParse(value)
    if (parsed.success) {
      const child = createNestedRoute(parsed.data)
      result[key] = child
    }
  }

  return result
}

// This is basically the poor man's version of the react-router's path compiler.
function createRoute<T extends object>(link: string): RouteObject<T> {
  return {
    link,
    makePath: ({
      params,
      state,
      query
    }: {
      params?: Record<keyof T, T[keyof T] | number>
      state?: any
      query?: Record<string, string>
    }): WidgetHistory['location'] | string => {
      const search = query ? `?${new URLSearchParams(query).toString()}` : ''
      let result = link

      if (params) {
        for (const key in params) {
          result = result.replace(`:${key}`, `${params[key]}`)
        }
      }

      if (!state) return `${result}${search}`

      return { hash: '', key: '', pathname: result, search, state }
    }
  }
}
