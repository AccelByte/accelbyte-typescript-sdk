/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import './OrderPage.scss'
import { PaymentPage, PaymentPageProps } from '@od-payment/pages/PaymentPage/PaymentPage'

type Props = Omit<PaymentPageProps, 'isOnlyShowCloseButton'>

export function OrderPage(props: Props) {
  // TODO: proper backgroudn change
  // componentDidMount() {
  //   UIEvent.updateBackground(`url(${bgCommon})`)
  // }

  return (
    <main className="orderDetailPage">
      <PaymentPage {...props} />
    </main>
  )
}
