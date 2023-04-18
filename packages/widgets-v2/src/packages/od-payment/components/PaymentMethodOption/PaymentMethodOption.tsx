/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { PaymentProvider } from '@od-payment/models/Payment'
import AliPaySVG from '@od-assets/images/aliPay.svg'
import CreditCardSVG from '@od-assets/images/creditCard.svg'
import PaypalSVG from '@od-assets/images/paypal.svg'
import WalletSVG from '@od-assets/images/wallet.svg'
import WeChatPaySVG from '@od-assets/images/weChatPay.svg'
import classNames from 'classnames'
import { PaymentMethod, PaymentMethodArray } from '@accelbyte/sdk-platform'
import React, { useEffect, useState } from 'react'
import styles from './PaymentMethodOption.module.scss'

interface Props {
  paymentMethods: PaymentMethodArray
  activePaymentMethod: PaymentMethod
  onPaymentMethodChange: (paymentMethod: PaymentMethod) => void
  disabled: boolean
}

interface PaymentProviderAsset {
  image: string
  text?: string
  classNames?: string
}

const PAYMENT_PROVIDER_ASSETS: { [key: string]: PaymentProviderAsset } = {
  [PaymentProvider.enum.PAYPAL]: { image: PaypalSVG, text: 'PayPal' },
  [PaymentProvider.enum.ALIPAY]: { image: AliPaySVG, text: 'Ali Pay' },
  [PaymentProvider.enum.STRIPE]: { image: CreditCardSVG, text: 'Credit Card', classNames: styles.creditCard },
  [PaymentProvider.enum.WXPAY]: { image: WeChatPaySVG, text: 'WxPay' }
}

function getPaymentProviderAsset(paymentProvider: string): PaymentProviderAsset {
  const asset = PAYMENT_PROVIDER_ASSETS[paymentProvider]
  if (asset) return asset

  return {
    image: WalletSVG,
    text: 'Other Methods',
    classNames: styles.wallet
  }
}

export const PaymentMethodOption = ({ paymentMethods, activePaymentMethod, onPaymentMethodChange, disabled }: Props) => {
  const [disableOption, setDisableOption] = useState<boolean>(disabled)

  useEffect(() => {
    setDisableOption(disabled)
  }, [disabled])

  return (
    <>
      {paymentMethods.map(paymentMethod => {
        const paymentProviderAsset = getPaymentProviderAsset(paymentMethod.paymentProvider)
        return (
          <div
            key={`payment-method-checkbox-${paymentMethod.paymentProvider}`}
            onClick={() => onPaymentMethodChange(paymentMethod)}
            className={classNames(styles.option, {
              [styles.active!]: activePaymentMethod === paymentMethod,
              [styles.disabled!]: disableOption
            })}>
            <div className={classNames(styles.image, paymentProviderAsset.classNames)}>
              <img src={paymentProviderAsset.image} alt={paymentMethod.paymentProvider} />
            </div>
            <div className={styles.text}>{paymentProviderAsset.text}</div>
          </div>
        )
      })}
    </>
  )
}
