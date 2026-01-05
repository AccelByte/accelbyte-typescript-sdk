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
import { CreateEmailSenderRequest } from '../../generated-definitions/CreateEmailSenderRequest.js'
import { EmailSenderDomainResponse } from '../../generated-definitions/EmailSenderDomainResponse.js'
import { EmailSenderResponse } from '../../generated-definitions/EmailSenderResponse.js'
import { EmailSenderVerifyResponse } from '../../generated-definitions/EmailSenderVerifyResponse.js'
import { UpdateEmailSenderRequest } from '../../generated-definitions/UpdateEmailSenderRequest.js'

export class EmailSenderConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get an email sender for the requested namespace. If email sender in the requested namespace didn't configured yet or not verified yet, and <code>ALLOW_FALLBACK_TO_PUBLISHER_EMAIL_SENDER</code> environment was activated, it will return email sender of the configured publisher namespace.
   */
  getEmailsender(queryParams?: { includeEmailTemplates?: boolean | null }): Promise<Response<EmailSenderResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, EmailSenderResponse, 'EmailSenderResponse')
  }
  /**
   * Set an email sender of the namespace and request domain authentication to the email platform (currently only SendGrid supported). **Email Sender API Key Logic:** If there's no Email Sender API Key defined yet in the requested namespace, the API logic will fallback to use Publisher Namespace API Key.
   */
  createEmailsender(data: CreateEmailSenderRequest): Promise<Response<EmailSenderDomainResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EmailSenderDomainResponse,
      'EmailSenderDomainResponse'
    )
  }
  /**
   * Delete an email sender.
   */
  deleteEmailsender(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Update email sender of the specified namespace. These attributes can be updated: - fromAddress (the domain name of the email address must be similar with the existing) - fromName
   */
  patchEmailsender(data: UpdateEmailSenderRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get email sender domain authentication status.
   */
  getEmailsenderAuthentication(): Promise<Response<EmailSenderDomainResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/authentication'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EmailSenderDomainResponse,
      'EmailSenderDomainResponse'
    )
  }
  /**
   * Verify the authentication of the email sender domain. If verification is failed, it will return 400 error.
   */
  createEmailsenderAuthenticationVerify(): Promise<Response<EmailSenderVerifyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/authentication/verify'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EmailSenderVerifyResponse,
      'EmailSenderVerifyResponse'
    )
  }
}
