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
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { DesktopChecker } from '@accelbyte/sdk'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './IngameItemStoreDetail.scss'
import { AppDetailGallery } from '@od-ecommerce/components/AppStoreDetail/AppDetailGallery'
import { CatalogItemBanner } from '@od-ecommerce/components/BaseStoreDetail/CatalogItemBanner'
import { CatalogOverview } from '@od-ecommerce/components/BaseStoreDetail/CatalogOverview'
import { CatalogTitleWidget } from '@od-ecommerce/components/BaseStoreDetail/CatalogTitleWidget'
import { StoreDetailHooks } from '@od-ecommerce/hooks/StoreDetailHooks'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { createStoreForItemInfoStore, useItemInfo } from '~/hooks/platform/useItemInfo'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { FetchUtils } from '~/utils/FetchUtils'
import { IngameItemStoreDetailHooks } from './IngameItemStoreDetailHooks'
import { PurchaseAlert } from '@od-ecommerce/components/PurchaseAlert/PurchaseAlert'
import { BaseStoreDetailLoadingScreen } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailLoadingScreen'
import { BaseStoreDetailError } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailError'
import { DiscountCountdown } from '@od-ecommerce/components/DiscountCountdown/DiscountCountdown'
import { BaseStoreDetailCatalog } from '@od-ecommerce/components/BaseStoreDetailCatalog/BaseStoreDetailCatalog'
import { getCurrentLanguage } from '@od-components/i18n'
import { createStoreForStoreDetail } from '~/hooks/platform/useStoreItemsForStoreDetail'
import { BaseStoreInsideStoreDetail } from '@od-ecommerce/components/BaseStore/BaseStoreInsideStoreDetail'

interface Props {
  itemId: string
}

const inGameItemsStore = createStoreForStoreDetail()
const itemStore = createStoreForItemInfoStore()

export function IngameItemStoreDetail({ itemId }: Props) {
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
    state: { itemLocale: ingameItemLocale, itemLocaleError: ingameItemLocaleError, itemLocaleFetchStatus: ingameItemLocaleFetchStatus },
    mutations: { fetchItemLocale }
  } = useItemInfo(itemStore)
  const {
    state: baseAppState,
    mutations: { fetchBaseApp }
  } = IngameItemStoreDetailHooks.useBaseApp()

  // Purchase information.
  const {
    state: { prepurchaseInformation },
    mutations: { prepareOrderProcess }
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
    if (!currencyMap || !ingameItemLocale) return

    prepareOrderProcess({ item: ingameItemLocale, userId: user?.userId, currencyMap })
  }, [ingameItemLocale, user?.userId, currencyMap])

  useEffect(() => {
    if (!ingameItemLocale) return

    fetchBaseApp({ baseAppId: ingameItemLocale.baseAppId, country, language })
  }, [ingameItemLocale?.baseAppId, country, language])

  const isSingleGame = discoveryConfigsState.isSingleGame
  const { baseApp, baseAppError, baseAppFetchStatus } = baseAppState

  const error = ingameItemLocaleError || baseAppError
  const isFetching = FetchUtils.isMatchStatus([baseAppFetchStatus, ingameItemLocaleFetchStatus], FetchStatus.FETCHING)

  if (error && ErrorHelper.extractServiceErrorCode(error) === EcommerceErrorCode.ITEM_NOT_FOUND) {
    gaSendErrorEvent({ eventCategory: routes.error.err404.link, eventLabel: ErrorHelper.errorToString(error) })
  }

  const { isLightboxOpen, selectedImagePosition } = state
  const itemMedias = ItemHelper.getMedia(ingameItemLocale, null)

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

      {ingameItemLocale && baseApp && (
        <React.Fragment>
          <CatalogItemBanner item={ingameItemLocale} itemPublishingContent={null}>
            {!isSingleGame && (
              <Breadcrumbs>
                <Link to={routes.store.apps.index.link}>
                  <Trans i18nKey="Navigation.links.games">Games</Trans>
                </Link>
                <Link to={routes.store.apps.detail.makePath({ params: { itemId: baseApp.itemId } })}>{baseApp.title}</Link>
                {ingameItemLocale.title}
              </Breadcrumbs>
            )}
          </CatalogItemBanner>
          {itemMedias && <AppDetailGallery itemMedias={itemMedias} openLightbox={openLightbox} />}
          {isLightboxOpen && itemMedias && (
            <Lightbox itemMedias={itemMedias} isOpen={isLightboxOpen} onClose={closeLightbox} selectedPosition={selectedImagePosition} />
          )}

          <div className="itemDetailContent container">
            <div className="description">
              <CatalogOverview item={ingameItemLocale} />
            </div>
            <div className="detailWidget">
              <CatalogTitleWidget item={ingameItemLocale}>
                {currencyMap && <DiscountCountdown item={ingameItemLocale} currencyMap={currencyMap} position="right" showDetail={true} />}
              </CatalogTitleWidget>
              <div className="protruded">
                <BaseStoreDetailCatalog item={ingameItemLocale} />
              </div>
              <div className="requiredApp">
                <Trans i18nKey="InGameItemDetailPage.requiredAppNotice">Required Game</Trans>
                <Link
                  to={
                    DesktopChecker.isDesktopApp() && isSingleGame
                      ? routes.game.index.link
                      : routes.game.detail.makePath({ params: { gameId: baseApp.itemId } })
                  }>
                  {baseApp.title}
                </Link>
              </div>
            </div>
          </div>
          <div className="storeContainer">
            <h2>
              <Trans i18nKey="InGameItemDetailPage.inAppStore.heading">Related Items</Trans>
            </h2>

            <BaseStoreInsideStoreDetail
              store={inGameItemsStore}
              baseItem={ingameItemLocale}
              language={language}
              noItemMessage={
                <div className="noItem">
                  <Trans i18nKey="InGameItemDetailPage.inAppStore.noItem">Looks like there are no related items yet.</Trans>
                </div>
              }
            />
          </div>
        </React.Fragment>
      )}
    </main>
  )
}
