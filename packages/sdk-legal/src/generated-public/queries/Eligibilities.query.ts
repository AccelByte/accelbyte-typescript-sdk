/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
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
import { EligibilitiesApi } from '../EligibilitiesApi.js'

import { RetrieveUserEligibilitiesIndirectResponse } from '../../generated-definitions/RetrieveUserEligibilitiesIndirectResponse.js'
import { RetrieveUserEligibilitiesResponseArray } from '../../generated-definitions/RetrieveUserEligibilitiesResponseArray.js'

export enum Key_Eligibilities {
  Eligibility_ByNamespace = 'Legal.Eligibilities.Eligibility_ByNamespace',
  UserEligibility_ByCountryCode_ByClientId_ByUserId = 'Legal.Eligibilities.UserEligibility_ByCountryCode_ByClientId_ByUserId'
}

/**
 * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process supports cross-namespace checking, that means if the active policy already accepted by the same user in other namespace, then it will be considered as eligible.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Eligibilities.Eligibility_ByNamespace, input]
 * }
 * ```
 */
export const useEligibilitiesApi_GetEligibility_ByNamespace = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<RetrieveUserEligibilitiesResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveUserEligibilitiesResponseArray>) => void
): UseQueryResult<RetrieveUserEligibilitiesResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useEligibilitiesApi_GetEligibility_ByNamespace>[1]) => async () => {
    const response = await EligibilitiesApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEligibility_ByNamespace()
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveUserEligibilitiesResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Eligibilities.Eligibility_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process only supports cross-namespace checking between game namespace and publisher namespace , that means if the active policy already accepted by the same user in publisher namespace, then it will also be considered as eligible in non-publisher namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Eligibilities.UserEligibility_ByCountryCode_ByClientId_ByUserId, input]
 * }
 * ```
 */
export const useEligibilitiesApi_GetUserEligibility_ByCountryCode_ByClientId_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { countryCode: string; clientId: string; userId: string },
  options?: Omit<UseQueryOptions<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveUserEligibilitiesIndirectResponse>) => void
): UseQueryResult<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useEligibilitiesApi_GetUserEligibility_ByCountryCode_ByClientId_ByUserId>[1]) =>
    async () => {
      const response = await EligibilitiesApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getUserEligibility_ByCountryCode_ByClientId_ByUserId(input.countryCode, input.clientId, input.userId)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>>({
    queryKey: [Key_Eligibilities.UserEligibility_ByCountryCode_ByClientId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
