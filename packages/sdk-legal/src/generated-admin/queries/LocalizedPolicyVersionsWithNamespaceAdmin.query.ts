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
import { LocalizedPolicyVersionsWithNamespaceAdminApi } from '../LocalizedPolicyVersionsWithNamespaceAdminApi.js'

import { CreateLocalizedPolicyVersionRequest } from '../../generated-definitions/CreateLocalizedPolicyVersionRequest.js'
import { CreateLocalizedPolicyVersionResponse } from '../../generated-definitions/CreateLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponse } from '../../generated-definitions/RetrieveLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponseArray } from '../../generated-definitions/RetrieveLocalizedPolicyVersionResponseArray.js'
import { UpdateLocalizedPolicyVersionRequest } from '../../generated-definitions/UpdateLocalizedPolicyVersionRequest.js'
import { UpdateLocalizedPolicyVersionResponse } from '../../generated-definitions/UpdateLocalizedPolicyVersionResponse.js'
import { UploadLocalizedPolicyVersionAttachmentResponse } from '../../generated-definitions/UploadLocalizedPolicyVersionAttachmentResponse.js'
import { UploadPolicyVersionAttachmentRequest } from '../../generated-definitions/UploadPolicyVersionAttachmentRequest.js'

export enum Key_LocalizedPolicyVersionsWithNamespaceAdmin {
  LocalizedPolicyVersion_ByLocalizedPolicyVersionId = 'LocalizedPolicyVersionsWithNamespaceAdmin.LocalizedPolicyVersion_ByLocalizedPolicyVersionId',
  LocalizedPolicyVersionVersion_ByPolicyVersionId = 'LocalizedPolicyVersionsWithNamespaceAdmin.LocalizedPolicyVersionVersion_ByPolicyVersionId',
  Default_ByLocalizedPolicyVersionId = 'LocalizedPolicyVersionsWithNamespaceAdmin.Default_ByLocalizedPolicyVersionId',
  Attachment_ByLocalizedPolicyVersionId = 'LocalizedPolicyVersionsWithNamespaceAdmin.Attachment_ByLocalizedPolicyVersionId'
}

export const useAdmLocalizedPolicyVersion_ByLocalizedPolicyVersionId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { localizedPolicyVersionId: string },
  options?: Omit<UseQueryOptions<RetrieveLocalizedPolicyVersionResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveLocalizedPolicyVersionResponse) => void
): UseQueryResult<RetrieveLocalizedPolicyVersionResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLocalizedPolicyVersion_ByLocalizedPolicyVersionId>[1]) => async () => {
    const data = await LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace
    }).getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId)
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveLocalizedPolicyVersionResponse, AxiosError<ApiError>>({
    queryKey: [Key_LocalizedPolicyVersionsWithNamespaceAdmin.LocalizedPolicyVersion_ByLocalizedPolicyVersionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateLocalizedPolicyVersion_ByLocalizedPolicyVersionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UpdateLocalizedPolicyVersionResponse,
      AxiosError<ApiError>,
      ApiArgs & { localizedPolicyVersionId: string; data: UpdateLocalizedPolicyVersionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UpdateLocalizedPolicyVersionResponse) => void
): UseMutationResult<
  UpdateLocalizedPolicyVersionResponse,
  AxiosError<ApiError>,
  ApiArgs & { localizedPolicyVersionId: string; data: UpdateLocalizedPolicyVersionRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { localizedPolicyVersionId: string; data: UpdateLocalizedPolicyVersionRequest }) => {
    const data = await LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LocalizedPolicyVersionsWithNamespaceAdmin.LocalizedPolicyVersion_ByLocalizedPolicyVersionId],
    mutationFn,
    ...options
  })
}

export const useAdmLocalizedPolicyVersionVersion_ByPolicyVersionId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { policyVersionId: string },
  options?: Omit<UseQueryOptions<RetrieveLocalizedPolicyVersionResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: RetrieveLocalizedPolicyVersionResponseArray) => void
): UseQueryResult<RetrieveLocalizedPolicyVersionResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLocalizedPolicyVersionVersion_ByPolicyVersionId>[1]) => async () => {
    const data = await LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace
    }).getLocalizedPolicyVersionVersion_ByPolicyVersionId(input.policyVersionId)
    callback && callback(data)
    return data
  }

  return useQuery<RetrieveLocalizedPolicyVersionResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_LocalizedPolicyVersionsWithNamespaceAdmin.LocalizedPolicyVersionVersion_ByPolicyVersionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateLocalizedPolicyVersionVersion_ByPolicyVersionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      CreateLocalizedPolicyVersionResponse,
      AxiosError<ApiError>,
      ApiArgs & { policyVersionId: string; data: CreateLocalizedPolicyVersionRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: CreateLocalizedPolicyVersionResponse) => void
): UseMutationResult<
  CreateLocalizedPolicyVersionResponse,
  AxiosError<ApiError>,
  ApiArgs & { policyVersionId: string; data: CreateLocalizedPolicyVersionRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { policyVersionId: string; data: CreateLocalizedPolicyVersionRequest }) => {
    const data = await LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createLocalizedPolicyVersionVersion_ByPolicyVersionId(input.policyVersionId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LocalizedPolicyVersionsWithNamespaceAdmin.LocalizedPolicyVersionVersion_ByPolicyVersionId],
    mutationFn,
    ...options
  })
}

export const useAdmPatchDefault_ByLocalizedPolicyVersionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { localizedPolicyVersionId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { localizedPolicyVersionId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { localizedPolicyVersionId: string }) => {
    const data = await LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).patchDefault_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LocalizedPolicyVersionsWithNamespaceAdmin.Default_ByLocalizedPolicyVersionId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateAttachment_ByLocalizedPolicyVersionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      UploadLocalizedPolicyVersionAttachmentResponse,
      AxiosError<ApiError>,
      ApiArgs & { localizedPolicyVersionId: string; data: UploadPolicyVersionAttachmentRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: UploadLocalizedPolicyVersionAttachmentResponse) => void
): UseMutationResult<
  UploadLocalizedPolicyVersionAttachmentResponse,
  AxiosError<ApiError>,
  ApiArgs & { localizedPolicyVersionId: string; data: UploadPolicyVersionAttachmentRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { localizedPolicyVersionId: string; data: UploadPolicyVersionAttachmentRequest }) => {
    const data = await LocalizedPolicyVersionsWithNamespaceAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createAttachment_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_LocalizedPolicyVersionsWithNamespaceAdmin.Attachment_ByLocalizedPolicyVersionId],
    mutationFn,
    ...options
  })
}
