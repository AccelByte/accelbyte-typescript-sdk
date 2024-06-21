/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { PlatformCredentials } from '../../generated-definitions/PlatformCredentials.js'
import { PutPlatformCredentialsRequest } from '../../generated-definitions/PutPlatformCredentialsRequest.js'

export class PlatformCredentialAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}

  /**
   * Delete platform credentials used for Native Session sync.
   */
  deletePlatformCredential(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/platform-credentials'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Get platform credentials used for Native Session sync. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret. For security, only the first few characters are shown. - scope: should be psn:s2s.service (For Sync non PSN member to PSN Session)
   */
  getPlatformCredentials(): Promise<IResponse<PlatformCredentials>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/platform-credentials'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlatformCredentials, 'PlatformCredentials')
  }

  /**
   * Update platform credentials for Native Session sync. Currently supports PSN platform. Send an empty body to clear data. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret - scope: psn:s2s.service (For Sync non PSN member to PSN Session)
   */
  updatePlatformCredential(data: PutPlatformCredentialsRequest): Promise<IResponse<PlatformCredentials>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/platform-credentials'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlatformCredentials, 'PlatformCredentials')
  }
}
