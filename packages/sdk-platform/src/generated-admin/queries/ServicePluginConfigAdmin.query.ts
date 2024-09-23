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
import { ServicePluginConfigAdminApi } from '../ServicePluginConfigAdminApi.js'

import { GrpcServerInfo } from '../../generated-definitions/GrpcServerInfo.js'
import { LootBoxPluginConfigInfo } from '../../generated-definitions/LootBoxPluginConfigInfo.js'
import { LootBoxPluginConfigUpdate } from '../../generated-definitions/LootBoxPluginConfigUpdate.js'
import { RevocationPluginConfigInfo } from '../../generated-definitions/RevocationPluginConfigInfo.js'
import { RevocationPluginConfigUpdate } from '../../generated-definitions/RevocationPluginConfigUpdate.js'
import { SectionPluginConfigInfo } from '../../generated-definitions/SectionPluginConfigInfo.js'
import { SectionPluginConfigUpdate } from '../../generated-definitions/SectionPluginConfigUpdate.js'
import { ServicePluginConfigInfo } from '../../generated-definitions/ServicePluginConfigInfo.js'
import { ServicePluginConfigUpdate } from '../../generated-definitions/ServicePluginConfigUpdate.js'

export enum Key_ServicePluginConfigAdmin {
  ConfigServicePlugin = 'Platform.ServicePluginConfigAdmin.ConfigServicePlugin',
  ConfigsServicePlugin = 'Platform.ServicePluginConfigAdmin.ConfigsServicePlugin',
  CatalogPluginLootbox = 'Platform.ServicePluginConfigAdmin.CatalogPluginLootbox',
  CatalogPluginsLootbox = 'Platform.ServicePluginConfigAdmin.CatalogPluginsLootbox',
  CatalogPluginSection = 'Platform.ServicePluginConfigAdmin.CatalogPluginSection',
  CatalogPluginsSection = 'Platform.ServicePluginConfigAdmin.CatalogPluginsSection',
  RevocationPluginRevocation = 'Platform.ServicePluginConfigAdmin.RevocationPluginRevocation',
  RevocationPluginsRevocation = 'Platform.ServicePluginConfigAdmin.RevocationPluginsRevocation',
  CatalogPluginsLootboxGrpcInfo = 'Platform.ServicePluginConfigAdmin.CatalogPluginsLootboxGrpcInfo',
  CatalogPluginLootboxCustomConfigCert = 'Platform.ServicePluginConfigAdmin.CatalogPluginLootboxCustomConfigCert',
  CatalogPluginSectionCustomConfigCert = 'Platform.ServicePluginConfigAdmin.CatalogPluginSectionCustomConfigCert',
  RevocationPluginRevocationRevocationCustomConfigCert = 'Platform.ServicePluginConfigAdmin.RevocationPluginRevocationRevocationCustomConfigCert'
}

/**
 * @deprecated
 * Delete service plugin config
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.ConfigServicePlugin, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_DeleteConfigServicePluginMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteConfigServicePlugin()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.ConfigServicePlugin],
    mutationFn,
    ...options
  })
}

/**
 * @deprecated
 * Get service plugin config
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.ConfigsServicePlugin, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_GetConfigsServicePlugin = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<ServicePluginConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ServicePluginConfigInfo>) => void
): UseQueryResult<ServicePluginConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServicePluginConfigAdminApi_GetConfigsServicePlugin>[1]) => async () => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getConfigsServicePlugin()
    callback && callback(response)
    return response.data
  }

  return useQuery<ServicePluginConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.ConfigsServicePlugin, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.ConfigServicePlugin, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_UpdateConfigServicePluginMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<ServicePluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ServicePluginConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: ServicePluginConfigInfo) => void
): UseMutationResult<ServicePluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ServicePluginConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: ServicePluginConfigUpdate }) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateConfigServicePlugin(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.ConfigServicePlugin],
    mutationFn,
    ...options
  })
}

/**
 * Delete service plugin config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootbox, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_DeleteCatalogPluginLootboxMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteCatalogPluginLootbox()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootbox],
    mutationFn,
    ...options
  })
}

/**
 * Get lootbox plugin config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsLootbox, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_GetCatalogPluginsLootbox = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<LootBoxPluginConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LootBoxPluginConfigInfo>) => void
): UseQueryResult<LootBoxPluginConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServicePluginConfigAdminApi_GetCatalogPluginsLootbox>[1]) => async () => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getCatalogPluginsLootbox()
    callback && callback(response)
    return response.data
  }

  return useQuery<LootBoxPluginConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsLootbox, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update lootbox plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootbox, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_UpdateCatalogPluginLootboxMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<LootBoxPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: LootBoxPluginConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: LootBoxPluginConfigInfo) => void
): UseMutationResult<LootBoxPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: LootBoxPluginConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: LootBoxPluginConfigUpdate }) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCatalogPluginLootbox(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootbox],
    mutationFn,
    ...options
  })
}

/**
 * Delete section plugin config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginSection, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_DeleteCatalogPluginSectionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteCatalogPluginSection()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginSection],
    mutationFn,
    ...options
  })
}

/**
 * Get section plugin config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsSection, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_GetCatalogPluginsSection = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<SectionPluginConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<SectionPluginConfigInfo>) => void
): UseQueryResult<SectionPluginConfigInfo, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useServicePluginConfigAdminApi_GetCatalogPluginsSection>[1]) => async () => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getCatalogPluginsSection()
    callback && callback(response)
    return response.data
  }

  return useQuery<SectionPluginConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsSection, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update section config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginSection, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_UpdateCatalogPluginSectionMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SectionPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SectionPluginConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: SectionPluginConfigInfo) => void
): UseMutationResult<SectionPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SectionPluginConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: SectionPluginConfigUpdate }) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCatalogPluginSection(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginSection],
    mutationFn,
    ...options
  })
}

/**
 * Delete service plugin config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocation, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_DeleteRevocationPluginRevocationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam> => {
  const mutationFn = async (input: SdkSetConfigParam) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteRevocationPluginRevocation()
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocation],
    mutationFn,
    ...options
  })
}

/**
 * Get revocation plugin config.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.RevocationPluginsRevocation, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_GetRevocationPluginsRevocation = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<RevocationPluginConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RevocationPluginConfigInfo>) => void
): UseQueryResult<RevocationPluginConfigInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useServicePluginConfigAdminApi_GetRevocationPluginsRevocation>[1]) => async () => {
      const response = await ServicePluginConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getRevocationPluginsRevocation()
      callback && callback(response)
      return response.data
    }

  return useQuery<RevocationPluginConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.RevocationPluginsRevocation, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Update revocation plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocation, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_UpdateRevocationPluginRevocationMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RevocationPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: RevocationPluginConfigUpdate }>,
    'mutationKey'
  >,
  callback?: (data: RevocationPluginConfigInfo) => void
): UseMutationResult<RevocationPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: RevocationPluginConfigUpdate }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RevocationPluginConfigUpdate }) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRevocationPluginRevocation(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocation],
    mutationFn,
    ...options
  })
}

/**
 * Get lootbox plugin gRPC info.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsLootboxGrpcInfo, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_GetCatalogPluginsLootboxGrpcInfo = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { force?: boolean | null } },
  options?: Omit<UseQueryOptions<GrpcServerInfo, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GrpcServerInfo>) => void
): UseQueryResult<GrpcServerInfo, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useServicePluginConfigAdminApi_GetCatalogPluginsLootboxGrpcInfo>[1]) => async () => {
      const response = await ServicePluginConfigAdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getCatalogPluginsLootboxGrpcInfo(input.queryParams)
      callback && callback(response)
      return response.data
    }

  return useQuery<GrpcServerInfo, AxiosError<ApiError>>({
    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginsLootboxGrpcInfo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Upload lootbox plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootboxCustomConfigCert, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_UpdateCatalogPluginLootboxCustomConfigCertMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<LootBoxPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: LootBoxPluginConfigInfo) => void
): UseMutationResult<LootBoxPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File } }) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCatalogPluginLootboxCustomConfigCert(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginLootboxCustomConfigCert],
    mutationFn,
    ...options
  })
}

/**
 * Upload section plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.CatalogPluginSectionCustomConfigCert, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_UpdateCatalogPluginSectionCustomConfigCertMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<SectionPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: SectionPluginConfigInfo) => void
): UseMutationResult<SectionPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File } }) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCatalogPluginSectionCustomConfigCert(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.CatalogPluginSectionCustomConfigCert],
    mutationFn,
    ...options
  })
}

/**
 * Upload revocation plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocationRevocationCustomConfigCert, input]
 * }
 * ```
 */
export const useServicePluginConfigAdminApi_UpdateRevocationPluginRevocationRevocationCustomConfigCertMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RevocationPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }>,
    'mutationKey'
  >,
  callback?: (data: RevocationPluginConfigInfo) => void
): UseMutationResult<RevocationPluginConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: { file?: File } }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: { file?: File } }) => {
    const response = await ServicePluginConfigAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateRevocationPluginRevocationRevocationCustomConfigCert(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_ServicePluginConfigAdmin.RevocationPluginRevocationRevocationCustomConfigCert],
    mutationFn,
    ...options
  })
}
