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
import { TemplatesAdminApi } from '../TemplatesAdminApi.js'

import { CacheResult } from '../../generated-definitions/CacheResult.js'
import { Config } from '../../generated-definitions/Config.js'
import { Configs } from '../../generated-definitions/Configs.js'
import { Template } from '../../generated-definitions/Template.js'
import { TemplateCompactArray } from '../../generated-definitions/TemplateCompactArray.js'

export enum Key_TemplatesAdmin {
  Templates = 'TemplatesAdmin.Templates',
  Template = 'TemplatesAdmin.Template',
  Cache_ByTemplate = 'TemplatesAdmin.Cache_ByTemplate',
  Configs_ByTemplate = 'TemplatesAdmin.Configs_ByTemplate',
  Config_ByTemplate = 'TemplatesAdmin.Config_ByTemplate',
  Config_ByTemplate_ByConfig = 'TemplatesAdmin.Config_ByTemplate_ByConfig'
}

export const useAdmTemplates = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<TemplateCompactArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: TemplateCompactArray) => void
): UseQueryResult<TemplateCompactArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmTemplates>[1]) => async () => {
    const data = await TemplatesAdminApi(sdk, { namespace: input.namespace }).getTemplates()
    callback && callback(data)
    return data
  }

  return useQuery<TemplateCompactArray, AxiosError<ApiError>>({
    queryKey: [Key_TemplatesAdmin.Templates, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateTemplateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<Template, AxiosError<ApiError>, ApiArgs & { data: Template }>, 'mutationKey'>,
  callback?: (data: Template) => void
): UseMutationResult<Template, AxiosError<ApiError>, ApiArgs & { data: Template }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: Template }) => {
    const data = await TemplatesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createTemplate(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TemplatesAdmin.Template],
    mutationFn,
    ...options
  })
}

export const useAdmCache_ByTemplate = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { template: string },
  options?: Omit<UseQueryOptions<CacheResult, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CacheResult) => void
): UseQueryResult<CacheResult, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCache_ByTemplate>[1]) => async () => {
    const data = await TemplatesAdminApi(sdk, { namespace: input.namespace }).getCache_ByTemplate(input.template)
    callback && callback(data)
    return data
  }

  return useQuery<CacheResult, AxiosError<ApiError>>({
    queryKey: [Key_TemplatesAdmin.Cache_ByTemplate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCache_ByTemplateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { template: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { template: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { template: string }) => {
    const data = await TemplatesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createCache_ByTemplate(input.template)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TemplatesAdmin.Cache_ByTemplate],
    mutationFn,
    ...options
  })
}

export const useAdmConfigs_ByTemplate = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { template: string },
  options?: Omit<UseQueryOptions<Configs, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Configs) => void
): UseQueryResult<Configs, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfigs_ByTemplate>[1]) => async () => {
    const data = await TemplatesAdminApi(sdk, { namespace: input.namespace }).getConfigs_ByTemplate(input.template)
    callback && callback(data)
    return data
  }

  return useQuery<Configs, AxiosError<ApiError>>({
    queryKey: [Key_TemplatesAdmin.Configs_ByTemplate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateConfig_ByTemplateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<Config, AxiosError<ApiError>, ApiArgs & { template: string; data: Config }>, 'mutationKey'>,
  callback?: (data: Config) => void
): UseMutationResult<Config, AxiosError<ApiError>, ApiArgs & { template: string; data: Config }> => {
  //
  const mutationFn = async (input: ApiArgs & { template: string; data: Config }) => {
    const data = await TemplatesAdminApi(sdk, { namespace: input.namespace, config: input.config }).createConfig_ByTemplate(
      input.template,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TemplatesAdmin.Config_ByTemplate],
    mutationFn,
    ...options
  })
}

export const useAdmConfig_ByTemplate_ByConfig = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { template: string; config: string },
  options?: Omit<UseQueryOptions<Config, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Config) => void
): UseQueryResult<Config, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmConfig_ByTemplate_ByConfig>[1]) => async () => {
    const data = await TemplatesAdminApi(sdk, { namespace: input.namespace }).getConfig_ByTemplate_ByConfig(input.template, input.config)
    callback && callback(data)
    return data
  }

  return useQuery<Config, AxiosError<ApiError>>({
    queryKey: [Key_TemplatesAdmin.Config_ByTemplate_ByConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateConfig_ByTemplate_ByConfigMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<Config, AxiosError<ApiError>, ApiArgs & { template: string; config: string; data: Config }>,
    'mutationKey'
  >,
  callback?: (data: Config) => void
): UseMutationResult<Config, AxiosError<ApiError>, ApiArgs & { template: string; config: string; data: Config }> => {
  //
  const mutationFn = async (input: ApiArgs & { template: string; config: string; data: Config }) => {
    const data = await TemplatesAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateConfig_ByTemplate_ByConfig(
      input.template,
      input.config,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_TemplatesAdmin.Config_ByTemplate_ByConfig],
    mutationFn,
    ...options
  })
}
