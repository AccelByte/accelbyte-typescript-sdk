/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import { login, logout } from '~/sdk'
import styles from '../styles/Home.module.css'
import { CurrencyInfo, ItemPagingSlicedResult, Platform } from '@accelbyte/sdk-platform'
import { initializeSDK } from '../helper/sdkHelper'
import { Layout } from '../components/Layout'
import useAuth from '../hooks/useAuth'

const sdk = initializeSDK()

interface TestSdkReturnType {
  listOfCurrencies: CurrencyInfo[] | null | undefined
  listOfItems: ItemPagingSlicedResult | null | undefined
}

const getPromiseSettledResult = <T,>(result: PromiseSettledResult<T>) => {
  if (result.status === 'rejected') return null
  return result.value || null
}

export const getServerSideProps: GetServerSideProps<{ data: TestSdkReturnType }> = async ({ req }) => {
  const [listOfCurrencies, listOfItems] = await Promise.allSettled([
    Platform.CurrencyApi(sdk).getCurrencies(),
    Platform.ItemApi(sdk).getItemsByCriteria({})
  ])

  return {
    props: {
      data: {
        listOfCurrencies: getPromiseSettledResult(listOfCurrencies),
        listOfItems: getPromiseSettledResult(listOfItems)
      }
    }
  }
}

// Page.
export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const { user } = useAuth()

  return (
    <Layout>
      <Head>
        <title>AccelByte SDK Next.js Example</title>
        <meta name="description" content="AccelByte SDK Next.js Example" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.home}>
          <h3>The Login Button below is using native SDK function</h3>
          {!user ? (
            <button className={styles.authBtn} onClick={() => login(sdk)}>
              Log in
            </button>
          ) : (
            <div className={styles.loggedIn}>
              <h3>
                Logged in as: {user.displayName} - {user.emailAddress}
              </h3>
              <button className={styles.authBtn} onClick={() => logout(sdk)}>
                Log out
              </button>
            </div>
          )}
        </div>
        <div className={styles.responses} id="response">
          <h4 style={{ fontSize: 16 }}>SDK Responses:</h4>
          <Collapsible json={user} title={'currentUserInfo'} />
          {Object.keys(data).map(key => (
            <Collapsible key={key} json={data[key as keyof TestSdkReturnType]} title={key} />
          ))}
        </div>
      </main>
    </Layout>
  )
}

// composing components.
function Collapsible(props: { title: string; json: any }) {
  return (
    <details id={'toogle' + props.title}>
      <summary style={{ cursor: 'pointer' }}>{props.title}</summary>
      <pre id={props.title}>{JSON.stringify(props.json, null, 2)}</pre>
    </details>
  )
}
