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
import { ActionApiRequest } from '../../generated-definitions/ActionApiRequest.js'
import { ActionApiResponse } from '../../generated-definitions/ActionApiResponse.js'
import { ActionListApiResponse } from '../../generated-definitions/ActionListApiResponse.js'
import { ExtensionCategoryApiRequest } from '../../generated-definitions/ExtensionCategoryApiRequest.js'
import { ExtensionCategoryApiResponse } from '../../generated-definitions/ExtensionCategoryApiResponse.js'
import { ExtensionCategoryListApiResponse } from '../../generated-definitions/ExtensionCategoryListApiResponse.js'

export class ExtensionCategoriesAndAutoModerationActionsAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get a list of auto moderation actions
   */
  getExtensionActions(): Promise<Response<ActionListApiResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/extensionActions'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ActionListApiResponse, 'ActionListApiResponse')
  }
  /**
   * Create auto moderation action
   */
  createExtensionAction(data: ActionApiRequest): Promise<Response<ActionApiResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/extensionActions'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ActionApiResponse, 'ActionApiResponse')
  }
  /**
   * Get a list of extension category data with the specified name
   */
  getExtensionCategories(queryParams?: {
    order?: 'asc' | 'ascending' | 'desc' | 'descending'
    sortBy?: 'extensionCategory' | 'extensionCategoryName'
  }): Promise<Response<ExtensionCategoryListApiResponse>> {
    const params = { order: 'asc', sortBy: 'extensionCategory', ...queryParams } as AxiosRequestConfig
    const url = '/reporting/v1/admin/extensionCategories'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ExtensionCategoryListApiResponse,
      'ExtensionCategoryListApiResponse'
    )
  }
  /**
   * Create extension category data
   */
  createExtensionCategory(data: ExtensionCategoryApiRequest): Promise<Response<ExtensionCategoryApiResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/reporting/v1/admin/extensionCategories'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ExtensionCategoryApiResponse,
      'ExtensionCategoryApiResponse'
    )
  }
}
