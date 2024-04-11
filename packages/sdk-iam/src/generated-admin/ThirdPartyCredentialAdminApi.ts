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
import { CheckAvailabilityResponse } from '../generated-definitions/CheckAvailabilityResponse.js'
import { PlatformDomainDeleteRequest } from '../generated-definitions/PlatformDomainDeleteRequest.js'
import { PlatformDomainResponse } from '../generated-definitions/PlatformDomainResponse.js'
import { PlatformDomainUpdateRequest } from '../generated-definitions/PlatformDomainUpdateRequest.js'
import { ThirdPartyCredentialAdmin$ } from './endpoints/ThirdPartyCredentialAdmin$.js'
import { ThirdPartyLoginPlatformCredentialRequest } from '../generated-definitions/ThirdPartyLoginPlatformCredentialRequest.js'
import { ThirdPartyLoginPlatformCredentialResponse } from '../generated-definitions/ThirdPartyLoginPlatformCredentialResponse.js'
import { ThirdPartyLoginPlatformCredentialResponseArray } from '../generated-definitions/ThirdPartyLoginPlatformCredentialResponseArray.js'

export function ThirdPartyCredentialAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)
  const isZodEnabled = typeof window !== 'undefined' && localStorage.getItem('ZodEnabled') !== 'false'

  /**
   * This is the API to check specific 3rd party platform availability. Passing platform group name or it&#39;s member will return same platform availability data Supported third party platform and platform group: - PSN group(psn) - ps4web - ps4 - ps5
   */
  async function getAvailability_ByPlatformId(platformId: string): Promise<CheckAvailabilityResponse> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getAvailability_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Get All Active 3rd Platform Credential.
   */
  async function getPlatformsAllClients(): Promise<ThirdPartyLoginPlatformCredentialResponseArray> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPlatformsAllClients()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Get All Active 3rd Platform Credential.
   */
  async function getPlatformsAllClientsActive(): Promise<ThirdPartyLoginPlatformCredentialResponseArray> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getPlatformsAllClientsActive()
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Delete 3rd Platform Credential.
   */
  async function deleteClient_ByPlatformId(platformId: string): Promise<unknown> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteClient_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Get 3rd Platform Credential.
   */
  async function getClients_ByPlatformId(platformId: string): Promise<ThirdPartyLoginPlatformCredentialResponse> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.getClients_ByPlatformId(platformId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Add 3rd Platform Credential. - The secret for **apple** is base64 encoded private key. - No secret for **awscognito**, we only need to configure AWS Cognito Region and User Pool - The secret for **discord** is client secret of the twitch client id. - The secret for **epicgames** is client secret of the epicgames client id. - The secret for **facebook** is client secret of the facebook client id. - The secret for **google** is client secret of the google OAuth client. - No secret for **nintendo**, we only need to configure app id of the game - No secret for **netflix**, we configure the Root, Public, Private Key certificate pem file and target environment; value: [sandbox, production] - The secret for **oculus** is app secret of the oculus app. - The secret for **ps4, ps5, and ps4web** is client secret of the psn web server. - The secret for **steam** is the Steam Web API Key. - The secret for **steamopenid** is the Steam Web API Key. - The secret for **twitch** is client secret of the twitch client. - The secret for **live** is the Relying Party Private Key in base64 encode PEM format. - The secret for **xblwebapi** is client secret of the xbl client. If generic oauth flow is set to true: - Current supported value for TokenAuthenticationType is **code, idToken and bearerToken** - &lt;code&gt;TokenClaimsMapping&lt;/code&gt; is used to extract user info from idToken claims or user info endpoint response accessed using bearerToken. Its a JSON format with key should be &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;email&lt;/code&gt; and &lt;code&gt;avatarUrl&lt;/code&gt; since IAM will look up for these key when extracting user info.**default claims keys : userIdentity/sub, name, email and avatarUrl/picture**
   */
  async function patchClient_ByPlatformId(
    platformId: string,
    data: ThirdPartyLoginPlatformCredentialRequest
  ): Promise<ThirdPartyLoginPlatformCredentialResponse> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.patchClient_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to Add 3rd Platform Credential. - The secret for **apple** is base64 encoded private key. - No secret for **awscognito**, we only need to configure AWS Cognito Region and User Pool - The secret for **discord** is client secret of the twitch client id. - The secret for **epicgames** is client secret of the epicgames client id. - The secret for **facebook** is client secret of the facebook client id. - The secret for **google** is client secret of the google OAuth client. - No secret for **nintendo**, we only need to configure app id of the game - No secret for **netflix**, we configure the Root, Public, Private Key certificate pem file and target environment; value: [sandbox, production] - The secret for **oculus** is app secret of the oculus app. - The secret for **ps4, ps5, and ps4web** is client secret of the psn web server. - The secret for **steam** is the Steam Web API Key. - The secret for **steamopenid** is the Steam Web API Key. - The secret for **twitch** is client secret of the twitch client. - The secret for **live** is the Relying Party Private Key in base64 encode PEM format. - The secret for **xblwebapi** is client secret of the xbl client. If generic oauth flow is set to true: - Current supported value for TokenAuthenticationType are **code, idToken and bearerToken** - &lt;code&gt;TokenClaimsMapping&lt;/code&gt; is used to extract user info from idToken claims or user info endpoint response accessed using bearerToken. Its a JSON format with key should be &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;email&lt;/code&gt; and &lt;code&gt;avatarUrl&lt;/code&gt; since IAM will look up for these key when extracting user info. **default claims keys : userIdentity/sub, name, email and avatarUrl/picture**
   */
  async function createClient_ByPlatformId(
    platformId: string,
    data: ThirdPartyLoginPlatformCredentialRequest
  ): Promise<ThirdPartyLoginPlatformCredentialResponse> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.createClient_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to unregister 3rd Platform domain.
   */
  async function deleteClientDomain_ByPlatformId(platformId: string, data: PlatformDomainDeleteRequest): Promise<unknown> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.deleteClientDomain_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * This is the API to set 3rd Platform domain.
   */
  async function updateClientDomain_ByPlatformId(platformId: string, data: PlatformDomainUpdateRequest): Promise<PlatformDomainResponse> {
    const $ = new ThirdPartyCredentialAdmin$(Network.create(requestConfig), namespace, isZodEnabled)
    const resp = await $.updateClientDomain_ByPlatformId(platformId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getAvailability_ByPlatformId,
    getPlatformsAllClients,
    getPlatformsAllClientsActive,
    deleteClient_ByPlatformId,
    getClients_ByPlatformId,
    patchClient_ByPlatformId,
    createClient_ByPlatformId,
    deleteClientDomain_ByPlatformId,
    updateClientDomain_ByPlatformId
  }
}
