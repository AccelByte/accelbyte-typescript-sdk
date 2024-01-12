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
import { ClientCreationV3Request } from '../generated-definitions/ClientCreationV3Request.js'
import { ClientPermissionsV3 } from '../generated-definitions/ClientPermissionsV3.js'
import { ClientUpdateV3Request } from '../generated-definitions/ClientUpdateV3Request.js'
import { ClientV3Response } from '../generated-definitions/ClientV3Response.js'
import { ClientsAdmin$ } from './endpoints/ClientsAdmin$.js'
import { ClientsV3Response } from '../generated-definitions/ClientsV3Response.js'
import { V3ClientUpdateSecretRequest } from '../generated-definitions/V3ClientUpdateSecretRequest.js'

export function ClientsAdminApi(sdk: AccelbyteSDK, args?: ApiArgs) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.namespace ? args?.namespace : sdkAssembly.namespace
  const cache = args?.cache ? args?.cache : sdkAssembly.cache
  const requestConfig = ApiUtils.mergedConfigs(sdkAssembly.config, args)

  /**
   * action code: 10308
   */
  async function getClients(queryParams?: {
    clientId?: string | null
    clientName?: string | null
    clientType?: string | null
    limit?: number
    offset?: number
  }): Promise<ClientsV3Response> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getClients(queryParams)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Add a new OAuth 2.0 client A new client automatically granted with these scopes: commerce, account, analytics, publishing, social. **Note for Multi Tenant Mode:** New Confidential Client will have Default Client Role assigned to it. The role will have all permissions to access all APIs that&#39;s supported by game server SDK and DS uploader. However if **Game Admin** create Confidential Client and the permission(s) are specified in request body, then the Default Client Role will not be assigned. But in this case, the assigned permissions will be restricted in the Default Client Permission collection only. action code: 10301 **Fields Description:** - **clientId** : The client ID. e.g f815e5c44f364993961be3b3f26a7bf4 - **clientName** : The client name. e.g E-commerce - **secret** : The client&#39;s secret. It&#39;s empty if the client&#39;s type is a public client. Otherwise, the client secret is required - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. e.g https://example.net/platform - **oauthClientType** : The OAuth 2.0 client type. The client type determines whether the authorization needs Proof Of Key Exchange or not. A public client type doesn&#39;t have a client secret and should use PKCE flow. A confidential client type has a client secret and don&#39;t use PKCE flow Supported oAuthClientType : - **Public** - **Confidential** - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used for making sure the token is intended to be used by the client. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). default value: true - **clientPlatform**: available client platform (optional). default value: &#34;&#34; - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, default value: SECONDS - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, default value: SECONDS
   */
  async function createClient(data: ClientCreationV3Request): Promise<ClientV3Response> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createClient(data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Update Client Secret
   */
  async function updateSecret_ByClientId(clientId: string, data: V3ClientUpdateSecretRequest): Promise<unknown> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updateSecret_ByClientId(clientId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code : 10310
   */
  async function deleteClient_ByClientId(clientId: string): Promise<unknown> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deleteClient_ByClientId(clientId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code: 10309
   */
  async function getClient_ByClientId(clientId: string): Promise<ClientV3Response> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.getClient_ByClientId(clientId)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * Updates an OAuth 2.0 client. Specify only the fields you want to update in the request payload, e.g. {&#34;ClientName&#34;:&#34;E-commerce&#34;, &#34;BaseUri&#34;:&#34;https://example.net&#34;} **Note for Multi Tenant Mode:** 1. The assigned permission(s) should be restricted in the Default Client permission collection. action code: 10302 **Fields Description:** - **clientName** : The client name. It should not be empty if the field exists in the body. e.g E-commerce - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. It should not be empty if the field exists in the body. e.g https://example.net/platform - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used in the audience checking for making sure the token is used by the right resource server. Required if the application type is a server. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). e.g. true - **clientPlatform** : available client platform (optional). default value: &#34;&#34;. - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, will use previous value if not specified - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, will use previous value if not specified
   */
  async function patchClient_ByClientId(clientId: string, data: ClientUpdateV3Request): Promise<ClientV3Response> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.patchClient_ByClientId(clientId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **Note for Multi Tenant Mode:** 1. The assigned permission(s) should be restricted in the Default Client permission collection. action code: 10303
   */
  async function createPermission_ByClientId(clientId: string, data: ClientPermissionsV3): Promise<unknown> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.createPermission_ByClientId(clientId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * **Note for Multi Tenant Mode:** 1. The assigned permission(s) should be restricted in the Default Client permission collection. action code: 10307
   */
  async function updatePermission_ByClientId(clientId: string, data: ClientPermissionsV3): Promise<unknown> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.updatePermission_ByClientId(clientId, data)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  /**
   * action code : 10304
   */
  async function deletePermission_ByClientId_ByResource_ByAction(clientId: string, resource: string, action: number): Promise<unknown> {
    const $ = new ClientsAdmin$(Network.create(requestConfig), namespace, cache)
    const resp = await $.deletePermission_ByClientId_ByResource_ByAction(clientId, resource, action)
    if (resp.error) throw resp.error
    return resp.response.data
  }

  return {
    getClients,
    createClient,
    updateSecret_ByClientId,
    deleteClient_ByClientId,
    getClient_ByClientId,
    patchClient_ByClientId,
    createPermission_ByClientId,
    updatePermission_ByClientId,
    deletePermission_ByClientId_ByResource_ByAction
  }
}
