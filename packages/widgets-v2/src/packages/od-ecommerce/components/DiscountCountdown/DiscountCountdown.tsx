/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ClockIcon } from '@od-components/components/Icons/ClockIcon'
import { PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import { RegionDataItemHelper } from '@od-shared/utils/RegionDataItemHelper'
import classNames from 'classnames'
import { parseISO, formatDistanceToNow } from 'date-fns'
import { CurrencyInfo, ItemInfo } from '@accelbyte/sdk-platform'
import React, { useRef, useState } from 'react'
import { Trans } from 'react-i18next'
import './DiscountCountdown.scss'

interface Props {
  item: ItemInfo
  currencyMap: Map<string, CurrencyInfo> | null
  position?: string
  showDetail?: boolean
}

export function DiscountCountdown({ currencyMap, item, position, showDetail }: Props) {
  const [isTooltipCountdownWigdetOpen, setIsTooltipCountdownWigdetOpen] = useState(false)
  const timeoutState = useRef<number | null>(null)

  const toggleTooltip = (event: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    event.preventDefault()
    setIsTooltipCountdownWigdetOpen(oldState => !oldState)
  }

  const closeTooltip = (event: React.MouseEvent) => {
    event.preventDefault()
    setIsTooltipCountdownWigdetOpen(false)

    if (timeoutState.current) window.clearTimeout(timeoutState.current)
  }

  const closeTooltipOnMouseLeave = (event: React.MouseEvent, timeout = 2000) => {
    event.preventDefault()
    timeoutState.current = window.setTimeout(() => closeTooltip(event), timeout)
  }

  const onMouseEnter = (event: React.MouseEvent) => {
    event.preventDefault()
    if (timeoutState.current) clearTimeout(timeoutState.current)
  }
  const positionStyle = position || 'bottom'
  const regionData = item && item.regionData
  if (!regionData || !currencyMap) return null
  const priceListWithExpiryDiscount = PurchaseHelper.makePaymentOptionWithExpiryDiscount(regionData, currencyMap)

  return (
    <React.Fragment>
      {priceListWithExpiryDiscount[0] && priceListWithExpiryDiscount[0].regionData.discountExpireAt && (
        <div className="discountCountdownWrapper" onMouseLeave={closeTooltipOnMouseLeave} onMouseEnter={onMouseEnter}>
          <span className="discountCountdownWidget" onClick={toggleTooltip}>
            <ClockIcon className="clockIcon" />
            {showDetail && <Trans i18nKey="DiscountCountdown.end">Discount will end in</Trans>}{' '}
            {getExpireCountdown(priceListWithExpiryDiscount[0].regionData.discountExpireAt)}
            &nbsp;&gt;
          </span>

          <div
            className={classNames('tooltipCountdownWidget', positionStyle, {
              open: isTooltipCountdownWigdetOpen
            })}>
            <div className="tooltipTextWrapper">
              {priceListWithExpiryDiscount.map(priceData => (
                <div key={priceData.currencySymbol} className="tooltipText">
                  <b>{RegionDataItemHelper.calculateDiscountPercentage(priceData.regionData)}%</b>{' '}
                  <Trans i18nKey="DiscountCountdown.for">off for</Trans>{' '}
                  <b>
                    {priceData.currencySymbol} {priceData.finalPrice}
                  </b>{' '}
                  <Trans i18nKey="DiscountCountdown.expire">will expire in</Trans>{' '}
                  <b>{getExpireCountdown(priceData.regionData.discountExpireAt)}</b>
                </div>
              ))}
            </div>
            <div className="tooltipCloseButton" onClick={closeTooltip}>
              &times;
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  )
}

function getExpireCountdown(expireAt: string | null | undefined) {
  if (expireAt) {
    return formatDistanceToNow(parseISO(expireAt), { addSuffix: true })
  }
  return null
}
