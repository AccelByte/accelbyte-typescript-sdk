/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiUtils, Network } from '@accelbyte/sdk'
import { SsoSaml20$ } from './endpoints/SsoSaml20$.js'

export function SsoSaml20Api(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This endpoint authenticates user platform for SAML protocol. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. ## Supported platforms: - **azure** Microsoft login page will redirects to this endpoint after login success as previously defined on authentication request SAML
   */
  async function postAuthenticateSamlSso_ByPlatformId(
    platformId: string,
    queryParams: { state: string | null; code?: string | null; error?: string | null }
  ): Promise<unknown> {
    const $ = new SsoSaml20$(Network.create(requestConfig), namespace, isValidationEnabled)
    const resp = await $.postAuthenticateSamlSso_ByPlatformId(platformId, queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    postAuthenticateSamlSso_ByPlatformId
  }
}
