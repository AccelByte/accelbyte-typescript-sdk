/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { UserStatisticApi } from '../UserStatisticApi.js'

import { ADtoObjectForUserStatItemValueArray } from '../../generated-definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../../generated-definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../../generated-definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../../generated-definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../../generated-definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../../generated-definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemInc } from '../../generated-definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from '../../generated-definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from '../../generated-definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from '../../generated-definitions/StatItemInc.js'
import { StatItemIncResult } from '../../generated-definitions/StatItemIncResult.js'
import { StatItemUpdate } from '../../generated-definitions/StatItemUpdate.js'
import { UserStatItemInfoArray } from '../../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../../generated-definitions/UserStatItemPagingSlicedResult.js'

export enum Key_UserStatistic {
  StatitemsBulk = 'Social.UserStatistic.StatitemsBulk',
  UsersMeStatitems = 'Social.UserStatistic.UsersMeStatitems',
  StatitemValueBulk = 'Social.UserStatistic.StatitemValueBulk',
  StatitemValueBulk_v2 = 'Social.UserStatistic.StatitemValueBulk_v2',
  Statitems_ByUserId = 'Social.UserStatistic.Statitems_ByUserId',
  StatitemValueResetBulk = 'Social.UserStatistic.StatitemValueResetBulk',
  StatitemBulk_ByUserId = 'Social.UserStatistic.StatitemBulk_ByUserId',
  UsersMeStatitemsValueBulk = 'Social.UserStatistic.UsersMeStatitemsValueBulk',
  StatitemsValueBulk_ByUserId = 'Social.UserStatistic.StatitemsValueBulk_ByUserId',
  StatitemValueBulk_ByUserId = 'Social.UserStatistic.StatitemValueBulk_ByUserId',
  StatitemsValueBulk_ByUserId_v2 = 'Social.UserStatistic.StatitemsValueBulk_ByUserId_v2',
  StatitemValueBulk_ByUserId_v2 = 'Social.UserStatistic.StatitemValueBulk_ByUserId_v2',
  StatitemValueResetBulk_ByUserId = 'Social.UserStatistic.StatitemValueResetBulk_ByUserId',
  Statitem_ByUserId_ByStatCode = 'Social.UserStatistic.Statitem_ByUserId_ByStatCode',
  StatitemValue_ByUserId_ByStatCode = 'Social.UserStatistic.StatitemValue_ByUserId_ByStatCode',
  StatitemValue_ByUserId_ByStatCode_v2 = 'Social.UserStatistic.StatitemValue_ByUserId_ByStatCode_v2',
  StatitemValueReset_ByUserId_ByStatCode = 'Social.UserStatistic.StatitemValueReset_ByUserId_ByStatCode'
}

/**
 * Public bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Returns*: list of user&#39;s statItem
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemsBulk, input]
 * }
 * ```
 */
export const useUserStatisticApi_GetStatitemsBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { statCode: string | null; userIds: string | null } },
  options?: Omit<UseQueryOptions<UserStatItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStatItemInfoArray>) => void
): UseQueryResult<UserStatItemInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticApi_GetStatitemsBulk>[1]) => async () => {
    const response = await UserStatisticApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStatitemsBulk(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserStatItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatistic.StatitemsBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.UsersMeStatitems, input]
 * }
 * ```
 */
export const useUserStatisticApi_GetUsersMeStatitems = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string[]; tags?: string[] }
  },
  options?: Omit<UseQueryOptions<UserStatItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStatItemPagingSlicedResult>) => void
): UseQueryResult<UserStatItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticApi_GetUsersMeStatitems>[1]) => async () => {
    const response = await UserStatisticApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsersMeStatitems(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserStatItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatistic.UsersMeStatitems, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueBulk, input]
 * }
 * ```
 */
export const useUserStatisticApi_PatchStatitemValueBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemInc[] }) => {
    const response = await UserStatisticApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchStatitemValueBulk(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueBulk],
    mutationFn,
    ...options
  })
}

/**
 * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueBulk, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValueBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemInc[] }) => {
    const response = await UserStatisticApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateStatitemValueBulk(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueBulk],
    mutationFn,
    ...options
  })
}

/**
 * Public bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Returns*: bulk updated result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueBulk_v2, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValueBulkMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueBulk_v2(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueBulk_v2],
    mutationFn,
    ...options
  })
}

/**
 * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.Statitems_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticApi_GetStatitems_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; statCodes?: string | null; tags?: string | null }
  },
  options?: Omit<UseQueryOptions<UserStatItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStatItemPagingSlicedResult>) => void
): UseQueryResult<UserStatItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticApi_GetStatitems_ByUserId>[1]) => async () => {
    const response = await UserStatisticApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStatitems_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserStatItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatistic.Statitems_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk reset multiple user&#39;s statitems value. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: bulk updated result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueResetBulk, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValueResetBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemReset[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemReset[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemReset[] }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueResetBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueResetBulk],
    mutationFn,
    ...options
  })
}

/**
 * Bulk create statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticApi_CreateStatitemBulk_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkStatOperationResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: BulkStatItemCreate[] }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<
  BulkStatOperationResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: BulkStatItemCreate[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BulkStatItemCreate[] }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatitemBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.UsersMeStatitemsValueBulk, input]
 * }
 * ```
 */
export const useUserStatisticApi_GetUsersMeStatitemsValueBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticApi_GetUsersMeStatitemsValueBulk>[1]) => async () => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getUsersMeStatitemsValueBulk(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatistic.UsersMeStatitemsValueBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemsValueBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticApi_GetStatitemsValueBulk_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticApi_GetStatitemsValueBulk_ByUserId>[1]) => async () => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatitemsValueBulk_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatistic.StatitemsValueBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticApi_PatchStatitemValueBulk_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BulkStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<
  BulkStatOperationResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: BulkStatItemInc[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BulkStatItemInc[] }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchStatitemValueBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValueBulk_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BulkStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<
  BulkStatOperationResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: BulkStatItemInc[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BulkStatItemInc[] }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemsValueBulk_ByUserId_v2, input]
 * }
 * ```
 */
export const useUserStatisticApi_GetStatitemsValueBulk_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticApi_GetStatitemsValueBulk_ByUserId_v2>[1]) => async () => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatitemsValueBulk_ByUserId_v2(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatistic.StatitemsValueBulk_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Public bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: bulk updated result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueBulk_ByUserId_v2, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValueBulk_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkStatOperationResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: BulkStatItemUpdate[]; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<
  BulkStatOperationResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: BulkStatItemUpdate[]; queryParams?: { additionalKey?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; data: BulkStatItemUpdate[]; queryParams?: { additionalKey?: string | null } }
  ) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueBulk_ByUserId_v2(input.userId, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueBulk_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Public bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Returns*: bulk updated result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueResetBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValueResetBulk_ByUserIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkStatOperationResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: BulkStatItemReset[] }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<
  BulkStatOperationResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: BulkStatItemReset[] }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BulkStatItemReset[] }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueResetBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueResetBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.Statitem_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticApi_DeleteStatitem_ByUserId_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; statCode: string }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteStatitem_ByUserId_ByStatCode(input.userId, input.statCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.Statitem_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Create user&#39;s statItem.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.Statitem_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticApi_CreateStatitem_ByUserId_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; statCode: string }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatitem_ByUserId_ByStatCode(input.userId, input.statCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.Statitem_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValue_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticApi_PatchStatitemValue_ByUserId_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StatItemIncResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; statCode: string; data: StatItemInc }
    >,
    'mutationKey'
  >,
  callback?: (data: StatItemIncResult) => void
): UseMutationResult<
  StatItemIncResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; statCode: string; data: StatItemInc }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; statCode: string; data: StatItemInc }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchStatitemValue_ByUserId_ByStatCode(input.userId, input.statCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValue_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValue_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValue_ByUserId_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StatItemIncResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; statCode: string; data: StatItemInc }
    >,
    'mutationKey'
  >,
  callback?: (data: StatItemIncResult) => void
): UseMutationResult<
  StatItemIncResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; statCode: string; data: StatItemInc }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; statCode: string; data: StatItemInc }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValue_ByUserId_ByStatCode(input.userId, input.statCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValue_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Public update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: updated user&#39;s statItem
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValue_ByUserId_ByStatCode_v2, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValue_ByUserId_ByStatCodeMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StatItemIncResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; statCode: string; data: StatItemUpdate; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: StatItemIncResult) => void
): UseMutationResult<
  StatItemIncResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; statCode: string; data: StatItemUpdate; queryParams?: { additionalKey?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; statCode: string; data: StatItemUpdate; queryParams?: { additionalKey?: string | null } }
  ) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValue_ByUserId_ByStatCode_v2(input.userId, input.statCode, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValue_ByUserId_ByStatCode_v2],
    mutationFn,
    ...options
  })
}

/**
 * Reset user&#39;s statitem value for a given namespace and user. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: updated user&#39;s statItem
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatistic.StatitemValueReset_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticApi_UpdateStatitemValueReset_ByUserId_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<StatItemIncResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }>,
    'mutationKey'
  >,
  callback?: (data: StatItemIncResult) => void
): UseMutationResult<StatItemIncResult, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; statCode: string }) => {
    const response = await UserStatisticApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueReset_ByUserId_ByStatCode(input.userId, input.statCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatistic.StatitemValueReset_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}
