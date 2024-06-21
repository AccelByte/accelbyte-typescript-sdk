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
import { AdminModerationRuleAdminApi } from '../AdminModerationRuleAdminApi.js'

import { ModerationRuleActiveRequest } from '../../generated-definitions/ModerationRuleActiveRequest.js'
import { ModerationRuleRequest } from '../../generated-definitions/ModerationRuleRequest.js'
import { ModerationRuleResponse } from '../../generated-definitions/ModerationRuleResponse.js'
import { ModerationRulesList } from '../../generated-definitions/ModerationRulesList.js'

export enum Key_AdminModerationRuleAdmin {
  Rule = 'AdminModerationRuleAdmin.Rule',
  Rules = 'AdminModerationRuleAdmin.Rules',
  Rule_ByRuleId = 'AdminModerationRuleAdmin.Rule_ByRuleId',
  Status_ByRuleId = 'AdminModerationRuleAdmin.Status_ByRuleId'
}

export const useAdmCreateRuleMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: ModerationRuleRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: ModerationRuleRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: ModerationRuleRequest }) => {
    const data = await AdminModerationRuleAdminApi(sdk, { namespace: input.namespace, config: input.config }).createRule(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminModerationRuleAdmin.Rule],
    mutationFn,
    ...options
  })
}

export const useAdmRules = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { category?: string | null; extensionCategory?: string | null; limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ModerationRulesList, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ModerationRulesList) => void
): UseQueryResult<ModerationRulesList, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRules>[1]) => async () => {
    const data = await AdminModerationRuleAdminApi(sdk, { namespace: input.namespace }).getRules(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<ModerationRulesList, AxiosError<ApiError>>({
    queryKey: [Key_AdminModerationRuleAdmin.Rules, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmDeleteRule_ByRuleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { ruleId: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { ruleId: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { ruleId: string }) => {
    const data = await AdminModerationRuleAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteRule_ByRuleId(
      input.ruleId
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminModerationRuleAdmin.Rule_ByRuleId],
    mutationFn,
    ...options
  })
}

export const useAdmUpdateRule_ByRuleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<ModerationRuleResponse, AxiosError<ApiError>, ApiArgs & { ruleId: string; data: ModerationRuleRequest }>,
    'mutationKey'
  >,
  callback?: (data: ModerationRuleResponse) => void
): UseMutationResult<ModerationRuleResponse, AxiosError<ApiError>, ApiArgs & { ruleId: string; data: ModerationRuleRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { ruleId: string; data: ModerationRuleRequest }) => {
    const data = await AdminModerationRuleAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateRule_ByRuleId(
      input.ruleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminModerationRuleAdmin.Rule_ByRuleId],
    mutationFn,
    ...options
  })
}

export const useAdmRule_ByRuleId = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { ruleId: string },
  options?: Omit<UseQueryOptions<ModerationRuleResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: ModerationRuleResponse) => void
): UseQueryResult<ModerationRuleResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmRule_ByRuleId>[1]) => async () => {
    const data = await AdminModerationRuleAdminApi(sdk, { namespace: input.namespace }).getRule_ByRuleId(input.ruleId)
    callback && callback(data)
    return data
  }

  return useQuery<ModerationRuleResponse, AxiosError<ApiError>>({
    queryKey: [Key_AdminModerationRuleAdmin.Rule_ByRuleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmUpdateStatus_ByRuleIdMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { ruleId: string; data: ModerationRuleActiveRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { ruleId: string; data: ModerationRuleActiveRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { ruleId: string; data: ModerationRuleActiveRequest }) => {
    const data = await AdminModerationRuleAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateStatus_ByRuleId(
      input.ruleId,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminModerationRuleAdmin.Status_ByRuleId],
    mutationFn,
    ...options
  })
}
