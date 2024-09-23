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
import { LocalizedPolicyVersionsWithNamespaceApi } from '../LocalizedPolicyVersionsWithNamespaceApi.js'

import { RetrieveLocalizedPolicyVersionPublicResponse } from '../../generated-definitions/RetrieveLocalizedPolicyVersionPublicResponse.js'

export enum Key_LocalizedPolicyVersionsWithNamespace {
  LocalizedPolicyVersion_ByLocalizedPolicyVersionId = 'Legal.LocalizedPolicyVersionsWithNamespace.LocalizedPolicyVersion_ByLocalizedPolicyVersionId'
}

/**
 * Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LocalizedPolicyVersionsWithNamespace.LocalizedPolicyVersion_ByLocalizedPolicyVersionId, input]
 * }
 * ```
 */
export const useLocalizedPolicyVersionsWithNamespaceApi_GetLocalizedPolicyVersion_ByLocalizedPolicyVersionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { localizedPolicyVersionId: string },
  options?: Omit<UseQueryOptions<RetrieveLocalizedPolicyVersionPublicResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveLocalizedPolicyVersionPublicResponse>) => void
): UseQueryResult<RetrieveLocalizedPolicyVersionPublicResponse, AxiosError<ApiError>> => {
  const queryFn =
    (
      sdk: AccelByteSDK,
      input: Parameters<typeof useLocalizedPolicyVersionsWithNamespaceApi_GetLocalizedPolicyVersion_ByLocalizedPolicyVersionId>[1]
    ) =>
    async () => {
      const response = await LocalizedPolicyVersionsWithNamespaceApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrieveLocalizedPolicyVersionPublicResponse, AxiosError<ApiError>>({
    queryKey: [Key_LocalizedPolicyVersionsWithNamespace.LocalizedPolicyVersion_ByLocalizedPolicyVersionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
