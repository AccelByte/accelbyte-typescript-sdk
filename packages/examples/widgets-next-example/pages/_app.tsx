/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React, { ReactElement, ReactNode, useMemo } from 'react'
import type { AppProps } from 'next/app'
import '@accelbyte/widgets-v2/dist/style.css'
import './../styles/globals.css'
import { AuthProvider } from '../context/AuthProvider'
import { NextPage } from 'next'
import { SdkWidget, RouteUtils } from '@accelbyte/widgets-v2'
import { LOCAL_STORAGE_KEY } from './constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { getLocalStorage, saveToLocalStorage } from '../helper/localStorage'
import { widgetSimplifiedDefaultConfig, initializeSDK } from '../helper/configHelper'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

const sdk = initializeSDK()

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const WidgetLink = (props: any) => {
  return <Link {...props} href={props.to} />
}

export const PlayerPortalRoutes = RouteUtils.createWidgetRoutes({})

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const accessToken = getLocalStorage(LOCAL_STORAGE_KEY.enum.access_token)
  const refreshToken = getLocalStorage(LOCAL_STORAGE_KEY.enum.refresh_token)
  const getLayout = Component.getLayout || (page => page)
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
      {getLayout(
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
          sdkToken={{
            accessToken: accessToken || undefined,
            refreshToken: refreshToken || undefined
          }}
          sdkEvents={{
            onGetUserSession(accessToken: string, refreshToken: string) {
              saveToLocalStorage(LOCAL_STORAGE_KEY.enum.access_token, accessToken)
              saveToLocalStorage(LOCAL_STORAGE_KEY.enum.refresh_token, refreshToken)
            }
          }}
          widgetOptions={widgetSimplifiedDefaultConfig}
          routes={PlayerPortalRoutes}>
          <Component {...pageProps} />
        </SdkWidget>
      )}
    </AuthProvider>
  )
}
