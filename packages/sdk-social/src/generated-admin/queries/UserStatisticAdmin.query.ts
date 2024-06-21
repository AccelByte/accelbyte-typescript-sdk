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
import { UserStatisticAdminApi } from '../UserStatisticAdminApi.js'

import { ADtoObjectForResettingUserStatItems } from '../../generated-definitions/ADtoObjectForResettingUserStatItems.js'
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
import { StatItemValuePagingSlicedResult } from '../../generated-definitions/StatItemValuePagingSlicedResult.js'
import { StatResetInfo } from '../../generated-definitions/StatResetInfo.js'
import { UserStatItemInfoArray } from '../../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../../generated-definitions/UserStatItemPagingSlicedResult.js'

export enum Key_UserStatisticAdmin {
  StatitemsBulk = 'UserStatisticAdmin.StatitemsBulk',
  StatitemValueBulk = 'UserStatisticAdmin.StatitemValueBulk',
  StatitemValueBulk_ByNS = 'UserStatisticAdmin.StatitemValueBulk_ByNS',
  Statitems_ByUserId = 'UserStatisticAdmin.Statitems_ByUserId',
  StatitemValueResetBulk = 'UserStatisticAdmin.StatitemValueResetBulk',
  Statitems_ByStatCode = 'UserStatisticAdmin.Statitems_ByStatCode',
  StatitemBulk_ByUserId = 'UserStatisticAdmin.StatitemBulk_ByUserId',
  StatitemsValueBulkGetOrDefault = 'UserStatisticAdmin.StatitemsValueBulkGetOrDefault',
  StatitemsValueBulkGetOrDefault_ByNS = 'UserStatisticAdmin.StatitemsValueBulkGetOrDefault_ByNS',
  StatitemValueBulk_ByUserId = 'UserStatisticAdmin.StatitemValueBulk_ByUserId',
  StatitemsValueBulk_ByUserId = 'UserStatisticAdmin.StatitemsValueBulk_ByUserId',
  StatitemValueBulk_ByUserId_ByNS = 'UserStatisticAdmin.StatitemValueBulk_ByUserId_ByNS',
  StatitemValueResetBulk_ByUserId = 'UserStatisticAdmin.StatitemValueResetBulk_ByUserId',
  Statitem_ByUserId_ByStatCode = 'UserStatisticAdmin.Statitem_ByUserId_ByStatCode',
  StatitemValueResetBulk_ByUserId_ByNS = 'UserStatisticAdmin.StatitemValueResetBulk_ByUserId_ByNS',
  Statitem_ByUserId_ByStatCode_ByNS = 'UserStatisticAdmin.Statitem_ByUserId_ByStatCode_ByNS',
  StatitemValue_ByUserId_ByStatCode = 'UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode',
  StatitemValueReset_ByUserId_ByStatCode = 'UserStatisticAdmin.StatitemValueReset_ByUserId_ByStatCode'
}

export const useAdmStatitemsBulk = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { statCode: string | null; userIds: string | null } },
  options?: Omit<UseQueryOptions<UserStatItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: UserStatItemInfoArray) => void
): UseQueryResult<UserStatItemInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatitemsBulk>[1]) => async () => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace }).getStatitemsBulk(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UserStatItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchStatitemValueBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserStatItemInc[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkUserStatItemInc[] }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchStatitemValueBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStatitemValueBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserStatItemInc[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkUserStatItemInc[] }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStatitemValueBulk(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStatitemValueBulk_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserStatItemUpdate[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserStatItemUpdate[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkUserStatItemUpdate[] }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStatitemValueBulk_ByNS(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmStatitems_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
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
  callback?: (data: UserStatItemPagingSlicedResult) => void
): UseQueryResult<UserStatItemPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatitems_ByUserId>[1]) => async () => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace }).getStatitems_ByUserId(input.userId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<UserStatItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.Statitems_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateStatitemValueResetBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserStatItemReset[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { data: BulkUserStatItemReset[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkUserStatItemReset[] }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStatitemValueResetBulk(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk],
    mutationFn,
    ...options
  })
}

export const useAdmStatitems_ByStatCode = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { statCode: string; queryParams?: { limit?: number; offset?: number; sortBy?: string | null } },
  options?: Omit<UseQueryOptions<StatItemValuePagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StatItemValuePagingSlicedResult) => void
): UseQueryResult<StatItemValuePagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatitems_ByStatCode>[1]) => async () => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace }).getStatitems_ByStatCode(input.statCode, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<StatItemValuePagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.Statitems_ByStatCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateStatitemBulk_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: BulkStatItemCreate[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: BulkStatItemCreate[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: BulkStatItemCreate[] }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStatitemBulk_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemBulk_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmStatitemsValueBulkGetOrDefault = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { statCode: string | null; userIds: string[] } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ADtoObjectForUserStatItemValueArray) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatitemsValueBulkGetOrDefault>[1]) => async () => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace }).getStatitemsValueBulkGetOrDefault(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulkGetOrDefault, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmStatitemsValueBulkGetOrDefault_ByNS = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { statCode: string | null; userIds: string[]; additionalKey?: string | null } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ADtoObjectForUserStatItemValueArray) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatitemsValueBulkGetOrDefault_ByNS>[1]) => async () => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace }).getStatitemsValueBulkGetOrDefault_ByNS(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulkGetOrDefault_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchStatitemValueBulk_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: BulkStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: BulkStatItemInc[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: BulkStatItemInc[] }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchStatitemValueBulk_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStatitemValueBulk_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: BulkStatItemInc[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: BulkStatItemInc[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: BulkStatItemInc[] }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStatitemValueBulk_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmStatitemsValueBulk_ByUserId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { userId: string; queryParams?: { additionalKey?: string | null; statCodes?: string[]; tags?: string[] } },
  options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ADtoObjectForUserStatItemValueArray) => void
): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStatitemsValueBulk_ByUserId>[1]) => async () => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace }).getStatitemsValueBulk_ByUserId(
      input.userId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateStatitemValueBulk_ByUserId_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkStatOperationResultArray,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; data: BulkStatItemUpdate[]; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<
  BulkStatOperationResultArray,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; data: BulkStatItemUpdate[]; queryParams?: { additionalKey?: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; data: BulkStatItemUpdate[]; queryParams?: { additionalKey?: string | null } }
  ) => {
    const data = await UserStatisticAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateStatitemValueBulk_ByUserId_ByNS(input.userId, input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStatitemValueResetBulk_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: BulkStatItemReset[] }>,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, ApiArgs & { userId: string; data: BulkStatItemReset[] }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: BulkStatItemReset[] }) => {
    const data = await UserStatisticAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateStatitemValueResetBulk_ByUserId(input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteStatitem_ByUserId_ByStatCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; statCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; statCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; statCode: string }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteStatitem_ByUserId_ByStatCode(
      input.userId,
      input.statCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStatitem_ByUserId_ByStatCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; statCode: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; statCode: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; statCode: string }) => {
    const data = await UserStatisticAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStatitem_ByUserId_ByStatCode(
      input.userId,
      input.statCode
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStatitemValueResetBulk_ByUserId_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      BulkStatOperationResultArray,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; data: ADtoObjectForResettingUserStatItems[]; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: BulkStatOperationResultArray) => void
): UseMutationResult<
  BulkStatOperationResultArray,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; data: ADtoObjectForResettingUserStatItems[]; queryParams?: { additionalKey?: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; data: ADtoObjectForResettingUserStatItems[]; queryParams?: { additionalKey?: string | null } }
  ) => {
    const data = await UserStatisticAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateStatitemValueResetBulk_ByUserId_ByNS(input.userId, input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk_ByUserId_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteStatitem_ByUserId_ByStatCode_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; statCode: string; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; statCode: string; queryParams?: { additionalKey?: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; statCode: string; queryParams?: { additionalKey?: string | null } }) => {
    const data = await UserStatisticAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteStatitem_ByUserId_ByStatCode_ByNS(input.userId, input.statCode, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmPatchStatitemValue_ByUserId_ByStatCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<StatItemIncResult, AxiosError<ApiError>, ApiArgs & { userId: string; statCode: string; data: StatItemInc }>,
    'mutationKey'
  >,
  callback?: (data: StatItemIncResult) => void
): UseMutationResult<StatItemIncResult, AxiosError<ApiError>, ApiArgs & { userId: string; statCode: string; data: StatItemInc }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; statCode: string; data: StatItemInc }) => {
    const data = await UserStatisticAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchStatitemValue_ByUserId_ByStatCode(input.userId, input.statCode, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStatitemValue_ByUserId_ByStatCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      StatItemIncResult,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; statCode: string; data: StatItemUpdate; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: StatItemIncResult) => void
): UseMutationResult<
  StatItemIncResult,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; statCode: string; data: StatItemUpdate; queryParams?: { additionalKey?: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; statCode: string; data: StatItemUpdate; queryParams?: { additionalKey?: string | null } }
  ) => {
    const data = await UserStatisticAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateStatitemValue_ByUserId_ByStatCode(input.userId, input.statCode, input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateStatitemValueReset_ByUserId_ByStatCodeMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      StatItemIncResult,
      AxiosError<ApiError>,
      ApiArgs & { userId: string; statCode: string; data: StatResetInfo; queryParams?: { additionalKey?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: StatItemIncResult) => void
): UseMutationResult<
  StatItemIncResult,
  AxiosError<ApiError>,
  ApiArgs & { userId: string; statCode: string; data: StatResetInfo; queryParams?: { additionalKey?: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { userId: string; statCode: string; data: StatResetInfo; queryParams?: { additionalKey?: string | null } }
  ) => {
    const data = await UserStatisticAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateStatitemValueReset_ByUserId_ByStatCode(input.userId, input.statCode, input.data, input.queryParams)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueReset_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}
