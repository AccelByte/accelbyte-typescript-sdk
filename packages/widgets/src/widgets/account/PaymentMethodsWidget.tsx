/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'

import PaymentMethodsPage from '@od-account/pages/PaymentMethodsPage/PaymentMethodsPage'

export class PaymentMethodsWidget extends React.Component {
  render() {
    return (
      <div className="paymentMethodsWidget">
        <PaymentMethodsPage />
      </div>
    )
  }
}
