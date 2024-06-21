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
import { ConfigAdminApi } from '../ConfigAdminApi.js'

import { ConfigValueResponseV3 } from '../../generated-definitions/ConfigValueResponseV3.js'

export enum Key_ConfigAdmin {
  Config_ByConfigKey = 'ConfigAdmin.Config_ByConfigKey'
}

export const useAdmConfig_ByConfigKey = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { configKey: string },
  options?: Omit<UseQueryOptions<ConfigValueResponseV3, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ConfigValueResponseV3) => void
): UseQueryResult<ConfigValueResponseV3, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfig_ByConfigKey>[1]) => async () => {
    const data = await ConfigAdminApi(sdk, { namespace: input.namespace }).getConfig_ByConfigKey(input.configKey)
    callback && callback(data)
    return data
  }

  return useQuery<ConfigValueResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config_ByConfigKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
