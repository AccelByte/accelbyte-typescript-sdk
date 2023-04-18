/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ArrowIcon, ArrowIconStyles } from '@od-components/components/Icons/ArrowIcon'
import { Spinner, SpinnerStyle } from '@od-components/components/Spinner/Spinner'
import { PaymentOption } from '@od-shared/models/EcommTypes'
import classNames from 'classnames'
import React, { useEffect, useRef, useState } from 'react'
import { Trans } from 'react-i18next'
import './PurchaseButton.scss'
import { RegionDataItem } from '@accelbyte/sdk-platform'

interface PurchaseButtonProps {
  isPurchasing: boolean
  className?: string
  disabled?: boolean
  paymentOptions: PaymentOption[]
  onPurchase: (regionData: RegionDataItem) => unknown
}

export function PurchaseButton({ isPurchasing, onPurchase, paymentOptions, className, disabled }: PurchaseButtonProps) {
  const [isPaymentOptionsShown, setIsPaymentOptionsShown] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onMouseClickOutside = (event: MouseEvent) => {
      if (event.composedPath().includes(buttonRef.current as HTMLButtonElement)) {
        return
      }
      if (!isPaymentOptionsShown) return
      setIsPaymentOptionsShown(false)
    }

    window.addEventListener('click', onMouseClickOutside)

    return () => {
      window.removeEventListener('click', onMouseClickOutside)
    }
  }, [])

  const renderDropdownBuyNowButton = () => {
    return (
      <div className={classNames('purchaseButtonContainer', className)}>
        <button
          ref={buttonRef}
          className={classNames('purchaseButton btn big btn-primary')}
          disabled={disabled}
          onClick={() => setIsPaymentOptionsShown(!isPaymentOptionsShown)}>
          <span>
            <Trans i18nKey="BaseStoreDetailCatalog.purchaseButton">Buy Now</Trans>
          </span>
          <ArrowIcon className={classNames('arrow', isPaymentOptionsShown ? ArrowIconStyles.up : ArrowIconStyles.down)} />
        </button>
        <ul className={classNames('purchaseDropdown', isPaymentOptionsShown && 'open')}>
          {paymentOptions.map(paymentOption => (
            <li
              className="purchaseDropdownOption"
              onClick={() => onPurchase(paymentOption.regionData)}
              key={paymentOption.regionData.currencyCode}>
              <Trans i18nKey="BaseStoreDetailCatalog.purchaseDropdownOption">Buy for...</Trans>
              <span>
                {paymentOption.currencySymbol} {paymentOption.finalPrice}
              </span>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  const renderSingleBuyNowButton = () => {
    return (
      <button
        className={classNames(className, 'purchaseButton btn big btn-primary')}
        disabled={disabled}
        onClick={() => onPurchase(paymentOptions[0].regionData)}>
        <Trans i18nKey="BaseStoreDetailCatalog.purchaseButton">Buy Now</Trans>
      </button>
    )
  }

  const renderLoadingButton = () => {
    return (
      <button className={classNames(className, 'purchaseButton btn big btn-primary')} disabled={true}>
        <Trans i18nKey="BaseStoreDetailCatalog.purchaseButtonPurchasing">Purchasing...</Trans>
        <Spinner className={classNames(SpinnerStyle.inline, 'purchaseButtonSpinner')} />
      </button>
    )
  }

  if (isPurchasing) return renderLoadingButton()
  if (paymentOptions.length === 1) return renderSingleBuyNowButton()
  if (paymentOptions.length > 1) return renderDropdownBuyNowButton()
  return null
}
