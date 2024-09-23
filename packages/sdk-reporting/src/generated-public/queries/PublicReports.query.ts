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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { PublicReportsApi } from '../PublicReportsApi.js'

import { SubmitReportRequest } from '../../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../../generated-definitions/SubmitReportResponse.js'

export enum Key_PublicReports {
  Report = 'Reporting.PublicReports.Report'
}

/**
 * User need to be authenticated to access this endpoint. Submit a report and will return ticket for reported object. New ticket will be created if no OPEN ticket present for reported object (based by objectId and objectType) in a namespace. User can only submit report once for each different user / object reported in the same OPEN ticket. Reporting the same user / object in the same OPEN ticket will return HTTP code 409 (conflict). Fill the &#39;reason&#39; field with a &#39;reason title&#39; Supported category: - UGC - USER - CHAT - EXTENSION
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicReports.Report, input]
 * }
 * ```
 */
export const usePublicReportsApi_CreateReportMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SubmitReportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: SubmitReportRequest }>,
    'mutationKey'
  >,
  callback?: (data: SubmitReportResponse) => void
): UseMutationResult<SubmitReportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: SubmitReportRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SubmitReportRequest }) => {
    const response = await PublicReportsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createReport(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_PublicReports.Report],
    mutationFn,
    ...options
  })
}
