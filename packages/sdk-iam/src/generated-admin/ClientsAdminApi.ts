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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ClientCreationV3Request } from '../generated-definitions/ClientCreationV3Request.js'
import { ClientPermissionsV3 } from '../generated-definitions/ClientPermissionsV3.js'
import { ClientUpdateV3Request } from '../generated-definitions/ClientUpdateV3Request.js'
import { ClientV3Response } from '../generated-definitions/ClientV3Response.js'
import { ClientsUpdateRequestV3 } from '../generated-definitions/ClientsUpdateRequestV3.js'
import { ClientsV3Response } from '../generated-definitions/ClientsV3Response.js'
import { V3ClientUpdateSecretRequest } from '../generated-definitions/V3ClientUpdateSecretRequest.js'
import { ClientsAdmin$ } from './endpoints/ClientsAdmin$.js'

export function ClientsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getClients_v3(queryParams?: {
    clientId?: string | null
    clientName?: string | null
    clientType?: string | null
    limit?: number
    offset?: number
    skipLoginQueue?: boolean | null
  }): Promise<AxiosResponse<ClientsV3Response>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClients_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createClient_v3(data: ClientCreationV3Request): Promise<AxiosResponse<ClientV3Response>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createClient_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateClient_v3(data: ClientsUpdateRequestV3): Promise<AxiosResponse<unknown>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClient_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateSecret_ByClientId_v3(clientId: string, data: V3ClientUpdateSecretRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSecret_ByClientId_v3(clientId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteClient_ByClientId_v3(clientId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClient_ByClientId_v3(clientId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getClient_ByClientId_v3(clientId: string): Promise<AxiosResponse<ClientV3Response>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClient_ByClientId_v3(clientId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchClient_ByClientId_v3(clientId: string, data: ClientUpdateV3Request): Promise<AxiosResponse<ClientV3Response>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchClient_ByClientId_v3(clientId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByClientId_v3(clientId: string, data: ClientPermissionsV3): Promise<AxiosResponse<unknown>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByClientId_v3(clientId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updatePermission_ByClientId_ByNS_v3(clientId: string, data: ClientPermissionsV3): Promise<AxiosResponse<unknown>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePermission_ByClientId_ByNS_v3(clientId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deletePermission_ByClientId_ByResource_ByAction_v3(
    clientId: string,
    resource: string,
    action: number
  ): Promise<AxiosResponse<unknown>> {
    const $ = new ClientsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePermission_ByClientId_ByResource_ByAction_v3(clientId, resource, action)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * action code: 10308
     */
    getClients_v3,
    /**
     * Add a new OAuth 2.0 client A new client automatically granted with these scopes: commerce, account, analytics, publishing, social. **Note for Multi Tenant Mode (Confidential Client):** Only Super admin can set permission with resource &amp; action. Studio admin &amp; game admin need set permission with permission module. action code: 10301 **Fields Description:** - **clientId** : The client ID. e.g f815e5c44f364993961be3b3f26a7bf4 - **clientName** : The client name. e.g E-commerce - **secret** : The client&#39;s secret. It&#39;s empty if the client&#39;s type is a public client. Otherwise, the client secret is required - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. e.g https://example.net/platform - **oauthClientType** : The OAuth 2.0 client type. The client type determines whether the authorization needs Proof Of Key Exchange or not. A public client type doesn&#39;t have a client secret and should use PKCE flow. A confidential client type has a client secret and don&#39;t use PKCE flow Supported oAuthClientType : - **Public** - **Confidential** - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used for making sure the token is intended to be used by the client. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). default value: true - **clientPlatform**: available client platform (optional). default value: &#34;&#34; - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, default value: SECONDS - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, default value: SECONDS
     */
    createClient_v3,
    /**
     * Updates multiple OAuth 2.0 clients. Specify only the fields you want to update in the request payload, e.g. {&#34;ClientName&#34;:&#34;E-commerce&#34;, &#34;BaseUri&#34;:&#34;https://example.net&#34;} **Note for Multi Tenant Mode (Confidential Client):** Only Super admin can set permission with resource &amp; action. Studio admin &amp; game admin need set permission with permission module. action code: 10302 **Fields Description:** - **clientName** : The client name. It should not be empty if the field exists in the body. e.g E-commerce - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. It should not be empty if the field exists in the body. e.g https://example.net/platform - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used in the audience checking for making sure the token is used by the right resource server. Required if the application type is a server. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). e.g. true - **clientPlatform** : available client platform (optional). default value: &#34;&#34;. - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, will use previous value if not specified - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, will use previous value if not specified - **skipLoginQueue**: a flag to indicate whether this client should be exempted from login queue or not
     */
    updateClient_v3,
    /**
     * Update Client Secret
     */
    updateSecret_ByClientId_v3,
    /**
     * action code : 10310
     */
    deleteClient_ByClientId_v3,
    /**
     * action code: 10309
     */
    getClient_ByClientId_v3,
    /**
     * Updates an OAuth 2.0 client. Specify only the fields you want to update in the request payload, e.g. {&#34;ClientName&#34;:&#34;E-commerce&#34;, &#34;BaseUri&#34;:&#34;https://example.net&#34;} **Note for Multi Tenant Mode (Confidential Client):** Only Super admin can set permission with resource &amp; action. Studio admin &amp; game admin need set permission with permission module. action code: 10302 **Fields Description:** - **clientName** : The client name. It should not be empty if the field exists in the body. e.g E-commerce - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. It should not be empty if the field exists in the body. e.g https://example.net/platform - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used in the audience checking for making sure the token is used by the right resource server. Required if the application type is a server. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). e.g. true - **clientPlatform** : available client platform (optional). default value: &#34;&#34;. - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, will use previous value if not specified - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, will use previous value if not specified - **skipLoginQueue**: a flag to indicate whether this client should be exempted from login queue or not
     */
    patchClient_ByClientId_v3,
    /**
     * **Note for Multi Tenant Mode:** This is for super admin only. action code: 10303
     */
    updatePermission_ByClientId_v3,
    /**
     * **Note for Multi Tenant Mode:** This is for super admin only. action code: 10307
     */
    updatePermission_ByClientId_ByNS_v3,
    /**
     * **Note for Multi Tenant Mode:** This is for super admin only. action code : 10304
     */
    deletePermission_ByClientId_ByResource_ByAction_v3
  }
}
