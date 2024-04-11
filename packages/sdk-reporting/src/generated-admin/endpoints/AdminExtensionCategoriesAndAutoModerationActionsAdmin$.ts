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
import { ActionApiRequest } from '../../generated-definitions/ActionApiRequest.js'
import { ActionApiResponse } from '../../generated-definitions/ActionApiResponse.js'
import { ActionListApiResponse } from '../../generated-definitions/ActionListApiResponse.js'
import { ExtensionCategoryApiRequest } from '../../generated-definitions/ExtensionCategoryApiRequest.js'
import { ExtensionCategoryApiResponse } from '../../generated-definitions/ExtensionCategoryApiResponse.js'
import { ExtensionCategoryListApiResponse } from '../../generated-definitions/ExtensionCategoryListApiResponse.js'

export class AdminExtensionCategoriesAndAutoModerationActionsAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Get a list of auto moderation actions
   */
  getExtensionActions(): Promise<IResponse<ActionListApiResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/extensionActions'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ActionListApiResponse, 'ActionListApiResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Create auto moderation action
   */
  createExtensionAction(data: ActionApiRequest): Promise<IResponse<ActionApiResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/extensionActions'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ActionApiResponse, 'ActionApiResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a list of extension category data with the specified name
   */
  getExtensionCategories(queryParams?: {
    order?: 'asc' | 'ascending' | 'desc' | 'descending'
    sortBy?: 'extensionCategory' | 'extensionCategoryName'
  }): Promise<IResponse<ExtensionCategoryListApiResponse>> {
    const params = { order: 'asc', sortBy: 'extensionCategory', ...queryParams } as SDKRequestConfig
    const url = '/reporting/v1/admin/extensionCategories'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ExtensionCategoryListApiResponse, 'ExtensionCategoryListApiResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Create extension category data
   */
  createExtensionCategory(data: ExtensionCategoryApiRequest): Promise<IResponse<ExtensionCategoryApiResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/reporting/v1/admin/extensionCategories'
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ExtensionCategoryApiResponse, 'ExtensionCategoryApiResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
