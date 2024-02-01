/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ClientCreationV3Request } from '../../generated-definitions/ClientCreationV3Request.js'
import { ClientPermissionsV3 } from '../../generated-definitions/ClientPermissionsV3.js'
import { ClientUpdateV3Request } from '../../generated-definitions/ClientUpdateV3Request.js'
import { ClientV3Response } from '../../generated-definitions/ClientV3Response.js'
import { ClientsV3Response } from '../../generated-definitions/ClientsV3Response.js'
import { V3ClientUpdateSecretRequest } from '../../generated-definitions/V3ClientUpdateSecretRequest.js'

export class ClientsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * action code: 10308
   */
  getClients(queryParams?: {
    clientId?: string | null
    clientName?: string | null
    clientType?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponseWithSync<ClientsV3Response>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/clients'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ClientsV3Response, 'ClientsV3Response')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Add a new OAuth 2.0 client A new client automatically granted with these scopes: commerce, account, analytics, publishing, social. **Note for Multi Tenant Mode:** New Confidential Client will have Default Client Role assigned to it. The role will have all permissions to access all APIs that&#39;s supported by game server SDK and DS uploader. However if **Game Admin** create Confidential Client and the permission(s) are specified in request body, then the Default Client Role will not be assigned. But in this case, the assigned permissions will be restricted in the Default Client Permission collection only. action code: 10301 **Fields Description:** - **clientId** : The client ID. e.g f815e5c44f364993961be3b3f26a7bf4 - **clientName** : The client name. e.g E-commerce - **secret** : The client&#39;s secret. It&#39;s empty if the client&#39;s type is a public client. Otherwise, the client secret is required - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. e.g https://example.net/platform - **oauthClientType** : The OAuth 2.0 client type. The client type determines whether the authorization needs Proof Of Key Exchange or not. A public client type doesn&#39;t have a client secret and should use PKCE flow. A confidential client type has a client secret and don&#39;t use PKCE flow Supported oAuthClientType : - **Public** - **Confidential** - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used for making sure the token is intended to be used by the client. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). default value: true - **clientPlatform**: available client platform (optional). default value: &#34;&#34; - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, default value: SECONDS - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, default value: SECONDS
   */
  createClient(data: ClientCreationV3Request): Promise<IResponse<ClientV3Response>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/clients'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClientV3Response, 'ClientV3Response')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update Client Secret
   */
  updateSecret_ByClientId(clientId: string, data: V3ClientUpdateSecretRequest): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/{clientId}/secret'
      .replace('{namespace}', this.namespace)
      .replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * action code : 10310
   */
  deleteClient_ByClientId(clientId: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/clients/{clientId}'
      .replace('{namespace}', this.namespace)
      .replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * action code: 10309
   */
  getClient_ByClientId(clientId: string): Promise<IResponseWithSync<ClientV3Response>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/clients/{clientId}'
      .replace('{namespace}', this.namespace)
      .replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ClientV3Response, 'ClientV3Response')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Updates an OAuth 2.0 client. Specify only the fields you want to update in the request payload, e.g. {&#34;ClientName&#34;:&#34;E-commerce&#34;, &#34;BaseUri&#34;:&#34;https://example.net&#34;} **Note for Multi Tenant Mode:** 1. The assigned permission(s) should be restricted in the Default Client permission collection. action code: 10302 **Fields Description:** - **clientName** : The client name. It should not be empty if the field exists in the body. e.g E-commerce - **namespace** : The namespace where the client lives. e.g sample-game - **redirectUri** : Contains the redirect URI used in OAuth callback. It should not be empty if the field exists in the body. e.g https://example.net/platform - **audiences** : List of target client IDs who is intended to receive the token. e.g [&#34;eaaa65618fe24293b00a61454182b435&#34;, &#34;40073ee9bc3446d3a051a71b48509a5d&#34;] - **baseUri** : A base URI of the application. It is used in the audience checking for making sure the token is used by the right resource server. Required if the application type is a server. e.g https://example.net/platform - **clientPermissions** : Contains the client&#39;s permissions - **deletable** : The flag to identify whether client is deletable (optional). e.g. true - **clientPlatform** : available client platform (optional). default value: &#34;&#34;. - Playstation - Xbox - Steam - Epic - IOS - GooglePlay - Nintendo - Oculus - **twoFactorEnabled**: The flag to indicate whether 2FA validation is enable for this client. default value: false - **oauthAccessTokenExpiration**: a configurable expiration time for **access_token**, default value: 0 (mean fetch value from environment variable) - **oauthRefreshTokenExpiration**: a configurable expiration time for **refresh_token**, default value: 0 (mean fetch value from environment variable) - **oauthAccessTokenExpirationTimeUnit**: a configurable expiration time unit for **access_token**, will use previous value if not specified - **oauthRefreshTokenExpirationTimeUnit**: a configurable expiration time unit for **refresh_token**, will use previous value if not specified
   */
  patchClient_ByClientId(clientId: string, data: ClientUpdateV3Request): Promise<IResponse<ClientV3Response>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/clients/{clientId}'
      .replace('{namespace}', this.namespace)
      .replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ClientV3Response, 'ClientV3Response')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * **Note for Multi Tenant Mode:** 1. The assigned permission(s) should be restricted in the Default Client permission collection. action code: 10303
   */
  createPermission_ByClientId(clientId: string, data: ClientPermissionsV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * **Note for Multi Tenant Mode:** 1. The assigned permission(s) should be restricted in the Default Client permission collection. action code: 10307
   */
  updatePermission_ByClientId(clientId: string, data: ClientPermissionsV3): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions'
      .replace('{namespace}', this.namespace)
      .replace('{clientId}', clientId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * action code : 10304
   */
  deletePermission_ByClientId_ByResource_ByAction(clientId: string, resource: string, action: number): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions/{resource}/{action}'
      .replace('{namespace}', this.namespace)
      .replace('{clientId}', clientId)
      .replace('{resource}', resource)
      .replace('{action}', String(action))
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
