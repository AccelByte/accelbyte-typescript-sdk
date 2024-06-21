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
import { PublicThirdPartyPlatformInfoArray } from '../generated-definitions/PublicThirdPartyPlatformInfoArray.js'
import { ThirdPartyCredential$ } from './endpoints/ThirdPartyCredential$.js'

export function ThirdPartyCredentialApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const useSchemaValidation = sdkAssembly.useSchemaValidation

  /**
   * This is the Public API to Get All Active OIDC Platform Credential By Client ID
   */
  async function getPlatformsClientsOidc(queryParams: { clientId: string | null }): Promise<PublicThirdPartyPlatformInfoArray> {
    const $ = new ThirdPartyCredential$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPlatformsClientsOidc(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the Public API to Get All Active 3rd Platform Credential.
   */
  async function getPlatformsClientsActive(): Promise<PublicThirdPartyPlatformInfoArray> {
    const $ = new ThirdPartyCredential$(Network.create(requestConfig), namespace, useSchemaValidation)
    const resp = await $.getPlatformsClientsActive()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPlatformsClientsOidc,
    getPlatformsClientsActive
  }
}
