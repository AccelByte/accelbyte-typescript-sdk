/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CheckAvailabilityResponse } from '../../generated-definitions/CheckAvailabilityResponse.js'
import { PlatformDomainDeleteRequest } from '../../generated-definitions/PlatformDomainDeleteRequest.js'
import { PlatformDomainPatchRequest } from '../../generated-definitions/PlatformDomainPatchRequest.js'
import { PlatformDomainResponse } from '../../generated-definitions/PlatformDomainResponse.js'
import { PlatformDomainUpdateRequest } from '../../generated-definitions/PlatformDomainUpdateRequest.js'
import { ThirdPartyLoginPlatformCredentialRequest } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialRequest.js'
import { ThirdPartyLoginPlatformCredentialResponse } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialResponse.js'
import { ThirdPartyLoginPlatformCredentialResponseArray } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialResponseArray.js'

export class ThirdPartyCredentialAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * This is the API to check specific 3rd party platform availability. Passing platform group name or it&#39;s member will return same platform availability data Supported third party platform and platform group: - PSN group(psn) - ps4web - ps4 - ps5
   */
  getAvailability_ByPlatformId_v3(platformId: string): Promise<Response<CheckAvailabilityResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/platforms/{platformId}/availability'.replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      CheckAvailabilityResponse,
      'CheckAvailabilityResponse'
    )
  }
  /**
   * This is the API to Get All Active 3rd Platform Credential.
   */
  getPlatformsAllClients_v3(): Promise<Response<ThirdPartyLoginPlatformCredentialResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/all/clients'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyLoginPlatformCredentialResponseArray,
      'ThirdPartyLoginPlatformCredentialResponseArray'
    )
  }
  /**
   * This is the API to Get All Active 3rd Platform Credential.
   */
  getPlatformsAllClientsActive_v3(): Promise<Response<ThirdPartyLoginPlatformCredentialResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/all/clients/active'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyLoginPlatformCredentialResponseArray,
      'ThirdPartyLoginPlatformCredentialResponseArray'
    )
  }
  /**
   * This is the API to Delete 3rd Platform Credential.
   */
  deleteClient_ByPlatformId_v3(platformId: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This is the API to Get 3rd Platform Credential.
   */
  getClients_ByPlatformId_v3(platformId: string): Promise<Response<ThirdPartyLoginPlatformCredentialResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyLoginPlatformCredentialResponse,
      'ThirdPartyLoginPlatformCredentialResponse'
    )
  }
  /**
   * This is the API to Add 3rd Platform Credential. - The secret for **apple** is base64 encoded private key. - No secret for **awscognito**, we only need to configure AWS Cognito Region and User Pool - The secret for **discord** is client secret of the twitch client id. - The secret for **epicgames** is client secret of the epicgames client id. - The secret for **facebook** is client secret of the facebook client id. - The secret for **google** is client secret of the google OAuth client. - No secret for **nintendo**, we only need to configure app id of the game - No secret for **netflix**, we configure the Root, Public, Private Key certificate pem file and target environment; value: [sandbox, production] - The secret for **oculus** is app secret of the oculus app. - The secret for **ps4, ps5, and ps4web** is client secret of the psn web server. - The secret for **steam** is the Steam Web API Key. - The secret for **steamopenid** is the Steam Web API Key. - The secret for **twitch** is client secret of the twitch client. - The secret for **live** is the Relying Party Private Key in base64 encode PEM format. - The secret for **xblwebapi** is client secret of the xbl client. If generic oauth flow is set to true: - Current supported value for TokenAuthenticationType is **code, idToken and bearerToken** - &lt;code&gt;TokenClaimsMapping&lt;/code&gt; is used to extract user info from idToken claims or user info endpoint response accessed using bearerToken. Its a JSON format with key should be &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;email&lt;/code&gt; and &lt;code&gt;avatarUrl&lt;/code&gt; since IAM will look up for these key when extracting user info.**default claims keys : userIdentity/sub, name, email and avatarUrl/picture**
   */
  patchClient_ByPlatformId_v3(
    platformId: string,
    data: ThirdPartyLoginPlatformCredentialRequest
  ): Promise<Response<ThirdPartyLoginPlatformCredentialResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyLoginPlatformCredentialResponse,
      'ThirdPartyLoginPlatformCredentialResponse'
    )
  }
  /**
   * This is the API to Add 3rd Platform Credential. - The secret for **apple** is base64 encoded private key. - No secret for **awscognito**, we only need to configure AWS Cognito Region and User Pool - The secret for **discord** is client secret of the twitch client id. - The secret for **epicgames** is client secret of the epicgames client id. - The secret for **facebook** is client secret of the facebook client id. - The secret for **google** is client secret of the google OAuth client. - No secret for **nintendo**, we only need to configure app id of the game - No secret for **netflix**, we configure the Root, Public, Private Key certificate pem file and target environment; value: [sandbox, production] - The secret for **oculus** is app secret of the oculus app. - The secret for **ps4, ps5, and ps4web** is client secret of the psn web server. - The secret for **steam** is the Steam Web API Key. - The secret for **steamopenid** is the Steam Web API Key. - The secret for **twitch** is client secret of the twitch client. - The secret for **live** is the Relying Party Private Key in base64 encode PEM format. - The secret for **xblwebapi** is client secret of the xbl client. If generic oauth flow is set to true: - Current supported value for TokenAuthenticationType are **code, idToken and bearerToken** - &lt;code&gt;TokenClaimsMapping&lt;/code&gt; is used to extract user info from idToken claims or user info endpoint response accessed using bearerToken. Its a JSON format with key should be &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;email&lt;/code&gt; and &lt;code&gt;avatarUrl&lt;/code&gt; since IAM will look up for these key when extracting user info. **default claims keys : userIdentity/sub, name, email and avatarUrl/picture**
   */
  createClient_ByPlatformId_v3(
    platformId: string,
    data: ThirdPartyLoginPlatformCredentialRequest
  ): Promise<Response<ThirdPartyLoginPlatformCredentialResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ThirdPartyLoginPlatformCredentialResponse,
      'ThirdPartyLoginPlatformCredentialResponse'
    )
  }
  /**
   * This is the API to unregister 3rd Platform domain. If there is a ssoGroups in request body, then this request wil only delete the sso group from the target domain, it will not delete domain.
   */
  deleteClientDomain_ByPlatformId_v3(platformId: string, data: PlatformDomainDeleteRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients/domain'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.delete(url, { data, params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * This is the API to patch update 3rd Platform domain. This API is a create or partial-update behavior. If it is update, it is a partial update behavior.
   */
  patchClientDomain_ByPlatformId_v3(platformId: string, data: PlatformDomainPatchRequest): Promise<Response<PlatformDomainResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients/domain'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlatformDomainResponse,
      'PlatformDomainResponse'
    )
  }
  /**
   * This is the API to set 3rd Platform domain. This API is a create-or-update behavior. If it is update, it is a replacement behavior.
   */
  updateClientDomain_ByPlatformId_v3(platformId: string, data: PlatformDomainUpdateRequest): Promise<Response<PlatformDomainResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients/domain'
      .replace('{namespace}', this.namespace)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      PlatformDomainResponse,
      'PlatformDomainResponse'
    )
  }
}
