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
import { StoreAdminApi } from '../StoreAdminApi.js'

import { CatalogConfigInfo } from '../../generated-definitions/CatalogConfigInfo.js'
import { CatalogConfigUpdate } from '../../generated-definitions/CatalogConfigUpdate.js'
import { CatalogDefinitionInfoArray } from '../../generated-definitions/CatalogDefinitionInfoArray.js'
import { ExportStoreRequest } from '../../generated-definitions/ExportStoreRequest.js'
import { ExportStoreToCsvRequest } from '../../generated-definitions/ExportStoreToCsvRequest.js'
import { ImportStoreHistoryPagingResult } from '../../generated-definitions/ImportStoreHistoryPagingResult.js'
import { ImportStoreResult } from '../../generated-definitions/ImportStoreResult.js'
import { StoreBackupInfo } from '../../generated-definitions/StoreBackupInfo.js'
import { StoreCreate } from '../../generated-definitions/StoreCreate.js'
import { StoreInfo } from '../../generated-definitions/StoreInfo.js'
import { StoreInfoArray } from '../../generated-definitions/StoreInfoArray.js'
import { StoreUpdate } from '../../generated-definitions/StoreUpdate.js'

export enum Key_StoreAdmin {
  Stores = 'StoreAdmin.Stores',
  Store = 'StoreAdmin.Store',
  CatalogConfigs = 'StoreAdmin.CatalogConfigs',
  CatalogConfig = 'StoreAdmin.CatalogConfig',
  Store_ByStoreId = 'StoreAdmin.Store_ByStoreId',
  StorePublished = 'StoreAdmin.StorePublished',
  StoresPublished = 'StoreAdmin.StoresPublished',
  StoreImport_ByNS = 'StoreAdmin.StoreImport_ByNS',
  StoreExportByCsv = 'StoreAdmin.StoreExportByCsv',
  Clone_ByStoreId = 'StoreAdmin.Clone_ByStoreId',
  StoresPublishedBackup = 'StoreAdmin.StoresPublishedBackup',
  StoresCatalogDefinition = 'StoreAdmin.StoresCatalogDefinition',
  StorePublishedRollback = 'StoreAdmin.StorePublishedRollback',
  Export_ByStoreId = 'StoreAdmin.Export_ByStoreId',
  StoresDownloadCsvTemplates = 'StoreAdmin.StoresDownloadCsvTemplates',
  ImportByCsv_ByStoreId = 'StoreAdmin.ImportByCsv_ByStoreId',
  ImportHistory_ByStoreId = 'StoreAdmin.ImportHistory_ByStoreId'
}

export const useAdmStores = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<StoreInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StoreInfoArray) => void
): UseQueryResult<StoreInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStores>[1]) => async () => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace }).getStores()
    callback && callback(data)
    return data
  }

  return useQuery<StoreInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.Stores, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateStoreMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, ApiArgs & { data: StoreCreate }>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, ApiArgs & { data: StoreCreate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: StoreCreate }) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStore(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Store],
    mutationFn,
    ...options
  })
}

export const useAdmCatalogConfigs = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<CatalogConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CatalogConfigInfo) => void
): UseQueryResult<CatalogConfigInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCatalogConfigs>[1]) => async () => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace }).getCatalogConfigs()
    callback && callback(data)
    return data
  }

  return useQuery<CatalogConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.CatalogConfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateCatalogConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<CatalogConfigInfo, AxiosError<ApiError>, ApiArgs & { data: CatalogConfigUpdate }>, 'mutationKey'>,
  callback?: (data: CatalogConfigInfo) => void
): UseMutationResult<CatalogConfigInfo, AxiosError<ApiError>, ApiArgs & { data: CatalogConfigUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CatalogConfigUpdate }) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCatalogConfig(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.CatalogConfig],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteStore_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string }>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string }) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteStore_ByStoreId(input.storeId)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Store_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmStore_ByStoreId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { storeId: string },
  options?: Omit<UseQueryOptions<StoreInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StoreInfo) => void
): UseQueryResult<StoreInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStore_ByStoreId>[1]) => async () => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace }).getStore_ByStoreId(input.storeId)
    callback && callback(data)
    return data
  }

  return useQuery<StoreInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.Store_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateStore_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string; data: StoreUpdate }>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string; data: StoreUpdate }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string; data: StoreUpdate }) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStore_ByStoreId(
      input.storeId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Store_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteStorePublishedMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteStorePublished()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StorePublished],
    mutationFn,
    ...options
  })
}

export const useAdmStoresPublished = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<StoreInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StoreInfo) => void
): UseQueryResult<StoreInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStoresPublished>[1]) => async () => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace }).getStoresPublished()
    callback && callback(data)
    return data
  }

  return useQuery<StoreInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresPublished, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateStoreImport_ByNSMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      ImportStoreResult,
      AxiosError<ApiError>,
      ApiArgs & { data: { file?: File }; queryParams?: { storeId?: string | null; strictMode?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: ImportStoreResult) => void
): UseMutationResult<
  ImportStoreResult,
  AxiosError<ApiError>,
  ApiArgs & { data: { file?: File }; queryParams?: { storeId?: string | null; strictMode?: boolean | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { data: { file?: File }; queryParams?: { storeId?: string | null; strictMode?: boolean | null } }
  ) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStoreImport_ByNS(
      input.data,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StoreImport_ByNS],
    mutationFn,
    ...options
  })
}

export const useAdmCreateStoreExportByCsvMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: ExportStoreToCsvRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: ExportStoreToCsvRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ExportStoreToCsvRequest }) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).createStoreExportByCsv(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StoreExportByCsv],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateClone_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string; queryParams?: { targetStoreId?: string | null } }>,
    'mutationKey'
  >,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, ApiArgs & { storeId: string; queryParams?: { targetStoreId?: string | null } }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string; queryParams?: { targetStoreId?: string | null } }) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateClone_ByStoreId(
      input.storeId,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Clone_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmStoresPublishedBackup = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<StoreBackupInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: StoreBackupInfo) => void
): UseQueryResult<StoreBackupInfo, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStoresPublishedBackup>[1]) => async () => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace }).getStoresPublishedBackup()
    callback && callback(data)
    return data
  }

  return useQuery<StoreBackupInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresPublishedBackup, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmStoresCatalogDefinition = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams: { catalogType: 'APP' | 'CATEGORY' | 'ITEM' | 'SECTION' | 'VIEW' } },
  options?: Omit<UseQueryOptions<CatalogDefinitionInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CatalogDefinitionInfoArray) => void
): UseQueryResult<CatalogDefinitionInfoArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStoresCatalogDefinition>[1]) => async () => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace }).getStoresCatalogDefinition(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<CatalogDefinitionInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresCatalogDefinition, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateStorePublishedRollbackMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, ApiArgs>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, ApiArgs> => {
  //
  const mutationFn = async (input: ApiArgs) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStorePublishedRollback()
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StorePublishedRollback],
    mutationFn,
    ...options
  })
}

export const useAdmCreateExport_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string; data: ExportStoreRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { storeId: string; data: ExportStoreRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { storeId: string; data: ExportStoreRequest }) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).createExport_ByStoreId(
      input.storeId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Export_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmStoresDownloadCsvTemplates = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmStoresDownloadCsvTemplates>[1]) => async () => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace }).getStoresDownloadCsvTemplates()
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresDownloadCsvTemplates, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateImportByCsv_ByStoreIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      ImportStoreResult,
      AxiosError<ApiError>,
      ApiArgs & { storeId: string; data: { category?: File; display?: File; item?: File; notes?: string | null; section?: File } }
    >,
    'mutationKey'
  >,
  callback?: (data: ImportStoreResult) => void
): UseMutationResult<
  ImportStoreResult,
  AxiosError<ApiError>,
  ApiArgs & { storeId: string; data: { category?: File; display?: File; item?: File; notes?: string | null; section?: File } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { storeId: string; data: { category?: File; display?: File; item?: File; notes?: string | null; section?: File } }
  ) => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace, config: input.config }).createImportByCsv_ByStoreId(
      input.storeId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.ImportByCsv_ByStoreId],
    mutationFn,
    ...options
  })
}

export const useAdmImportHistory_ByStoreId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    storeId: string
    queryParams?: {
      end?: string | null
      limit?: number
      offset?: number
      sortBy?: string | null
      start?: string | null
      success?: boolean | null
    }
  },
  options?: Omit<UseQueryOptions<ImportStoreHistoryPagingResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ImportStoreHistoryPagingResult) => void
): UseQueryResult<ImportStoreHistoryPagingResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmImportHistory_ByStoreId>[1]) => async () => {
    const data = await StoreAdminApi(sdk, { namespace: input.namespace }).getImportHistory_ByStoreId(input.storeId, input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ImportStoreHistoryPagingResult, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.ImportHistory_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
