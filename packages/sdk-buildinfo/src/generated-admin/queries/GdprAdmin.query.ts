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
import { GdprAdminApi } from '../GdprAdminApi.js'

import { BuildInfoPii } from '../../generated-definitions/BuildInfoPii.js'

export enum Key_GdprAdmin {
  GdprRemove = 'GdprAdmin.GdprRemove',
  GdprRetrieve = 'GdprAdmin.GdprRetrieve'
}

export const useAdmDeleteGdprRemoveMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BuildInfoPii, AxiosError<ApiError>, ApiArgs & { queryParams: { userId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: BuildInfoPii) => void
): UseMutationResult<BuildInfoPii, AxiosError<ApiError>, ApiArgs & { queryParams: { userId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { queryParams: { userId: string | null } }) => {
    const data = await GdprAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteGdprRemove(input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_GdprAdmin.GdprRemove],
    mutationFn,
    ...options
  })
}

export const useAdmGdprRetrieve = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { userId: string | null } },
  options?: Omit<UseQueryOptions<BuildInfoPii, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: BuildInfoPii) => void
): UseQueryResult<BuildInfoPii, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmGdprRetrieve>[1]) => async () => {
    const data = await GdprAdminApi(sdk, { namespace: input.namespace }).getGdprRetrieve(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<BuildInfoPii, AxiosError<ApiError>>({
    queryKey: [Key_GdprAdmin.GdprRetrieve, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
