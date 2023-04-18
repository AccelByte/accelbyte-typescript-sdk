/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { rest } from 'msw'

import { mockCurrencyMap, mockSingleGameInfo, mockSingleOrder, mockStoreItem } from '@od-shared/mocks/MockVars'
import { MockStoreVars } from '@od-shared/mocks/MockVars.store'
import { MockPaymentVars } from '@od-shared/mocks/MockVars.payment'
import { Env } from '@od-shared/Env'
import { ItemType } from '@od-shared/models/EcommTypes'
import { OrderInfo } from '@accelbyte/sdk-platform'

export const STORE_ITEM_HANDLERS = [
  rest.get(`/api/platform/public/namespaces/accelbyte/users/:userId/entitlements/ownership/any`, (_req, res, ctx) => {
    return res(ctx.json({ owned: false }))
  }),
  rest.get(`/api/platform/public/namespaces/${Env.NAMESPACE}/items/byAppId`, (_req, res, ctx) => {
    return res(ctx.json(mockSingleGameInfo))
  }),
  rest.get(`/api/platform/public/namespaces/${Env.NAMESPACE}/items/byCriteria`, (req, res, ctx) => {
    const searchParams = new URL(req.url).searchParams
    const itemType = searchParams.get('itemType') as ItemType

    if (searchParams.get('baseAppId')) {
      switch (itemType) {
        case ItemType.enum.APP: {
          return res(ctx.json(mockStoreItem))
        }
        case ItemType.enum.BUNDLE: {
          return res(ctx.json(MockStoreVars.SingleGameBundleResponse))
        }
        case ItemType.enum.INGAMEITEM: {
          return res(ctx.json(MockStoreVars.SingleGameIngameItemResponse))
        }
        case ItemType.enum.OPTIONBOX: {
          return res(ctx.json(MockStoreVars.SingleGameOptionboxResponse))
        }
        default: {
          return res(
            ctx.json({
              data: [
                ...mockStoreItem.data,
                ...MockStoreVars.SingleGameBundleResponse.data,
                ...MockStoreVars.SingleGameIngameItemResponse.data,
                ...MockStoreVars.SingleGameOptionboxResponse.data,
                // Duplicate this so we can have "Show all" button.
                ...mockStoreItem.data,
                ...MockStoreVars.SingleGameBundleResponse.data,
                ...MockStoreVars.SingleGameIngameItemResponse.data,
                ...MockStoreVars.SingleGameOptionboxResponse.data
              ],
              paging: {}
            })
          )
        }
      }
    }

    switch (itemType) {
      case ItemType.enum.APP: {
        return res(ctx.json(MockStoreVars.MultipleGameAppResponse))
      }
      case ItemType.enum.BUNDLE: {
        return res(ctx.json(MockStoreVars.MultipleGameBundleResponse))
      }
      case ItemType.enum.CODE: {
        return res(ctx.json(MockStoreVars.MultipleGameCodeResponse))
      }
      case ItemType.enum.OPTIONBOX: {
        return res(ctx.json(MockStoreVars.MultipleGameOptionboxResponse))
      }
    }

    return res(ctx.json({}))
  }),
  rest.get(`/api/platform/public/namespaces/${Env.NAMESPACE}/items/:itemId/locale`, (req, res, ctx) => {
    if (req.params.itemId === MockStoreVars.TEST_ITEM_ID_DLC) {
      return res(ctx.json(MockStoreVars.StoreDetailDlcLocaleResponse))
    }

    if (req.params.itemId === MockStoreVars.TEST_ITEM_ID_INGAMEITEM) {
      return res(ctx.json(MockStoreVars.StoreDetailIngameItemLocaleResponse))
    }

    if (req.params.itemId === MockStoreVars.TEST_ITEM_ID_OPTIONBOX) {
      return res(ctx.json(MockStoreVars.StoreDetailOptionboxLocaleResponse))
    }

    if (req.params.itemId === MockStoreVars.TEST_ITEM_ID_CODE) {
      return res(ctx.json(MockStoreVars.StoreDetailCodeLocaleResponse))
    }

    return res(ctx.json(mockSingleGameInfo))
  }),
  rest.get(`/api/platform/public/namespaces/${Env.NAMESPACE}/currencies`, (_req, res, ctx) => {
    const record = Object.fromEntries(mockCurrencyMap())
    const array = Object.keys(record).map(k => record[k])

    return res(ctx.json(array))
  }),
  rest.get(`/api/platform/public/namespaces/${Env.NAMESPACE}/items/:itemId/app/locale`, (req, res, ctx) => {
    return res(ctx.json({ itemId: req.params.itemId, namespace: Env.NAMESPACE, language: 'en-US' }))
  }),
  rest.get(`/api/platform/public/namespaces/${Env.NAMESPACE}/items/:itemId/dynamic`, (req, res, ctx) => {
    return res(
      ctx.json({
        itemId: req.params.itemId,
        namespace: Env.NAMESPACE,
        availableCount: -1,
        userAvailableCount: -1,
        userPurchaseLimit: -1
      })
    )
  })
]

const allOrders = Array.from(new Array(20), (_, idx) => {
  let orderInfo: OrderInfo = mockSingleOrder
  if (idx > 7) {
    orderInfo = { ...orderInfo, status: 'FULFILLED' }
  } else if (idx > 4) {
    orderInfo = { ...orderInfo, status: 'INIT' }
  } else {
    orderInfo = { ...orderInfo, status: 'CLOSED' }
  }
  return orderInfo
})

export const ORDER_HISTORY_HANDLERS = [
  rest.get(`/api/platform/public/namespaces/accelbyte/users/:userId/orders/:orderNo`, (req, res, ctx) => {
    if (req.params.orderNo === MockPaymentVars.ActiveOrder.orderNo) {
      return res(ctx.json(MockPaymentVars.ActiveOrder))
    }

    return res(ctx.json(MockPaymentVars.ExpiredOrder))
  }),
  rest.get('/api/platform/public/namespaces/accelbyte/users/:userId/orders', (req, res, ctx) => {
    const searchParams = new URL(req.url).searchParams
    const status = searchParams.get('status')

    if (!status) {
      return res(
        ctx.json({
          data: allOrders,
          paging: {}
        })
      )
    }

    return res(
      ctx.json({
        data: allOrders.filter(order => order.status === 'INIT'),
        paging: {}
      })
    )
  }),
  rest.get('/api/platform/public/namespaces/accelbyte/payment/methods', (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.PaymentMethods))
  }),
  rest.post('/api/platform/public/namespaces/accelbyte/payment/link', (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.PaymentUrl))
  }),
  rest.get(`/api/platform/public/namespaces/accelbyte/payment/publicconfig`, (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.PaymentPublicConfig))
  }),
  rest.post(`https://checkoutshopper-test.adyen.com/checkoutshopper/v1/sessions/:session/setup`, (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.AdyenSetup))
  }),
  rest.post(`https://checkoutshopper-test.adyen.com/checkoutshopper/v2/analytics/id`, (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.AdyenId))
  }),
  rest.post(`https://checkoutshopper-test.adyen.com/checkoutshopper/v2/analytics/log`, (_req, res, ctx) => {
    return res(ctx.text(MockPaymentVars.AdyenLog))
  })
]

export const ORDER_PAYMENT_HANDLERS = [
  rest.get(`/api/platform/public/namespaces/accelbyte/users/:userId/orders/:orderNo`, (req, res, ctx) => {
    if (req.params.orderNo === MockPaymentVars.ActiveOrder.orderNo) {
      return res(ctx.json(MockPaymentVars.ActiveOrder))
    }

    return res(ctx.json(MockPaymentVars.ExpiredOrder))
  }),
  rest.get('/api/platform/public/namespaces/accelbyte/payment/methods', (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.PaymentMethods))
  }),
  rest.post('/api/platform/public/namespaces/accelbyte/payment/link', (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.PaymentUrl))
  }),
  rest.get(`/api/platform/public/namespaces/accelbyte/payment/publicconfig`, (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.PaymentPublicConfig))
  }),
  rest.post(`https://checkoutshopper-test.adyen.com/checkoutshopper/v1/sessions/:session/setup`, (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.AdyenSetup))
  }),
  rest.post(`https://checkoutshopper-test.adyen.com/checkoutshopper/v2/analytics/id`, (_req, res, ctx) => {
    return res(ctx.json(MockPaymentVars.AdyenId))
  }),
  rest.post(`https://checkoutshopper-test.adyen.com/checkoutshopper/v2/analytics/log`, (_req, res, ctx) => {
    return res(ctx.text(MockPaymentVars.AdyenLog))
  })
]
