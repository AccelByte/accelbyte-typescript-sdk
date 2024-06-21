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
import { CountryAdminApi } from '../CountryAdminApi.js'

import { CountryBlacklistRequest } from '../../generated-definitions/CountryBlacklistRequest.js'
import { CountryBlacklistResponse } from '../../generated-definitions/CountryBlacklistResponse.js'
import { CountryResponseArray } from '../../generated-definitions/CountryResponseArray.js'

export enum Key_CountryAdmin {
  Countries = 'CountryAdmin.Countries',
  CountriesBlacklist = 'CountryAdmin.CountriesBlacklist',
  CountryBlacklist = 'CountryAdmin.CountryBlacklist'
}

export const useAdmCountries = (
  sdk: AccelbyteSDK,
  input: ApiArgs & { queryParams?: { filterBlacklist?: boolean | null } },
  options?: Omit<UseQueryOptions<CountryResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CountryResponseArray) => void
): UseQueryResult<CountryResponseArray, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCountries>[1]) => async () => {
    const data = await CountryAdminApi(sdk, { namespace: input.namespace }).getCountries(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<CountryResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_CountryAdmin.Countries, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCountriesBlacklist = (
  sdk: AccelbyteSDK,
  input: ApiArgs,
  options?: Omit<UseQueryOptions<CountryBlacklistResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: CountryBlacklistResponse) => void
): UseQueryResult<CountryBlacklistResponse, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmCountriesBlacklist>[1]) => async () => {
    const data = await CountryAdminApi(sdk, { namespace: input.namespace }).getCountriesBlacklist()
    callback && callback(data)
    return data
  }

  return useQuery<CountryBlacklistResponse, AxiosError<ApiError>>({
    queryKey: [Key_CountryAdmin.CountriesBlacklist, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmCreateCountryBlacklistMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, ApiArgs & { data: CountryBlacklistRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, ApiArgs & { data: CountryBlacklistRequest }> => {
  //
  const mutationFn = async (input: ApiArgs & { data: CountryBlacklistRequest }) => {
    const data = await CountryAdminApi(sdk, { namespace: input.namespace, config: input.config }).createCountryBlacklist(input.data)
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CountryAdmin.CountryBlacklist],
    mutationFn,
    ...options
  })
}
