/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { UserAgreementAdminApi } from '../UserAgreementAdminApi.js'

import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'

export enum Key_UserAgreementAdmin {
  AgreementPolicy_ByUserId = 'Legal.UserAgreementAdmin.AgreementPolicy_ByUserId'
}

/**
 * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserAgreementAdmin.AgreementPolicy_ByUserId, input]
 * }
 * ```
 */
export const useUserAgreementAdminApi_CreateAgreementPolicy_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      AcceptAgreementResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & {
        userId: string
        data: AcceptAgreementRequest[]
        queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
      }
    >,
    'mutationKey'
  >,
  callback?: (data: AcceptAgreementResponse) => void
): UseMutationResult<
  AcceptAgreementResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & {
    userId: string
    data: AcceptAgreementRequest[]
    queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
  }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      userId: string
      data: AcceptAgreementRequest[]
      queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
    }
  ) => {
    const response = await UserAgreementAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createAgreementPolicy_ByUserId(input.userId, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserAgreementAdmin.AgreementPolicy_ByUserId],
    mutationFn,
    ...options
  })
}
