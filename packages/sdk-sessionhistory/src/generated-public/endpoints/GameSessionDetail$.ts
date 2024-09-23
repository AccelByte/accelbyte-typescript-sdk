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
import { GameSessionDetailQueryResponse } from '../../generated-definitions/GameSessionDetailQueryResponse.js'

export class GameSessionDetail$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get all game sessions history for current user.
   */
  getUsersMeGamesessions(queryParams?: {
    limit?: number
    offset?: number
    order?: string | null
  }): Promise<Response<GameSessionDetailQueryResponse>> {
    const params = { limit: 20, ...queryParams } as AxiosRequestConfig
    const url = '/sessionhistory/v1/public/namespaces/{namespace}/users/me/gamesessions'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(
      this.useSchemaValidation,
      () => resultPromise,
      GameSessionDetailQueryResponse,
      'GameSessionDetailQueryResponse'
    )
  }
}
