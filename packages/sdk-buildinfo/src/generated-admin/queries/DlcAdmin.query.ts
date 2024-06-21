/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelbyteSDK, ApiArgs, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { DlcAdminApi } from '../DlcAdminApi.js'

import { CreateDependencyLinkRequest } from '../../generated-definitions/CreateDependencyLinkRequest.js'
import { RetrieveDependencyLinkResponse } from '../../generated-definitions/RetrieveDependencyLinkResponse.js'

export enum Key_DlcAdmin {
  DlcLink = 'DlcAdmin.DlcLink',
  Link_ByBuildId = 'DlcAdmin.Link_ByBuildId'
}

export const useAdmUpdateDlcLinkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateDependencyLinkRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateDependencyLinkRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateDependencyLinkRequest }) => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDlcLink(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcLink],
    mutationFn,
    ...options
  })
}

export const useAdmLink_ByBuildId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { buildId: string },
  options?: Omit<UseQueryOptions<RetrieveDependencyLinkResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveDependencyLinkResponse) => void
): UseQueryResult<RetrieveDependencyLinkResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLink_ByBuildId>[1]) => async () => {
    const data = await DlcAdminApi(sdk, { namespace: input.namespace }).getLink_ByBuildId(input.buildId)
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveDependencyLinkResponse, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.Link_ByBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
