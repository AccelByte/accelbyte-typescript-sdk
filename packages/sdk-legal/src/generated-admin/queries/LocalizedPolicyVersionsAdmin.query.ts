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
import { LocalizedPolicyVersionsAdminApi } from '../LocalizedPolicyVersionsAdminApi.js'

import { CreateLocalizedPolicyVersionRequest } from '../../generated-definitions/CreateLocalizedPolicyVersionRequest.js'
import { CreateLocalizedPolicyVersionResponse } from '../../generated-definitions/CreateLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponse } from '../../generated-definitions/RetrieveLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponseArray } from '../../generated-definitions/RetrieveLocalizedPolicyVersionResponseArray.js'
import { UpdateLocalizedPolicyVersionRequest } from '../../generated-definitions/UpdateLocalizedPolicyVersionRequest.js'
import { UpdateLocalizedPolicyVersionResponse } from '../../generated-definitions/UpdateLocalizedPolicyVersionResponse.js'
import { UploadLocalizedPolicyVersionAttachmentResponse } from '../../generated-definitions/UploadLocalizedPolicyVersionAttachmentResponse.js'
import { UploadPolicyVersionAttachmentRequest } from '../../generated-definitions/UploadPolicyVersionAttachmentRequest.js'

export enum Key_LocalizedPolicyVersionsAdmin {
  LocalizedPolicyVersion_ByLocalizedPolicyVersionId = 'Legal.LocalizedPolicyVersionsAdmin.LocalizedPolicyVersion_ByLocalizedPolicyVersionId',
  LocalizedPolicyVersionVersion_ByPolicyVersionId = 'Legal.LocalizedPolicyVersionsAdmin.LocalizedPolicyVersionVersion_ByPolicyVersionId',
  Default_ByLocalizedPolicyVersionId = 'Legal.LocalizedPolicyVersionsAdmin.Default_ByLocalizedPolicyVersionId',
  Attachment_ByLocalizedPolicyVersionId = 'Legal.LocalizedPolicyVersionsAdmin.Attachment_ByLocalizedPolicyVersionId'
}

/**
 * Retrieve a version of a particular country-specific policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LocalizedPolicyVersionsAdmin.LocalizedPolicyVersion_ByLocalizedPolicyVersionId, input]
 * }
 * ```
 */
export const useLocalizedPolicyVersionsAdminApi_GetLocalizedPolicyVersion_ByLocalizedPolicyVersionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { localizedPolicyVersionId: string },
  options?: Omit<UseQueryOptions<RetrieveLocalizedPolicyVersionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveLocalizedPolicyVersionResponse>) => void
): UseQueryResult<RetrieveLocalizedPolicyVersionResponse, AxiosError<ApiError>> => {
  const queryFn =
    (
      sdk: AccelByteSDK,
      input: Parameters<typeof useLocalizedPolicyVersionsAdminApi_GetLocalizedPolicyVersion_ByLocalizedPolicyVersionId>[1]
    ) =>
    async () => {
      const response = await LocalizedPolicyVersionsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrieveLocalizedPolicyVersionResponse, AxiosError<ApiError>>({
    queryKey: [Key_LocalizedPolicyVersionsAdmin.LocalizedPolicyVersion_ByLocalizedPolicyVersionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update a version of a particular country-specific policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LocalizedPolicyVersionsAdmin.LocalizedPolicyVersion_ByLocalizedPolicyVersionId, input]
 * }
 * ```
 */
export const useLocalizedPolicyVersionsAdminApi_UpdateLocalizedPolicyVersion_ByLocalizedPolicyVersionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateLocalizedPolicyVersionResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { localizedPolicyVersionId: string; data: UpdateLocalizedPolicyVersionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateLocalizedPolicyVersionResponse) => void
): UseMutationResult<
  UpdateLocalizedPolicyVersionResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { localizedPolicyVersionId: string; data: UpdateLocalizedPolicyVersionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { localizedPolicyVersionId: string; data: UpdateLocalizedPolicyVersionRequest }) => {
    const response = await LocalizedPolicyVersionsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LocalizedPolicyVersionsAdmin.LocalizedPolicyVersion_ByLocalizedPolicyVersionId],
    mutationFn,
    ...options
  })
}

/**
 * Retrieve versions of a particular country-specific policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LocalizedPolicyVersionsAdmin.LocalizedPolicyVersionVersion_ByPolicyVersionId, input]
 * }
 * ```
 */
export const useLocalizedPolicyVersionsAdminApi_GetLocalizedPolicyVersionVersion_ByPolicyVersionId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { policyVersionId: string },
  options?: Omit<UseQueryOptions<RetrieveLocalizedPolicyVersionResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveLocalizedPolicyVersionResponseArray>) => void
): UseQueryResult<RetrieveLocalizedPolicyVersionResponseArray, AxiosError<ApiError>> => {
  const queryFn =
    (
      sdk: AccelByteSDK,
      input: Parameters<typeof useLocalizedPolicyVersionsAdminApi_GetLocalizedPolicyVersionVersion_ByPolicyVersionId>[1]
    ) =>
    async () => {
      const response = await LocalizedPolicyVersionsAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getLocalizedPolicyVersionVersion_ByPolicyVersionId(input.policyVersionId)
      callback && callback(response)
      return response.data
    }

  return useQuery<RetrieveLocalizedPolicyVersionResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_LocalizedPolicyVersionsAdmin.LocalizedPolicyVersionVersion_ByPolicyVersionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create a version of a particular country-specific policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LocalizedPolicyVersionsAdmin.LocalizedPolicyVersionVersion_ByPolicyVersionId, input]
 * }
 * ```
 */
export const useLocalizedPolicyVersionsAdminApi_CreateLocalizedPolicyVersionVersion_ByPolicyVersionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateLocalizedPolicyVersionResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { policyVersionId: string; data: CreateLocalizedPolicyVersionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateLocalizedPolicyVersionResponse) => void
): UseMutationResult<
  CreateLocalizedPolicyVersionResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { policyVersionId: string; data: CreateLocalizedPolicyVersionRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { policyVersionId: string; data: CreateLocalizedPolicyVersionRequest }) => {
    const response = await LocalizedPolicyVersionsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createLocalizedPolicyVersionVersion_ByPolicyVersionId(input.policyVersionId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LocalizedPolicyVersionsAdmin.LocalizedPolicyVersionVersion_ByPolicyVersionId],
    mutationFn,
    ...options
  })
}

/**
 * Update a localized version policy to be the default.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LocalizedPolicyVersionsAdmin.Default_ByLocalizedPolicyVersionId, input]
 * }
 * ```
 */
export const useLocalizedPolicyVersionsAdminApi_PatchDefault_ByLocalizedPolicyVersionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { localizedPolicyVersionId: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { localizedPolicyVersionId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { localizedPolicyVersionId: string }) => {
    const response = await LocalizedPolicyVersionsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).patchDefault_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LocalizedPolicyVersionsAdmin.Default_ByLocalizedPolicyVersionId],
    mutationFn,
    ...options
  })
}

/**
 * Request presigned URL for upload attachment for a particular localized version of base policy.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LocalizedPolicyVersionsAdmin.Attachment_ByLocalizedPolicyVersionId, input]
 * }
 * ```
 */
export const useLocalizedPolicyVersionsAdminApi_CreateAttachment_ByLocalizedPolicyVersionIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      UploadLocalizedPolicyVersionAttachmentResponse,
      AxiosError<ApiError>,
      SdkSetConfigParam & { localizedPolicyVersionId: string; data: UploadPolicyVersionAttachmentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UploadLocalizedPolicyVersionAttachmentResponse) => void
): UseMutationResult<
  UploadLocalizedPolicyVersionAttachmentResponse,
  AxiosError<ApiError>,
  SdkSetConfigParam & { localizedPolicyVersionId: string; data: UploadPolicyVersionAttachmentRequest }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { localizedPolicyVersionId: string; data: UploadPolicyVersionAttachmentRequest }
  ) => {
    const response = await LocalizedPolicyVersionsAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createAttachment_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_LocalizedPolicyVersionsAdmin.Attachment_ByLocalizedPolicyVersionId],
    mutationFn,
    ...options
  })
}
