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
import { EmailTemplatePair } from '../generated-definitions/EmailTemplatePair.js'
import { EmailTemplatePairArray } from '../generated-definitions/EmailTemplatePairArray.js'
import { EmailSenderTemplateAdmin$ } from './endpoints/EmailSenderTemplateAdmin$.js'

export function EmailSenderTemplateAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getEmailtemplatesEmailsender_ByAccount(account: string): Promise<AxiosResponse<EmailTemplatePairArray>> {
    const $ = new EmailSenderTemplateAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailtemplatesEmailsender_ByAccount(account)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateEmailtemplateEmailsender_ByAccount(
    account: string,
    data: EmailTemplatePair[]
  ): Promise<AxiosResponse<EmailTemplatePairArray>> {
    const $ = new EmailSenderTemplateAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEmailtemplateEmailsender_ByAccount(account, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteEmailtemplateEmailsender_ByAccount(account: string): Promise<AxiosResponse<unknown>> {
    const $ = new EmailSenderTemplateAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteEmailtemplateEmailsender_ByAccount(account)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get all available API key account names.
     */
    getEmailtemplatesEmailsender_ByAccount,
    /**
     * Create email templates which will be used for email sending. Currently only support SendGrid platform email templates.
     */
    updateEmailtemplateEmailsender_ByAccount,
    /**
     * Delete email templates of an account.
     */
    deleteEmailtemplateEmailsender_ByAccount
  }
}
