/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'

export interface AppUrlParamContext {
  namespace: string
  paymentOrderNo: string
  returnUrl?: string
  paymentStatus?: string
  reason?: string
}

export const AppUrlParamContext = React.createContext<AppUrlParamContext>({
  namespace: '',
  paymentOrderNo: ''
})
