/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
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
  Stores = 'Platform.StoreAdmin.Stores',
  Store = 'Platform.StoreAdmin.Store',
  StoreImport = 'Platform.StoreAdmin.StoreImport',
  CatalogConfigs = 'Platform.StoreAdmin.CatalogConfigs',
  CatalogConfig = 'Platform.StoreAdmin.CatalogConfig',
  Store_ByStoreId = 'Platform.StoreAdmin.Store_ByStoreId',
  StorePublished = 'Platform.StoreAdmin.StorePublished',
  StoresPublished = 'Platform.StoreAdmin.StoresPublished',
  StoreImport_v2 = 'Platform.StoreAdmin.StoreImport_v2',
  StoreExportByCsv = 'Platform.StoreAdmin.StoreExportByCsv',
  Clone_ByStoreId = 'Platform.StoreAdmin.Clone_ByStoreId',
  Export_ByStoreId = 'Platform.StoreAdmin.Export_ByStoreId',
  StoresPublishedBackup = 'Platform.StoreAdmin.StoresPublishedBackup',
  StoresCatalogDefinition = 'Platform.StoreAdmin.StoresCatalogDefinition',
  StorePublishedRollback = 'Platform.StoreAdmin.StorePublishedRollback',
  Export_ByStoreId_v2 = 'Platform.StoreAdmin.Export_ByStoreId_v2',
  StoresDownloadCsvTemplates = 'Platform.StoreAdmin.StoresDownloadCsvTemplates',
  ImportByCsv_ByStoreId = 'Platform.StoreAdmin.ImportByCsv_ByStoreId',
  ImportHistory_ByStoreId = 'Platform.StoreAdmin.ImportHistory_ByStoreId'
}

/**
 * This API is used to list stores in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of stores&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Stores, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStores = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<StoreInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StoreInfoArray>) => void
): UseQueryResult<StoreInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetStores>[1]) => async () => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStores()
    callback && callback(response)
    return response.data
  }

  return useQuery<StoreInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.Stores, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to create a non published store in a namespace.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created store data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Store, input]
 * }
 * ```
 */
export const useStoreAdminApi_CreateStoreMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StoreCreate }>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StoreCreate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: StoreCreate }) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createStore(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Store],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * This API is used to import a store.&lt;p&gt;This api has been deprecated, pls use /v2/admin/namespaces/{namespace}/stores/import to import store.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoreImport, input]
 * }
 * ```
 */
export const useStoreAdminApi_UpdateStoreImportMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StoreInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { file?: File }; queryParams?: { storeId?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: StoreInfo) => void
): UseMutationResult<
  StoreInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { file?: File }; queryParams?: { storeId?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File }; queryParams?: { storeId?: string | null } }) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateStoreImport(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StoreImport],
    mutationFn,
    ...options
  })
}

/**
 * Get catalog config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.CatalogConfigs, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetCatalogConfigs = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<CatalogConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CatalogConfigInfo>) => void
): UseQueryResult<CatalogConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetCatalogConfigs>[1]) => async () => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getCatalogConfigs()
    callback && callback(response)
    return response.data
  }

  return useQuery<CatalogConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.CatalogConfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated catalog config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.CatalogConfig, input]
 * }
 * ```
 */
export const useStoreAdminApi_UpdateCatalogConfigMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<CatalogConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CatalogConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: CatalogConfigInfo) => void
): UseMutationResult<CatalogConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CatalogConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CatalogConfigUpdate }) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateCatalogConfig(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.CatalogConfig],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to delete a store. Only non published store can be deleted.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Store_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_DeleteStore_ByStoreIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId: string }>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { storeId: string }) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteStore_ByStoreId(
      input.storeId
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Store_ByStoreId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get a store.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Store_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStore_ByStoreId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { storeId: string },
  options?: Omit<UseQueryOptions<StoreInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StoreInfo>) => void
): UseQueryResult<StoreInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetStore_ByStoreId>[1]) => async () => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStore_ByStoreId(
      input.storeId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<StoreInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.Store_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to Update a store basic info.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Store_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_UpdateStore_ByStoreIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId: string; data: StoreUpdate }>,
    'mutationKey'
  >,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId: string; data: StoreUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { storeId: string; data: StoreUpdate }) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateStore_ByStoreId(
      input.storeId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Store_ByStoreId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to delete published store including category and items before release to public.&lt;p&gt;&lt;b&gt;Warning: Please do not use this API once published to public user.&lt;/b&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StorePublished, input]
 * }
 * ```
 */
export const useStoreAdminApi_DeleteStorePublishedMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteStorePublished()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StorePublished],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to get a published store basic info, exclude category and item information.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store data&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoresPublished, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStoresPublished = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<StoreInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StoreInfo>) => void
): UseQueryResult<StoreInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetStoresPublished>[1]) => async () => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStoresPublished()
    callback && callback(response)
    return response.data
  }

  return useQuery<StoreInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresPublished, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to import a store.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoreImport_v2, input]
 * }
 * ```
 */
export const useStoreAdminApi_UpdateStoreImportMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ImportStoreResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { file?: File }; queryParams?: { storeId?: string | null; strictMode?: boolean | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: ImportStoreResult) => void
): UseMutationResult<
  ImportStoreResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { file?: File }; queryParams?: { storeId?: string | null; strictMode?: boolean | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: { file?: File }; queryParams?: { storeId?: string | null; strictMode?: boolean | null } }
  ) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateStoreImport_v2(
      input.data,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StoreImport_v2],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to export a store to CSV format
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoreExportByCsv, input]
 * }
 * ```
 */
export const useStoreAdminApi_CreateStoreExportByCsvMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ExportStoreToCsvRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ExportStoreToCsvRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ExportStoreToCsvRequest }) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createStoreExportByCsv(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StoreExportByCsv],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to clone a store. Usually clone a draft store to published store because published store can&#39;t directly edit content.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: clone store info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Clone_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_UpdateClone_ByStoreIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      StoreInfo,
      AxiosError<ApiError>,
      SdkSetConfigParam & { storeId: string; queryParams?: { targetStoreId?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: StoreInfo) => void
): UseMutationResult<
  StoreInfo,
  AxiosError<ApiError>,
  SdkSetConfigParam & { storeId: string; queryParams?: { targetStoreId?: string | null } }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { storeId: string; queryParams?: { targetStoreId?: string | null } }) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateClone_ByStoreId(
      input.storeId,
      input.queryParams
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Clone_ByStoreId],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * This API is used to export a store.&lt;p&gt;This api has been deprecated, pls use /v2/admin/namespaces/{namespace}/stores/export to export store.&lt;br&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Export_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetExport_ByStoreId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { storeId: string },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetExport_ByStoreId>[1]) => async () => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getExport_ByStoreId(
      input.storeId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.Export_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get a store&#39;s backup. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: store backup info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoresPublishedBackup, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStoresPublishedBackup = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<StoreBackupInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<StoreBackupInfo>) => void
): UseQueryResult<StoreBackupInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetStoresPublishedBackup>[1]) => async () => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStoresPublishedBackup()
    callback && callback(response)
    return response.data
  }

  return useQuery<StoreBackupInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresPublishedBackup, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to get catalog definition for import/export store by CSV&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: catalog definition&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoresCatalogDefinition, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStoresCatalogDefinition = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams: { catalogType: 'APP' | 'CATEGORY' | 'ITEM' | 'SECTION' | 'VIEW' } },
  options?: Omit<UseQueryOptions<CatalogDefinitionInfoArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CatalogDefinitionInfoArray>) => void
): UseQueryResult<CatalogDefinitionInfoArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetStoresCatalogDefinition>[1]) => async () => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getStoresCatalogDefinition(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CatalogDefinitionInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresCatalogDefinition, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to rollback a published store. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated store info&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StorePublishedRollback, input]
 * }
 * ```
 */
export const useStoreAdminApi_UpdateStorePublishedRollbackMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: StoreInfo) => void
): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await StoreAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateStorePublishedRollback()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.StorePublishedRollback],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to export a whole or partial store.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Export_ByStoreId_v2, input]
 * }
 * ```
 */
export const useStoreAdminApi_CreateExport_ByStoreIdMutation_v2 = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId: string; data: ExportStoreRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId: string; data: ExportStoreRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { storeId: string; data: ExportStoreRequest }) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createExport_ByStoreId_v2(
      input.storeId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.Export_ByStoreId_v2],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to download store csv templates for store importing by CSV feature
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoresDownloadCsvTemplates, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStoresDownloadCsvTemplates = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetStoresDownloadCsvTemplates>[1]) => async () => {
    const response = await StoreAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getStoresDownloadCsvTemplates()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresDownloadCsvTemplates, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * This API is used to import a store by CSV format.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.ImportByCsv_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_CreateImportByCsv_ByStoreIdMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      ImportStoreResult,
      AxiosError<ApiError>,
      SdkSetConfigParam & { storeId: string; data: { category: File; display: File; item: File; notes: string | null; section: File } }
    >,
    'mutationKey'
  >,
  callback?: (data: ImportStoreResult) => void
): UseMutationResult<
  ImportStoreResult,
  AxiosError<ApiError>,
  SdkSetConfigParam & { storeId: string; data: { category: File; display: File; item: File; notes: string | null; section: File } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { storeId: string; data: { category: File; display: File; item: File; notes: string | null; section: File } }
  ) => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createImportByCsv_ByStoreId(
      input.storeId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_StoreAdmin.ImportByCsv_ByStoreId],
    mutationFn,
    ...options
  })
}

/**
 * This API is used to query import store history
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.ImportHistory_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetImportHistory_ByStoreId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & {
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
  callback?: (data: AxiosResponse<ImportStoreHistoryPagingResult>) => void
): UseQueryResult<ImportStoreHistoryPagingResult, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useStoreAdminApi_GetImportHistory_ByStoreId>[1]) => async () => {
    const response = await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getImportHistory_ByStoreId(
      input.storeId,
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ImportStoreHistoryPagingResult, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.ImportHistory_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
