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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { FleetCommanderApi } from '../FleetCommanderApi.js'

export enum Key_FleetCommander {
  Version = 'Ams.FleetCommander.Version'
}

export const useFleetCommanderApi_GetVersion = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFleetCommanderApi_GetVersion>[1]) => async () => {
    const response = await FleetCommanderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getVersion()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_FleetCommander.Version, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
