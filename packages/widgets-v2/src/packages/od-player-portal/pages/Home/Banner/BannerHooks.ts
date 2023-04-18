/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CurrencyInfo, ItemInfo, ItemPagingSlicedResult, Platform, PlatformClient } from '@accelbyte/sdk-platform'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useCallback } from 'react'
import { WidgetErrorHelper } from '~/utils/WidgetErrorHelper'
import { createStore, useStore } from '~/hooks/useStore'
import { useSdk } from '~/hooks/useSdk'
import { UniversalMedia } from '@od-shared/models/Cms'
import { ItemHelper } from '@od-shared/utils/ItemHelper'
import { ItemImageTag } from '@od-ecommerce/helpers/ItemHelper'
import { HookDataReturns } from '~/models/hook'

interface BannerContentList {
  bannerItem: ItemInfo
  mainBackground: UniversalMedia | string | null
}

interface BannerState {
  bannerItemList: ItemPagingSlicedResult | null
  bannerContentList: BannerContentList[] | null
  currencyMap: Map<string, CurrencyInfo> | null
  bannerError: FetchErrorType | null
  bannerFetchStatus: FetchStatus
}

const DEFAULT_STATE: BannerState = {
  bannerItemList: null,
  bannerContentList: null,
  currencyMap: null,
  bannerError: null,
  bannerFetchStatus: FetchStatus.IDLE
}

export const bannerStore = createStore(DEFAULT_STATE)

export function useBanner() {
  const [sdk] = useSdk()
  const [state, setState] = useStore(bannerStore)

  const resetState = useCallback(() => {
    setState(DEFAULT_STATE)
  }, [])

  const fetchBennerItems = useCallback(
    async (
      country?: string
    ): Promise<
      HookDataReturns<{
        bannerItemList: ItemPagingSlicedResult
        currencyMap: Map<string, CurrencyInfo>
        bannerContentList: BannerContentList[]
      }>
    > => {
      let bannerItemList: ItemPagingSlicedResult | null = null
      let currencyMap: Map<string, CurrencyInfo> | null = null
      let bannerError: FetchErrorType | null = null
      let bannerContentList: BannerContentList[] | null = null

      try {
        setState({ bannerError, bannerFetchStatus: FetchStatus.FETCHING })

        bannerItemList = await Platform.ItemApi(sdk).getItemsByCriteria({
          limit: 5,
          tags: 'banner',
          region: country
        })
        currencyMap = await PlatformClient.getCurrencyMap(sdk)
        bannerContentList = await fetchBannerContentMap(bannerItemList)
        return {
          data: {
            bannerItemList,
            currencyMap,
            bannerContentList
          }
        }
      } catch (error) {
        bannerError = WidgetErrorHelper.getErrorType(error)
        return { error: bannerError }
      } finally {
        setState({
          bannerItemList,
          currencyMap,
          bannerContentList,
          bannerError,
          bannerFetchStatus: FetchStatus.IDLE
        })
      }
    },
    [sdk]
  )

  const fetchBannerContentMap = async (bannerItemList: ItemPagingSlicedResult) => {
    let bannerContentList: Promise<BannerContentList>[] | BannerContentList[] = bannerItemList.data.map(async (bannerItem: ItemInfo) => {
      const mainBackground = ItemHelper.getFilteredImageUrlByTag(bannerItem.images, ItemImageTag.heroBanner) || null
      return {
        bannerItem,
        mainBackground // TODO on-eject will fail with null mainBackground
      }
    })

    bannerContentList = await Promise.all(bannerContentList)
    return bannerContentList
  }

  return {
    state,
    mutations: {
      resetState,
      fetchBennerItems
    }
  }
}
