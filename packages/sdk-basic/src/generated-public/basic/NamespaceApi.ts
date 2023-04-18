/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { Namespace$ } from './endpoints/Namespace$'
import { NamespaceInfoArray } from './definitions/NamespaceInfoArray'
import { NamespacePublisherInfo } from './definitions/NamespacePublisherInfo'

export function NamespaceApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  async function getNamespaces(queryParams?: { activeOnly?: boolean | null }): Promise<NamespaceInfoArray> {
    const $ = new Namespace$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getNamespaces(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  async function getPublisher(): Promise<NamespacePublisherInfo> {
    const $ = new Namespace$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getPublisher()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getNamespaces,
    getPublisher
  }
}
