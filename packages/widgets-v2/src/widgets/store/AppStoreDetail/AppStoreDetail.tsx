/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Breadcrumbs } from '@od-components/components/Breadcrumbs/Breadcrumbs'
import { CommonError } from '@od-components/components/ErrorPage/CommonError'
import { Lightbox } from '@od-components/components/Lightbox/Lightbox'
import { ItemHelper } from '@od-ecommerce/helpers/ItemHelper'
import { gaSendErrorEvent } from '@od-shared/app-events/telemetry/google-analytics/gaErrorTracking'
import { FeatureDecodeError } from '@od-shared/models/Cms'
import { AppType, EcommerceErrorCode, ItemType } from '@od-shared/models/EcommTypes'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import { DecodeError } from '@accelbyte/sdk'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './AppStoreDetail.scss'
import { createStoreForItemInfoStore, useItemInfo } from '~/hooks/platform/useItemInfo'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { SingleItemHooks } from '../../../packages/od-ecommerce/hooks/SingleItemHooks'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { FetchUtils } from '~/utils/FetchUtils'
import { FetchStatus } from '~/constants/fetch-statuses'
import { AdditionalDetail } from '@od-ecommerce/components/AppStoreDetail/AdditionalDetail'
import { AppDetailGallery } from '@od-ecommerce/components/AppStoreDetail/AppDetailGallery'
import { PlatformRequirements } from '@od-ecommerce/components/AppStoreDetail/PlatformRequirements'
import { CatalogItemBanner } from '@od-ecommerce/components/BaseStoreDetail/CatalogItemBanner'
import { CatalogOverview } from '@od-ecommerce/components/BaseStoreDetail/CatalogOverview'
import { CatalogTitleWidget } from '@od-ecommerce/components/BaseStoreDetail/CatalogTitleWidget'
import { BaseStoreDetailCatalog } from '@od-ecommerce/components/BaseStoreDetailCatalog/BaseStoreDetailCatalog'
import { DiscountCountdown } from '@od-ecommerce/components/DiscountCountdown/DiscountCountdown'
import { PurchaseAlert } from '@od-ecommerce/components/PurchaseAlert/PurchaseAlert'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { StoreDetailHooks } from '@od-ecommerce/hooks/StoreDetailHooks'
import { BaseStoreDetailLoadingScreen } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailLoadingScreen'
import { getCurrentLanguage } from '@od-components/i18n'
import { BaseStoreInsideStoreDetail } from '@od-ecommerce/components/BaseStore/BaseStoreInsideStoreDetail'
import { createStoreForStoreDetail } from '~/hooks/platform/useStoreItemsForStoreDetail'

interface Props {
  itemId: string | undefined
  previewOptions?: {
    isSingleGame?: boolean
    mode?: 'base' | 'checkout'
  }
}

export const AppStoreDetailError = ({ error }: { error: Error | unknown }) => {
  const errorMessage = () => {
    switch (true) {
      // case error instanceof ItemDecodeError: // // referenced as a read but never initialized
      case error instanceof FeatureDecodeError:
      case error instanceof DecodeError:
        return <Trans i18nKey="AppDetailPage.item.decodeError">The game data from the server is invalid. Please refresh the page.</Trans>
      // // referenced as a read but never initialized
      // case error instanceof AppItemAdditionalInfoDecodeError:
      //   return (
      //     <Trans i18nKey="AppDetailPage.itemApp.decodeAppError">The app data from the server is invalid. Please refresh the page.</Trans>
      //   )
      default:
        return <CommonError error={error} />
    }
  }

  return <div className="error">{errorMessage()}</div>
}

const inGameExpansionsStore = createStoreForStoreDetail()
const inGameItemsStore = createStoreForStoreDetail()
const inGameBundlesStore = createStoreForStoreDetail()
const itemStore = createStoreForItemInfoStore()

export function AppStoreDetail({ itemId, previewOptions }: Props) {
  const { state, openLightbox, closeLightbox } = StoreDetailHooks.useStoreDetailCommonStates()

  const {
    state: { user }
  } = useUserInfo()
  const { state: routes } = useRoutes()
  const { state: discoveryConfigsState } = useDiscoveryConfigs()
  const country = user?.country
  const language = getCurrentLanguage()

  // Item information.
  const {
    state: { itemLocale, itemLocaleError, itemLocaleFetchStatus },
    mutations: { fetchItemLocale }
  } = useItemInfo(itemStore)
  const {
    state: { appInfo, appInfoError, appInfoFetchStatus },
    mutations: { requestAdditionalAppInfo }
  } = SingleItemHooks.useAppInfo()

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

  // TODO: consider using a useBackground or something
  // UIEvent.updateBackground(`url(${bgCommon})`)

  // Fetch required data.
  useEffect(() => {
    if (currencyMap) return

    fetchCurrencyMap()
  }, [currencyMap])

  useEffect(() => {
    fetchItemLocale({ itemId, language, country })
  }, [itemId, language, country])

  useEffect(() => {
    requestAdditionalAppInfo(itemId)
  }, [itemId])

  useEffect(() => {
    if (!currencyMap || !itemLocale) return

    prepareOrderProcess({ item: itemLocale, userId: user?.userId, currencyMap })
  }, [itemLocale, user?.userId, currencyMap])

  useEffect(() => {
    return () => {
      resetOrderProcess()
    }
  }, [])

  const error = itemLocaleError || appInfoError
  const isFetching = FetchUtils.isMatchStatus([appInfoFetchStatus, itemLocaleFetchStatus], FetchStatus.FETCHING)

  const { isLightboxOpen, selectedImagePosition } = state
  const itemMedias = ItemHelper.getMedia(itemLocale, appInfo)
  const isSingleGameTemplate = !previewOptions ? discoveryConfigsState.isSingleGame : previewOptions.isSingleGame

  if (error && ErrorHelper.extractServiceErrorCode(error) === EcommerceErrorCode.ITEM_NOT_FOUND) {
    gaSendErrorEvent({ eventCategory: routes.error.err404.link, eventLabel: ErrorHelper.errorToString(error) })
  }

  return (
    <div className="itemDetailPage">
      <PurchaseAlert
        {...{
          user,
          prepurchaseInformation,
          pendingOrders,
          isPreviewMode: !!previewOptions
        }}
      />

      {isFetching && <BaseStoreDetailLoadingScreen />}
      {error && <AppStoreDetailError error={error} />}
      {itemLocale && (
        <React.Fragment>
          <CatalogItemBanner item={itemLocale} itemPublishingContent={appInfo} isPreviewMode={!!previewOptions}>
            {!isSingleGameTemplate && (
              <Breadcrumbs>
                <Link to={routes.store.apps.index.link}>
                  <Trans i18nKey="Navigation.links.games">Games</Trans>
                </Link>
                {itemLocale.title}
              </Breadcrumbs>
            )}
            {isSingleGameTemplate && (
              <BaseStoreDetailCatalog
                item={itemLocale}
                itemPublishingContent={appInfo}
                additionalAppInfo={appInfo}
                previewMode={previewOptions?.mode}
              />
            )}
          </CatalogItemBanner>
          {itemMedias && !isSingleGameTemplate && <AppDetailGallery itemMedias={itemMedias} openLightbox={openLightbox} />}
          {isLightboxOpen && itemMedias && !isSingleGameTemplate && (
            <Lightbox itemMedias={itemMedias} isOpen={isLightboxOpen} onClose={closeLightbox} selectedPosition={selectedImagePosition} />
          )}
          {!isSingleGameTemplate && (
            <>
              <div className="availableBundleContainer">
                <h2>
                  <Trans i18nKey="AppDetailPage.availableBundles.heading">Available Bundles</Trans>
                </h2>
                <BaseStoreInsideStoreDetail
                  store={inGameBundlesStore}
                  baseItem={itemLocale}
                  itemType={ItemType.enum.BUNDLE}
                  language={language}
                  initialShownItem={4}
                  noItemMessage={
                    <Trans i18nKey="AppDetailPage.availableBundles.noItem">Looks like there are no items for this game yet.</Trans>
                  }
                />
              </div>
              <div className="itemDetailContent">
                <div className="description">
                  <CatalogOverview item={itemLocale} />
                  {appInfo && <PlatformRequirements className="requirementsDesktop" additionalAppInfo={appInfo} />}
                </div>
                <div className="detailWidget">
                  {currencyMap && (
                    <CatalogTitleWidget item={itemLocale}>
                      <DiscountCountdown item={itemLocale} currencyMap={currencyMap} position="right" showDetail={true} />
                    </CatalogTitleWidget>
                  )}

                  <div className="protruded">
                    <BaseStoreDetailCatalog item={itemLocale} itemPublishingContent={appInfo} additionalAppInfo={appInfo} />

                    {/* TODO CW-1184
                  {Ctx.hasFeature(FeatureFlags.isSubscriptionsVisible) && (
                    <CatalogSubscriptionWidget item={itemLocale} itemPublishingContent={itemPublishingContent || undefined} />
                  )}
                  */}
                  </div>

                  {/* TODO CW-1184
                {Ctx.hasFeature(FeatureFlags.isSubscriptionsVisible) && (
                  <CatalogSubscriptionWidget item={itemLocale} itemPublishingContent={itemPublishingContent || undefined} />
                )}
                */}
                  {appInfo && <AdditionalDetail additionalAppInfo={appInfo} />}
                </div>
                {appInfo && <PlatformRequirements className="requirementsMobile" additionalAppInfo={appInfo} />}
              </div>
            </>
          )}

          {itemLocale.appType === AppType.enum.GAME && !isSingleGameTemplate && (
            <BaseStoreInsideStoreDetail
              store={inGameExpansionsStore}
              baseItem={itemLocale}
              itemType={ItemType.enum.APP}
              appType={AppType.enum.DLC}
              language={language}
              withWrapper={(content: React.ReactNode) => (
                <div className="storeContainer">
                  <h2>
                    <Trans i18nKey="AppDetailPage.dlcStore.heading">Expansions</Trans>
                  </h2>
                  {content}
                </div>
              )}
              noItemMessage={<Trans i18nKey="AppDetailPage.inAppStore.noItem">Looks like there are not any items for this game yet.</Trans>}
            />
          )}

          {!isSingleGameTemplate && (
            <div className="storeContainer">
              <h2>
                <Trans i18nKey="AppDetailPage.inAppStore.heading">Game Store</Trans>
              </h2>
              <BaseStoreInsideStoreDetail
                store={inGameItemsStore}
                baseItem={itemLocale}
                itemType={ItemType.enum.INGAMEITEM}
                language={language}
                noItemMessage={
                  <Trans i18nKey="AppDetailPage.inAppStore.noItem">Looks like there are not any items for this game yet.</Trans>
                }
              />
            </div>
          )}
        </React.Fragment>
      )}
    </div>
  )
}
