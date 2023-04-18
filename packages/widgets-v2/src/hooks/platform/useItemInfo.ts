/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { createStore, useStore } from '../useStore'
import { useSdk } from '../useSdk'
import { useCallback } from 'react'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { HookDataReturns } from '~/models/hook'
import { ItemInfo, Platform } from '@accelbyte/sdk-platform'

interface State {
  itemLocale: ItemInfo | null
  itemLocaleFetchStatus: FetchStatus
  itemLocaleError: FetchErrorType | null
}

const DEFAULT_STATE: State = {
  itemLocale: null,
  itemLocaleFetchStatus: FetchStatus.IDLE,
  itemLocaleError: null
}

export const createStoreForItemInfoStore = () => createStore(DEFAULT_STATE)
export type UseItemInfoStoreParam = ReturnType<typeof createStoreForItemInfoStore>

export function useItemInfo(store: UseItemInfoStoreParam) {
  const [sdk] = useSdk()
  const [state, setState] = useStore(store)

  const fetchItemLocale = useCallback(
    async ({
      itemId,
      language,
      country
    }: {
      itemId: string | undefined
      country?: string
      language?: string
    }): Promise<HookDataReturns<null> | undefined> => {
      if (!itemId) return

      let nextAppItem: State['itemLocale'] = null
      let nextError: State['itemLocaleError'] = null

      try {
        setState({
          itemLocaleFetchStatus: FetchStatus.FETCHING,
          itemLocaleError: null
        })

        nextAppItem = await Platform.ItemApi(sdk).getLocale_ByItemId(itemId, {
          region: country,
          language
        })
        return { data: null }
      } catch (err) {
        nextError = WidgetErrorHelper.getErrorType(err)
        return { error: err as Error }
      } finally {
        setState({
          itemLocale: nextAppItem,
          itemLocaleFetchStatus: FetchStatus.IDLE,
          itemLocaleError: nextError
        })
      }
    },
    [sdk]
  )

  return {
    state,
    mutations: {
      fetchItemLocale
    }
  }
}
