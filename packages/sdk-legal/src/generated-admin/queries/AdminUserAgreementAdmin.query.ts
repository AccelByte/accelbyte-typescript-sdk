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
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { AdminUserAgreementAdminApi } from '../AdminUserAgreementAdminApi.js'

import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'

export enum Key_AdminUserAgreementAdmin {
  AgreementPolicy_ByUserId = 'AdminUserAgreementAdmin.AgreementPolicy_ByUserId'
}

export const useAdmCreateAgreementPolicy_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      AcceptAgreementResponse,
      AxiosError<ApiError>,
      ApiArgs & {
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
  ApiArgs & {
    userId: string
    data: AcceptAgreementRequest[]
    queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
  }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & {
      userId: string
      data: AcceptAgreementRequest[]
      queryParams: { clientId: string | null; countryCode: string | null; publisherUserId?: string | null }
    }
  ) => {
    const data = await AdminUserAgreementAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAgreementPolicy_ByUserId(
      input.userId,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminUserAgreementAdmin.AgreementPolicy_ByUserId],
    mutationFn,
    ...options
  })
}
