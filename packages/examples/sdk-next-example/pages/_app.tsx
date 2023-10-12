/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import '../styles/globals.css'
// You can choose to import the pre-defined Widgets-V2
// Or Defining your own style by overriding the existing styles
import '@accelbyte/widgets-v2/lib/style.css'
import React, { useMemo } from 'react'
import type { AppProps } from 'next/app'
import { SdkWidget } from '@accelbyte/widgets-v2'
import { RouteUtils } from '@accelbyte/widgets-v2/lib/utils'
import { AuthCodeExchangeWidget } from '@accelbyte/widgets-v2/lib/interceptors'
import { initializeSDK } from '../helper/sdkHelper'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { AuthProvider } from '../context/AuthProvider'

const sdk = initializeSDK()
const WidgetInternalRoutes = RouteUtils.createWidgetRoutes({})

const WidgetLink = (props: any) => {
  return <Link {...props} href={props.to} />
}

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const location = useMemo(() => {
    return {
      pathname: router.pathname,
      search: new URLSearchParams(router.query as Record<string, string>).toString(),
      state: undefined,
      key: '',
      hash: ''
    }
  }, [router.pathname, router.query])

  return (
    <AuthProvider>
      <SdkWidget
        sdkOptions={sdk.assembly()}
        Link={WidgetLink}
        NavLink={WidgetLink}
        history={{
          // This is to support Next.js with a dynamic base path and make it similar to any other application.
          // We need to remove the base path from location.pathname and add the base path when navigating.
          location,
          push: to => router.push(to),
          replace: to => router.replace(to)
        }}
        routes={WidgetInternalRoutes}>
        <AuthCodeExchangeWidget />
        <Component {...pageProps} />
      </SdkWidget>
    </AuthProvider>
  )
}
