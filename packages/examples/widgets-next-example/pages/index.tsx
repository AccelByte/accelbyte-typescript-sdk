/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React, { useEffect, useMemo, useState } from 'react'
import Head from 'next/head'
import { Accelbyte } from '@accelbyte/sdk'
import '@accelbyte/widgets-v2/dist/style.css'
import { Iam, IamOAuthClient } from '@accelbyte/sdk-iam'
import { getLocalStorage } from '../helper/localStorage'
import { useRouter } from 'next/router'
import { AppStore, RouteUtils, SdkWidget, SingleGameStoreWrapper, SingleInGameItemsStore, StoreWidget } from '@accelbyte/widgets-v2'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

const sdk = Accelbyte.SDK({
  options: {
    baseURL: 'http://localhost:3030/api',
    clientId: '77f88506b6174c3ea4d925f5b4096ce8',
    namespace: 'accelbyte',
    redirectURI: 'http://localhost:3030'
  }
})

export const PlayerPortalRoutes = RouteUtils.createWidgetRoutes({})

const WidgetLink = (props: any) => {
  return <Link {...props} href={props.to} />
}

export default function Home() {
  const router = useRouter()
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false)
  const [isLoading, setisLoading] = useState(false)

  const location = useMemo(() => {
    return {
      pathname: router.pathname,
      search: new URLSearchParams(router.query as Record<string, string>).toString(),
      state: undefined,
      key: '',
      hash: ''
    }
  }, [router.pathname, router.query])

  useEffect(() => {
    const getCurrentUser = async () => {
      const accessToken = getLocalStorage('access_token')
      if (!accessToken) {
        router.push('/auth')
      }

      try {
        setisLoading(true)
        const response = await Iam.UsersApi(sdk, {
          config: {
            headers: {
              authorization: `Bearer ${accessToken}`
            }
          }
        }).getUsersMe()
        if (!response?.userId) {
          router.push('/auth')
        } else {
          setIsUserAuthenticated(true)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setisLoading(false)
      }
    }

    getCurrentUser()
  }, [])

  const onClickLogout = async () => {
    await new IamOAuthClient(sdk).logout()
    setIsUserAuthenticated(false)
  }

  return (
    <>
      <Head>
        <title>Welcome to Accelbyte NEXT JS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>Welcome to Accelbyte NEXT JS</p>
          {isLoading ? (
            'loading ...'
          ) : (
            <>
              {isUserAuthenticated ? (
                <>
                  <div style={{ height: '100%', width: '100%' }}>
                    <SdkWidget
                      sdkOptions={{
                        baseURL: 'http://localhost:3030/api',
                        clientId: '77f88506b6174c3ea4d925f5b4096ce8',
                        namespace: 'accelbyte',
                        redirectURI: 'http://localhost:3030'
                      }}
                      Link={WidgetLink}
                      NavLink={WidgetLink}
                      history={{
                        // This is to support Next.js with a dynamic base path and make it similar to any other application.
                        // We need to remove the base path from location.pathname and add the base path when navigating.
                        location,
                        push: to => router.push(to),
                        replace: to => router.replace(to)
                      }}
                      onInitializeSDK={sdk => console.info('initialized', sdk)}
                      routes={PlayerPortalRoutes}>
                      <StoreWidget>
                        {({ isSingleGame }) => {
                          return <StoreSection isSingleGame={isSingleGame} />
                        }}
                      </StoreWidget>
                    </SdkWidget>

                    <span>user is Logged in</span>
                    <button className={styles.loginButton} onClick={onClickLogout}>
                      Log out
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <span>user is not Logged in</span>
                  <button className={styles.loginButton} onClick={() => router.push('/auth')}>
                    Log in
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </main>
    </>
  )
}

function StoreSection(props: { isSingleGame: boolean }) {
  const router = useRouter()

  if (props.isSingleGame) {
    return (
      <SingleGameStoreWrapper>
        {storeProps => {
          return <SingleInGameItemsStore {...storeProps} />
        }}
      </SingleGameStoreWrapper>
    )
  }

  const page = router.query.page ? Number(router.query.page) : 1
  return <AppStore page={page} />
}
