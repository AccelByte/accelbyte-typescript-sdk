/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AppType, ItemType } from '@od-shared/models/EcommTypes'
import { useCallback } from 'react'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useSdk } from '~/hooks/useSdk'
import { createStore, StoreContent, useStore } from '~/hooks/useStore'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { ItemPagingSlicedResult, Platform } from '@accelbyte/sdk-platform'

export interface ListStoreItemsState {
  items: ItemPagingSlicedResult | null
  itemsFetchStatus: FetchStatus
  itemsError: FetchErrorType | null
}

const DEFAULT_STATE: ListStoreItemsState = {
  items: null,
  itemsFetchStatus: FetchStatus.IDLE,
  itemsError: null
}

export const createStoreForItemsStore = () => createStore(DEFAULT_STATE)
export type UseStoreItemsParams = ReturnType<typeof createStoreForItemsStore>

export function useStoreItems(itemsStore: StoreContent<ListStoreItemsState>) {
  const [sdk] = useSdk()
  const [state, setState] = useStore(itemsStore)

  const fetchItemsByCriteria = useCallback(
    async ({
      queryParams
    }: {
      queryParams: {
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
    }): Promise<HookDataReturns<ListStoreItemsState['items'] | null>> => {
      let nextItems: ListStoreItemsState['items'] = null
      let nextItemsError: ListStoreItemsState['itemsError'] = null

      try {
        setState({
          itemsFetchStatus: FetchStatus.FETCHING,
          itemsError: null
        })

        const { page, pageSize, country, plan, itemType, ...rest } = queryParams
        nextItems = await Platform.ItemApi(sdk).getItemsByCriteria({
          offset: getOffset(page),
          limit: getLimit(pageSize),
          region: country,
          features: plan || undefined,
          itemType: itemType || undefined,
          ...rest
        })

        return { data: nextItems }
      } catch (error) {
        nextItemsError = WidgetErrorHelper.getErrorType(error)
        return { error: nextItemsError }
      } finally {
        setState({ items: nextItems, itemsError: nextItemsError, itemsFetchStatus: FetchStatus.IDLE })
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
      fetchItemsByCriteria,
      resetState
    }
  }
}

// Helper functions.
function getOffset(page: number | undefined): number {
  return page ? (page - 1) * getLimit() : 0
}

function getLimit(pageSize?: number) {
  return pageSize || 16
}
