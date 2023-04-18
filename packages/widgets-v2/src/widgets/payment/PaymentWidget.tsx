/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { useEffect } from 'react'
import { PaymentPageProps } from '@od-payment/pages/PaymentPage/PaymentPage'
import { AppUrlParamContext } from '@od-payment/contexts/AppUrlParamContext'
import { OrderPage } from '@od-payment/pages/OrderPage/OrderPage'

export type OnClosePaymentDialogHandler = PaymentPageProps['onClosePaymentDialog']

export interface PaymentWidgetProps extends AppUrlParamContext {
  redirectPath?: string
  onClosePaymentDialog?: OnClosePaymentDialogHandler
  isOnlyShowCloseButton?: boolean
}

export function PaymentWidget({ paymentOrderNo, namespace, ...props }: PaymentWidgetProps) {
  useEffect(() => {
    const checkoutJs = document.createElement('script')

    checkoutJs.src = 'https://cdn.checkout.com/js/framesv2.min.js'
    checkoutJs.async = true

    document.body.appendChild(checkoutJs)

    return () => {
      document.body.removeChild(checkoutJs)
    }
  }, [])

  return (
    <AppUrlParamContext.Provider value={{ namespace, paymentOrderNo }}>
      <OrderPage {...props} orderNo={paymentOrderNo} />
    </AppUrlParamContext.Provider>
  )
}
