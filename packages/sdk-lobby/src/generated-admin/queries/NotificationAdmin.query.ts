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
import { NotificationAdminApi } from '../NotificationAdminApi.js'

import { BulkUsersFreeFormNotificationRequestV1 } from '../../generated-definitions/BulkUsersFreeFormNotificationRequestV1.js'
import { CreateTemplateRequest } from '../../generated-definitions/CreateTemplateRequest.js'
import { CreateTopicRequestV1 } from '../../generated-definitions/CreateTopicRequestV1.js'
import { FreeFormNotificationRequestV1 } from '../../generated-definitions/FreeFormNotificationRequestV1.js'
import { GetAllNotificationTemplateSlugResp } from '../../generated-definitions/GetAllNotificationTemplateSlugResp.js'
import { GetAllNotificationTopicsResponse } from '../../generated-definitions/GetAllNotificationTopicsResponse.js'
import { Localization } from '../../generated-definitions/Localization.js'
import { NotificationTemplateResponseArray } from '../../generated-definitions/NotificationTemplateResponseArray.js'
import { NotificationTopicResponseV1 } from '../../generated-definitions/NotificationTopicResponseV1.js'
import { NotificationWithTemplateRequestV1 } from '../../generated-definitions/NotificationWithTemplateRequestV1.js'
import { UpdateTemplateRequest } from '../../generated-definitions/UpdateTemplateRequest.js'
import { UpdateTopicRequest } from '../../generated-definitions/UpdateTopicRequest.js'

export enum Key_NotificationAdmin {
  NotificationTopics = 'NotificationAdmin.NotificationTopics',
  NotificationTopic = 'NotificationAdmin.NotificationTopic',
  NotificationTemplates = 'NotificationAdmin.NotificationTemplates',
  NotificationTemplate = 'NotificationAdmin.NotificationTemplate',
  NotificationFreeformNotify = 'NotificationAdmin.NotificationFreeformNotify',
  NotificationTemplateNotify = 'NotificationAdmin.NotificationTemplateNotify',
  NotificationTopic_ByTopicName = 'NotificationAdmin.NotificationTopic_ByTopicName',
  NotificationTemplate_ByTemplateSlug = 'NotificationAdmin.NotificationTemplate_ByTemplateSlug',
  NotificationBulkUserFreeformNotify = 'NotificationAdmin.NotificationBulkUserFreeformNotify',
  FreeformNotifyNotification_ByUserId = 'NotificationAdmin.FreeformNotifyNotification_ByUserId',
  TemplateNotifyNotification_ByUserId = 'NotificationAdmin.TemplateNotifyNotification_ByUserId',
  FreeformNotifyNotification_ByPartyId = 'NotificationAdmin.FreeformNotifyNotification_ByPartyId',
  TemplateNotifyNotification_ByPartyId = 'NotificationAdmin.TemplateNotifyNotification_ByPartyId',
  LanguageNotification_ByTemplateSlug_ByTemplateLanguage = 'NotificationAdmin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage',
  PublishNotification_ByTemplateSlug_ByTemplateLanguage = 'NotificationAdmin.PublishNotification_ByTemplateSlug_ByTemplateLanguage'
}

export const useAdmNotificationTopics = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<GetAllNotificationTopicsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllNotificationTopicsResponse) => void
): UseQueryResult<GetAllNotificationTopicsResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNotificationTopics>[1]) => async () => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace }).getNotificationTopics(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<GetAllNotificationTopicsResponse, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.NotificationTopics, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateNotificationTopicMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateTopicRequestV1 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateTopicRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateTopicRequestV1 }) => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createNotificationTopic(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTopic],
    mutationFn,
    ...options
  })
}

export const useAdmNotificationTemplates = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<NotificationTemplateResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NotificationTemplateResponseArray) => void
): UseQueryResult<NotificationTemplateResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNotificationTemplates>[1]) => async () => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace }).getNotificationTemplates()
    callback && callback(data)
    return data
  }

  return useQuery<NotificationTemplateResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.NotificationTemplates, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateNotificationTemplateMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateTemplateRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CreateTemplateRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CreateTemplateRequest }) => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createNotificationTemplate(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTemplate],
    mutationFn,
    ...options
  })
}

export const useAdmCreateNotificationFreeformNotifyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: FreeFormNotificationRequestV1 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: FreeFormNotificationRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: FreeFormNotificationRequestV1 }) => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createNotificationFreeformNotify(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationFreeformNotify],
    mutationFn,
    ...options
  })
}

export const useAdmCreateNotificationTemplateNotifyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: NotificationWithTemplateRequestV1 }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: NotificationWithTemplateRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: NotificationWithTemplateRequestV1 }) => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace, config: input.config }).createNotificationTemplateNotify(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTemplateNotify],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteNotificationTopic_ByTopicNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { topicName: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { topicName: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { topicName: string }) => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteNotificationTopic_ByTopicName(
      input.topicName
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTopic_ByTopicName],
    mutationFn,
    ...options
  })
}

export const useAdmNotificationTopic_ByTopicName = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { topicName: string },
  options?: Omit<UseQueryOptions<NotificationTopicResponseV1, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: NotificationTopicResponseV1) => void
): UseQueryResult<NotificationTopicResponseV1, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNotificationTopic_ByTopicName>[1]) => async () => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace }).getNotificationTopic_ByTopicName(input.topicName)
    callback && callback(data)
    return data
  }

  return useQuery<NotificationTopicResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.NotificationTopic_ByTopicName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateNotificationTopic_ByTopicNameMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { topicName: string; data: UpdateTopicRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { topicName: string; data: UpdateTopicRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { topicName: string; data: UpdateTopicRequest }) => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateNotificationTopic_ByTopicName(
      input.topicName,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTopic_ByTopicName],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteNotificationTemplate_ByTemplateSlugMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { templateSlug: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { templateSlug: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { templateSlug: string }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteNotificationTemplate_ByTemplateSlug(input.templateSlug)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTemplate_ByTemplateSlug],
    mutationFn,
    ...options
  })
}

export const useAdmNotificationTemplate_ByTemplateSlug = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { templateSlug: string; queryParams?: { after?: string | null; before?: string | null; limit?: number } },
  options?: Omit<UseQueryOptions<GetAllNotificationTemplateSlugResp, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: GetAllNotificationTemplateSlugResp) => void
): UseQueryResult<GetAllNotificationTemplateSlugResp, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmNotificationTemplate_ByTemplateSlug>[1]) => async () => {
    const data = await NotificationAdminApi(sdk, { namespace: input.namespace }).getNotificationTemplate_ByTemplateSlug(
      input.templateSlug,
      input.queryParams
    )
    callback && callback(data)
    return data
  }

  return useQuery<GetAllNotificationTemplateSlugResp, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.NotificationTemplate_ByTemplateSlug, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateNotificationBulkUserFreeformNotifyMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: BulkUsersFreeFormNotificationRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: BulkUsersFreeFormNotificationRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: BulkUsersFreeFormNotificationRequestV1 }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createNotificationBulkUserFreeformNotify(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationBulkUserFreeformNotify],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFreeformNotifyNotification_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: FreeFormNotificationRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: FreeFormNotificationRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: FreeFormNotificationRequestV1 }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createFreeformNotifyNotification_ByUserId(input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.FreeformNotifyNotification_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateTemplateNotifyNotification_ByUserIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: NotificationWithTemplateRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { userId: string; data: NotificationWithTemplateRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { userId: string; data: NotificationWithTemplateRequestV1 }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createTemplateNotifyNotification_ByUserId(input.userId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.TemplateNotifyNotification_ByUserId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateFreeformNotifyNotification_ByPartyIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { partyId: string; data: FreeFormNotificationRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { partyId: string; data: FreeFormNotificationRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { partyId: string; data: FreeFormNotificationRequestV1 }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createFreeformNotifyNotification_ByPartyId(input.partyId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.FreeformNotifyNotification_ByPartyId],
    mutationFn,
    ...options
  })
}

export const useAdmCreateTemplateNotifyNotification_ByPartyIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { partyId: string; data: NotificationWithTemplateRequestV1 }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { partyId: string; data: NotificationWithTemplateRequestV1 }> => {
  //
  const mutationFn = async (input: ApiArgs & { partyId: string; data: NotificationWithTemplateRequestV1 }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createTemplateNotifyNotification_ByPartyId(input.partyId, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.TemplateNotifyNotification_ByPartyId],
    mutationFn,
    ...options
  })
}

export const useAdmDeleteLanguageNotification_ByTemplateSlug_ByTemplateLanguageMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { templateSlug: string; templateLanguage: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { templateSlug: string; templateLanguage: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { templateSlug: string; templateLanguage: string }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}

export const useAdmLanguageNotification_ByTemplateSlug_ByTemplateLanguage = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { templateSlug: string; templateLanguage: string },
  options?: Omit<UseQueryOptions<Localization, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: Localization) => void
): UseQueryResult<Localization, AxiosError<ApiError>> => {
  //
  const queryFn =
    (sdk: AccelbyteSDK, input: Parameters<typeof useAdmLanguageNotification_ByTemplateSlug_ByTemplateLanguage>[1]) => async () => {
      const data = await NotificationAdminApi(sdk, {
        namespace: input.namespace
      }).getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage)
      callback && callback(data)
      return data
    }

  return useQuery<Localization, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateLanguageNotification_ByTemplateSlug_ByTemplateLanguageMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      unknown,
      AxiosError<ApiError>,
      ApiArgs & { templateSlug: string; templateLanguage: string; data: UpdateTemplateRequest }
    >,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<
  unknown,
  AxiosError<ApiError>,
  ApiArgs & { templateSlug: string; templateLanguage: string; data: UpdateTemplateRequest }
> => {
  //
  const mutationFn = async (input: ApiArgs & { templateSlug: string; templateLanguage: string; data: UpdateTemplateRequest }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage, input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}

export const useAdmCreatePublishNotification_ByTemplateSlug_ByTemplateLanguageMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { templateSlug: string; templateLanguage: string }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { templateSlug: string; templateLanguage: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { templateSlug: string; templateLanguage: string }) => {
    const data = await NotificationAdminApi(sdk, {
      namespace: input.namespace,
      config: input.config
    }).createPublishNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_NotificationAdmin.PublishNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}
