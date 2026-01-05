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
import { GetGrpcReflectionInfo } from '../../generated-definitions/GetGrpcReflectionInfo.js'

export class UtilityAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required permission: `ADMIN:NAMESPACE:{namespace}:EXTEND:GRPCREFLECTION` (READ) Do gRPC reflection to get list of services info served by a server. Please use one of these parameter `host` or `appName`. Use query parameter `host` to get reflection for custom host/port address, or Use query parameter `appName` to get reflection for accelbyte hosted extend app
   */
  getReflection(queryParams?: {
    appName?: string | null
    host?: string | null
    securityType?: string | null
  }): Promise<Response<GetGrpcReflectionInfo>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/ehs/v1/admin/namespaces/{namespace}/reflection'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GetGrpcReflectionInfo, 'GetGrpcReflectionInfo')
  }
}
