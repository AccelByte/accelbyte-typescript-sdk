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
import { SectionAdminApi } from '../SectionAdminApi.js'

import { FullSectionInfo } from '../../generated-definitions/FullSectionInfo.js'
import { FullSectionInfoArray } from '../../generated-definitions/FullSectionInfoArray.js'
import { SectionCreate } from '../../generated-definitions/SectionCreate.js'
import { SectionPagingSlicedResult } from '../../generated-definitions/SectionPagingSlicedResult.js'
import { SectionUpdate } from '../../generated-definitions/SectionUpdate.js'

export enum Key_SectionAdmin {
  Sections = 'SectionAdmin.Sections',
  Section = 'SectionAdmin.Section',
  SectionBulk = 'SectionAdmin.SectionBulk',
  Section_BySectionId = 'SectionAdmin.Section_BySectionId',
  SectionPurgeExpired = 'SectionAdmin.SectionPurgeExpired'
}

export const useAdmSections = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams?: {
      end?: string | null
      limit?: number
      offset?: number
      start?: string | null
      storeId?: string | null
      viewId?: string | null
    }
  },
  options?: Omit<UseQueryOptions<SectionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: SectionPagingSlicedResult) => void
): UseQueryResult<SectionPagingSlicedResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSections>[1]) => async () => {
    const data = await SectionAdminApi(sdk, { namespace: input.namespace }).getSections(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<SectionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SectionAdmin.Sections, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateSectionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<FullSectionInfo, AxiosError<ApiError>, ApiArgs & { data: SectionCreate; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: FullSectionInfo) => void
): UseMutationResult<FullSectionInfo, AxiosError<ApiError>, ApiArgs & { data: SectionCreate; queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: SectionCreate; queryParams: { storeId: string | null } }) => {
    const data = await SectionAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSection(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SectionAdmin.Section],
    mutationFn,
    ...options
  })
}

export const useAdmCreateSectionBulkMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullSectionInfoArray,
      AxiosError<ApiError>,
      ApiArgs & { data: SectionCreate[]; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullSectionInfoArray) => void
): UseMutationResult<
  FullSectionInfoArray,
  AxiosError<ApiError>,
  ApiArgs & { data: SectionCreate[]; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { data: SectionCreate[]; queryParams: { storeId: string | null } }) => {
    const data = await SectionAdminApi(sdk, { namespace: input.namespace, config: input.config }).createSectionBulk(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SectionAdmin.SectionBulk],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteSection_BySectionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { sectionId: string; queryParams: { storeId: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { sectionId: string; queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { sectionId: string; queryParams: { storeId: string | null } }) => {
    const data = await SectionAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteSection_BySectionId(
      input.sectionId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SectionAdmin.Section_BySectionId],
    mutationFn,
    ...options
  })
}

export const useAdmSection_BySectionId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { sectionId: string; queryParams?: { storeId?: string | null } },
  options?: Omit<UseQueryOptions<FullSectionInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: FullSectionInfo) => void
): UseQueryResult<FullSectionInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmSection_BySectionId>[1]) => async () => {
    const data = await SectionAdminApi(sdk, { namespace: input.namespace }).getSection_BySectionId(input.sectionId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<FullSectionInfo, AxiosError<ApiError>>({
    queryKey: [Key_SectionAdmin.Section_BySectionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateSection_BySectionIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      FullSectionInfo,
      AxiosError<ApiError>,
      ApiArgs & { sectionId: string; data: SectionUpdate; queryParams: { storeId: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: FullSectionInfo) => void
): UseMutationResult<
  FullSectionInfo,
  AxiosError<ApiError>,
  ApiArgs & { sectionId: string; data: SectionUpdate; queryParams: { storeId: string | null } }
> => {
  //
  const mutationFn = async (input: ApiArgs & { sectionId: string; data: SectionUpdate; queryParams: { storeId: string | null } }) => {
    const data = await SectionAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateSection_BySectionId(
      input.sectionId,
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SectionAdmin.Section_BySectionId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteSectionPurgeExpiredMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { queryParams: { storeId: string | null } }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { queryParams: { storeId: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { queryParams: { storeId: string | null } }) => {
    const data = await SectionAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteSectionPurgeExpired(
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_SectionAdmin.SectionPurgeExpired],
    mutationFn,
    ...options
  })
}
