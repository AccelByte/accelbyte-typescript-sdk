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
import { BanReasonsV3 } from '../../generated-definitions/BanReasonsV3.js'
import { BansV3 } from '../../generated-definitions/BansV3.js'
import { BulkBanCreateRequestV3 } from '../../generated-definitions/BulkBanCreateRequestV3.js'
import { BulkUnbanCreateRequestV3 } from '../../generated-definitions/BulkUnbanCreateRequestV3.js'
import { GetUserBanV3Response } from '../../generated-definitions/GetUserBanV3Response.js'
import { ListBulkUserBanResponseV3 } from '../../generated-definitions/ListBulkUserBanResponseV3.js'

export class BansAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  getBans_v3(): Promise<Response<BansV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/bans'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BansV3, 'BansV3')
  }
  /**
   * Ban reasons is the code available to justify ban assignment. It is applicable globally for any namespace. action code : 10202
   */
  getBansReasons_v3(): Promise<Response<BanReasonsV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/bans/reasons'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BanReasonsV3, 'BanReasonsV3')
  }
  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  getBantypes_v3(): Promise<Response<BansV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/bantypes'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BansV3, 'BansV3')
  }
  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  getBansUsers_v3(queryParams?: {
    activeOnly?: boolean | null
    banType?: string | null
    limit?: number
    offset?: number
  }): Promise<Response<GetUserBanV3Response>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/bans/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetUserBanV3Response, 'GetUserBanV3Response')
  }
  /**
   * Bulk ban user with specific type of ban. Ban types and reason can be queried. The maximum limit value is 100 userIDs action code : 10141
   */
  createBanUser_v3(data: BulkBanCreateRequestV3): Promise<Response<ListBulkUserBanResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/bans/users'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListBulkUserBanResponseV3,
      'ListBulkUserBanResponseV3'
    )
  }
  /**
   * disable bulk ban user. The maximum limit value is 100 action code : 10142
   */
  patchBanUserDisabled_v3(data: BulkUnbanCreateRequestV3): Promise<Response<ListBulkUserBanResponseV3>> {
    const params = {} as AxiosRequestConfig
    const url = '/iam/v3/admin/namespaces/{namespace}/bans/users/disabled'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.patch(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListBulkUserBanResponseV3,
      'ListBulkUserBanResponseV3'
    )
  }
}
