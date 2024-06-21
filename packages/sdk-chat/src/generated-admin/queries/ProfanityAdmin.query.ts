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
import { ProfanityAdminApi } from '../ProfanityAdminApi.js'

import { Dictionary } from '../../generated-definitions/Dictionary.js'
import { DictionaryExport } from '../../generated-definitions/DictionaryExport.js'
import { DictionaryGroupArray } from '../../generated-definitions/DictionaryGroupArray.js'
import { DictionaryImportResult } from '../../generated-definitions/DictionaryImportResult.js'
import { DictionaryInsertBulkRequest } from '../../generated-definitions/DictionaryInsertBulkRequest.js'
import { DictionaryInsertRequest } from '../../generated-definitions/DictionaryInsertRequest.js'
import { DictionaryQueryResult } from '../../generated-definitions/DictionaryQueryResult.js'
import { DictionaryUpdateRequest } from '../../generated-definitions/DictionaryUpdateRequest.js'

export enum Key_ProfanityAdmin {
  ProfanityDictionary = 'ProfanityAdmin.ProfanityDictionary',
  ProfanityDictionary_ById = 'ProfanityAdmin.ProfanityDictionary_ById',
  ProfanityDictionaryBulk = 'ProfanityAdmin.ProfanityDictionaryBulk',
  ProfanityDictionaryGroup = 'ProfanityAdmin.ProfanityDictionaryGroup',
  ProfanityDictionaryExport = 'ProfanityAdmin.ProfanityDictionaryExport',
  ProfanityDictionaryImport = 'ProfanityAdmin.ProfanityDictionaryImport'
}

export const useAdmProfanityDictionary = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      filterMask?: string | null
      includeChildren?: boolean | null
      limit?: number
      offset?: number
      parentId?: string | null
      startWith?: string | null
      wordType?: string | null
    }
  },
  options?: Omit<UseQueryOptions<DictionaryQueryResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DictionaryQueryResult) => void
): UseQueryResult<DictionaryQueryResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfanityDictionary>[1]) => async () => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace }).getProfanityDictionary(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<DictionaryQueryResult, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityDictionary, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateProfanityDictionaryMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<Dictionary, AxiosError<ApiError>, ApiArgs & { data: DictionaryInsertRequest }>, 'mutationKey'>,
  callback?: (data: Dictionary) => void
): UseMutationResult<Dictionary, AxiosError<ApiError>, ApiArgs & { data: DictionaryInsertRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DictionaryInsertRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfanityDictionary(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionary],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteProfanityDictionary_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { id: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { id: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteProfanityDictionary_ById(input.id)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionary_ById],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateProfanityDictionary_ByIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<Dictionary, AxiosError<ApiError>, ApiArgs & { id: string; data: DictionaryUpdateRequest }>,
    'mutationKey'
  >,
  callback?: (data: Dictionary) => void
): UseMutationResult<Dictionary, AxiosError<ApiError>, ApiArgs & { id: string; data: DictionaryUpdateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { id: string; data: DictionaryUpdateRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateProfanityDictionary_ById(
      input.id,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionary_ById],
    mutationFn,
    ...options
  })
}

export const useAdmCreateProfanityDictionaryBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<Dictionary, AxiosError<ApiError>, ApiArgs & { data: DictionaryInsertBulkRequest }>, 'mutationKey'>,
  callback?: (data: Dictionary) => void
): UseMutationResult<Dictionary, AxiosError<ApiError>, ApiArgs & { data: DictionaryInsertBulkRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: DictionaryInsertBulkRequest }) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfanityDictionaryBulk(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionaryBulk],
    mutationFn,
    ...options
  })
}

export const useAdmProfanityDictionaryGroup = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<DictionaryGroupArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DictionaryGroupArray) => void
): UseQueryResult<DictionaryGroupArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfanityDictionaryGroup>[1]) => async () => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace }).getProfanityDictionaryGroup(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<DictionaryGroupArray, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityDictionaryGroup, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmProfanityDictionaryExport = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<DictionaryExport, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: DictionaryExport) => void
): UseQueryResult<DictionaryExport, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmProfanityDictionaryExport>[1]) => async () => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace }).getProfanityDictionaryExport()
    callback && callback(data)
    return data
  }

  return useQuery<DictionaryExport, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityDictionaryExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateProfanityDictionaryImportMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      DictionaryImportResult,
      AxiosError<ApiError>,
      ApiArgs & { data: { file: File }; queryParams?: { action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE'; showResult?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: DictionaryImportResult) => void
): UseMutationResult<
  DictionaryImportResult,
  AxiosError<ApiError>,
  ApiArgs & { data: { file: File }; queryParams?: { action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE'; showResult?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & {
      data: { file: File }
      queryParams?: { action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE'; showResult?: boolean | null }
    }
  ) => {
    const data = await ProfanityAdminApi(sdk, { namespace: input.namespace, config: input.config }).createProfanityDictionaryImport(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionaryImport],
    mutationFn,
    ...options
  })
}
