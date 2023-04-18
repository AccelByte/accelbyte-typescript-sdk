/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { EcomPath } from '@od-shared/routes/EcomPath'
import React from 'react'
import { Route } from 'react-router-dom'

import PaymentSuccessCallback from '@od-ecommerce/pages/Orders/OrderPage/PaymentSuccessCallback'

export const EcommerceInterceptorsWidget = () => {
  return [
    <Route exact key="PaymentSuccessCallbackPage" path={EcomPath.PaymentSuccessCallback.link} render={() => <PaymentSuccessCallback />} />
  ]
}
