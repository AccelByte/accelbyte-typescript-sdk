/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import { RegionDataItemHelper } from '@od-shared/utils/RegionDataItemHelper'
import classNames from 'classnames'
import { CurrencyInfo, RegionDataItem } from '@accelbyte/sdk-platform'
import React from 'react'
import { Trans } from 'react-i18next'
import './Banner.scss'

interface Props {
  regionData: RegionDataItem[]
  currencyMap: Map<string, CurrencyInfo>
}

export const BannerPrice: React.FC<Props> = (props: Props) => {
  const { regionData, currencyMap } = props

  if (!currencyMap) return null

  const paymentOptions = PurchaseHelper.makePaymentOptionList(regionData, currencyMap)
  const isFreeItem = RegionDataItemHelper.isFree(paymentOptions.map(option => option.regionData))

  return (
    <div className="bannerPriceContainer">
      {paymentOptions.map(({ finalPrice, originalPrice, regionData, currencySymbol }) => (
        <div key={regionData.currencyCode} className="bannerPrice">
          {isFreeItem && <Trans i18nKey="BannerPrice.freeItem">FREE</Trans>}
          {!isFreeItem && (
            <>
              <span
                className={classNames('finalPrice', {
                  virtual: RegionDataItemHelper.isCurrencyTypeVirtual(regionData)
                })}>
                {`${currencySymbol} ${finalPrice}`}
              </span>
              {RegionDataItemHelper.isDiscounted(regionData) && (
                <>
                  <s className="priceStrikethrough">
                    <span className="beforeDiscount">{`${currencySymbol} ${originalPrice}`}</span>
                  </s>
                  <span className="discountPercentage">{`-${RegionDataItemHelper.calculateDiscountPercentage(regionData)}%`}</span>
                </>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  )
}
