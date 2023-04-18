/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { OrderHistory, OrderHistoryProps } from '@od-account/pages/OrderHistory/OrderHistory'

export function OrderHistoryWidget(props: Pick<OrderHistoryProps, 'page'>) {
  return <OrderHistory {...props} />
}
