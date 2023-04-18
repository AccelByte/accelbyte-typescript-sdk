/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CurrencyType, PaymentOption } from '@od-shared/models/EcommTypes'
import { RegionDataItemHelper } from '@od-shared/utils/RegionDataItemHelper'
import classNames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import './PriceList.scss'

export const PriceList = ({ className, paymentOptions }: { className?: string; paymentOptions: PaymentOption[] }) => {
  const isFreeItem = RegionDataItemHelper.isFree(paymentOptions.map(option => option.regionData))
  return (
    <div className={classNames(className, 'priceList')}>
      {isFreeItem && (
        <div>
          <Trans i18nKey="BaseStoreDetailCatalog.freeItem">FREE</Trans>
        </div>
      )}
      {!isFreeItem &&
        paymentOptions.map(({ regionData, currencySymbol, finalPrice, currencyType, originalPrice }, index) => (
          <div className="price" key={`${regionData.currencyCode}-${index}`}>
            <div className={classNames('payablePrice ', currencyType === CurrencyType.enum.VIRTUAL && 'virtual')}>
              <div>{`${currencySymbol} ${finalPrice}`}</div>
              {finalPrice !== originalPrice && (
                <div className="discountPercentage">{RegionDataItemHelper.calculateDiscountPercentage(regionData)}%</div>
              )}
            </div>
            {finalPrice !== originalPrice && (
              <s className="originalPriceStrikethrough">
                <div className="originalPrice">{`${currencySymbol} ${originalPrice}`}</div>
              </s>
            )}
          </div>
        ))}
    </div>
  )
}
