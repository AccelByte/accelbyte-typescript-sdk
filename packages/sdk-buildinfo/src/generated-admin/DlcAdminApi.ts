/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { CreateDependencyLinkRequest } from '../generated-definitions/CreateDependencyLinkRequest.js'
import { RetrieveDependencyLinkResponse } from '../generated-definitions/RetrieveDependencyLinkResponse.js'
import { DlcAdmin$ } from './endpoints/DlcAdmin$.js'

export function DlcAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This API is used to link DLC version(s) against the game version.&lt;p&gt;
   */
  async function updateDlcLink(data: CreateDependencyLinkRequest): Promise<unknown> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.updateDlcLink(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This API is used to retrieve DLC versions against the game version.
   */
  async function getLink_ByBuildId(buildId: string): Promise<RetrieveDependencyLinkResponse> {
    const $ = new DlcAdmin$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getLink_ByBuildId(buildId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    updateDlcLink,
    getLink_ByBuildId
  }
}
