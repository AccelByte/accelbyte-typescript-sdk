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
import { z } from 'zod'
import { BackFillAcceptRequest } from '../../generated-definitions/BackFillAcceptRequest.js'
import { BackFillCreateRequest } from '../../generated-definitions/BackFillCreateRequest.js'
import { BackFillRejectRequest } from '../../generated-definitions/BackFillRejectRequest.js'
import { BackfillCreateResponse } from '../../generated-definitions/BackfillCreateResponse.js'
import { BackfillGetResponse } from '../../generated-definitions/BackfillGetResponse.js'
import { BackfillProposalResponse } from '../../generated-definitions/BackfillProposalResponse.js'
import { GameSession } from '../../generated-definitions/GameSession.js'
import { ListBackfillQueryResponse } from '../../generated-definitions/ListBackfillQueryResponse.js'

export class Backfill$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Admin Query backfill ticket
   */
  getBackfill(queryParams?: {
    fromTime?: string | null
    isActive?: boolean | null
    limit?: number
    matchPool?: string | null
    offset?: number
    playerID?: string | null
    region?: string | null
    sessionID?: string | null
    toTime?: string | null
  }): Promise<Response<ListBackfillQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      ListBackfillQueryResponse,
      'ListBackfillQueryResponse'
    )
  }
  /**
   * Create backfill ticket.
   */
  createBackfill(data: BackFillCreateRequest): Promise<Response<BackfillCreateResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BackfillCreateResponse,
      'BackfillCreateResponse'
    )
  }
  /**
   * Get backfill proposal
   */
  getBackfillProposal(queryParams: { sessionID: string | null }): Promise<Response<BackfillProposalResponse>> {
    const params = { ...queryParams } as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/proposal'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      BackfillProposalResponse,
      'BackfillProposalResponse'
    )
  }
  /**
   * Delete backfill ticket.
   */
  deleteBackfill_ByBackfillId(backfillID: string): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get backfill ticket by ID
   */
  getBackfill_ByBackfillId(backfillID: string): Promise<Response<BackfillGetResponse>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, BackfillGetResponse, 'BackfillGetResponse')
  }
  /**
   *  Accept backfill proposal. Field **acceptedTicketIds** can be used to accept specific tickets within a backfill proposal. If the ticketIDs are not mentioned in this field, those tickets will be rejected and reactivated for future proposals. If **acceptedTicketIds** is nil or not specified, then all tickets in the proposal will be accepted.
   */
  updateProposalAccept_ByBackfillId(backfillID: string, data: BackFillAcceptRequest): Promise<Response<GameSession>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/accept'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, GameSession, 'GameSession')
  }
  /**
   * Reject backfill proposal
   */
  updateProposalReject_ByBackfillId(backfillID: string, data: BackFillRejectRequest): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/reject'
      .replace('{namespace}', this.namespace)
      .replace('{backfillID}', backfillID)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
}
