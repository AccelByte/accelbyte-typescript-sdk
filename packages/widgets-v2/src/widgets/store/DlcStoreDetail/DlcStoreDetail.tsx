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
import { mockSingleGameInfo, mockStoreItem } from '@od-shared/mocks/MockVars'
import { FetchUtils } from '~/utils/FetchUtils'
import { FetchStatus } from '~/constants/fetch-statuses'
import { DlcStoreDetailHooks } from './DlcStoreDetailHooks'
import { AppDetailGallery } from '@od-ecommerce/components/AppStoreDetail/AppDetailGallery'
import { PlatformRequirements } from '@od-ecommerce/components/AppStoreDetail/PlatformRequirements'
import { CatalogItemBanner } from '@od-ecommerce/components/BaseStoreDetail/CatalogItemBanner'
import { CatalogOverview } from '@od-ecommerce/components/BaseStoreDetail/CatalogOverview'
import { CatalogTitleWidget } from '@od-ecommerce/components/BaseStoreDetail/CatalogTitleWidget'
import { PurchaseBaseAppButton } from '@od-ecommerce/components/BaseStoreDetailCatalog/PurchaseBaseAppButton'
import { OpenLibraryLauncherButton } from '@od-ecommerce/components/OpenLibraryLauncherButton/OpenLibraryLauncherButton'
import { StoreDetailHooks } from '@od-ecommerce/hooks/StoreDetailHooks'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { createStoreForItemInfoStore, useItemInfo } from '~/hooks/platform/useItemInfo'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { PurchaseAlert } from '@od-ecommerce/components/PurchaseAlert/PurchaseAlert'
import { BaseStoreDetailLoadingScreen } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailLoadingScreen'
import { BaseStoreDetailError } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailError'
import { DiscountCountdown } from '@od-ecommerce/components/DiscountCountdown/DiscountCountdown'
import { BaseStoreDetailCatalog } from '@od-ecommerce/components/BaseStoreDetailCatalog/BaseStoreDetailCatalog'
import { getCurrentLanguage } from '@od-components/i18n'
import { BaseStoreInsideStoreDetail } from '@od-ecommerce/components/BaseStore/BaseStoreInsideStoreDetail'
import { createStoreForStoreDetail } from '~/hooks/platform/useStoreItemsForStoreDetail'
import { ItemInfo } from '@accelbyte/sdk-platform'

interface Props {
  itemId: string
  previewMode?: 'checkout'
}

const inGameItemsStore = createStoreForStoreDetail()
const itemStore = createStoreForItemInfoStore()

export function DlcStoreDetail({ itemId, previewMode }: Props) {
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
    state: { itemLocale: dlcLocale, itemLocaleError: dlcLocaleError, itemLocaleFetchStatus: dlcLocaleFetchStatus },
    mutations: { fetchItemLocale }
  } = useItemInfo(itemStore)
  const {
    state: dlcInfoState,
    mutations: { fetchDlcInformation }
  } = DlcStoreDetailHooks.useDlcInformation()

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
    if (!currencyMap || !dlcLocale) return

    prepareOrderProcess({ item: dlcLocale, userId: user?.userId, currencyMap })
  }, [dlcLocale, user?.userId, currencyMap])

  useEffect(() => {
    if (!dlcLocale) return

    fetchDlcInformation({ dlcItem: dlcLocale, user, country, language })
  }, [dlcLocale, user, language])

  useEffect(() => {
    return () => {
      resetOrderProcess()
    }
  }, [])

  const isSingleGame = discoveryConfigsState.isSingleGame
  const { baseApp, appInfo, isBaseAppOwned, dlcInformationError, dlcInformationFetchStatus } = dlcInfoState

  const error = dlcLocaleError || dlcInformationError
  const isFetching = FetchUtils.isMatchStatus([dlcInformationFetchStatus, dlcLocaleFetchStatus], FetchStatus.FETCHING)

  if (error && ErrorHelper.extractServiceErrorCode(error) === EcommerceErrorCode.ITEM_NOT_FOUND) {
    gaSendErrorEvent({ eventCategory: routes.error.err404.link, eventLabel: ErrorHelper.errorToString(error) })
  }

  const effectiveDlcItem = !previewMode ? dlcLocale : (mockStoreItem.data[2] as ItemInfo)
  const effectiveBaseApp = !previewMode ? baseApp : mockSingleGameInfo

  if (error && ErrorHelper.extractServiceErrorCode(error) === EcommerceErrorCode.ITEM_NOT_FOUND) {
    gaSendErrorEvent({ eventCategory: routes.error.err404.link, eventLabel: ErrorHelper.errorToString(error) })
  }

  const { isLightboxOpen, selectedImagePosition } = state
  const itemMedias = ItemHelper.getMedia(dlcLocale, null)

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

      {effectiveDlcItem && baseApp && (
        <React.Fragment>
          <CatalogItemBanner item={effectiveDlcItem} itemPublishingContent={null}>
            {!isSingleGame && (
              <Breadcrumbs>
                <Link to={routes.store.apps.index.link}>
                  <Trans i18nKey="Navigation.links.games">Games</Trans>
                </Link>
                {effectiveBaseApp && (
                  <Link to={routes.store.apps.detail.makePath({ params: { itemId: effectiveBaseApp.itemId } })}>
                    {effectiveBaseApp.title}
                  </Link>
                )}
                {effectiveDlcItem.title}
              </Breadcrumbs>
            )}
          </CatalogItemBanner>
          {itemMedias && <AppDetailGallery itemMedias={itemMedias} openLightbox={openLightbox} />}
          {isLightboxOpen && itemMedias && (
            <Lightbox itemMedias={itemMedias} isOpen={isLightboxOpen} onClose={closeLightbox} selectedPosition={selectedImagePosition} />
          )}

          <div className="itemDetailContent">
            <div className="description">
              <CatalogOverview item={effectiveDlcItem} />
              {appInfo && <PlatformRequirements className="requirementsDesktop" additionalAppInfo={appInfo} />}
            </div>
            <div className="detailWidget">
              <CatalogTitleWidget item={effectiveDlcItem}>
                {currencyMap && <DiscountCountdown item={effectiveDlcItem} currencyMap={currencyMap} position="right" showDetail={true} />}
              </CatalogTitleWidget>
              <div className="protruded">
                <BaseStoreDetailCatalog
                  item={effectiveDlcItem}
                  additionalAppInfo={appInfo}
                  launcherGoToLibraryButton={
                    <LauncherGoToLibraryButton baseApp={effectiveBaseApp} dlcLocale={dlcLocale} isBaseAppOwned={isBaseAppOwned} />
                  }
                  previewMode={previewMode}
                />
              </div>
              {effectiveBaseApp && (
                <div className="requiredApp">
                  <Trans i18nKey="InGameItemDetailPage.requiredAppNotice">Required Game</Trans>
                  <Link
                    to={
                      DesktopChecker.isDesktopApp() && isSingleGame
                        ? routes.game.index.link
                        : routes.store.apps.detail.makePath({ params: { itemId: effectiveBaseApp.itemId } })
                    }>
                    {effectiveBaseApp.title}
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="storeContainer">
            <h2>
              <Trans i18nKey="InGameItemDetailPage.inAppStore.heading">Related Items</Trans>
            </h2>

            <BaseStoreInsideStoreDetail
              store={inGameItemsStore}
              baseItem={effectiveDlcItem}
              language={language}
              noItemMessage={
                <div className="noItem">
                  <Trans i18nKey="InGameItemDetailPage.inAppStore.noItem">Looks like there are no related items yet.</Trans>
                </div>
              }
              isPreviewMode={!!previewMode}
            />
          </div>
        </React.Fragment>
      )}
    </main>
  )
}

// Composing functions.
function LauncherGoToLibraryButton({
  baseApp,
  dlcLocale,
  isBaseAppOwned
}: {
  dlcLocale: ItemInfo | null
  baseApp: ItemInfo | null
  isBaseAppOwned: boolean | null
}) {
  if (!dlcLocale) {
    return null
  }
  if (!baseApp || isBaseAppOwned) {
    return <OpenLibraryLauncherButton item={baseApp || dlcLocale} />
  }
  return <PurchaseBaseAppButton baseApp={baseApp} />
}
