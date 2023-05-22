/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { ReactElement } from 'react'
import { PaymentWidget } from '@accelbyte/widgets-v2'
import { useRouter } from 'next/router'
import { PlayerPortalRoutes } from '..'
import { GAME_NAMESPACE } from '../constants'
import { NextPageWithLayout } from '../_app'
import { Layout } from '../../components/Layout/Layout'

const OrderHistoryDetailPage: NextPageWithLayout = () => {
  const router = useRouter()
  const { orderNo } = router.query

  if (!orderNo) {
    return <div>Not Found</div>
  }

  return <PaymentWidget namespace={GAME_NAMESPACE} paymentOrderNo={orderNo as string} redirectPath={PlayerPortalRoutes.home.link} />
}

OrderHistoryDetailPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default OrderHistoryDetailPage
