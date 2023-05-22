/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AccelbyteSDK } from '@accelbyte/sdk'
import { IamUserAuthorizationClient } from '@accelbyte/sdk-iam'
import { Platform } from '@accelbyte/sdk-platform'
import { AppType, ItemType } from './constant'
import { getLimit, getOffset } from '../helper/pageHelper'
import { getLocalStorage } from '../helper/localStorage'
import { LOCAL_STORAGE_KEY } from '../pages/constants'

export async function loginWithPassword(sdk: AccelbyteSDK, username: string, password: string) {
  try {
    const response = await new IamUserAuthorizationClient(sdk).loginWithPasswordAuthorization({ username, password })
    if (response.error) throw response.error
    return response
  } catch (error) {
    console.error(error)
  }
  return null
}

interface FetchStoreItemsQueryParams {
  appType?: AppType
  region?: string
  offset?: number
  baseAppId?: string | null
  itemType?: ItemType
  page?: number
  pageSize?: number
  country?: string
  language?: string
  plan?: string
}
export async function fetchStoreItems(sdk: AccelbyteSDK, queryParams: FetchStoreItemsQueryParams) {
  try {
    const { page, pageSize, country, plan, itemType, ...rest } = queryParams
    const response = await Platform.ItemApi(sdk).getItemsByCriteria({
      offset: getOffset(page),
      limit: getLimit(pageSize),
      region: country,
      features: plan || undefined,
      itemType,
      ...rest
    })
    return response
  } catch (error) {
    console.error(error)
  }
}

export async function fetchItemDetail(sdk: AccelbyteSDK, itemId: string) {
  try {
    const response = await Platform.ItemApi(sdk).getDynamic_ByItemId(itemId)
    return response
  } catch (error) {
    console.error(error)
  }
}

export interface OrderPayloadProps {
  quantity: number
  price: number
  discountedPrice: number
  currencyCode: string
  itemId: string
  returnUrl: string
}
export async function orderItem(sdk: AccelbyteSDK, userId: string, orderPayload: OrderPayloadProps) {
  try {
    const accessToken = getLocalStorage(LOCAL_STORAGE_KEY.enum.access_token)
    const response = await Platform.OrderApi(sdk, {
      config: {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    }).createOrder_ByUserId(userId, orderPayload)
    return response
  } catch (error) {
    console.error(error)
  }
}

interface CheckUserOrderQueryParamsProps {
  itemId?: string | null | undefined
  status?:
    | 'FULFILLED'
    | 'INIT'
    | 'CHARGED'
    | 'CHARGEBACK'
    | 'CHARGEBACK_REVERSED'
    | 'FULFILL_FAILED'
    | 'REFUNDING'
    | 'REFUNDED'
    | 'REFUND_FAILED'
    | 'DELETED'
    | 'CLOSED'
    | undefined
  offset?: number | undefined
  limit?: number | undefined
  page?: number
  pageSize?: number
}

export async function fetchOrderByUserId(sdk: AccelbyteSDK, userId: string, queryParams: CheckUserOrderQueryParamsProps) {
  try {
    const accessToken = getLocalStorage(LOCAL_STORAGE_KEY.enum.access_token)
    const { itemId, page, pageSize, status = 'INIT', ...rest } = queryParams
    const response = await Platform.OrderApi(sdk, {
      config: {
        headers: {
          authorization: `Bearer ${accessToken}`
        }
      }
    }).getOrders_ByUserId(userId, {
      itemId,
      status,
      offset: getOffset(page),
      limit: getLimit(pageSize),
      ...rest
    })
    return response
  } catch (error) {
    console.error(error)
  }
}

export async function fetchItemLocale(sdk: AccelbyteSDK, itemId: string) {
  try {
    const response = await Platform.ItemApi(sdk).getLocale_ByItemId(itemId)
    return response
  } catch (error) {
    console.error(error)
  }
}
