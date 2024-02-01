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
import { PlatformCredentials } from '../../generated-definitions/PlatformCredentials.js'
import { PutPlatformCredentialsRequest } from '../../generated-definitions/PutPlatformCredentialsRequest.js'

export class PlatformCredentialAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Delete platform credentials used for Native Session sync.
   */
  deletePlatformCredential(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/platform-credentials'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get platform credentials used for Native Session sync. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret. For security, only the first few characters are shown. - scope: should be psn:s2s.service (For Sync non PSN member to PSN Session)
   */
  getPlatformCredentials(): Promise<IResponseWithSync<PlatformCredentials>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/platform-credentials'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, PlatformCredentials, 'PlatformCredentials')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update platform credentials for Native Session sync. Currently supports PSN platform. Send an empty body to clear data. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret - scope: psn:s2s.service (For Sync non PSN member to PSN Session)
   */
  updatePlatformCredential(data: PutPlatformCredentialsRequest): Promise<IResponse<PlatformCredentials>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/platform-credentials'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, PlatformCredentials, 'PlatformCredentials')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
