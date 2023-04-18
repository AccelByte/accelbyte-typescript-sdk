/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AppType, ItemType } from '@od-shared/models/EcommTypes'
import React, { useEffect, useState } from 'react'
import './BaseStoreInsideStoreDetail.scss'
import { mockCurrencyMap, mockStoreItem } from '@od-shared/mocks/MockVars'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { UseStoreItemsForStoreDetail, useStoreItemsForStoreDetail } from '~/hooks/platform/useStoreItemsForStoreDetail'
import { BaseStoreCompactContent } from './BaseStoreCompact'
import { ItemInfo } from '@accelbyte/sdk-platform'

export interface BaseStoreInsideStoreDetailProps {
  baseItem: ItemInfo
  language?: string
  withWrapper?: (content: React.ReactNode) => React.ReactNode
  noItemMessage?: React.ReactNode | string
  loadingMessage?: React.ReactNode | string
  itemType?: ItemType
  appType?: AppType
  pageSize?: number
  country?: string
  initialShownItem?: number
  isPreviewMode?: boolean
  store: UseStoreItemsForStoreDetail
}

export function BaseStoreInsideStoreDetail({
  initialShownItem = 8,
  baseItem,
  appType,
  country,
  isPreviewMode,
  itemType,
  language,
  pageSize,
  loadingMessage,
  noItemMessage,
  withWrapper,
  store
}: BaseStoreInsideStoreDetailProps) {
  const [isShowAll, setIsShowAll] = useState(false)
  const { state, mutations } = useStoreItemsForStoreDetail(store)
  const {
    state: { currencyMap: currencyMapState }
  } = useCurrencyMap()

  useEffect(() => {
    const baseAppId = baseItem.baseAppId || baseItem.appId

    mutations.fetchItemsByCriteriaExhaustive({
      baseItemId: baseItem.itemId,
      queryParams: {
        appType,
        itemType,
        baseAppId,
        country,
        language,
        pageSize
      }
    })
  }, [itemType, baseItem, country, language, pageSize])

  const items = !isPreviewMode ? state.items : mockStoreItem.data
  const currencyMap = !isPreviewMode ? currencyMapState : mockCurrencyMap()

  const content = (
    <BaseStoreCompactContent
      currencyMap={currencyMap}
      fetchStatus={state.itemsFetchStatus}
      error={state.itemsError}
      loadingMessage={loadingMessage}
      noItemMessage={noItemMessage}
      initialShownItem={initialShownItem}
      isShowAll={isShowAll}
      setIsShowAll={setIsShowAll}
      items={state.items}
    />
  )

  if (!withWrapper) {
    return <>{content}</>
  }

  return <>{((items && items.length > 0) || state.itemsError) && withWrapper(content)}</>
}
