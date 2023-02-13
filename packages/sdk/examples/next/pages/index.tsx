/*
 * Copyright (c) 2018-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import { Accelbyte, CurrencyInfo, DiscoveryConfigData, ItemPagingSlicedResult, NamespaceInfo } from '@accelbyte/sdk'

const SDK_CONFIG = {
  baseURL: 'https://demo.accelbyte.io',
  clientId: '77f88506b6174c3ea4d925f5b4096ce8',
  namespace: 'accelbyte',
  redirectURI: 'http://localhost:3030'
}

const sdk = Accelbyte.SDK({
  options: SDK_CONFIG
})

interface TestSdkReturnType {
  loginURL: string
  listDiscoveryConfigs: DiscoveryConfigData | undefined
  listOfCurrencies: CurrencyInfo[] | undefined
  listOfItems: ItemPagingSlicedResult | undefined
  listOfNamespaces: NamespaceInfo[] | undefined
}

export const getServerSideProps: GetServerSideProps<{ data: TestSdkReturnType }> = async () => {
  const [listDiscoveryConfigs, listOfCurrencies, listOfItems, listOfNamespaces] = await Promise.all([
    sdk.AccelbyteConfig.PublicTemplate().getDiscoveryTemplateConfigs(),

    sdk.Platform.Currency().getCurrencies(),
    sdk.Platform.Item().fetchItemsByCriteria({}),

    // These require authentication and we can't use it right away.
    // Ensure that you have logged in (have cookies) or pass the access token to the `Authorization` header.
    sdk.Basic.Namespace({
      config: {
        headers: {
          Authorization: `Bearer <replace-this-with-access-token>`
        }
      }
    }).getNamespaces()
  ])

  return {
    props: {
      data: {
        loginURL: sdk.IAM.UserAuthorization().createLoginURL(),
        listDiscoveryConfigs: listDiscoveryConfigs.response?.data,
        listOfCurrencies: listOfCurrencies.response?.data,
        listOfItems: listOfItems.response?.data,
        listOfNamespaces: listOfNamespaces.response?.data || null
      }
    }
  }
}

// Page.
export default function Home({ data }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by editing&nbsp;
            <code className={styles.code}>pages/index.tsx</code>
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer">
              By <Image src="/vercel.svg" alt="Vercel Logo" className={styles.vercelLogo} width={100} height={24} priority />
            </a>
          </div>
        </div>

        <div className={styles.responses}>
          {Object.keys(data).map(key => (
            <Collapsible key={key} json={data[key as keyof TestSdkReturnType]} title={key} />
          ))}
        </div>
      </main>
    </>
  )
}

// composing components.
function Collapsible(props: { title: string; json: any }) {
  return (
    <details>
      <summary>{props.title}</summary>

      <pre>{JSON.stringify(props.json, null, 2)}</pre>
    </details>
  )
}
