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
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { AdminAdminApi } from '../AdminAdminApi.js'

import { SetAliasRequest } from '../../generated-definitions/SetAliasRequest.js'
import { UpdateServerRequest } from '../../generated-definitions/UpdateServerRequest.js'

export enum Key_AdminAdmin {
  Server_ByRegion = 'AdminAdmin.Server_ByRegion',
  Alia_ByRegion = 'AdminAdmin.Alia_ByRegion'
}

export const useAdmDeleteServer_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { region: string }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { region: string }> => {
  //
  const mutationFn = async (input: ApiArgs & { region: string }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).deleteServer_ByRegion(input.region)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Server_ByRegion],
    mutationFn,
    ...options
  })
}

export const useAdmCreateAlia_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { region: string; data: SetAliasRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { region: string; data: SetAliasRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { region: string; data: SetAliasRequest }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).createAlia_ByRegion(
      input.region,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Alia_ByRegion],
    mutationFn,
    ...options
  })
}

export const useAdmPatchServer_ByRegionMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { region: string; data: UpdateServerRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { region: string; data: UpdateServerRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { region: string; data: UpdateServerRequest }) => {
    const data = await AdminAdminApi(sdk, { namespace: input.namespace, config: input.config }).patchServer_ByRegion(
      input.region,
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_AdminAdmin.Server_ByRegion],
    mutationFn,
    ...options
  })
}
