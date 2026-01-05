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
import { DsHistoryList } from '../../generated-definitions/DsHistoryList.js'
import { FleetServerConnectionInfoResponse } from '../../generated-definitions/FleetServerConnectionInfoResponse.js'
import { FleetServerHistoryResponse } from '../../generated-definitions/FleetServerHistoryResponse.js'
import { FleetServerInfoResponse } from '../../generated-definitions/FleetServerInfoResponse.js'

export class ServersAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  getServer_ByServerId(serverID: string): Promise<Response<FleetServerInfoResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/servers/{serverID}'
      .replace('{namespace}', this.namespace)
      .replace('{serverID}', serverID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FleetServerInfoResponse,
      'FleetServerInfoResponse'
    )
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  getHistory_ByServerId(serverID: string): Promise<Response<FleetServerHistoryResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/servers/{serverID}/history'
      .replace('{namespace}', this.namespace)
      .replace('{serverID}', serverID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FleetServerHistoryResponse,
      'FleetServerHistoryResponse'
    )
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  getServersHistory_ByFleetId(
    fleetID: string,
    queryParams?: {
      count?: number
      offset?: number
      reason?: string | null
      region?: string | null
      serverId?: string | null
      sortDirection?: string | null
      status?: string | null
    }
  ): Promise<Response<DsHistoryList>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/fleets/{fleetID}/servers/history'
      .replace('{namespace}', this.namespace)
      .replace('{fleetID}', fleetID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DsHistoryList, 'DsHistoryList')
  }
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:DS:LOGS [READ]
   */
  getConnectioninfo_ByServerId(serverID: string): Promise<Response<FleetServerConnectionInfoResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/admin/namespaces/{namespace}/servers/{serverID}/connectioninfo'
      .replace('{namespace}', this.namespace)
      .replace('{serverID}', serverID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      FleetServerConnectionInfoResponse,
      'FleetServerConnectionInfoResponse'
    )
  }
}
