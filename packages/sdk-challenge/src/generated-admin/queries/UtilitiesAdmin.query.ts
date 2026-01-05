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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { UtilitiesAdminApi } from '../UtilitiesAdminApi.js'

import { ItemReferenceResponse } from '../../generated-definitions/ItemReferenceResponse.js'

export enum Key_UtilitiesAdmin {
  ChallengesItemReferences = 'Challenge.UtilitiesAdmin.ChallengesItemReferences'
}

/**
 * - Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UtilitiesAdmin.ChallengesItemReferences, input]
 * }
 * ```
 */
export const useUtilitiesAdminApi_GetChallengesItemReferences = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { itemId: string | null } },
  options?: Omit<UseQueryOptions<ItemReferenceResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ItemReferenceResponse>) => void
): UseQueryResult<ItemReferenceResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUtilitiesAdminApi_GetChallengesItemReferences>[1]) => async () => {
    const response = await UtilitiesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getChallengesItemReferences(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ItemReferenceResponse, AxiosError<ApiError>>({
    queryKey: [Key_UtilitiesAdmin.ChallengesItemReferences, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
