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
import { CampaignAdminApi } from '../CampaignAdminApi.js'

import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { CampaignCreate } from '../../generated-definitions/CampaignCreate.js'
import { CampaignDynamicInfo } from '../../generated-definitions/CampaignDynamicInfo.js'
import { CampaignInfo } from '../../generated-definitions/CampaignInfo.js'
import { CampaignPagingSlicedResult } from '../../generated-definitions/CampaignPagingSlicedResult.js'
import { CampaignUpdate } from '../../generated-definitions/CampaignUpdate.js'
import { CodeCreate } from '../../generated-definitions/CodeCreate.js'
import { CodeCreateResult } from '../../generated-definitions/CodeCreateResult.js'
import { CodeInfo } from '../../generated-definitions/CodeInfo.js'
import { CodeInfoPagingSlicedResult } from '../../generated-definitions/CodeInfoPagingSlicedResult.js'
import { RedeemHistoryPagingSlicedResult } from '../../generated-definitions/RedeemHistoryPagingSlicedResult.js'
import { RedeemRequest } from '../../generated-definitions/RedeemRequest.js'
import { RedeemResult } from '../../generated-definitions/RedeemResult.js'

export enum Key_CampaignAdmin {
  Campaigns = 'CampaignAdmin.Campaigns',
  Campaign = 'CampaignAdmin.Campaign',
  Code_ByCode = 'CampaignAdmin.Code_ByCode',
  Enable_ByCode = 'CampaignAdmin.Enable_ByCode',
  Disable_ByCode = 'CampaignAdmin.Disable_ByCode',
  Campaign_ByCampaignId = 'CampaignAdmin.Campaign_ByCampaignId',
  Redemption_ByUserId = 'CampaignAdmin.Redemption_ByUserId',
  CodeCampaign_ByCampaignId = 'CampaignAdmin.CodeCampaign_ByCampaignId',
  Dynamic_ByCampaignId = 'CampaignAdmin.Dynamic_ByCampaignId',
  HistoryCodes_ByCampaignId = 'CampaignAdmin.HistoryCodes_ByCampaignId',
  CodesCsv_ByCampaignId = 'CampaignAdmin.CodesCsv_ByCampaignId',
  EnableBulkCode_ByCampaignId = 'CampaignAdmin.EnableBulkCode_ByCampaignId',
  DisableBulkCode_ByCampaignId = 'CampaignAdmin.DisableBulkCode_ByCampaignId'
}

export const useAdmCampaigns = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; name?: string | null; offset?: number; tag?: string | null } },
  options?: Omit<UseQueryOptions<CampaignPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CampaignPagingSlicedResult) => void
): UseQueryResult<CampaignPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCampaigns>[1]) => async () => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace }).getCampaigns(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<CampaignPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.Campaigns, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCampaignMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CampaignInfo, AxiosError<ApiError>, ApiArgs & { data: CampaignCreate }>, 'mutationKey'>,
  callback?: (data: CampaignInfo) => void
): UseMutationResult<CampaignInfo, AxiosError<ApiError>, ApiArgs & { data: CampaignCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CampaignCreate }) => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace, config: input.config }).createCampaign(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CampaignAdmin.Campaign],
    mutationFn,
    ...options
  })
}

export const useAdmCode_ByCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { code: string; queryParams?: { redeemable?: boolean | null } },
  options?: Omit<UseQueryOptions<CodeInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CodeInfo) => void
): UseQueryResult<CodeInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCode_ByCode>[1]) => async () => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace }).getCode_ByCode(input.code, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<CodeInfo, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.Code_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateEnable_ByCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CodeInfo, AxiosError<ApiError>, ApiArgs & { code: string }>, 'mutationKey'>,
  callback?: (data: CodeInfo) => void
): UseMutationResult<CodeInfo, AxiosError<ApiError>, ApiArgs & { code: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { code: string }) => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEnable_ByCode(input.code)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CampaignAdmin.Enable_ByCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateDisable_ByCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CodeInfo, AxiosError<ApiError>, ApiArgs & { code: string }>, 'mutationKey'>,
  callback?: (data: CodeInfo) => void
): UseMutationResult<CodeInfo, AxiosError<ApiError>, ApiArgs & { code: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { code: string }) => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDisable_ByCode(input.code)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CampaignAdmin.Disable_ByCode],
    mutationFn,
    ...options
  })
}

export const useAdmCampaign_ByCampaignId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { campaignId: string },
  options?: Omit<UseQueryOptions<CampaignInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CampaignInfo) => void
): UseQueryResult<CampaignInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCampaign_ByCampaignId>[1]) => async () => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace }).getCampaign_ByCampaignId(input.campaignId)
    callback && callback(data)
    return data
  }

  return useQuery<CampaignInfo, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.Campaign_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCampaign_ByCampaignIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CampaignInfo, AxiosError<ApiError>, ApiArgs & { campaignId: string; data: CampaignUpdate }>,
    'mutationKey'
  >,
  callback?: (data: CampaignInfo) => void
): UseMutationResult<CampaignInfo, AxiosError<ApiError>, ApiArgs & { campaignId: string; data: CampaignUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { campaignId: string; data: CampaignUpdate }) => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCampaign_ByCampaignId(
      input.campaignId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CampaignAdmin.Campaign_ByCampaignId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateRedemption_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<RedeemResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: RedeemRequest }>, 'mutationKey'>,
  callback?: (data: RedeemResult) => void
): UseMutationResult<RedeemResult, AxiosError<ApiError>, ApiArgs & { userId: string; data: RedeemRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: RedeemRequest }) => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRedemption_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CampaignAdmin.Redemption_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCodeCampaign_ByCampaignId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    campaignId: string
    queryParams?: { activeOnly?: boolean | null; batchNo?: number; code?: string | null; limit?: number; offset?: number }
  },
  options?: Omit<UseQueryOptions<CodeInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CodeInfoPagingSlicedResult) => void
): UseQueryResult<CodeInfoPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCodeCampaign_ByCampaignId>[1]) => async () => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace }).getCodeCampaign_ByCampaignId(
      input.campaignId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<CodeInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.CodeCampaign_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCodeCampaign_ByCampaignIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<CodeCreateResult, AxiosError<ApiError>, ApiArgs & { campaignId: string; data: CodeCreate }>,
    'mutationKey'
  >,
  callback?: (data: CodeCreateResult) => void
): UseMutationResult<CodeCreateResult, AxiosError<ApiError>, ApiArgs & { campaignId: string; data: CodeCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { campaignId: string; data: CodeCreate }) => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace, config: input.config }).createCodeCampaign_ByCampaignId(
      input.campaignId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CampaignAdmin.CodeCampaign_ByCampaignId],
    mutationFn,
    ...options
  })
}

export const useAdmDynamic_ByCampaignId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { campaignId: string },
  options?: Omit<UseQueryOptions<CampaignDynamicInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CampaignDynamicInfo) => void
): UseQueryResult<CampaignDynamicInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDynamic_ByCampaignId>[1]) => async () => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace }).getDynamic_ByCampaignId(input.campaignId)
    callback && callback(data)
    return data
  }

  return useQuery<CampaignDynamicInfo, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.Dynamic_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmHistoryCodes_ByCampaignId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { campaignId: string; queryParams?: { code?: string | null; limit?: number; offset?: number; userId?: string | null } },
  options?: Omit<UseQueryOptions<RedeemHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RedeemHistoryPagingSlicedResult) => void
): UseQueryResult<RedeemHistoryPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmHistoryCodes_ByCampaignId>[1]) => async () => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace }).getHistoryCodes_ByCampaignId(
      input.campaignId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<RedeemHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.HistoryCodes_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCodesCsv_ByCampaignId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { campaignId: string; queryParams?: { batchNo?: number } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCodesCsv_ByCampaignId>[1]) => async () => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace }).getCodesCsv_ByCampaignId(input.campaignId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.CodesCsv_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateEnableBulkCode_ByCampaignIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkOperationResult, AxiosError<ApiError>, ApiArgs & { campaignId: string; queryParams?: { batchNo?: number } }>,
    'mutationKey'
  >,
  callback?: (data: BulkOperationResult) => void
): UseMutationResult<BulkOperationResult, AxiosError<ApiError>, ApiArgs & { campaignId: string; queryParams?: { batchNo?: number } }> => {
  //
  const mutationFn = async (input: ApiArgs & { campaignId: string; queryParams?: { batchNo?: number } }) => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateEnableBulkCode_ByCampaignId(
      input.campaignId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CampaignAdmin.EnableBulkCode_ByCampaignId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateDisableBulkCode_ByCampaignIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkOperationResult, AxiosError<ApiError>, ApiArgs & { campaignId: string; queryParams?: { batchNo?: number } }>,
    'mutationKey'
  >,
  callback?: (data: BulkOperationResult) => void
): UseMutationResult<BulkOperationResult, AxiosError<ApiError>, ApiArgs & { campaignId: string; queryParams?: { batchNo?: number } }> => {
  //
  const mutationFn = async (input: ApiArgs & { campaignId: string; queryParams?: { batchNo?: number } }) => {
    const data = await CampaignAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDisableBulkCode_ByCampaignId(
      input.campaignId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CampaignAdmin.DisableBulkCode_ByCampaignId],
    mutationFn,
    ...options
  })
}
