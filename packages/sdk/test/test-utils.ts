/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Accelbyte } from '../src/AccelbyteSdkFactory'

export const TEST_BASE_URL = 'http://localhost:3000'
export const TEST_NAMESPACE = 'test'
export const TEST_CLIENT_ID = 'test-client-id'
export const TEST_REDIRECT_URI = TEST_BASE_URL

export const TEST_SDK = Accelbyte.SDK({
  options: {
    baseURL: TEST_BASE_URL,
    clientId: TEST_CLIENT_ID,
    namespace: TEST_NAMESPACE,
    redirectURI: TEST_BASE_URL
  }
})
