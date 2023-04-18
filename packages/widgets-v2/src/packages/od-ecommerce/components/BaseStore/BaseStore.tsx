/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { LoadingPage } from '@od-components/components/LoadingPage'
import { Pagination } from '@od-components/components/Pagination/Pagination'
import { CardSkeleton } from '@od-ecommerce/components/CardSkeleton/CardSkeleton'
import { ItemType } from '@od-shared/models/EcommTypes'
import React, { useEffect } from 'react'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { useStoreItems, UseStoreItemsParams } from '~/hooks/platform/useStoreItems'
import { useHistory, WidgetHistory } from '~/hooks/routes/useHistory'
import { StoreGridItem } from '../StoreGridItem/StoreGridItem'
import './BaseStore.scss'
import { CurrencyInfo, ItemPagingSlicedResult } from '@accelbyte/sdk-platform'

export interface BaseStoreProps {
  page: number
  itemType: ItemType
  pageSize?: number
  country?: string
  language?: string
  plan?: string
  baseAppId?: string
  children?: React.ReactNode
  store: UseStoreItemsParams
}
export type ExposedBaseStoreProps = Pick<BaseStoreProps, 'page' | 'pageSize' | 'country'>

// This is used in all other stores, since they are basically just the same.
export function BaseStore({ baseAppId, page, itemType, country, language, pageSize, plan, children, store }: BaseStoreProps) {
  const { state: listStoreItemsState, mutations: listStoreItemsMutations } = useStoreItems(store)
  const { state: currencyMapState, mutations: currencyMapMutations } = useCurrencyMap()

  useEffect(() => {
    listStoreItemsMutations.fetchItemsByCriteria({
      queryParams: {
        baseAppId,
        page,
        pageSize,
        country,
        language,
        plan,
        itemType
      }
    })
  }, [baseAppId, page, pageSize, country, language, plan, itemType])

  useEffect(() => {
    currencyMapMutations.fetchCurrencyMap()
  }, [])

  const isFetching =
    listStoreItemsState.itemsFetchStatus === FetchStatus.FETCHING || currencyMapState.currencyMapFetchStatus === FetchStatus.FETCHING
  const error = listStoreItemsState.itemsError || currencyMapState.currencyMapError

  return (
    <div className="storeContainer">
      {children}

      {isFetching && <LoadingPage />}
      {!isFetching && error && (
        <div>
          <CommonError error={error} />
        </div>
      )}
      {!isFetching && !error && (
        <>
          <GameItems itemsList={listStoreItemsState.items} currencyMap={currencyMapState.currencyMap} />
          <GamePagination itemsList={listStoreItemsState.items} currentPage={page} />
        </>
      )}
    </div>
  )
}

// Composing components.
function GameItems({
  itemsList,
  currencyMap
}: {
  itemsList: ItemPagingSlicedResult | null
  currencyMap: Map<string, CurrencyInfo> | null
}) {
  return (
    <div className="itemsList">
      {!currencyMap && <CardSkeleton numberOfCards={itemsList?.data.length} />}
      {!!itemsList &&
        currencyMap &&
        itemsList.data.map(gameItem => <StoreGridItem key={gameItem.itemId} item={gameItem} currencyMap={currencyMap} />)}
    </div>
  )
}

function GamePagination({ itemsList, currentPage }: { itemsList: ItemPagingSlicedResult | null; currentPage: number }) {
  const {
    state: { location }
  } = useHistory()

  if (!itemsList) return null

  const { paging } = itemsList
  const hasNext = !!paging?.next
  const hasPrev = !!paging?.previous

  return (
    <div className="pagination">
      <Pagination
        next={hasNext && paginationUrlCreator(location, currentPage + 1)}
        prev={hasPrev && paginationUrlCreator(location, currentPage - 1)}
      />
    </div>
  )
}

// Helper functions.
function paginationUrlCreator(location: WidgetHistory['location'], page: number) {
  const searchParams = new URLSearchParams(location?.search || '')
  searchParams.set('page', `${page}`)

  return `${location?.pathname || ''}?${searchParams.toString()}`
}
