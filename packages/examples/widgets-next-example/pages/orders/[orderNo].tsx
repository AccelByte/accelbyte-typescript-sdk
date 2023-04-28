/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { PaymentWidget } from '@accelbyte/widgets-v2'
import { useRouter } from 'next/router'
import { PlayerPortalRoutes } from '..'

export default function OrderHistoryDetailPage() {
  const router = useRouter()
  const { orderNo } = router.query

  if (!orderNo) {
    return 'Not Found'
  }

  return <PaymentWidget namespace={'foundations'} paymentOrderNo={orderNo as string} redirectPath={PlayerPortalRoutes.home.link} />
}
