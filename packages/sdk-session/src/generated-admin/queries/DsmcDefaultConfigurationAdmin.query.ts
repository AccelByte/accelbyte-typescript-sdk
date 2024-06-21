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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { DsmcDefaultConfigurationAdminApi } from '../DsmcDefaultConfigurationAdminApi.js'

import { DefaultDsmcConfig } from '../../generated-definitions/DefaultDsmcConfig.js'

export enum Key_DsmcDefaultConfigurationAdmin {
  DsconfigsDefault = 'DsmcDefaultConfigurationAdmin.DsconfigsDefault'
}

export const useAdmDsconfigsDefault = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<DefaultDsmcConfig, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DefaultDsmcConfig) => void
): UseQueryResult<DefaultDsmcConfig, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmDsconfigsDefault>[1]) => async () => {
    const data = await DsmcDefaultConfigurationAdminApi(sdk, { namespace: input.namespace }).getDsconfigsDefault()
    callback && callback(data)
    return data
  }

  return useQuery<DefaultDsmcConfig, AxiosError<ApiError>>({
    queryKey: [Key_DsmcDefaultConfigurationAdmin.DsconfigsDefault, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
