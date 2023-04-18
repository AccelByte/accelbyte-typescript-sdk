/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { ComponentProps } from 'react'

import PaymentBox from '@od-ecommerce/pages/Orders/PaymentBox/PaymentBox'

export type OnClosePaymentDialogHandler = NonNullable<ComponentProps<typeof PaymentBox>['onClosePaymentDialog']>

export interface PaymentWidgetProps {
  orderNo: string
  redirectPath?: string
  onClosePaymentDialog?: OnClosePaymentDialogHandler
  isOnlyShowCloseButton?: boolean
}

export class PaymentWidget extends React.Component<PaymentWidgetProps> {
  checkoutJs: HTMLScriptElement

  constructor(props: PaymentWidgetProps) {
    super(props)
    this.checkoutJs = document.createElement('script')
  }

  componentDidMount() {
    this.checkoutJs.src = 'https://cdn.checkout.com/js/framesv2.min.js'
    this.checkoutJs.async = true

    document.body.appendChild(this.checkoutJs)
  }

  componentWillUnmount() {
    document.body.removeChild(this.checkoutJs)
  }

  render() {
    return (
      <div className="paymentWidget">
        <PaymentBox {...this.props} />
      </div>
    )
  }
}
