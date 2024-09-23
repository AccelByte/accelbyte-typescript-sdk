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
import { UserEligibilitiesAdminApi } from '../UserEligibilitiesAdminApi.js'

import { RetrieveUserEligibilitiesIndirectResponse } from '../../generated-definitions/RetrieveUserEligibilitiesIndirectResponse.js'

export enum Key_UserEligibilitiesAdmin {
  Eligibilities_ByUserId = 'Legal.UserEligibilitiesAdmin.Eligibilities_ByUserId'
}

/**
 * Retrieve the active policies and its conformance status by user.&lt;br&gt;This process only supports cross-namespace checking between game namespace and publisher namespace , that means if the active policy already accepted by the same user in publisher namespace, then it will also be considered as eligible in non-publisher namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserEligibilitiesAdmin.Eligibilities_ByUserId, input]
 * }
 * ```
 */
export const useUserEligibilitiesAdminApi_GetEligibilities_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
  },
  options?: Omit<UseQueryOptions<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveUserEligibilitiesIndirectResponse>) => void
): UseQueryResult<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserEligibilitiesAdminApi_GetEligibilities_ByUserId>[1]) => async () => {
    const response = await UserEligibilitiesAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getEligibilities_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserEligibilitiesAdmin.Eligibilities_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
