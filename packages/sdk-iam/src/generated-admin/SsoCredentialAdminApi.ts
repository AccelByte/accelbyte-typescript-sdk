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
import { SsoCredentialAdmin$ } from './endpoints/SsoCredentialAdmin$.js'
import { SsoPlatformCredentialRequest } from '../generated-definitions/SsoPlatformCredentialRequest.js'
import { SsoPlatformCredentialResponse } from '../generated-definitions/SsoPlatformCredentialResponse.js'
import { SsoPlatformCredentialResponseArray } from '../generated-definitions/SsoPlatformCredentialResponseArray.js'

export function SsoCredentialAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isValidationEnabled = args?.isValidationEnabled !== false

  /**
   * This is the API to Get All Active SSO Platform Credential.
   */
  async function getPlatformsSso(queryParams?: { limit?: number; offset?: number }): Promise<SsoPlatformCredentialResponseArray> {
    const $ = new SsoCredentialAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getPlatformsSso(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Delete SSO Platform Credential.
   */
  async function deleteSso_ByPlatformId(platformId: string): Promise<unknown> {
    const $ = new SsoCredentialAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.deleteSso_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Get SSO Platform Credential.
   */
  async function getSso_ByPlatformId(platformId: string): Promise<SsoPlatformCredentialResponse> {
    const $ = new SsoCredentialAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.getSso_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Delete SSO Platform Credential.
   */
  async function patchSso_ByPlatformId(platformId: string, data: SsoPlatformCredentialRequest): Promise<SsoPlatformCredentialResponse> {
    const $ = new SsoCredentialAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.patchSso_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Add SSO Platform Credential. ## Supported platforms: - **discourse** the ssoUrl of the discourse is the discourse forum url. example: https://forum.example.com - **azure with SAML** **appId** is an application identifier in IdP, in azure it&#39;s called EntityID **acsUrl** is an endpoint on the service provider where the identity provider will redirect to with its authentication response. example: /iam/v3/sso/saml/azuresaml/authenticate **federationMetadataUrl** is an endpoint on the Identity Provider(IdP) to get IdP federation metadata for service provider to build trust relationship
   */
  async function createSso_ByPlatformId(platformId: string, data: SsoPlatformCredentialRequest): Promise<SsoPlatformCredentialResponse> {
    const $ = new SsoCredentialAdmin$(Network.create(requestConfig), namespace, cache, isValidationEnabled)
    const resp = await $.createSso_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getPlatformsSso,
    deleteSso_ByPlatformId,
    getSso_ByPlatformId,
    patchSso_ByPlatformId,
    createSso_ByPlatformId
  }
}
