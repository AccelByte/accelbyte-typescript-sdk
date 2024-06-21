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
  Devices = 'DevicesV4Admin.Devices',
  DevicesBans = 'DevicesV4Admin.DevicesBans',
  DeviceBan = 'DevicesV4Admin.DeviceBan',
  DevicesTypes = 'DevicesV4Admin.DevicesTypes',
  DevicesBanned = 'DevicesV4Admin.DevicesBanned',
  DevicesReport = 'DevicesV4Admin.DevicesReport',
  DeviceBan_ByBanId = 'DevicesV4Admin.DeviceBan_ByBanId',
  Bans_ByDeviceId = 'DevicesV4Admin.Bans_ByDeviceId',
  Unban_ByDeviceId = 'DevicesV4Admin.Unban_ByDeviceId',
  Users_ByDeviceId = 'DevicesV4Admin.Users_ByDeviceId',
  Decrypt_ByDeviceId = 'DevicesV4Admin.Decrypt_ByDeviceId'
}

export const useAdmDevices = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { userId?: string | null } },
  options?: Omit<UseQueryOptions<DevicesResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DevicesResponseV4) => void
): UseQueryResult<DevicesResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDevices>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getDevices(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<DevicesResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.Devices, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDevicesBans = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { userId: string | null } },
  options?: Omit<UseQueryOptions<DeviceBansResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeviceBansResponseV4) => void
): UseQueryResult<DeviceBansResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDevicesBans>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getDevicesBans(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<DeviceBansResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DevicesBans, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateDeviceBanMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: DeviceBanRequestV4 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: DeviceBanRequestV4 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DeviceBanRequestV4 }) => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).createDeviceBan(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DevicesV4Admin.DeviceBan],
    mutationFn,
    ...options
  })
}

export const useAdmDevicesTypes = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<DeviceTypesResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeviceTypesResponseV4) => void
): UseQueryResult<DeviceTypesResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDevicesTypes>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getDevicesTypes()
    callback && callback(data)
    return data
  }

  return useQuery<DeviceTypesResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DevicesTypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDevicesBanned = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: { deviceType?: string | null; endDate?: string | null; limit?: number; offset?: number; startDate?: string | null }
  },
  options?: Omit<UseQueryOptions<DeviceBannedResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeviceBannedResponseV4) => void
): UseQueryResult<DeviceBannedResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDevicesBanned>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getDevicesBanned(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<DeviceBannedResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DevicesBanned, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDevicesReport = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { deviceType: string | null; endDate?: string | null; startDate?: string | null } },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDevicesReport>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getDevicesReport(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DevicesReport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeviceBan_ByBanId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { banId: string },
  options?: Omit<UseQueryOptions<DeviceBanResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeviceBanResponseV4) => void
): UseQueryResult<DeviceBanResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDeviceBan_ByBanId>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getDeviceBan_ByBanId(input.banId)
    callback && callback(data)
    return data
  }

  return useQuery<DeviceBanResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.DeviceBan_ByBanId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateDeviceBan_ByBanIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { banId: string; data: DeviceBanUpdateRequestV4 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { banId: string; data: DeviceBanUpdateRequestV4 }> => {
  //
  const mutationFn = async (input: ApiArgs & { banId: string; data: DeviceBanUpdateRequestV4 }) => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateDeviceBan_ByBanId(
      input.banId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DevicesV4Admin.DeviceBan_ByBanId],
    mutationFn,
    ...options
  })
}

export const useAdmBans_ByDeviceId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { deviceId: string },
  options?: Omit<UseQueryOptions<DeviceBansResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeviceBansResponseV4) => void
): UseQueryResult<DeviceBansResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmBans_ByDeviceId>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getBans_ByDeviceId(input.deviceId)
    callback && callback(data)
    return data
  }

  return useQuery<DeviceBansResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.Bans_ByDeviceId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateUnban_ByDeviceIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { deviceId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { deviceId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { deviceId: string }) => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace, config: input.config }).updateUnban_ByDeviceId(input.deviceId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_DevicesV4Admin.Unban_ByDeviceId],
    mutationFn,
    ...options
  })
}

export const useAdmUsers_ByDeviceId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { deviceId: string },
  options?: Omit<UseQueryOptions<DeviceUsersResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeviceUsersResponseV4) => void
): UseQueryResult<DeviceUsersResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmUsers_ByDeviceId>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getUsers_ByDeviceId(input.deviceId)
    callback && callback(data)
    return data
  }

  return useQuery<DeviceUsersResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.Users_ByDeviceId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDecrypt_ByDeviceId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { deviceId: string },
  options?: Omit<UseQueryOptions<DeviceIdDecryptResponseV4, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DeviceIdDecryptResponseV4) => void
): UseQueryResult<DeviceIdDecryptResponseV4, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDecrypt_ByDeviceId>[1]) => async () => {
    const data = await DevicesV4AdminApi(sdk, { namespace: input.namespace }).getDecrypt_ByDeviceId(input.deviceId)
    callback && callback(data)
    return data
  }

  return useQuery<DeviceIdDecryptResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_DevicesV4Admin.Decrypt_ByDeviceId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
