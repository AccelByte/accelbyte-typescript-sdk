/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { SdkWidget } from '@accelbyte/widgets'
import React from 'react'
import ReactDOM from 'react-dom'
import { ConsumerApp } from './ConsumerApp'
import '@accelbyte/widgets/dist/style.css'

ReactDOM.render(
  <React.StrictMode>
    <SdkWidget
      sdkOptions={{
        baseURL: `${window.location.origin}/api`,
        clientId: '77f88506b6174c3ea4d925f5b4096ce8',
        namespace: 'accelbyte',
        redirectURI: 'http://localhost:3030'
      }}>
      <ConsumerApp />
    </SdkWidget>
  </React.StrictMode>,
  document.getElementById('widgets-demo-app')
)
