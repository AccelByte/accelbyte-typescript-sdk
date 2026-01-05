/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { CreateEmailSenderRequest } from '../generated-definitions/CreateEmailSenderRequest.js'
import { EmailSenderDomainResponse } from '../generated-definitions/EmailSenderDomainResponse.js'
import { EmailSenderResponse } from '../generated-definitions/EmailSenderResponse.js'
import { EmailSenderVerifyResponse } from '../generated-definitions/EmailSenderVerifyResponse.js'
import { UpdateEmailSenderRequest } from '../generated-definitions/UpdateEmailSenderRequest.js'
import { EmailSenderConfigurationAdmin$ } from './endpoints/EmailSenderConfigurationAdmin$.js'

export function EmailSenderConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    if (interceptorsOverride) {
      for (const interceptor of interceptorsOverride) {
        if (interceptor.type === 'request') {
          axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
        }

        if (interceptor.type === 'response') {
          axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
        }
      }
    } else {
      axiosInstance.interceptors = sdkAssembly.axiosInstance.interceptors
    }
  }

  async function getEmailsender(queryParams?: { includeEmailTemplates?: boolean | null }): Promise<AxiosResponse<EmailSenderResponse>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailsender(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createEmailsender(data: CreateEmailSenderRequest): Promise<AxiosResponse<EmailSenderDomainResponse>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEmailsender(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteEmailsender(): Promise<AxiosResponse<unknown>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteEmailsender()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchEmailsender(data: UpdateEmailSenderRequest): Promise<AxiosResponse<unknown>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchEmailsender(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getEmailsenderAuthentication(): Promise<AxiosResponse<EmailSenderDomainResponse>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailsenderAuthentication()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createEmailsenderAuthenticationVerify(): Promise<AxiosResponse<EmailSenderVerifyResponse>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEmailsenderAuthenticationVerify()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get an email sender for the requested namespace. If email sender in the requested namespace didn't configured yet or not verified yet, and <code>ALLOW_FALLBACK_TO_PUBLISHER_EMAIL_SENDER</code> environment was activated, it will return email sender of the configured publisher namespace.
     */
    getEmailsender,
    /**
     * Set an email sender of the namespace and request domain authentication to the email platform (currently only SendGrid supported). **Email Sender API Key Logic:** If there's no Email Sender API Key defined yet in the requested namespace, the API logic will fallback to use Publisher Namespace API Key.
     */
    createEmailsender,
    /**
     * Delete an email sender.
     */
    deleteEmailsender,
    /**
     * Update email sender of the specified namespace. These attributes can be updated: - fromAddress (the domain name of the email address must be similar with the existing) - fromName
     */
    patchEmailsender,
    /**
     * Get email sender domain authentication status.
     */
    getEmailsenderAuthentication,
    /**
     * Verify the authentication of the email sender domain. If verification is failed, it will return 400 error.
     */
    createEmailsenderAuthenticationVerify
  }
}
