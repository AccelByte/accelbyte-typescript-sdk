/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { PaymentAlert } from '@od-payment/components/PaymentAlert/PaymentAlert'
import { WebViewClient } from '@od-payment/components/WebviewClient/WebviewClient'
import { PaymentProvider, PaymentType } from '@od-payment/models/Payment'
import { AlertType } from '@od-shared/models/Alert'
import { PaymentMethod, PaymentOrderDetails, PaymentUrl } from '@accelbyte/sdk-platform'
import React from 'react'
import { AdyenHandler } from './PaymentHandler/Adyen/AdyenHandler'
import { CheckoutHandler } from './PaymentHandler/Checkout/CheckoutHandler'
import { PaypalHandler } from './PaymentHandler/PayPal/PayPalHandler'
import { QRCodeHandler } from './PaymentHandler/QRCode/QRCodeHandler'
import { StripeHandler } from './PaymentHandler/Stripe/StripeHandler'

interface Props {
  activePaymentMethod: PaymentMethod
  paymentUrl?: PaymentUrl | null
  paymentOrderDetails: PaymentOrderDetails
}

export const PaymentMethodHandler = ({ activePaymentMethod, paymentUrl, paymentOrderDetails }: Props) => {
  if (!paymentUrl) {
    return <CheckoutHandler paymentOrderDetails={paymentOrderDetails} paymentProvider={activePaymentMethod.paymentProvider} />
  }

  // Custom Payment Handler START
  if (paymentUrl.paymentProvider === PaymentProvider.enum.ADYEN) {
    return <AdyenHandler paymentOrderDetails={paymentOrderDetails} paymentUrl={paymentUrl} />
  }

  if (paymentUrl.paymentProvider === PaymentProvider.enum.STRIPE) {
    return <StripeHandler paymentOrderDetails={paymentOrderDetails} paymentUrl={paymentUrl} />
  }

  if (paymentUrl.paymentProvider === PaymentProvider.enum.PAYPAL) {
    return <PaypalHandler paymentUrl={paymentUrl} />
  }
  // Custom Payment Handler END

  // Default handler payment by paymentType
  switch (paymentUrl.paymentType) {
    case PaymentType.enum.LINK:
      return <WebViewClient url={paymentUrl.paymentUrl || undefined} />
    case PaymentType.enum.QR_CODE:
      return <QRCodeHandler paymentUrl={paymentUrl} />
    default:
      return (
        <PaymentAlert
          type={AlertType.warning}
          message={'No payment method available for this purchase, Please contact our administrator if you see this error'}
        />
      )
  }
}
