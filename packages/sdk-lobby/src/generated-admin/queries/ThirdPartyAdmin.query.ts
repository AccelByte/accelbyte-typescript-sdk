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
import { ThirdPartyAdminApi } from '../ThirdPartyAdminApi.js'

import { CreateConfigRequest } from '../../generated-definitions/CreateConfigRequest.js'
import { CreateConfigResponse } from '../../generated-definitions/CreateConfigResponse.js'
import { GetConfigResponse } from '../../generated-definitions/GetConfigResponse.js'
import { UpdateConfigRequest } from '../../generated-definitions/UpdateConfigRequest.js'
import { UpdateConfigResponse } from '../../generated-definitions/UpdateConfigResponse.js'

export enum Key_ThirdPartyAdmin {
  ThirdpartyConfigSteam = 'ThirdPartyAdmin.ThirdpartyConfigSteam'
}

export const useAdmDeleteThirdpartyConfigSteamMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await ThirdPartyAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteThirdpartyConfigSteam()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam],
    mutationFn,
    ...options
  })
}

export const useAdmThirdpartyConfigSteam = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<GetConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetConfigResponse) => void
): UseQueryResult<GetConfigResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmThirdpartyConfigSteam>[1]) => async () => {
    const data = await ThirdPartyAdminApi(sdk, { namespace: input.namespace }).getThirdpartyConfigSteam()
    callback && callback(data)
    return data
  }

  return useQuery<GetConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateThirdpartyConfigSteamMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CreateConfigResponse, AxiosError<ApiError>, ApiArgs & { data: CreateConfigRequest }>, 'mutationKey'>,
  callback?: (data: CreateConfigResponse) => void
): UseMutationResult<CreateConfigResponse, AxiosError<ApiError>, ApiArgs & { data: CreateConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateConfigRequest }) => {
    const data = await ThirdPartyAdminApi(sdk, { namespace: input.namespace, config: input.config }).createThirdpartyConfigSteam(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateThirdpartyConfigSteamMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<UpdateConfigResponse, AxiosError<ApiError>, ApiArgs & { data: UpdateConfigRequest }>, 'mutationKey'>,
  callback?: (data: UpdateConfigResponse) => void
): UseMutationResult<UpdateConfigResponse, AxiosError<ApiError>, ApiArgs & { data: UpdateConfigRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: UpdateConfigRequest }) => {
    const data = await ThirdPartyAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateThirdpartyConfigSteam(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ThirdPartyAdmin.ThirdpartyConfigSteam],
    mutationFn,
    ...options
  })
}
