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
import { EmailTemplatePair } from '../../generated-definitions/EmailTemplatePair.js'
import { EmailTemplatePairArray } from '../../generated-definitions/EmailTemplatePairArray.js'

export class EmailSenderTemplateAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get all available API key account names.
   */
  getEmailtemplatesEmailsender_ByAccount(account: string): Promise<Response<EmailTemplatePairArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/accounts/{account}/emailtemplates'
      .replace('{namespace}', this.namespace)
      .replace('{account}', account)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EmailTemplatePairArray,
      'EmailTemplatePairArray'
    )
  }
  /**
   * Create email templates which will be used for email sending. Currently only support SendGrid platform email templates.
   */
  updateEmailtemplateEmailsender_ByAccount(account: string, data: EmailTemplatePair[]): Promise<Response<EmailTemplatePairArray>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/accounts/{account}/emailtemplates'
      .replace('{namespace}', this.namespace)
      .replace('{account}', account)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      EmailTemplatePairArray,
      'EmailTemplatePairArray'
    )
  }
  /**
   * Delete email templates of an account.
   */
  deleteEmailtemplateEmailsender_ByAccount(account: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/config/v1/admin/namespaces/{namespace}/emailsender/accounts/{account}/emailtemplates'
      .replace('{namespace}', this.namespace)
      .replace('{account}', account)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
