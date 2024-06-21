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
import { AdminReportsAdminApi } from '../AdminReportsAdminApi.js'

import { ReportListResponse } from '../../generated-definitions/ReportListResponse.js'
import { SubmitReportRequest } from '../../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../../generated-definitions/SubmitReportResponse.js'

export enum Key_AdminReportsAdmin {
  Reports = 'AdminReportsAdmin.Reports',
  Report = 'AdminReportsAdmin.Report'
}

export const useAdmReports = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { category?: string | null; limit?: number; offset?: number; reportedUserId?: string | null; sortBy?: string | null }
  },
  options?: Omit<UseQueryOptions<ReportListResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ReportListResponse) => void
): UseQueryResult<ReportListResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmReports>[1]) => async () => {
    const data = await AdminReportsAdminApi(sdk, { namespace: input.namespace }).getReports(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ReportListResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminReportsAdmin.Reports, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateReportMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<SubmitReportResponse, AxiosError<ApiError>, ApiArgs & { data: SubmitReportRequest }>, 'mutationKey'>,
  callback?: (data: SubmitReportResponse) => void
): UseMutationResult<SubmitReportResponse, AxiosError<ApiError>, ApiArgs & { data: SubmitReportRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: SubmitReportRequest }) => {
    const data = await AdminReportsAdminApi(sdk, { namespace: input.namespace, config: input.config }).createReport(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminReportsAdmin.Report],
    mutationFn,
    ...options
  })
}
