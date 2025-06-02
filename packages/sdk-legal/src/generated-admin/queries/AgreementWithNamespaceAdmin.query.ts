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
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AgreementWithNamespaceAdminApi } from '../AgreementWithNamespaceAdminApi.js'

import { DownloadExportedAgreementsInCsvResponse } from '../../generated-definitions/DownloadExportedAgreementsInCsvResponse.js'
import { InitiateExportAgreementsToCsvResponse } from '../../generated-definitions/InitiateExportAgreementsToCsvResponse.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { UserAgreementsResponseArray } from '../../generated-definitions/UserAgreementsResponseArray.js'
import { UsersAgreementsRequest } from '../../generated-definitions/UsersAgreementsRequest.js'

export enum Key_AgreementWithNamespaceAdmin {
  Agreement = 'Legal.AgreementWithNamespaceAdmin.Agreement',
  AgreementsPolicyVersionsUsers = 'Legal.AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsers',
  AgreementPolicyUser_ByUserId = 'Legal.AgreementWithNamespaceAdmin.AgreementPolicyUser_ByUserId',
  AgreementsPolicyVersionsUsersExportCsvDownload = 'Legal.AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsersExportCsvDownload',
  AgreementPolicyVersionUserExportCsvInitiate = 'Legal.AgreementWithNamespaceAdmin.AgreementPolicyVersionUserExportCsvInitiate'
}

/**
 * This API will return all accepted Legal Agreements for each user, including agreements of game users if publisher user has corresponding game account.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AgreementWithNamespaceAdmin.Agreement, input]
 * }
 * ```
 */
export const useAgreementWithNamespaceAdminApi_CreateAgreementMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<UserAgreementsResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersAgreementsRequest }>,
    'mutationKey'
  >,
  callback?: (data: UserAgreementsResponseArray) => void
): UseMutationResult<UserAgreementsResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersAgreementsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UsersAgreementsRequest }) => {
    const response = await AgreementWithNamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createAgreement(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AgreementWithNamespaceAdmin.Agreement],
    mutationFn,
    ...options
  })
}

/**
 * This API will return all users who has accepted a specific policy version.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsers, input]
 * }
 * ```
 */
export const useAgreementWithNamespaceAdminApi_GetAgreementsPolicyVersionsUsers = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams: {
      policyVersionId: string | null
      convertGameUserId?: boolean | null
      keyword?: string | null
      limit?: number
      offset?: number
    }
  },
  options?: Omit<UseQueryOptions<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<PagedRetrieveUserAcceptedAgreementResponse>) => void
): UseQueryResult<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useAgreementWithNamespaceAdminApi_GetAgreementsPolicyVersionsUsers>[1]) => async () => {
      const response = await AgreementWithNamespaceAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAgreementsPolicyVersionsUsers(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<PagedRetrieveUserAcceptedAgreementResponse, AxiosError<ApiError>>({
    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API will return all accepted Legal Agreements for specified user.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementPolicyUser_ByUserId, input]
 * }
 * ```
 */
export const useAgreementWithNamespaceAdminApi_GetAgreementPolicyUser_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { excludeOtherNamespacesPolicies?: boolean | null } },
  options?: Omit<UseQueryOptions<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveAcceptedAgreementResponseArray>) => void
): UseQueryResult<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useAgreementWithNamespaceAdminApi_GetAgreementPolicyUser_ByUserId>[1]) => async () => {
      const response = await AgreementWithNamespaceAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAgreementPolicyUser_ByUserId(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrieveAcceptedAgreementResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementPolicyUser_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API will check the status of export process.&lt;br&gt;If the export process has been completed, the response body will include the download url.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsersExportCsvDownload, input]
 * }
 * ```
 */
export const useAgreementWithNamespaceAdminApi_GetAgreementsPolicyVersionsUsersExportCsvDownload = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { exportId: string | null } },
  options?: Omit<UseQueryOptions<DownloadExportedAgreementsInCsvResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DownloadExportedAgreementsInCsvResponse>) => void
): UseQueryResult<DownloadExportedAgreementsInCsvResponse, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useAgreementWithNamespaceAdminApi_GetAgreementsPolicyVersionsUsersExportCsvDownload>[1]) =>
    async () => {
      const response = await AgreementWithNamespaceAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getAgreementsPolicyVersionsUsersExportCsvDownload(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<DownloadExportedAgreementsInCsvResponse, AxiosError<ApiError>>({
    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementsPolicyVersionsUsersExportCsvDownload, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API will initiate a worker to export list of users who has accepted a specific policy version into a CSV file.&lt;br&gt;To check the export state after initialize it, use `GET /admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/download` API.&lt;br/&gt;&lt;br/&gt;This Initiate API is &lt;b&gt;not allow&lt;/b&gt; multiple export worker running for the same namespace, it will return 409 http error if so.&lt;br/&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AgreementWithNamespaceAdmin.AgreementPolicyVersionUserExportCsvInitiate, input]
 * }
 * ```
 */
export const useAgreementWithNamespaceAdminApi_CreateAgreementPolicyVersionUserExportCsvInitiateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      InitiateExportAgreementsToCsvResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { queryParams: { policyVersionId: string | null; start: string | null; end?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: InitiateExportAgreementsToCsvResponse) => void
): UseMutationResult<
  InitiateExportAgreementsToCsvResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { queryParams: { policyVersionId: string | null; start: string | null; end?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { queryParams: { policyVersionId: string | null; start: string | null; end?: string | null } }
  ) => {
    const response = await AgreementWithNamespaceAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createAgreementPolicyVersionUserExportCsvInitiate(input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_AgreementWithNamespaceAdmin.AgreementPolicyVersionUserExportCsvInitiate],
    mutationFn,
    ...options
  })
}
