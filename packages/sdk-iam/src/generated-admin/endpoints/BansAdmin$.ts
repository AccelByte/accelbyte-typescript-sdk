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
import { BanReasonsV3 } from '../../generated-definitions/BanReasonsV3.js'
import { BansV3 } from '../../generated-definitions/BansV3.js'
import { BulkBanCreateRequestV3 } from '../../generated-definitions/BulkBanCreateRequestV3.js'
import { BulkUnbanCreateRequestV3 } from '../../generated-definitions/BulkUnbanCreateRequestV3.js'
import { GetUserBanV3Response } from '../../generated-definitions/GetUserBanV3Response.js'
import { ListBulkUserBanResponseV3 } from '../../generated-definitions/ListBulkUserBanResponseV3.js'

export class BansAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isValidationEnabled = true) {}

  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  getBans(): Promise<IResponse<BansV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/bans'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BansV3, 'BansV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Ban reasons is the code available to justify ban assignment. It is applicable globally for any namespace. action code : 10202
   */
  getBansReasons(): Promise<IResponse<BanReasonsV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/bans/reasons'
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BanReasonsV3, 'BanReasonsV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  getBantypes(): Promise<IResponse<BansV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/bantypes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, BansV3, 'BansV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  getBansUsers(queryParams?: {
    activeOnly?: boolean | null
    banType?: string | null
    limit?: number
    offset?: number
  }): Promise<IResponse<GetUserBanV3Response>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/bans/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, GetUserBanV3Response, 'GetUserBanV3Response')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Bulk ban user with specific type of ban. Ban types and reason can be queried. The maximum limit value is 100 userIDs action code : 10141
   */
  createBanUser(data: BulkBanCreateRequestV3): Promise<IResponse<ListBulkUserBanResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/bans/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListBulkUserBanResponseV3, 'ListBulkUserBanResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * disable bulk ban user. The maximum limit value is 100 action code : 10142
   */
  patchBanUserDisabled(data: BulkUnbanCreateRequestV3): Promise<IResponse<ListBulkUserBanResponseV3>> {
    const params = {} as SDKRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/bans/users/disabled'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ListBulkUserBanResponseV3, 'ListBulkUserBanResponseV3')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
