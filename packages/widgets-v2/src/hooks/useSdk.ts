/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelbyteSDK, SDKOptions } from '@accelbyte/sdk'
import { createStore, useStore } from './useStore'

const store = createStore<AccelbyteSDK>()

export function useSdk() {
  return useStore(store)
}

const sdkOptionsStore = createStore<SDKOptions>()
export function useSdkOptions() {
  return useStore(sdkOptionsStore)
}
