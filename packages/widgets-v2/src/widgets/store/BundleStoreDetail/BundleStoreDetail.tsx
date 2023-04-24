/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Breadcrumbs } from '@od-components/components/Breadcrumbs/Breadcrumbs'
import { Lightbox } from '@od-components/components/Lightbox/Lightbox'
import { ItemHelper } from '@od-ecommerce/helpers/ItemHelper'
import { gaSendErrorEvent } from '@od-shared/app-events/telemetry/google-analytics/gaErrorTracking'
import { EcommerceErrorCode } from '@od-shared/models/EcommTypes'
import { EcomPath } from '@od-shared/routes/EcomPath'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { DesktopChecker } from '@accelbyte/sdk'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { StoreDetailHooks } from '@od-ecommerce/hooks/StoreDetailHooks'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { createStoreForItemInfoStore, useItemInfo } from '~/hooks/platform/useItemInfo'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { FetchUtils } from '~/utils/FetchUtils'
import { FetchStatus } from '~/constants/fetch-statuses'
import { PurchaseAlert } from '@od-ecommerce/components/PurchaseAlert/PurchaseAlert'
import { BaseStoreDetailLoadingScreen } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailLoadingScreen'
import { BaseStoreDetailError } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailError'
import { CatalogItemBanner } from '@od-ecommerce/components/BaseStoreDetail/CatalogItemBanner'
import { AppDetailGallery } from '@od-ecommerce/components/AppStoreDetail/AppDetailGallery'
import { BundleStoreDetailCatalog } from '@od-ecommerce/components/BundleStoreDetailCatalog/BundleStoreDetailCatalog'
import { CatalogOverview } from '@od-ecommerce/components/BaseStoreDetail/CatalogOverview'
import { CatalogTitleWidget } from '@od-ecommerce/components/BaseStoreDetail/CatalogTitleWidget'
import { DiscountCountdown } from '@od-ecommerce/components/DiscountCountdown/DiscountCountdown'
import { BaseStoreDetailCatalog } from '@od-ecommerce/components/BaseStoreDetailCatalog/BaseStoreDetailCatalog'
import { getCurrentLanguage } from '@od-components/i18n'
import { BaseStoreInsideStoreDetail } from '@od-ecommerce/components/BaseStore/BaseStoreInsideStoreDetail'
import { createStoreForStoreDetail } from '~/hooks/platform/useStoreItemsForStoreDetail'

interface Props {
  itemId: string
}

const inGameItemsStore = createStoreForStoreDetail()
const itemStore = createStoreForItemInfoStore()

export function BundleStoreDetail({ itemId }: Props) {
  const { state, closeLightbox, openLightbox } = StoreDetailHooks.useStoreDetailCommonStates()

  const {
    state: { user }
  } = useUserInfo()
  const { state: routes } = useRoutes()
  const { state: discoveryConfigsState } = useDiscoveryConfigs()
  const country = user?.country
  const language = getCurrentLanguage()

  // Hooks for undle item information, base app, and items inside bundles.
  const {
    state: { itemLocale: bundleLocale, itemLocaleError: bundleLocaleError, itemLocaleFetchStatus: bundleLocaleFetchStatus },
    mutations: { fetchItemLocale }
  } = useItemInfo(itemStore)
  const {
    state: bundleInfoState,
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
    if (!currencyMap || !bundleLocale) return

    prepareOrderProcess({ item: bundleLocale, userId: user?.userId, currencyMap })
  }, [bundleLocale, user?.userId, currencyMap])

  useEffect(() => {
    if (!bundleLocale) return

    fetchBundleContents({ itemIds: bundleLocale.itemIds || [bundleLocale.itemId], baseAppId: bundleLocale.baseAppId, country, language })
  }, [bundleLocale, country, language])

  useEffect(() => {
    return () => {
      resetOrderProcess()
    }
  }, [])

  const isSingleGame = discoveryConfigsState.isSingleGame
  const { baseApp, bundleInfoError, bundleInfoFetchStatus, items: itemsInBundle } = bundleInfoState

  const error = bundleLocaleError || bundleInfoError
  const isFetching = FetchUtils.isMatchStatus([bundleInfoFetchStatus, bundleLocaleFetchStatus], FetchStatus.FETCHING)

  if (error && ErrorHelper.extractServiceErrorCode(error) === EcommerceErrorCode.ITEM_NOT_FOUND) {
    gaSendErrorEvent({ eventCategory: routes.error.err404.link, eventLabel: ErrorHelper.errorToString(error) })
  }

  const { isLightboxOpen, selectedImagePosition } = state
  const itemMedias = ItemHelper.getMedia(bundleLocale, null)

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
      {bundleLocale && (
        <React.Fragment>
          <CatalogItemBanner item={bundleLocale} itemPublishingContent={null}>
            <Breadcrumbs>
              <Link to={routes.store.apps.index.link}>
                <Trans i18nKey="Navigation.links.games">Games</Trans>
              </Link>
              {baseApp && <Link to={ItemHelper.getItemDetailRoute(routes, baseApp)}>{baseApp.title}</Link>}
              {bundleLocale.title}
            </Breadcrumbs>
          </CatalogItemBanner>
          {itemMedias && <AppDetailGallery itemMedias={itemMedias} openLightbox={openLightbox} />}
          {isLightboxOpen && itemMedias && (
            <Lightbox itemMedias={itemMedias} isOpen={isLightboxOpen} onClose={closeLightbox} selectedPosition={selectedImagePosition} />
          )}

          <div className="itemDetailContent">
            <div className="description">
              <BundleStoreDetailCatalog items={itemsInBundle} bundleItem={bundleLocale} />
              <CatalogOverview item={bundleLocale} />
            </div>
            <div className="detailWidget">
              <CatalogTitleWidget item={bundleLocale}>
                {currencyMap && <DiscountCountdown item={bundleLocale} currencyMap={currencyMap} position="right" showDetail={true} />}
              </CatalogTitleWidget>
              <div className="protruded">
                <BaseStoreDetailCatalog item={bundleLocale} itemsInBundle={itemsInBundle} />
              </div>
              {baseApp && (
                <div className="requiredApp">
                  <Trans i18nKey="BundleItemDetailPage.requiredAppNotice">Required Game</Trans>
                  {DesktopChecker.isDesktopApp() && isSingleGame ? (
                    <Link to={`/game`}>{baseApp.title}</Link>
                  ) : (
                    <Link to={EcomPath.getItemDetailRoute(baseApp)}>{baseApp.title}</Link>
                  )}
                </div>
              )}
            </div>
          </div>
          <div className="storeContainer">
            <h2>
              <Trans i18nKey="BundleItemDetailPage.inAppStore.heading">Related Items</Trans>
            </h2>

            <BaseStoreInsideStoreDetail
              store={inGameItemsStore}
              baseItem={bundleLocale}
              language={language}
              noItemMessage={<Trans i18nKey="AppDetailPage.inAppStore.noItem">Looks like there are not any items for this game yet.</Trans>}
            />
          </div>
        </React.Fragment>
      )}
    </main>
  )
}
