/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Breadcrumbs } from '@od-components/components/Breadcrumbs/Breadcrumbs'
import { Lightbox } from '@od-components/components/Lightbox/Lightbox'
import { t } from '@od-components/i18n/index'
import { ItemHelper } from '@od-ecommerce/helpers/ItemHelper'
import { gaSendErrorEvent } from '@od-shared/app-events/telemetry/google-analytics/gaErrorTracking'
import { EcommerceErrorCode, ItemType } from '@od-shared/models/EcommTypes'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import { createStoreForItemInfoStore, useItemInfo } from '~/hooks/platform/useItemInfo'
import { FetchUtils } from '~/utils/FetchUtils'
import { AppDetailGallery } from '@od-ecommerce/components/AppStoreDetail/AppDetailGallery'
import { BaseStoreDetailError } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailError'
import { BaseStoreDetailLoadingScreen } from '@od-ecommerce/components/BaseStoreDetail/BaseStoreDetailLoadingScreen'
import { CatalogItemBanner } from '@od-ecommerce/components/BaseStoreDetail/CatalogItemBanner'
import { CatalogOverview } from '@od-ecommerce/components/BaseStoreDetail/CatalogOverview'
import { CatalogTitleWidget } from '@od-ecommerce/components/BaseStoreDetail/CatalogTitleWidget'
import { PurchaseAlert } from '@od-ecommerce/components/PurchaseAlert/PurchaseAlert'
import { StoreDetailHooks } from '@od-ecommerce/hooks/StoreDetailHooks'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useCurrencyMap } from '~/hooks/platform/useCurrencyMap'
import { useOrderProcess } from '~/hooks/platform/useOrderProcess'
import { usePendingOrders } from '~/hooks/platform/usePendingOrders'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { DiscountCountdown } from '@od-ecommerce/components/DiscountCountdown/DiscountCountdown'
import { BaseStoreDetailCatalog } from '@od-ecommerce/components/BaseStoreDetailCatalog/BaseStoreDetailCatalog'
import { BaseStoreInsideStoreDetail } from '@od-ecommerce/components/BaseStore/BaseStoreInsideStoreDetail'
import { createStoreForStoreDetail } from '~/hooks/platform/useStoreItemsForStoreDetail'
import { getCurrentLanguage } from '@od-components/i18n'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'

interface Props {
  itemId: string
}

const inGameItemsStore = createStoreForStoreDetail()
const itemStore = createStoreForItemInfoStore()

export function CodeStoreDetail({ itemId }: Props) {
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
    state: { itemLocale: codeLocale, itemLocaleError: bundleLocaleError, itemLocaleFetchStatus: bundleLocaleFetchStatus },
    mutations: { fetchItemLocale }
  } = useItemInfo(itemStore)
  const {
    state: bundleInfoState,
    mutations: { fetchBundleContents }
  } = StoreDetailHooks.useBundleInformation()

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
    if (!currencyMap || !codeLocale) return

    prepareOrderProcess({ item: codeLocale, userId: user?.userId, currencyMap })
  }, [codeLocale, user?.userId, currencyMap])

  useEffect(() => {
    if (!codeLocale) return

    fetchBundleContents({ bundleItem: codeLocale, country, language })
  }, [codeLocale, country, language])

  const { baseApp, bundleInfoError, bundleInfoFetchStatus } = bundleInfoState

  const error = bundleLocaleError || bundleInfoError
  const isFetching = FetchUtils.isMatchStatus([bundleInfoFetchStatus, bundleLocaleFetchStatus], FetchStatus.FETCHING)

  if (error && ErrorHelper.extractServiceErrorCode(error) === EcommerceErrorCode.ITEM_NOT_FOUND) {
    gaSendErrorEvent({ eventCategory: routes.error.err404.link, eventLabel: ErrorHelper.errorToString(error) })
  }

  const { isLightboxOpen, selectedImagePosition } = state
  const itemMedias = ItemHelper.getMedia(codeLocale, null)

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

      {codeLocale && (
        <React.Fragment>
          <CatalogItemBanner item={codeLocale} itemPublishingContent={null}>
            {!isSingleGame && (
              <Breadcrumbs>
                <Link to={routes.store.codes.index.link}>
                  <Trans i18nKey="Navigation.links.productKeys">Product Keys</Trans>
                </Link>
                {baseApp && <Link to={ItemHelper.getItemDetailRoute(routes, baseApp)}>{baseApp.title}</Link>}
                {codeLocale.title}
              </Breadcrumbs>
            )}
          </CatalogItemBanner>
          {itemMedias && <AppDetailGallery itemMedias={itemMedias} openLightbox={openLightbox} />}
          {isLightboxOpen && itemMedias && (
            <Lightbox itemMedias={itemMedias} isOpen={isLightboxOpen} onClose={closeLightbox} selectedPosition={selectedImagePosition} />
          )}

          <div className="itemDetailContent">
            <div className="description">
              <CatalogOverview item={codeLocale} />
            </div>
            <div className="detailWidget">
              <CatalogTitleWidget item={codeLocale} tag={t('CodeItemDetailPage.tag')}>
                {currencyMap && <DiscountCountdown item={codeLocale} currencyMap={currencyMap} position="right" showDetail={true} />}
              </CatalogTitleWidget>
              <div className="protruded">
                <BaseStoreDetailCatalog item={codeLocale} />
              </div>
              {baseApp && (
                <div className="requiredApp">
                  <Trans i18nKey="CodeItemDetailPage.requiredAppNotice">Required Game</Trans>
                  <Link to={ItemHelper.getItemDetailRoute(routes, baseApp)}>{baseApp.title}</Link>
                </div>
              )}
            </div>
          </div>
          <div className="storeContainer">
            <h2>
              <Trans i18nKey="CodeItemDetailPage.inAppStore.heading">Related Items</Trans>
            </h2>

            <BaseStoreInsideStoreDetail
              store={inGameItemsStore}
              baseItem={codeLocale}
              language={language}
              itemType={ItemType.enum.CODE}
              noItemMessage={
                <div className="noItem">
                  <Trans i18nKey="CodeItemDetailPage.inAppStore.noItem">Looks like there are no related items yet.</Trans>
                </div>
              }
            />
          </div>
        </React.Fragment>
      )}
    </main>
  )
}
