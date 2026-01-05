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
import { AccountCreateRequest } from '../../generated-definitions/AccountCreateRequest.js'
import { AccountCreateResponse } from '../../generated-definitions/AccountCreateResponse.js'
import { AccountLinkRequest } from '../../generated-definitions/AccountLinkRequest.js'
import { AccountLinkResponse } from '../../generated-definitions/AccountLinkResponse.js'
import { AccountLinkTokenResponse } from '../../generated-definitions/AccountLinkTokenResponse.js'
import { AccountResponse } from '../../generated-definitions/AccountResponse.js'

export class AccountAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [READ]
   */
  getAccount(): Promise<Response<AccountResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/account'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AccountResponse, 'AccountResponse')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [CREATE]
   */
  createAccount(data: AccountCreateRequest): Promise<Response<AccountCreateResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/account'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AccountCreateResponse, 'AccountCreateResponse')
  }
  /**
   * The link token returned can be used to connect another namespace to the account in which the provided namespace is linked. This route fails if there is no account linked to the specified namespace. Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [READ]
   */
  getAccountLink(): Promise<Response<AccountLinkTokenResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/account/link'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      AccountLinkTokenResponse,
      'AccountLinkTokenResponse'
    )
  }
  /**
   * This route will attempt to register the account to namespace linkage in AMS and requires a valid account link token. This route fails if an account is already linked Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [CREATE]
   */
  createAccountLink(data: AccountLinkRequest): Promise<Response<AccountLinkResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/account/link'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, AccountLinkResponse, 'AccountLinkResponse')
  }
}
