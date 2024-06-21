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
import { AgreementWithNamespaceAdminApi } from '../AgreementWithNamespaceAdminApi.js'

import { DownloadExportedAgreementsInCsvResponse } from '../../generated-definitions/DownloadExportedAgreementsInCsvResponse.js'
import { InitiateExportAgreementsToCsvResponse } from '../../generated-definitions/InitiateExportAgreementsToCsvResponse.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { UserAgreementsResponseArray } from '../../generated-definitions/UserAgreementsResponseArray.js'
import { UsersAgreementsRequest } from '../../generated-definitions/UsersAgreementsRequest.js'

export enum Key_AgreementWithNamespaceAdmin {
  Agreement = 'AgreementWithNamespaceAdmin.Agreement',
  AgreementsPolicyVersionsUsers = 'AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsers',
  AgreementPolicyUser_ByUserId = 'AgreementWithNamespaceAdmin.AgreementPolicyUser_ByUserId',
  AgreementsPolicyVersionsUsersExportCsvDownload = 'AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsersExportCsvDownload',
  AgreementPolicyVersionUserExportCsvInitiate = 'AgreementWithNamespaceAdmin.AgreementPolicyVersionUserExportCsvInitiate'
}

export const useAdmCreateAgreementMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<UserAgreementsResponseArray, AxiosError<ApiError>, ApiArgs & { data: UsersAgreementsRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserAgreementsResponseArray) => void
): UseMutationResult<UserAgreementsResponseArray, AxiosError<ApiError>, ApiArgs & { data: UsersAgreementsRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UsersAgreementsRequest }) => {
    const data = await AgreementWithNamespaceAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAgreement(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AgreementWithNamespaceAdmin.Agreement],
    mutationFn,
    ...options
  })
}

export const useAdmAgreementsPolicyVersionsUsers = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      policyVersionId: string | null
      convertGameUserId?: boolean | null
      keyword?: string | null
      limit?: number
      offset?: number
    }
  },
  options?: Omit<UseQueryOptions<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PagedRetrieveUserAcceptedAgreementResponse) => void
): UseQueryResult<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAgreementsPolicyVersionsUsers>[1]) => async () => {
    const data = await AgreementWithNamespaceAdminApi(sdk, { namespace: input.namespace }).getAgreementsPolicyVersionsUsers(
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>>({
    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmAgreementPolicyUser_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { excludeOtherNamespacesPolicies?: boolean | null } },
  options?: Omit<UseQueryOptions<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveAcceptedAgreementResponseArray) => void
): UseQueryResult<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAgreementPolicyUser_ByUserId>[1]) => async () => {
    const data = await AgreementWithNamespaceAdminApi(sdk, { namespace: input.namespace }).getAgreementPolicyUser_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementPolicyUser_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmAgreementsPolicyVersionsUsersExportCsvDownload = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { exportId: string | null } },
  options?: Omit<UseQueryOptions<DownloadExportedAgreementsInCsvResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DownloadExportedAgreementsInCsvResponse) => void
): UseQueryResult<DownloadExportedAgreementsInCsvResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmAgreementsPolicyVersionsUsersExportCsvDownload>[1]) => async () => {
    const data = await AgreementWithNamespaceAdminApi(sdk, {
      namespace: input.namespace
    }).getAgreementsPolicyVersionsUsersExportCsvDownload(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<DownloadExportedAgreementsInCsvResponse, AxiosError<ApiError>>({
    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsersExportCsvDownload, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateAgreementPolicyVersionUserExportCsvInitiateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      InitiateExportAgreementsToCsvResponse,
      AxiosError<ApiError>,
      ApiArgs & { queryParams: { policyVersionId: string | null; start: string | null; end?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: InitiateExportAgreementsToCsvResponse) => void
): UseMutationResult<
  InitiateExportAgreementsToCsvResponse,
  AxiosError<ApiError>,
  ApiArgs & { queryParams: { policyVersionId: string | null; start: string | null; end?: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { queryParams: { policyVersionId: string | null; start: string | null; end?: string | null } }
  ) => {
    const data = await AgreementWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createAgreementPolicyVersionUserExportCsvInitiate(input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AgreementWithNamespaceAdmin.AgreementPolicyVersionUserExportCsvInitiate],
    mutationFn,
    ...options
  })
}
