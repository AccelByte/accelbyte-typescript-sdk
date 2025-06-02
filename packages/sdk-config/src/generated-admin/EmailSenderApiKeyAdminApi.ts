/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
import { CreateEmailSenderApiKeyRequest } from '../generated-definitions/CreateEmailSenderApiKeyRequest.js'
import { EmailSenderApiKeyResponse } from '../generated-definitions/EmailSenderApiKeyResponse.js'
import { EmailSenderApiKeyResponseArray } from '../generated-definitions/EmailSenderApiKeyResponseArray.js'
import { LinkedEmailSendersResponse } from '../generated-definitions/LinkedEmailSendersResponse.js'
import { EmailSenderApiKeyAdmin$ } from './endpoints/EmailSenderApiKeyAdmin$.js'

export function EmailSenderApiKeyAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getEmailsenderApikeysAccounts(): Promise<AxiosResponse<EmailSenderApiKeyResponseArray>> {
    const $ = new EmailSenderApiKeyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailsenderApikeysAccounts()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createEmailsenderApikeyAccount(data: CreateEmailSenderApiKeyRequest): Promise<AxiosResponse<EmailSenderApiKeyResponse>> {
    const $ = new EmailSenderApiKeyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEmailsenderApikeyAccount(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteEmailsenderApikeyAccount_ByAccount(account: string): Promise<AxiosResponse<unknown>> {
    const $ = new EmailSenderApiKeyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteEmailsenderApikeyAccount_ByAccount(account)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getLinkedsendersApikeysEmailsender_ByAccount(
    account: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<LinkedEmailSendersResponse>> {
    const $ = new EmailSenderApiKeyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLinkedsendersApikeysEmailsender_ByAccount(account, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get all available API key accounts in the namespace, including the API key and its use count. It will return records from all namespaces if the **namespace** path param equals to configured publisher namespace.
     */
    getEmailsenderApikeysAccounts,
    /**
     * Add an API key account which will be used for email sending. Currently only support SendGrid platform API Key.
     */
    createEmailsenderApikeyAccount,
    /**
     * Delete an API key account.
     */
    deleteEmailsenderApikeyAccount_ByAccount,
    /**
     * Get email senders that linked with API Key account.
     */
    getLinkedsendersApikeysEmailsender_ByAccount
  }
}
