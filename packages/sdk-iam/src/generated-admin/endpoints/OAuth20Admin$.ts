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
import { z } from 'zod'
import { TokenThirdPartyResponse } from '../../generated-definitions/TokenThirdPartyResponse.js'

export class OAuth20Admin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  /**
   * This endpoint revokes all access tokens and refresh tokens a user has prior the revocation time. This endpoint requires authorized requests header with valid access token. It is a convenient feature for the developer (or admin) who wanted to revokes all user&#39;s access tokens and refresh tokens generated before some period of time. action code : 10707
   */
  createRevokeOauth_ByUserId(userId: string, queryParams?: { includeGameNamespace?: boolean | null }): Promise<IResponse<unknown>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/oauth/admin/namespaces/{namespace}/users/{userId}/revoke'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.post(url, null, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, z.unknown(), 'z.unknown()')
  }

  /**
   * Admin Retrieve User Third Party Platform Token This endpoint used for retrieving third party platform token for user that login using third party, if user have not link requested platform in game namespace, will try to retrieving third party platform token from publisher namespace. Passing platform group name or it&#39;s member will return same access token that can be used across the platform members. If platformUserId provided, IAM will prefer to get platform token by platform user id. Notes: The third party platform and platform group covered for this is: - (psn) ps4web - (psn) ps4 - (psn) ps5 - epicgames - twitch - awscognito - amazon - eaorigin - snapchat - twitch - live
   */
  getPlatformTokenOauth_ByUserId_ByPlatformId(
    userId: string,
    platformId: string,
    queryParams?: { platformUserId?: string | null }
  ): Promise<IResponse<TokenThirdPartyResponse>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/iam/v3/oauth/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/platformToken'
      .replace('{namespace}', this.namespace)
      .replace('{userId}', userId)
      .replace('{platformId}', platformId)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, TokenThirdPartyResponse, 'TokenThirdPartyResponse')
  }
}
