/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { ReactElement } from 'react'
import Head from 'next/head'
import { RouteUtils } from '@accelbyte/widgets-v2'
import { StoreList } from '../components/StoreList/StoreList'
import { NextPageWithLayout } from './_app'
import { Layout } from '../components/Layout/Layout'

export const PlayerPortalRoutes = RouteUtils.createWidgetRoutes({})

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>NEXT.JS Example Using Accelbyte Web Widgets and Web SDK</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <StoreList />
      </div>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
