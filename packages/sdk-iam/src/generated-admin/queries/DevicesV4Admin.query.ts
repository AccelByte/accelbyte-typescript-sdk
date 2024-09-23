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
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DevicesV4AdminApi } from '../DevicesV4AdminApi.js'

import { DeviceBanRequestV4 } from '../../generated-definitions/DeviceBanRequestV4.js'
import { DeviceBanResponseV4 } from '../../generated-definitions/DeviceBanResponseV4.js'
import { DeviceBanUpdateRequestV4 } from '../../generated-definitions/DeviceBanUpdateRequestV4.js'
import { DeviceBannedResponseV4 } from '../../generated-definitions/DeviceBannedResponseV4.js'
import { DeviceBansResponseV4 } from '../../generated-definitions/DeviceBansResponseV4.js'
import { DeviceIdDecryptResponseV4 } from '../../generated-definitions/DeviceIdDecryptResponseV4.js'
import { DeviceTypesResponseV4 } from '../../generated-definitions/DeviceTypesResponseV4.js'
import { DeviceUsersResponseV4 } from '../../generated-definitions/DeviceUsersResponseV4.js'
import { DevicesResponseV4 } from '../../generated-definitions/DevicesResponseV4.js'

export enum Key_DevicesV4Admin {
  Devices_v4 = 'Iam.DevicesV4Admin.Devices_v4',
  DevicesBans_v4 = 'Iam.DevicesV4Admin.DevicesBans_v4',
  DeviceBan_v4 = 'Iam.DevicesV4Admin.DeviceBan_v4',
  DevicesTypes_v4 = 'Iam.DevicesV4Admin.DevicesTypes_v4',
  DevicesBanned_v4 = 'Iam.DevicesV4Admin.DevicesBanned_v4',
  DevicesReport_v4 = 'Iam.DevicesV4Admin.DevicesReport_v4',
  DeviceBan_ByBanId_v4 = 'Iam.DevicesV4Admin.DeviceBan_ByBanId_v4',
  Bans_ByDeviceId_v4 = 'Iam.DevicesV4Admin.Bans_ByDeviceId_v4',
  Unban_ByDeviceId_v4 = 'Iam.DevicesV4Admin.Unban_ByDeviceId_v4',
  Users_ByDeviceId_v4 = 'Iam.DevicesV4Admin.Users_ByDeviceId_v4',
  Decrypt_ByDeviceId_v4 = 'Iam.DevicesV4Admin.Decrypt_ByDeviceId_v4'
}

/**
 * This is the endpoint for an admin to get devices a user ever used to login
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.Devices_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetDevices_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { userId?: string | null } },
  options?: Omit<UseQueryOptions<DevicesResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DevicesResponseV4>) => void
): UseQueryResult<DevicesResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetDevices_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDevices_v4(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DevicesResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.Devices_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the endpoint for an admin to get device bans of user
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.DevicesBans_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetDevicesBans_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { userId: string | null } },
  options?: Omit<UseQueryOptions<DeviceBansResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeviceBansResponseV4>) => void
): UseQueryResult<DeviceBansResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetDevicesBans_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDevicesBans_v4(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DeviceBansResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DevicesBans_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the endpoint for an admin to ban a device
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.DeviceBan_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_CreateDeviceBanMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DeviceBanRequestV4 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DeviceBanRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: DeviceBanRequestV4 }) => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createDeviceBan_v4(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DevicesV4Admin.DeviceBan_v4],
    mutationFn,
    ...options
  })
}

/**
 * This is the endpoint for an admin to get device types
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.DevicesTypes_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetDevicesTypes_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<DeviceTypesResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeviceTypesResponseV4>) => void
): UseQueryResult<DeviceTypesResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetDevicesTypes_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDevicesTypes_v4()
    callback && callback(response)
    return response.data
  }

  return useQuery<DeviceTypesResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DevicesTypes_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the endpoint for an admin to get banned devices
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.DevicesBanned_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetDevicesBanned_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
    queryParams?: { deviceType?: string | null; endDate?: string | null; limit?: number; offset?: number; startDate?: string | null }
  },
  options?: Omit<UseQueryOptions<DeviceBannedResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeviceBannedResponseV4>) => void
): UseQueryResult<DeviceBannedResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetDevicesBanned_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDevicesBanned_v4(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DeviceBannedResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DevicesBanned_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the endpoint for an admin to generate device report
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.DevicesReport_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetDevicesReport_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { deviceType: string | null; endDate?: string | null; startDate?: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetDevicesReport_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDevicesReport_v4(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DevicesReport_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the endpoint for an admin to get device ban config
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.DeviceBan_ByBanId_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetDeviceBan_ByBanId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { banId: string },
  options?: Omit<UseQueryOptions<DeviceBanResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeviceBanResponseV4>) => void
): UseQueryResult<DeviceBanResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetDeviceBan_ByBanId_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getDeviceBan_ByBanId_v4(
      input.banId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DeviceBanResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DeviceBan_ByBanId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the endpoint for an admin to update a device ban config
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.DeviceBan_ByBanId_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_UpdateDeviceBan_ByBanIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { banId: string; data: DeviceBanUpdateRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { banId: string; data: DeviceBanUpdateRequestV4 }> => {
  const mutationFn = async (input: SdkSetConfigParam & { banId: string; data: DeviceBanUpdateRequestV4 }) => {
    const response = await DevicesV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateDeviceBan_ByBanId_v4(input.banId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DevicesV4Admin.DeviceBan_ByBanId_v4],
    mutationFn,
    ...options
  })
}

/**
 * This is the endpoint for an admin to get device ban list
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.Bans_ByDeviceId_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetBans_ByDeviceId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { deviceId: string },
  options?: Omit<UseQueryOptions<DeviceBansResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeviceBansResponseV4>) => void
): UseQueryResult<DeviceBansResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetBans_ByDeviceId_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getBans_ByDeviceId_v4(
      input.deviceId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DeviceBansResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.Bans_ByDeviceId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This is the endpoint for an admin to unban device
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.Unban_ByDeviceId_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_UpdateUnban_ByDeviceIdMutation_v4 = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deviceId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { deviceId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { deviceId: string }) => {
    const response = await DevicesV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateUnban_ByDeviceId_v4(input.deviceId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_DevicesV4Admin.Unban_ByDeviceId_v4],
    mutationFn,
    ...options
  })
}

/**
 * This is the endpoint for an admin to get users that ever login on the device
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.Users_ByDeviceId_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetUsers_ByDeviceId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { deviceId: string },
  options?: Omit<UseQueryOptions<DeviceUsersResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeviceUsersResponseV4>) => void
): UseQueryResult<DeviceUsersResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetUsers_ByDeviceId_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getUsers_ByDeviceId_v4(
      input.deviceId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<DeviceUsersResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.Users_ByDeviceId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * This is the endpoint for an admin to decrypt device id
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DevicesV4Admin.Decrypt_ByDeviceId_v4, input]
 * }
 * ```
 */
export const useDevicesV4AdminApi_GetDecrypt_ByDeviceId_v4 = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { deviceId: string },
  options?: Omit<UseQueryOptions<DeviceIdDecryptResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<DeviceIdDecryptResponseV4>) => void
): UseQueryResult<DeviceIdDecryptResponseV4, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useDevicesV4AdminApi_GetDecrypt_ByDeviceId_v4>[1]) => async () => {
    const response = await DevicesV4AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getDecrypt_ByDeviceId_v4(input.deviceId)
    callback && callback(response)
    return response.data
  }

  return useQuery<DeviceIdDecryptResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.Decrypt_ByDeviceId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
