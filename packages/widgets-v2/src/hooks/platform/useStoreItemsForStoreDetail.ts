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
import { ItemInfo, Platform } from '@accelbyte/sdk-platform'

export interface ListStoreItemsState {
  items: ItemInfo[] | null
  itemsFetchStatus: FetchStatus
  itemsError: FetchErrorType | null
}

const EXHAUSTIVE_ITEMS_PER_FETCH = 100
const DEFAULT_STATE: ListStoreItemsState = {
  items: null,
  itemsFetchStatus: FetchStatus.IDLE,
  itemsError: null
}

export const createStoreForStoreDetail = () => createStore(DEFAULT_STATE)
export type UseStoreItemsForStoreDetail = ReturnType<typeof createStoreForStoreDetail>

export function useStoreItemsForStoreDetail(itemsStore: StoreContent<ListStoreItemsState>) {
  const [sdk] = useSdk()
  const [state, setState] = useStore(itemsStore)

  const fetchItemsByCriteriaExhaustive = useCallback(
    async ({
      baseItemId,
      queryParams
    }: {
      baseItemId: string
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

        const { baseAppId, itemType, appType, country, language } = queryParams
        const temp: ItemInfo[] = []
        let hasNext = false
        let offset = 0

        do {
          const result = await Platform.ItemApi(sdk).getItemsByCriteria({
            baseAppId,
            itemType,
            appType,
            region: country,
            language,
            offset,
            limit: EXHAUSTIVE_ITEMS_PER_FETCH
          })

          temp.push(...result.data.filter(item => item.itemId !== baseItemId))
          hasNext = !!result.paging?.next
          offset += EXHAUSTIVE_ITEMS_PER_FETCH
        } while (hasNext)

        nextItems = temp
        return { data: nextItems }
      } catch (error) {
        nextItemsError = WidgetErrorHelper.getErrorType(error)
        return { error: error as Error }
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
      fetchItemsByCriteriaExhaustive,
      resetState
    }
  }
}
