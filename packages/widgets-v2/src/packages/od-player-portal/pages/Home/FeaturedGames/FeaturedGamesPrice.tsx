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

interface Props {
  regionData: RegionDataItem[]
  currencyMap: Map<string, CurrencyInfo> | null
}

export const FeaturedGamesPrice: React.FC<Props> = (props: Props) => {
  const { regionData, currencyMap } = props
  if (!currencyMap) return null
  const priceOptionList = PurchaseHelper.makePaymentOptionList(regionData, currencyMap)
  const isFreeItem = RegionDataItemHelper.isFree(regionData || [])

  return (
    <>
      {isFreeItem && <Trans i18nKey="FeaturedGamesPrice.freeItem">FREE</Trans>}
      {!isFreeItem &&
        priceOptionList.map(({ finalPrice, originalPrice, regionData, currencySymbol }, index) => {
          const isVirtualCurrency = RegionDataItemHelper.isCurrencyTypeVirtual(regionData)
          return (
            <React.Fragment key={`${regionData.currencyCode}-${index}`}>
              {isVirtualCurrency && <span className="divider">/</span>}
              <span key={regionData.currencyCode} className="featuredGamePriceItem">
                <div
                  className={classNames({
                    virtual: isVirtualCurrency
                  })}>
                  {currencySymbol} {finalPrice}
                </div>
                {RegionDataItemHelper.isDiscounted(regionData) && (
                  <div>
                    <s className="priceStrikethrough">
                      <span className="beforeDiscount">{`${currencySymbol} ${originalPrice}`}</span>
                    </s>
                  </div>
                )}
              </span>
            </React.Fragment>
          )
        })}
    </>
  )
}
