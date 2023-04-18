/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { createStore, useStore } from '../useStore'
import { useCallback } from 'react'
import { useSdk } from '../useSdk'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { ItemType } from '@od-shared/models/EcommTypes'
import { ItemSortType } from '~/packages/od-ecommerce/models/items'
import { HookDataReturns } from '~/models/hook'
import { ItemInfo, Platform, RegionDataItem, SubscriptionInfo } from '@accelbyte/sdk-platform'

interface State {
  subscriptionItems: ItemInfo[] | null
  subscriptionItemsFetchStatus: FetchStatus
  subscriptionItemsError: FetchErrorType | null

  subscriptions: SubscriptionInfo[] | null
  subscriptionsFetchStatus: FetchStatus
  subscriptionsError: FetchErrorType | null

  entitledSku: Map<string, boolean>
  entitledSkuFetchStatus: FetchStatus
  entitledSkuError: FetchErrorType | null
}

const DEFAULT_STATE: State = {
  subscriptionItems: null,
  subscriptionItemsFetchStatus: FetchStatus.IDLE,
  subscriptionItemsError: null,

  subscriptions: null,
  subscriptionsFetchStatus: FetchStatus.IDLE,
  subscriptionsError: null,

  entitledSku: new Map<string, boolean>(),
  entitledSkuFetchStatus: FetchStatus.IDLE,
  entitledSkuError: null
}
const ITEMS_PER_FETCH = 100

const subscriptionStore = createStore(DEFAULT_STATE)

export function useSubscription() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(subscriptionStore)

  const fetchSkuOwnerships = useCallback(
    async (subscriptionItems: ItemInfo[] | null, userId: string): Promise<HookDataReturns<Map<string, boolean>> | undefined> => {
      const nextEntitledSKU: Map<string, boolean> = new Map()
      let nextError: FetchErrorType | null = null

      try {
        if (!subscriptionItems) return

        setState({ entitledSkuError: null, entitledSkuFetchStatus: FetchStatus.FETCHING })

        for (const item of subscriptionItems) {
          if (!item.sku) continue

          const result = await Platform.EntitlementApi(sdk).getEntitlementsOwnershipAny_ByUserId(userId, { skus: [item.sku] })
          const isOwned = !!result.owned

          nextEntitledSKU.set(item.sku, isOwned)
        }
        return { data: nextEntitledSKU }
      } catch (err) {
        nextError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({
          entitledSku: nextEntitledSKU,
          entitledSkuError: nextError,
          entitledSkuFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const fetchSubscriptionItem = useCallback(
    async ({ country, language }: { country?: string; language?: string }): Promise<HookDataReturns<null>> => {
      let nextSubscriptionItems: ItemInfo[] = []
      let nextSubscriptionItemsError: FetchErrorType | null = null

      try {
        setState({ subscriptionItemsError: null, subscriptionItemsFetchStatus: FetchStatus.FETCHING })

        let hasNext = false
        let offset = 0

        do {
          const result = await Platform.ItemApi(sdk).getItemsByCriteria({
            region: country,
            language,
            offset,
            itemType: ItemType.enum.SUBSCRIPTION,
            limit: ITEMS_PER_FETCH,
            sortBy: `${ItemSortType.DISPLAY_ORDER_ASC},${ItemSortType.NAME_ASC}`
          })

          hasNext = !!result.paging?.next
          offset += ITEMS_PER_FETCH
          nextSubscriptionItems = nextSubscriptionItems.concat(result.data)
        } while (hasNext)

        return { data: null }
      } catch (err) {
        nextSubscriptionItemsError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({
          subscriptionItems: nextSubscriptionItems,
          subscriptionItemsError: nextSubscriptionItemsError,
          subscriptionItemsFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const fetchUserSubscriptions = useCallback(
    async (userId: string): Promise<HookDataReturns<null>> => {
      let nextSubscriptions: SubscriptionInfo[] = []
      let nextSubscriptionsError: FetchErrorType | null = null

      try {
        setState({ subscriptionsError: null, subscriptionsFetchStatus: FetchStatus.FETCHING })

        let hasNext = false
        let offset = 0

        do {
          const result = await Platform.SubscriptionApi(sdk).getSubscriptions_ByUserId(userId, {
            offset,
            limit: ITEMS_PER_FETCH
          })
          hasNext = !!result.paging?.next
          offset += ITEMS_PER_FETCH
          nextSubscriptions = nextSubscriptions.concat(result.data)
        } while (hasNext)

        return { data: null }
      } catch (err) {
        nextSubscriptionsError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({
          subscriptions: nextSubscriptions,
          subscriptionsError: nextSubscriptionsError,
          subscriptionsFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const createSubscription = useCallback(
    async (userId: string, item: ItemInfo, regionData: RegionDataItem): Promise<HookDataReturns<null>> => {
      let nextSubscriptionsError: FetchErrorType | null = null

      try {
        setState({ subscriptionsError: null, subscriptionsFetchStatus: FetchStatus.CREATING })
        await Platform.SubscriptionApi(sdk).createSubscription_ByUserId(userId, {
          itemId: item.itemId,
          region: item.region,
          currencyCode: regionData.currencyCode
        })
        return { data: null }
      } catch (err) {
        nextSubscriptionsError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({ subscriptionsError: nextSubscriptionsError, subscriptionsFetchStatus: FetchStatus.IDLE })
      }
    },
    [sdk]
  )

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  return {
    state,
    mutations: {
      fetchSkuOwnerships,
      fetchSubscriptionItem,
      fetchUserSubscriptions,
      createSubscription,
      resetState
    }
  }
}
