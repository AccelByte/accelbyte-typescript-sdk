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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AdminUserEligibilitiesAdminApi } from '../AdminUserEligibilitiesAdminApi.js'

import { RetrieveUserEligibilitiesIndirectResponse } from '../../generated-definitions/RetrieveUserEligibilitiesIndirectResponse.js'

export enum Key_AdminUserEligibilitiesAdmin {
  Eligibilities_ByUserId = 'AdminUserEligibilitiesAdmin.Eligibilities_ByUserId'
}

export const useAdmEligibilities_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    userId: string
    queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
  },
  options?: Omit<UseQueryOptions<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveUserEligibilitiesIndirectResponse) => void
): UseQueryResult<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmEligibilities_ByUserId>[1]) => async () => {
    const data = await AdminUserEligibilitiesAdminApi(sdk, { namespace: input.namespace }).getEligibilities_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveUserEligibilitiesIndirectResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminUserEligibilitiesAdmin.Eligibilities_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
