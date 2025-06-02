/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { FleetClaimByKeysReq } from '../../generated-definitions/FleetClaimByKeysReq.js'
import { FleetClaimReq } from '../../generated-definitions/FleetClaimReq.js'
import { FleetClaimResponse } from '../../generated-definitions/FleetClaimResponse.js'

export class Fleets$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Claim a dedicated server from fleets with matching claim keys. If the claim key is for a regular fleet (non development), the request will instantly fail if there are no DS available (HTTP 404). If the claim key is for a development fleet and there are no DS available, a new DS will be launched and the request might take up to 8 seconds to return (depending on the environment configuration). If it&#39;s not ready after that duration the request will still return HTTP 404. In either case, the call to this endpoint may be retried at any time to check if a DS has become available. Required Permission: NAMESPACE:{namespace}:AMS:SERVER:CLAIM [UPDATE]
   */
  updateServerClaim(data: FleetClaimByKeysReq): Promise<Response<FleetClaimResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/namespaces/{namespace}/servers/claim'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FleetClaimResponse, 'FleetClaimResponse')
  }
  /**
   * Required Permission: NAMESPACE:{namespace}:AMS:SERVER:CLAIM [UPDATE]
   */
  updateClaim_ByFleetId(fleetID: string, data: FleetClaimReq): Promise<Response<FleetClaimResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/ams/v1/namespaces/{namespace}/fleets/{fleetID}/claim'.replace('{namespace}', this.namespace).replace('{fleetID}', fleetID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, FleetClaimResponse, 'FleetClaimResponse')
  }
}
