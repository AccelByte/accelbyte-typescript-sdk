/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Breadcrumbs } from '@od-components/components/Breadcrumbs/Breadcrumbs'
import { Lightbox } from '@od-components/components/Lightbox/Lightbox'
import { ItemHelper } from '@od-ecommerce/helpers/ItemHelper'
import { gaSendErrorEvent } from '@od-shared/app-events/telemetry/google-analytics/gaErrorTracking'
import { EcommerceErrorCode, ItemType } from '@od-shared/models/EcommTypes'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { createStoreForItemInfoStore, useItemInfo } from '~/hooks/platform/useItemInfo'
import { AppDetailGallery } from '@od-ecommerce/components/AppStoreDetail/AppDetailGallery'
import { CatalogItemBanner } from '@od-ecommerce/components/BaseStoreDetail/CatalogItemBanner'
import { CatalogOverview } from '@od-ecommerce/components/BaseStoreDetail/CatalogOverview'
import { CatalogTitleWidget } from '@od-ecommerce/components/BaseStoreDetail/CatalogTitleWidget'
import { CatalogOptionboxItemList } from '@od-ecommerce/components/OptionboxStoreDetail/CatalogOptionboxItemList'
import { StoreDetailHooks } from '@od-ecommerce/hooks/StoreDetailHooks'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { FetchStatus } from '~/constants/fetch-statuses'
import { FetchUtils } from '~/utils/FetchUtils'
import { PurchaseAlert } from '@od-ecommerce/components/PurchaseAlert/PurchaseAlert'
import { BaseStoreDetailError } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailError'
import { BaseStoreDetailLoadingScreen } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailLoadingScreen'
import { DiscountCountdown } from '@od-ecommerce/components/DiscountCountdown/DiscountCountdown'
import { BaseStoreDetailCatalog } from '@od-ecommerce/components/BaseStoreDetailCatalog/BaseStoreDetailCatalog'
import { getCurrentLanguage } from '@od-components/i18n'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { BaseStoreInsideStoreDetail } from '@od-ecommerce/components/BaseStore/BaseStoreInsideStoreDetail'
import { createStoreForStoreDetail } from '~/hooks/platform/useStoreItemsForStoreDetail'

interface Props {
  itemId: string
}

const inGameItemsStore = createStoreForStoreDetail()
const itemStore = createStoreForItemInfoStore()

export function OptionboxStoreDetail({ itemId }: Props) {
  const { state, closeLightbox, openLightbox } = StoreDetailHooks.useStoreDetailCommonStates()

  const {
    state: { isSingleGame }
  } = useDiscoveryConfigs()
  const {
    state: { user }
  } = useUserInfo()
  const { state: routes } = useRoutes()
  const country = user?.country
  const language = getCurrentLanguage()

  // Hooks for undle item information, base app, and items inside bundles.
  const {
    state: { itemLocale: optionboxLocale, itemLocaleError: optionboxLocaleError, itemLocaleFetchStatus: optionboxLocaleFetchStatus },
    mutations: { fetchItemLocale }
  } = useItemInfo(itemStore)
  const {
    state: optionboxInfoState,
    mutations: { fetchBundleContents }
  } = StoreDetailHooks.useBundleInformation()

  // Purchase information.
  const {
    state: { prepurchaseInformation },
    mutations: { prepareOrderProcess, resetState: resetOrderProcess }
  } = useOrderProcess()
  const {
    state: { pendingOrders }
  } = usePendingOrders()
  const {
    state: { currencyMap },
    mutations: { fetchCurrencyMap }
  } = useCurrencyMap()

  // Fetch required data.
  useEffect(() => {
    if (currencyMap) return

    fetchCurrencyMap()
  }, [currencyMap])

  useEffect(() => {
    fetchItemLocale({ itemId, language, country })
  }, [itemId, language, country])

  useEffect(() => {
    if (!currencyMap || !optionboxLocale) return

    prepareOrderProcess({ item: optionboxLocale, userId: user?.userId, currencyMap })
  }, [optionboxLocale, user?.userId, currencyMap])

  useEffect(() => {
    if (!optionboxLocale) return

    const boxItemIds = optionboxLocale.optionBoxConfig?.boxItems?.filter(({ itemId }) => !!itemId).map(({ itemId }) => itemId as string)
    fetchBundleContents({ itemIds: boxItemIds || [], country, language })
  }, [optionboxLocale, country, language])

  useEffect(() => {
    return () => {
      resetOrderProcess()
    }
  }, [])

  const { bundleInfoError, bundleInfoFetchStatus, items: itemsInOptionbox } = optionboxInfoState

  const error = optionboxLocaleError || bundleInfoError
  const isFetching = FetchUtils.isMatchStatus([bundleInfoFetchStatus, optionboxLocaleFetchStatus], FetchStatus.FETCHING)

  if (error && ErrorHelper.extractServiceErrorCode(error) === EcommerceErrorCode.ITEM_NOT_FOUND) {
    gaSendErrorEvent({ eventCategory: routes.error.err404.link, eventLabel: ErrorHelper.errorToString(error) })
  }

  const { isLightboxOpen, selectedImagePosition } = state
  const itemMedias = ItemHelper.getMedia(optionboxLocale, null)

  return (
    <main className="itemDetailPage">
      <PurchaseAlert
        {...{
          user,
          prepurchaseInformation,
          pendingOrders,
          isFetching
        }}
      />

      {isFetching && <BaseStoreDetailLoadingScreen />}
      {error && <BaseStoreDetailError error={error} />}

      {optionboxLocale && (
        <React.Fragment>
          <CatalogItemBanner item={optionboxLocale} itemPublishingContent={null}>
            {!isSingleGame && (
              <Breadcrumbs>
                <Link to={routes.store.apps.index.link}>
                  <Trans i18nKey="Navigation.links.games">Games</Trans>
                </Link>
                {optionboxLocale.title}
              </Breadcrumbs>
            )}
          </CatalogItemBanner>
          {itemMedias && <AppDetailGallery itemMedias={itemMedias} openLightbox={openLightbox} />}
          {isLightboxOpen && itemMedias && (
            <Lightbox itemMedias={itemMedias} isOpen={isLightboxOpen} onClose={closeLightbox} selectedPosition={selectedImagePosition} />
          )}

          <div className="itemDetailContent">
            <div className="description">
              <CatalogOptionboxItemList items={itemsInOptionbox} optionboxItem={optionboxLocale} />
              <CatalogOverview item={optionboxLocale} />
            </div>
            <div className="detailWidget">
              <CatalogTitleWidget item={optionboxLocale}>
                {currencyMap && <DiscountCountdown item={optionboxLocale} currencyMap={currencyMap} position="right" showDetail={true} />}
              </CatalogTitleWidget>
              <div className="protruded">
                <BaseStoreDetailCatalog item={optionboxLocale} />
              </div>
            </div>
          </div>
          <div className="storeContainer">
            <h2>
              <Trans i18nKey="OptionboxItemDetailPage.relatedItems.heading">Related Items</Trans>
            </h2>

            <BaseStoreInsideStoreDetail
              store={inGameItemsStore}
              baseItem={optionboxLocale}
              language={language}
              itemType={ItemType.enum.OPTIONBOX}
              noItemMessage={
                <div className="noItem">
                  <Trans i18nKey="OptionboxItemDetailPage.relatedItems.noItem">Looks like there are no related items yet.</Trans>
                </div>
              }
            />
          </div>
        </React.Fragment>
      )}
    </main>
  )
}
