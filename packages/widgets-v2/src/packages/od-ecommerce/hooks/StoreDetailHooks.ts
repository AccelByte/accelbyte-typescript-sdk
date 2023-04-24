/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { ItemInfo, Platform } from '@accelbyte/sdk-platform'
import { useCallback, useState } from 'react'
import { FetchStatus, FetchErrorType } from '~/constants/fetch-statuses'
import { useSdk } from '~/hooks/useSdk'
import { HookDataReturns } from '~/models/hook'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'

export const StoreDetailHooks = {
  useStoreDetailCommonStates,
  useBundleInformation
}

// Common state.
interface CommonState {
  isLightboxOpen: boolean
  selectedImagePosition: number
}

// TODO: perhaps we can add more stuff, e.g. the payment things.
function useStoreDetailCommonStates() {
  const [state, setState] = useState<CommonState>({
    isLightboxOpen: false,
    selectedImagePosition: 0
  })

  const openLightbox = (selectedImagePosition: number) => {
    setState(oldState => ({ ...oldState, isLightboxOpen: true, selectedImagePosition }))
  }

  const closeLightbox = () => {
    setState(oldState => ({ ...oldState, isLightboxOpen: false }))
  }

  return { state, openLightbox, closeLightbox }
}

// For bundle, code, and optionbox.
interface StoreDetailBundlesState {
  items: ItemInfo[] | null
  baseApp: ItemInfo | null

  bundleInfoFetchStatus: FetchStatus
  bundleInfoError: FetchErrorType | null
}

const DEFAULT_STATE: StoreDetailBundlesState = {
  items: null,
  baseApp: null,

  bundleInfoFetchStatus: FetchStatus.IDLE,
  bundleInfoError: null
}

function useBundleInformation() {
  const [sdk] = useSdk()
  const [state, setState] = useState(DEFAULT_STATE)

  const fetchBundleContents = useCallback(
    async ({
      baseAppId,
      itemIds,
      country,
      language
    }: {
      language?: string
      country?: string
      baseAppId?: string | null
      itemIds: string[]
    }): Promise<HookDataReturns<Pick<StoreDetailBundlesState, 'baseApp' | 'items'> | null>> => {
      let nextItemsInBundle: StoreDetailBundlesState['items'] = null
      let nextBaseApp: StoreDetailBundlesState['baseApp'] = null
      let nextError: StoreDetailBundlesState['bundleInfoError'] = null

      try {
        setState(oldState => ({ ...oldState, bundleInfoFetchStatus: FetchStatus.FETCHING, bundleInfoError: null }))

        const bundleItemsResult = await Platform.ItemApi(sdk).getItemsLocaleByIds({
          language,
          region: country,
          itemIds: itemIds.toString()
        })

        nextItemsInBundle = bundleItemsResult
        if (baseAppId) {
          nextBaseApp = bundleItemsResult.find((item: ItemInfo) => baseAppId === item.appId) || null

          if (!nextBaseApp) {
            nextBaseApp = await Platform.ItemApi(sdk).getItemsByAppId({
              appId: baseAppId,
              region: country,
              language
            })
          }
        }

        return { error: null, data: { baseApp: nextBaseApp, items: nextItemsInBundle } }
      } catch (err) {
        nextError = WidgetErrorHelper.getErrorType(err)

        return { error: nextError, data: null }
      } finally {
        setState({
          baseApp: nextBaseApp,
          items: nextItemsInBundle,
          bundleInfoError: nextError,
          bundleInfoFetchStatus: FetchStatus.IDLE
        })
      }
    },
    []
  )

  return {
    state,
    mutations: {
      fetchBundleContents
    }
  }
}
