/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
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
import { AdminApi } from '../AdminApi.js'

import { CreateTemplateRequest } from '../../generated-definitions/CreateTemplateRequest.js'
import { FreeFormNotificationRequest } from '../../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationWithTemplateRequest } from '../../generated-definitions/NotificationWithTemplateRequest.js'
import { TemplateLocalization } from '../../generated-definitions/TemplateLocalization.js'
import { TemplateLocalizationResponse } from '../../generated-definitions/TemplateLocalizationResponse.js'
import { TemplateResponseArray } from '../../generated-definitions/TemplateResponseArray.js'
import { UpdateTemplateRequest } from '../../generated-definitions/UpdateTemplateRequest.js'

export enum Key_Admin {
  NotificationFreeform = 'Lobby.Admin.NotificationFreeform',
  NotificationTemplated = 'Lobby.Admin.NotificationTemplated',
  NotificationTemplates = 'Lobby.Admin.NotificationTemplates',
  NotificationTemplate = 'Lobby.Admin.NotificationTemplate',
  NotificationTemplate_ByTemplateSlug = 'Lobby.Admin.NotificationTemplate_ByTemplateSlug',
  LanguageNotification_ByTemplateSlug_ByTemplateLanguage = 'Lobby.Admin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage',
  PublishNotification_ByTemplateSlug_ByTemplateLanguage = 'Lobby.Admin.PublishNotification_ByTemplateSlug_ByTemplateLanguage'
}

/**
 * Sends notification to all connected users in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.NotificationFreeform, input]
 * }
 * ```
 */
export const useAdminApi_CreateNotificationFreeformMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: FreeFormNotificationRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: FreeFormNotificationRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: FreeFormNotificationRequest }) => {
    const response = await AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createNotificationFreeform(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Admin.NotificationFreeform],
    mutationFn,
    ...options
  })
}

/**
 * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.NotificationTemplated, input]
 * }
 * ```
 */
export const useAdminApi_CreateNotificationTemplatedMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: NotificationWithTemplateRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: NotificationWithTemplateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: NotificationWithTemplateRequest }) => {
    const response = await AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createNotificationTemplated(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Admin.NotificationTemplated],
    mutationFn,
    ...options
  })
}

/**
 * Get all templates in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.NotificationTemplates, input]
 * }
 * ```
 */
export const useAdminApi_GetNotificationTemplates = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<TemplateResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TemplateResponseArray>) => void
): UseQueryResult<TemplateResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminApi_GetNotificationTemplates>[1]) => async () => {
    const response = await AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getNotificationTemplates()
    callback && callback(response)
    return response.data
  }

  return useQuery<TemplateResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Admin.NotificationTemplates, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Create new notification template. Include handlebars {{key}} for replaceable contexts. The the key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.NotificationTemplate, input]
 * }
 * ```
 */
export const useAdminApi_CreateNotificationTemplateMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTemplateRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTemplateRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTemplateRequest }) => {
    const response = await AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createNotificationTemplate(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Admin.NotificationTemplate],
    mutationFn,
    ...options
  })
}

/**
 * Delete localization template
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.NotificationTemplate_ByTemplateSlug, input]
 * }
 * ```
 */
export const useAdminApi_DeleteNotificationTemplate_ByTemplateSlugMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { templateSlug: string }) => {
    const response = await AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteNotificationTemplate_ByTemplateSlug(input.templateSlug)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Admin.NotificationTemplate_ByTemplateSlug],
    mutationFn,
    ...options
  })
}

/**
 * Get all templates in a namespace
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.NotificationTemplate_ByTemplateSlug, input]
 * }
 * ```
 */
export const useAdminApi_GetNotificationTemplate_ByTemplateSlug = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { templateSlug: string; queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<TemplateLocalizationResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TemplateLocalizationResponse>) => void
): UseQueryResult<TemplateLocalizationResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useAdminApi_GetNotificationTemplate_ByTemplateSlug>[1]) => async () => {
    const response = await AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).getNotificationTemplate_ByTemplateSlug(input.templateSlug, input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<TemplateLocalizationResponse, AxiosError<ApiError>>({
    queryKey: [Key_Admin.NotificationTemplate_ByTemplateSlug, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Delete all template in a slug
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage, input]
 * }
 * ```
 */
export const useAdminApi_DeleteLanguageNotification_ByTemplateSlug_ByTemplateLanguageMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug: string; templateLanguage: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug: string; templateLanguage: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { templateSlug: string; templateLanguage: string }) => {
    const response = await AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Admin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}

/**
 * Get a template localization
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage, input]
 * }
 * ```
 */
export const useAdminApi_GetLanguageNotification_ByTemplateSlug_ByTemplateLanguage = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { templateSlug: string; templateLanguage: string },
  options?: Omit<UseQueryOptions<TemplateLocalization, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<TemplateLocalization>) => void
): UseQueryResult<TemplateLocalization, AxiosError<ApiError>> => {
  const queryFn =
    (sdk: AccelByteSDK, input: Parameters<typeof useAdminApi_GetLanguageNotification_ByTemplateSlug_ByTemplateLanguage>[1]) => async () => {
      const response = await AdminApi(sdk, {
        coreConfig: input.coreConfig,
        axiosConfig: input.axiosConfig
      }).getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage)
      callback && callback(response)
      return response.data
    }

  return useQuery<TemplateLocalization, AxiosError<ApiError>>({
    queryKey: [Key_Admin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Modify draft template
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage, input]
 * }
 * ```
 */
export const useAdminApi_UpdateLanguageNotification_ByTemplateSlug_ByTemplateLanguageMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      SdkSetConfigParam & { templateSlug: string; templateLanguage: string; data: UpdateTemplateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  SdkSetConfigParam & { templateSlug: string; templateLanguage: string; data: UpdateTemplateRequest }
> => {
  const mutationFn = async (input: SdkSetConfigParam & { templateSlug: string; templateLanguage: string; data: UpdateTemplateRequest }) => {
    const response = await AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Admin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}

/**
 * Publish notification template draft. Empty draft can not be published.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Admin.PublishNotification_ByTemplateSlug_ByTemplateLanguage, input]
 * }
 * ```
 */
export const useAdminApi_CreatePublishNotification_ByTemplateSlug_ByTemplateLanguageMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug: string; templateLanguage: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug: string; templateLanguage: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { templateSlug: string; templateLanguage: string }) => {
    const response = await AdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createPublishNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Admin.PublishNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}
