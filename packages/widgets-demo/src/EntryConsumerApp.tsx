/*
 * Copyright (c) 2018-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { SdkWidget } from '@accelbyte/widgets'
import React from 'react'
import ReactDOM from 'react-dom'
import { Env } from './constants/Env'
import { ConsumerApp } from './ConsumerApp'
import '@accelbyte/widgets/dist/style.css'

ReactDOM.render(
  <React.StrictMode>
    <SdkWidget
      sdkOptions={{
        baseURL: Env.IS_DEV_MODE ? `${window.location.origin}/api` : Env.BASE_URL,
        clientId: Env.CLIENT_ID,
        redirectURI: Env.REDIRECT_URL,
        namespace: Env.NAMESPACE
      }}>
      <ConsumerApp />
    </SdkWidget>
  </React.StrictMode>,
  document.getElementById('widgets-demo-app')
)
