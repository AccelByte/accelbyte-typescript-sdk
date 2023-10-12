/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Accelbyte } from '@accelbyte/sdk'
import { BASE_URL, CLIENT_ID, NAMESPACE, REDIRECT_URL } from '~/constants'

export const initializeSDK = () =>
  Accelbyte.SDK({
    options: {
      baseURL: BASE_URL,
      clientId: CLIENT_ID,
      namespace: NAMESPACE,
      redirectURI: REDIRECT_URL
    }
  })
