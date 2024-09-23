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
import { StatConfigurationApi } from '../StatConfigurationApi.js'

import { StatCreate } from '../../generated-definitions/StatCreate.js'
import { StatInfo } from '../../generated-definitions/StatInfo.js'

export enum Key_StatConfiguration {
  Stat = 'Social.StatConfiguration.Stat'
}

/**
 * Create stat.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created stat template&lt;/li&gt;&lt;li&gt;default minimum value is 0&lt;/li&gt;&lt;li&gt;default maximum value is 1.7976931348623157e+308&lt;/li&gt;&lt;li&gt;Field globalAggregationMethod will be ignored when setAsGlobal field is false&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StatConfiguration.Stat, input]
 * }
 * ```
 */
export const useStatConfigurationApi_CreateStatMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCreate }>, 'mutationKey'>,
  callback?: (data: StatInfo) => void
): UseMutationResult<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: StatCreate }) => {
    const response = await StatConfigurationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createStat(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StatConfiguration.Stat],
    mutationFn,
    ...options
  })
}
