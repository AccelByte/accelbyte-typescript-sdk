/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { CreateEmailSenderApiKeyRequest } from '../../generated-definitions/CreateEmailSenderApiKeyRequest.js'
import { EmailSenderApiKeyResponse } from '../../generated-definitions/EmailSenderApiKeyResponse.js'
import { EmailSenderApiKeyResponseArray } from '../../generated-definitions/EmailSenderApiKeyResponseArray.js'
import { LinkedEmailSendersResponse } from '../../generated-definitions/LinkedEmailSendersResponse.js'

export class EmailSenderApiKeyAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get all available API key accounts in the namespace, including the API key and its use count. It will return records from all namespaces if the **namespace** path param equals to configured publisher namespace.
   */
  getEmailsenderApikeysAccounts(): Promise<Response<EmailSenderApiKeyResponseArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/apikeys/accounts'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EmailSenderApiKeyResponseArray,
      'EmailSenderApiKeyResponseArray'
    )
  }
  /**
   * Add an API key account which will be used for email sending. Currently only support SendGrid platform API Key.
   */
  createEmailsenderApikeyAccount(data: CreateEmailSenderApiKeyRequest): Promise<Response<EmailSenderApiKeyResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/apikeys/accounts'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EmailSenderApiKeyResponse,
      'EmailSenderApiKeyResponse'
    )
  }
  /**
   * Delete an API key account.
   */
  deleteEmailsenderApikeyAccount_ByAccount(account: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/apikeys/accounts/{account}'
      .replace('{namespace}', this.namespace)
      .replace('{account}', account)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get email senders that linked with API Key account.
   */
  getLinkedsendersApikeysEmailsender_ByAccount(
    account: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<Response<LinkedEmailSendersResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/apikeys/accounts/{account}/linkedsenders'
      .replace('{namespace}', this.namespace)
      .replace('{account}', account)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      LinkedEmailSendersResponse,
      'LinkedEmailSendersResponse'
    )
  }
}
