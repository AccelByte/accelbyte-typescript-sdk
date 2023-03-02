/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccountInterceptorsWidget, EcommerceInterceptorsWidget, LoginWidget, SdkWidget } from '@accelbyte/widgets'
import { AccelbyteSDK, UserResponseV3 } from '@accelbyte/sdk'
import React from 'react'
import '@accelbyte/widgets/dist/style.css'
import './App.css'
import { PaymentScenario } from './PaymentScenario'

const SDK_CONFIG = {
  // Redirect to proxy, to be forwarded to the AccelByte backend's URL.
  baseURL: `${window.location.origin}/api`,
  clientId: '77f88506b6174c3ea4d925f5b4096ce8',
  namespace: 'accelbyte',
  redirectURI: 'http://localhost:3030'
}

function App({ sdk }: { sdk: AccelbyteSDK | null }) {
  const [user, setUser] = React.useState<UserResponseV3 | null>(null)

  return (
    <>
      {AccountInterceptorsWidget()}
      {EcommerceInterceptorsWidget()}

      {!user && (
        <>
          <p>Login first to fetch the items</p>

          <LoginWidget onUpdateUser={setUser} />
        </>
      )}

      {user && <PaymentScenario sdk={sdk} user={user} />}
    </>
  )
}

export default function Main() {
  const [sdk, setSdk] = React.useState<AccelbyteSDK | null>(null)

  return (
    <main>
      <React.Suspense fallback={<div>Loading...</div>}>
        <SdkWidget sdkOptions={SDK_CONFIG} onInitializeSDK={setSdk}>
          <App sdk={sdk} />
        </SdkWidget>
      </React.Suspense>
    </main>
  )
}
