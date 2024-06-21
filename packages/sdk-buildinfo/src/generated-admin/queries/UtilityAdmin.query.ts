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
import { UtilityAdminApi } from '../UtilityAdminApi.js'

import { CleanerConfigObject } from '../../generated-definitions/CleanerConfigObject.js'
import { ClientPayload } from '../../generated-definitions/ClientPayload.js'
import { ConfigurationInfo } from '../../generated-definitions/ConfigurationInfo.js'
import { ConfigurationUpdate } from '../../generated-definitions/ConfigurationUpdate.js'
import { PingResultResponse } from '../../generated-definitions/PingResultResponse.js'

export enum Key_UtilityAdmin {
  PingDiffer = 'UtilityAdmin.PingDiffer',
  Configurations = 'UtilityAdmin.Configurations',
  Configuration = 'UtilityAdmin.Configuration',
  ValidateSdkConfig = 'UtilityAdmin.ValidateSdkConfig',
  CleanerConfigurations = 'UtilityAdmin.CleanerConfigurations'
}

export const useAdmPingDiffer = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<PingResultResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: PingResultResponse) => void
): UseQueryResult<PingResultResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmPingDiffer>[1]) => async () => {
    const data = await UtilityAdminApi(sdk, { namespace: input.namespace }).getPingDiffer()
    callback && callback(data)
    return data
  }

  return useQuery<PingResultResponse, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.PingDiffer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmConfigurations = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<ConfigurationInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigurationInfo) => void
): UseQueryResult<ConfigurationInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigurations>[1]) => async () => {
    const data = await UtilityAdminApi(sdk, { namespace: input.namespace }).getConfigurations()
    callback && callback(data)
    return data
  }

  return useQuery<ConfigurationInfo, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.Configurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmPatchConfigurationMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<ConfigurationInfo, AxiosError<ApiError>, ApiArgs & { data: ConfigurationUpdate }>, 'mutationKey'>,
  callback?: (data: ConfigurationInfo) => void
): UseMutationResult<ConfigurationInfo, AxiosError<ApiError>, ApiArgs & { data: ConfigurationUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ConfigurationUpdate }) => {
    const data = await UtilityAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchConfiguration(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_UtilityAdmin.Configuration],
    mutationFn,
    ...options
  })
}

export const useAdmValidateSdkConfig = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { clientId: string | null; redirectUri: string | null } },
  options?: Omit<UseQueryOptions<ClientPayload, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ClientPayload) => void
): UseQueryResult<ClientPayload, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmValidateSdkConfig>[1]) => async () => {
    const data = await UtilityAdminApi(sdk, { namespace: input.namespace }).getValidateSdkConfig(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ClientPayload, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.ValidateSdkConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCleanerConfigurations = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<CleanerConfigObject, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CleanerConfigObject) => void
): UseQueryResult<CleanerConfigObject, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCleanerConfigurations>[1]) => async () => {
    const data = await UtilityAdminApi(sdk, { namespace: input.namespace }).getCleanerConfigurations()
    callback && callback(data)
    return data
  }

  return useQuery<CleanerConfigObject, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.CleanerConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
