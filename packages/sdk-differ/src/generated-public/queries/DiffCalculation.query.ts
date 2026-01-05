/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DiffCalculationApi } from '../DiffCalculationApi.js'

import { LateDiffRequest } from '../../generated-definitions/LateDiffRequest.js'
import { PingResponse } from '../../generated-definitions/PingResponse.js'

export enum Key_DiffCalculation {
  Diff = 'Differ.DiffCalculation.Diff',
  Ping = 'Differ.DiffCalculation.Ping',
  Diff_v2 = 'Differ.DiffCalculation.Diff_v2'
}

/**
 * &lt;p&gt;Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.&lt;/p&gt;&lt;p&gt;Every request is registered into the queue first, and will be processed by the available Differ.&lt;/p&gt;&lt;p&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Scope required: &lt;code&gt;publishing&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DiffCalculation.Diff, input]
 * }
 * ```
 */
export const useDiffCalculationApi_CreateDiffMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LateDiffRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LateDiffRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: LateDiffRequest }) => {
    const response = await DiffCalculationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDiff(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DiffCalculation.Diff],
    mutationFn,
    ...options
  })
}

export const useDiffCalculationApi_GetPing = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<PingResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PingResponse>) => void
): UseQueryResult<PingResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDiffCalculationApi_GetPing>[1]) => async () => {
    const response = await DiffCalculationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getPing()
    callback && callback(response)
    return response.data
  }

  return useQuery<PingResponse, AxiosError<ApiError>>({
    queryKey: [Key_DiffCalculation.Ping, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * &lt;p&gt;Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.&lt;/p&gt;&lt;p&gt;The Diffs calculation will be parallelized between the available Differ instances.&lt;/p&gt;&lt;p&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Scope required: &lt;code&gt;publishing&lt;/code&gt;&lt;/p&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DiffCalculation.Diff_v2, input]
 * }
 * ```
 */
export const useDiffCalculationApi_CreateDiffMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LateDiffRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LateDiffRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: LateDiffRequest }) => {
    const response = await DiffCalculationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDiff_v2(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DiffCalculation.Diff_v2],
    mutationFn,
    ...options
  })
}
