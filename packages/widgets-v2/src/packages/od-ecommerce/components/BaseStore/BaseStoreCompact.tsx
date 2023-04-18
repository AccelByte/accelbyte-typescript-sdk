/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { Loading, LoadingSize } from '@od-components/components/Loading/Loading'
import { AppType, ItemType } from '@od-shared/models/EcommTypes'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { StoreGridItem } from '../StoreGridItem/StoreGridItem'
import './BaseStoreCompact.scss'
import { mockCurrencyMap, mockStoreItem } from '@od-shared/mocks/MockVars'
import { useStoreItems, UseStoreItemsParams } from '~/hooks/platform/useStoreItems'
import { FetchErrorType, FetchStatus } from '~/constants/fetch-statuses'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { CurrencyInfo, ItemInfo } from '@accelbyte/sdk-platform'

const DEFAULT_SHOWN_ITEM = 8

export interface BaseStoreCompactProps {
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
  store: UseStoreItemsParams
}

export function BaseStoreCompact({
  initialShownItem,
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
}: BaseStoreCompactProps) {
  const [isShowAll, setIsShowAll] = useState(false)
  const { state, mutations } = useStoreItems(store)
  const {
    state: { currencyMap: currencyMapState }
  } = useCurrencyMap()

  useEffect(() => {
    const baseAppId = baseItem.baseAppId || baseItem.appId
    if (!baseAppId && itemType !== ItemType.enum.OPTIONBOX) return

    mutations.fetchItemsByCriteria({
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

  const items = !isPreviewMode ? state.items?.data : mockStoreItem.data
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
      items={state.items?.data}
    />
  )

  if (!withWrapper) {
    return <>{content}</>
  }

  return <>{((items && items.length > 0) || state.itemsError) && withWrapper(content)}</>
}

export function BaseStoreCompactContent({
  fetchStatus,
  error,
  loadingMessage,
  noItemMessage,
  currencyMap,
  initialShownItem = DEFAULT_SHOWN_ITEM,
  isShowAll,
  setIsShowAll,
  items
}: {
  fetchStatus: FetchStatus
  error: FetchErrorType | null
  currencyMap: Map<string, CurrencyInfo> | null
  isShowAll: boolean
  setIsShowAll: React.Dispatch<React.SetStateAction<boolean>>
  items: ItemInfo[] | null | undefined
} & Pick<BaseStoreCompactProps, 'loadingMessage' | 'noItemMessage' | 'initialShownItem'>) {
  return (
    <div className="inAppStore">
      <div className="inGameItemData">
        {fetchStatus === FetchStatus.FETCHING ? (
          <Loading className={LoadingSize.medium}>{loadingMessage}</Loading>
        ) : (
          <>
            {error && (
              <div className="errorContainer">
                <CommonError error={error} />
              </div>
            )}
            {items && items.length === 0 && (
              <>
                {noItemMessage}
                {!noItemMessage && <Trans i18nKey="InAppStore.grid.empty">No Items Available</Trans>}
              </>
            )}
            <div className="inGameItemGrid list">
              {items &&
                currencyMap &&
                (isShowAll ? items : items.slice(0, initialShownItem)).map(item => (
                  <StoreGridItem key={item.itemId} item={item} currencyMap={currencyMap} />
                ))}
            </div>
          </>
        )}
      </div>
      {items && items.length > initialShownItem && !isShowAll && (
        <div className="showMoreButton">
          <button className="btn btn-primary" type="button" onClick={() => setIsShowAll(true)}>
            <Trans i18nKey="InAppStore.showAllButton">Show All</Trans>
          </button>
        </div>
      )}
    </div>
  )
}
