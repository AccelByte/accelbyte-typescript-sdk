/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ItemHelper, ItemImageTag } from '@od-ecommerce/helpers/ItemHelper'
import { OverrideCSS } from '@od-shared/constants/ShConstants'
import { CurrencyType, PaymentOption } from '@od-shared/models/EcommTypes'
import { PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import { RegionDataItemHelper } from '@od-shared/utils/RegionDataItemHelper'
import defaultItemImage from '@od-assets/images/default-item-image.svg'
import classNames from 'classnames'
import { isBefore, isValid } from 'date-fns'
import { AppInfo, CurrencyInfo, ItemInfo } from '@accelbyte/sdk-platform'
import React, { Fragment, useEffect } from 'react'
import { Trans } from 'react-i18next'
import { ExtendedLink } from '@od-components/components/ExtendedLink/ExtendedLink'
import './StoreGridItem.scss'
import { DiscountCountdown } from '../DiscountCountdown/DiscountCountdown'
import { SingleItemHooks } from '../../hooks/SingleItemHooks'
import { useRoutes } from '~/hooks/routes/useRoutes'

interface Props {
  item: ItemInfo
  currencyMap: Map<string, CurrencyInfo>
  disableHref?: boolean
}

export function StoreGridItem({ item, currencyMap, disableHref }: Props) {
  const { state, mutations } = SingleItemHooks.useAppInfo()
  const { state: routes } = useRoutes()

  useEffect(() => {
    const paymentOptionList = PurchaseHelper.makePaymentOptionList(item.regionData || [], currencyMap)

    if (paymentOptionList.length === 0) {
      mutations.requestAdditionalAppInfo(item.itemId)
    }
  }, [mutations.requestAdditionalAppInfo, item, currencyMap])

  const paymentOptionList = PurchaseHelper.makePaymentOptionList(item.regionData || [], currencyMap)
  const itemCoverImageUrl = ItemHelper.getFilteredImageUrlByTag(item.images, ItemImageTag.productCover) || defaultItemImage
  const isFreeItem = RegionDataItemHelper.isFree(item.regionData || [])
  const href = !disableHref ? ItemHelper.getItemDetailRoute(routes, item) : 'javascript:void(0)'

  return (
    <ExtendedLink className="storeGridItem" to={href} isExternal={disableHref}>
      <div
        className="imageContainer"
        style={{
          backgroundImage: itemCoverImageUrl
            ? // tslint:disable-next-line:max-line-length
              `linear-gradient(180deg, rgba(0, 0, 0, 0.53) 9.44%, rgba(44, 61, 71, 0) 46.17%), url('${itemCoverImageUrl}')`
            : undefined
        }}>
        <div className="discountCountdownWrapper">
          <DiscountCountdown item={item} currencyMap={currencyMap} />
        </div>

        {/* TODO CW-1184
        {Ctx.hasFeature(FeatureFlags.isSubscriptionsVisible) && ItemHelper.isItemInSubscription(item) && (
          <SubscriptionImages item={item} className={'subscriptionWrapper'} />
        )}
        */}
      </div>
      <div className={classNames('title', OverrideCSS.TITLE_FONT)}>{item.title}</div>
      <div className="paymentOptions">
        {paymentOptionList.length > 0 && (
          <>
            {isFreeItem && <Trans i18nKey="StoreGridItem.freeItem">FREE</Trans>}
            {!isFreeItem &&
              paymentOptionList.map((paymentOption, index) => (
                <StoreGridPaymentOption key={`${paymentOption.regionData.currencyCode}-${index}`} paymentOption={paymentOption} />
              ))}
          </>
        )}
        {paymentOptionList.length === 0 && <PaymentUnavailable appInfo={state.appInfo} />}
      </div>
    </ExtendedLink>
  )
}

// Composing components.
function PaymentUnavailable({ appInfo }: { appInfo: AppInfo | null }) {
  if (appInfo) {
    const releaseDate = new Date(appInfo.releaseDate || '')
    if (isValid(releaseDate) && isBefore(new Date(), releaseDate)) {
      return <Trans i18nKey="BaseStoreDetailCatalog.comingSoonDate">Release on {{ releaseDate }}</Trans>
    }
  }
  return <Trans i18nKey="StoreGridItem.unavailable">Unavailable</Trans>
}

function StoreGridPaymentOption({ paymentOption }: { paymentOption: PaymentOption }) {
  const { currencySymbol, finalPrice, regionData, currencyType, originalPrice } = paymentOption
  const discountPercentage = RegionDataItemHelper.calculateDiscountPercentage(regionData)
  return (
    <div
      className={classNames('paymentOption', currencyType === CurrencyType.enum.REAL ? 'realCurrency' : 'virtualCurrency')}
      key={paymentOption.regionData.currencyCode}>
      <div className="discountedPrice">
        {currencySymbol} {finalPrice}
      </div>

      {RegionDataItemHelper.isDiscounted(regionData) && (
        <Fragment>
          <s className="priceStrikethrough">
            <div className="price">
              {currencySymbol} {originalPrice}
            </div>
          </s>
          <div className="discountLabel">-{discountPercentage}%</div>
        </Fragment>
      )}
    </div>
  )
}
