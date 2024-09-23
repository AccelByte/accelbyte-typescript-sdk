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
import { RuleSetsApi } from '../RuleSetsApi.js'

import { ListRuleSetsResponse } from '../../generated-definitions/ListRuleSetsResponse.js'
import { RuleSetPayload } from '../../generated-definitions/RuleSetPayload.js'

export enum Key_RuleSets {
  Rulesets = 'Matchmaking.RuleSets.Rulesets',
  Ruleset = 'Matchmaking.RuleSets.Ruleset',
  Ruleset_ByRuleset = 'Matchmaking.RuleSets.Ruleset_ByRuleset'
}

/**
 * List rule sets.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RuleSets.Rulesets, input]
 * }
 * ```
 */
export const useRuleSetsApi_GetRulesets = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; name?: string | null; offset?: number } },
  options?: Omit<UseQueryOptions<ListRuleSetsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListRuleSetsResponse>) => void
): UseQueryResult<ListRuleSetsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRuleSetsApi_GetRulesets>[1]) => async () => {
    const response = await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRulesets(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<ListRuleSetsResponse, AxiosError<ApiError>>({
    queryKey: [Key_RuleSets.Rulesets, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Creates a new rules set. A rule set has a name and contains arbitrary data which is meaningful to some particular match function(s) The name is used for a match pool to select the ruleset data that should be sent to the match function when matchmaking in that pool. To use custom rules set please set enable_custom_match_function=true. Default (false). When custom enable_custom_match_function=true, the ruleset will only validate if the rule is valid json.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RuleSets.Ruleset, input]
 * }
 * ```
 */
export const useRuleSetsApi_CreateRulesetMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: RuleSetPayload }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: RuleSetPayload }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: RuleSetPayload }) => {
    const response = await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createRuleset(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RuleSets.Ruleset],
    mutationFn,
    ...options
  })
}

/**
 * Deletes an existing rule set.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RuleSets.Ruleset_ByRuleset, input]
 * }
 * ```
 */
export const useRuleSetsApi_DeleteRuleset_ByRulesetMutation = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ruleset: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ruleset: string }> => {
  const mutationFn = async (input: SdkSetConfigParam & { ruleset: string }) => {
    const response = await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).deleteRuleset_ByRuleset(
      input.ruleset
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RuleSets.Ruleset_ByRuleset],
    mutationFn,
    ...options
  })
}

/**
 * Get details for a specific rule set
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RuleSets.Ruleset_ByRuleset, input]
 * }
 * ```
 */
export const useRuleSetsApi_GetRuleset_ByRuleset = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { ruleset: string },
  options?: Omit<UseQueryOptions<RuleSetPayload, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RuleSetPayload>) => void
): UseQueryResult<RuleSetPayload, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useRuleSetsApi_GetRuleset_ByRuleset>[1]) => async () => {
    const response = await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getRuleset_ByRuleset(
      input.ruleset
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<RuleSetPayload, AxiosError<ApiError>>({
    queryKey: [Key_RuleSets.Ruleset_ByRuleset, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Updates an existing matchmaking rule set. To use custom rules set please set enable_custom_match_function=true. Default (false). When custom enable_custom_match_function=true, the ruleset will only validate if the rule is valid json.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RuleSets.Ruleset_ByRuleset, input]
 * }
 * ```
 */
export const useRuleSetsApi_UpdateRuleset_ByRulesetMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<RuleSetPayload, AxiosError<ApiError>, SdkSetConfigParam & { ruleset: string; data: RuleSetPayload }>,
    'mutationKey'
  >,
  callback?: (data: RuleSetPayload) => void
): UseMutationResult<RuleSetPayload, AxiosError<ApiError>, SdkSetConfigParam & { ruleset: string; data: RuleSetPayload }> => {
  const mutationFn = async (input: SdkSetConfigParam & { ruleset: string; data: RuleSetPayload }) => {
    const response = await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).updateRuleset_ByRuleset(
      input.ruleset,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_RuleSets.Ruleset_ByRuleset],
    mutationFn,
    ...options
  })
}
