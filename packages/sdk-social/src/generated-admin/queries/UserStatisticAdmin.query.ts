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
import { UserStatisticAdminApi } from '../UserStatisticAdminApi.js'

import { ADtoObjectForResettingUserStatItems } from '../../generated-definitions/ADtoObjectForResettingUserStatItems.js'
import { ADtoObjectForUserStatItemValueArray } from '../../generated-definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../../generated-definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../../generated-definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../../generated-definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../../generated-definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../../generated-definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemByStatCodes } from '../../generated-definitions/BulkUserStatItemByStatCodes.js'
import { BulkUserStatItemInc } from '../../generated-definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from '../../generated-definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from '../../generated-definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from '../../generated-definitions/StatItemInc.js'
import { StatItemIncResult } from '../../generated-definitions/StatItemIncResult.js'
import { StatItemUpdate } from '../../generated-definitions/StatItemUpdate.js'
import { StatItemValuePagingSlicedResult } from '../../generated-definitions/StatItemValuePagingSlicedResult.js'
import { StatResetInfo } from '../../generated-definitions/StatResetInfo.js'
import { UserStatItemInfoArray } from '../../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../../generated-definitions/UserStatItemPagingSlicedResult.js'

export enum Key_UserStatisticAdmin {
  StatitemsBulk = 'Social.UserStatisticAdmin.StatitemsBulk',
  StatitemValueBulk = 'Social.UserStatisticAdmin.StatitemValueBulk',
  StatitemValueBulk_v2 = 'Social.UserStatisticAdmin.StatitemValueBulk_v2',
  Statitems_ByUserId = 'Social.UserStatisticAdmin.Statitems_ByUserId',
  StatitemValueResetBulk = 'Social.UserStatisticAdmin.StatitemValueResetBulk',
  Statitems_ByStatCode = 'Social.UserStatisticAdmin.Statitems_ByStatCode',
  StatitemBulk_ByUserId = 'Social.UserStatisticAdmin.StatitemBulk_ByUserId',
  StatitemsValueBulkGetOrDefault = 'Social.UserStatisticAdmin.StatitemsValueBulkGetOrDefault',
  StatitemsValueBulkGetOrDefault_v2 = 'Social.UserStatisticAdmin.StatitemsValueBulkGetOrDefault_v2',
  StatitemValueBulk_ByUserId = 'Social.UserStatisticAdmin.StatitemValueBulk_ByUserId',
  StatitemsValueBulk_ByUserId_v2 = 'Social.UserStatisticAdmin.StatitemsValueBulk_ByUserId_v2',
  StatitemValueBulk_ByUserId_v2 = 'Social.UserStatisticAdmin.StatitemValueBulk_ByUserId_v2',
  StatitemValueResetBulk_ByUserId = 'Social.UserStatisticAdmin.StatitemValueResetBulk_ByUserId',
  Statitem_ByUserId_ByStatCode = 'Social.UserStatisticAdmin.Statitem_ByUserId_ByStatCode',
  StatitemValueResetBulk_ByUserId_v2 = 'Social.UserStatisticAdmin.StatitemValueResetBulk_ByUserId_v2',
  Statitem_ByUserId_ByStatCode_v2 = 'Social.UserStatisticAdmin.Statitem_ByUserId_ByStatCode_v2',
  StatitemValue_ByUserId_ByStatCode = 'Social.UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode',
  StatitemValue_ByUserId_ByStatCode_v2 = 'Social.UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode_v2',
  StatitemValueBulkGetOrDefault_ByUserId_v2 = 'Social.UserStatisticAdmin.StatitemValueBulkGetOrDefault_ByUserId_v2',
  StatitemValueReset_ByUserId_ByStatCode = 'Social.UserStatisticAdmin.StatitemValueReset_ByUserId_ByStatCode'
}

/**
 * Bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Returns*: list of user&#39;s statItem
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemsBulk, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_GetStatitemsBulk = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { statCode: string | null; userIds: string | null } },
  options?: Omit<UseQueryOptions<UserStatItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStatItemInfoArray>) => void
): UseQueryResult<UserStatItemInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticAdminApi_GetStatitemsBulk>[1]) => async () => {
    const response = await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStatitemsBulk(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserStatItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk update multiple user&#39;s statitems value.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueBulk, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_PatchStatitemValueBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemInc[] }) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchStatitemValueBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk],
    mutationFn,
    ...options
  })
}

/**
 * Bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueBulk, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValueBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemInc[] }) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk],
    mutationFn,
    ...options
  })
}

/**
 * Bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Returns*: bulk updated result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueBulk_v2, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValueBulkMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueBulk_v2(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_v2],
    mutationFn,
    ...options
  })
}

/**
 * List user&#39;s statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.Statitems_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_GetStatitems_ByUserId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    userId: string
    queryParams?: {
      isPublic?: boolean | null
      limit?: number
      offset?: number
      sortBy?: string | null
      statCodes?: string | null
      tags?: string | null
    }
  },
  options?: Omit<UseQueryOptions<UserStatItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserStatItemPagingSlicedResult>) => void
): UseQueryResult<UserStatItemPagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticAdminApi_GetStatitems_ByUserId>[1]) => async () => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatitems_ByUserId(input.userId, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<UserStatItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.Statitems_ByUserId, input],
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
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueResetBulk, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValueResetBulkMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemReset[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemReset[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemReset[] }) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueResetBulk(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk],
    mutationFn,
    ...options
  })
}

/**
 * Get users&#39; stat item values for a given namespace and statCode. Other info: + *Returns*: list of users&#39; stat item values
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.Statitems_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_GetStatitems_ByStatCode = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { statCode: string; queryParams?: { limit?: number; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<StatItemValuePagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StatItemValuePagingSlicedResult>) => void
): UseQueryResult<StatItemValuePagingSlicedResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticAdminApi_GetStatitems_ByStatCode>[1]) => async () => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStatitems_ByStatCode(input.statCode, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<StatItemValuePagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.Statitems_ByStatCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk create user&#39;s statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_CreateStatitemBulk_ByUserIdMutation = (
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
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatitemBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Bulk fetch multiple user&#39;s stat item values for a given namespace and statCode. NOTE: If stat item does not exist, will return default value. Other detail info: + *Returns*: list of user&#39;s stat item values
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulkGetOrDefault, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_GetStatitemsValueBulkGetOrDefault = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { statCode: string | null; userIds: string[] } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticAdminApi_GetStatitemsValueBulkGetOrDefault>[1]) => async () => {
      const response = await UserStatisticAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStatitemsValueBulkGetOrDefault(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulkGetOrDefault, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk fetch multiple user&#39;s stat item values for a given namespace and statCode. NOTE: If stat item does not exist, will return default value. Other detail info: + *Returns*: list of user&#39;s stat item values
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulkGetOrDefault_v2, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_GetStatitemsValueBulkGetOrDefault_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { statCode: string | null; userIds: string[]; additionalKey?: string | null } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticAdminApi_GetStatitemsValueBulkGetOrDefault_v2>[1]) => async () => {
      const response = await UserStatisticAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStatitemsValueBulkGetOrDefault_v2(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulkGetOrDefault_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_PatchStatitemValueBulk_ByUserIdMutation = (
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
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchStatitemValueBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValueBulk_ByUserIdMutation = (
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
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Admin list all statItems of user&lt;br&gt;NOTE: &lt;b&gt;Legacy endpoint&lt;/b&gt;, please use POST /v2/admin/namespaces/{namespace}/users/{userId}/statitems/value/bulk/getOrDefault&lt;ul&gt;&lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulk_ByUserId_v2, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_GetStatitemsValueBulk_ByUserId_v2 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { userId: string; queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useUserStatisticAdminApi_GetStatitemsValueBulk_ByUserId_v2>[1]) => async () => {
      const response = await UserStatisticAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getStatitemsValueBulk_ByUserId_v2(input.userId, input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulk_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: bulk updated result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId_v2, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValueBulk_ByUserIdMutation_v2 = (
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
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueBulk_ByUserId_v2(input.userId, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Returns*: bulk updated result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueResetBulk_ByUserId, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValueResetBulk_ByUserIdMutation = (
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
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueResetBulk_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * This endpoint is for testing purpose. Use this endpoint for cleaning up after testing.&lt;br&gt;Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_DeleteStatitem_ByUserId_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; statCode: string }) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteStatitem_ByUserId_ByStatCode(input.userId, input.statCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Create statItem for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_CreateStatitem_ByUserId_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; statCode: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; statCode: string }) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatitem_ByUserId_ByStatCode(input.userId, input.statCode)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Bulk reset user&#39;s statitem values for given namespace and user. Other detail info: + *Returns*: bulk updated result
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueResetBulk_ByUserId_v2, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValueResetBulk_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkStatOperationResultArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: ADtoObjectForResettingUserStatItems[]; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<
  BulkStatOperationResultArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: ADtoObjectForResettingUserStatItems[]; queryParams?: { additionalKey?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & {
      userId: string
      data: ADtoObjectForResettingUserStatItems[]
      queryParams?: { additionalKey?: string | null }
    }
  ) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueResetBulk_ByUserId_v2(input.userId, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk_ByUserId_v2],
    mutationFn,
    ...options
  })
}

/**
 * Delete user&#39;s stat items for given namespace, statCode, and user Id. If query param *additionalKey* is provided, it will delete user stat items of specific key (i.e. characterName). Otherwise, it will delete all stat items related to the user Id. &lt;br&gt;Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode_v2, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_DeleteStatitem_ByUserId_ByStatCodeMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; statCode: string; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; statCode: string; queryParams?: { additionalKey?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; statCode: string; queryParams?: { additionalKey?: string | null } }
  ) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteStatitem_ByUserId_ByStatCode_v2(input.userId, input.statCode, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode_v2],
    mutationFn,
    ...options
  })
}

/**
 * Update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_PatchStatitemValue_ByUserId_ByStatCodeMutation = (
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
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchStatitemValue_ByUserId_ByStatCode(input.userId, input.statCode, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

/**
 * Update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: updated user&#39;s statItem
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode_v2, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValue_ByUserId_ByStatCodeMutation_v2 = (
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
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValue_ByUserId_ByStatCode_v2(input.userId, input.statCode, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode_v2],
    mutationFn,
    ...options
  })
}

/**
 * Bulk get user&#39;s statitems value for given namespace and user by multiple stat codes. Will return default value if player doesn&#39;t have the stat. Other detail info: + *Required permission*: resource=&#34;ADMIN:NAMESPACE:{namespace}:USER:{userId}:STATITEM&#34;, action=2 (READ) + *Max stat codes*: 20 + *Returns*: list of user&#39;s stat item values
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueBulkGetOrDefault_ByUserId_v2, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_CreateStatitemValueBulkGetOrDefault_ByUserIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ADtoObjectForUserStatItemValueArray,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; data: BulkUserStatItemByStatCodes; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: ADtoObjectForUserStatItemValueArray) => void
): UseMutationResult<
  ADtoObjectForUserStatItemValueArray,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; data: BulkUserStatItemByStatCodes; queryParams?: { additionalKey?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; data: BulkUserStatItemByStatCodes; queryParams?: { additionalKey?: string | null } }
  ) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createStatitemValueBulkGetOrDefault_ByUserId_v2(input.userId, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulkGetOrDefault_ByUserId_v2],
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
 *    queryKey: [Key_UserStatisticAdmin.StatitemValueReset_ByUserId_ByStatCode, input]
 * }
 * ```
 */
export const useUserStatisticAdminApi_UpdateStatitemValueReset_ByUserId_ByStatCodeMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StatItemIncResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { userId: string; statCode: string; data: StatResetInfo; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: StatItemIncResult) => void
): UseMutationResult<
  StatItemIncResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { userId: string; statCode: string; data: StatResetInfo; queryParams?: { additionalKey?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { userId: string; statCode: string; data: StatResetInfo; queryParams?: { additionalKey?: string | null } }
  ) => {
    const response = await UserStatisticAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStatitemValueReset_ByUserId_ByStatCode(input.userId, input.statCode, input.data, input.queryParams)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueReset_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}
