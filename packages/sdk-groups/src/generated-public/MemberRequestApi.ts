/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { GetMemberRequestsListResponseV1 } from '../generated-definitions/GetMemberRequestsListResponseV1.js'
import { MemberRequest$ } from './endpoints/MemberRequest$.js'

export function MemberRequestApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation

  let axiosInstance = sdkAssembly.axiosInstance
  const requestConfigOverrides = args?.axiosConfig?.request
  const baseURLOverride = args?.coreConfig?.baseURL
  const interceptorsOverride = args?.axiosConfig?.interceptors ?? []

  if (requestConfigOverrides || baseURLOverride || interceptorsOverride.length > 0) {
    const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
      ...(baseURLOverride ? { baseURL: baseURLOverride } : {}),
      ...requestConfigOverrides
    })
    axiosInstance = Network.create(requestConfig)

    for (const interceptor of interceptorsOverride) {
      if (interceptor.type === 'request') {
        axiosInstance.interceptors.request.use(interceptor.onRequest, interceptor.onError)
      }

      if (interceptor.type === 'response') {
        axiosInstance.interceptors.response.use(interceptor.onSuccess, interceptor.onError)
      }
    }
  }

  async function getUsersMeJoinRequest_v2(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeJoinRequest_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getUsersMeInviteRequest(queryParams?: {
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeInviteRequest(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getJoinRequest_ByGroupId(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getJoinRequest_ByGroupId(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getJoinRequest_ByGroupId_v2(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getJoinRequest_ByGroupId_v2(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getInviteRequest_ByGroupId_v2(
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInviteRequest_ByGroupId_v2(groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required valid user authentication This endpoint is used to Get My Join Request To The Groups Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user Action Code: 73502
     */
    getUsersMeJoinRequest_v2,
    /**
     * Required valid user authentication This endpoint is used to Get Group Invitation Request List Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user Action Code: 73502
     */
    getUsersMeInviteRequest,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
     */
    getJoinRequest_ByGroupId,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
     */
    getJoinRequest_ByGroupId_v2,
    /**
     * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Invite Request List Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501
     */
    getInviteRequest_ByGroupId_v2
  }
}
