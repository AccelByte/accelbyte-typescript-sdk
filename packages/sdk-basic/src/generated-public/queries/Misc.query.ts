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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { MiscApi } from '../MiscApi.js'

import { CountryObjectArray } from '../../generated-definitions/CountryObjectArray.js'
import { RetrieveTimeResponse } from '../../generated-definitions/RetrieveTimeResponse.js'

export enum Key_Misc {
  MiscTime = 'Basic.Misc.MiscTime',
  MiscCountries = 'Basic.Misc.MiscCountries',
  MiscLanguages = 'Basic.Misc.MiscLanguages',
  MiscTimezones = 'Basic.Misc.MiscTimezones'
}

/**
 * Get server time
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Misc.MiscTime, input]
 * }
 * ```
 */
export const useMiscApi_GetMiscTime = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<RetrieveTimeResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<RetrieveTimeResponse>) => void
): UseQueryResult<RetrieveTimeResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMiscApi_GetMiscTime>[1]) => async () => {
    const response = await MiscApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMiscTime()
    callback && callback(response)
    return response.data
  }

  return useQuery<RetrieveTimeResponse, AxiosError<ApiError>>({
    queryKey: [Key_Misc.MiscTime, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * @deprecated
 * List countries.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: country code list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Misc.MiscCountries, input]
 * }
 * ```
 */
export const useMiscApi_GetMiscCountries = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { lang?: string | null } },
  options?: Omit<UseQueryOptions<CountryObjectArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<CountryObjectArray>) => void
): UseQueryResult<CountryObjectArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMiscApi_GetMiscCountries>[1]) => async () => {
    const response = await MiscApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMiscCountries(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<CountryObjectArray, AxiosError<ApiError>>({
    queryKey: [Key_Misc.MiscCountries, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Misc.MiscLanguages, input]
 * }
 * ```
 */
export const useMiscApi_GetMiscLanguages = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMiscApi_GetMiscLanguages>[1]) => async () => {
    const response = await MiscApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMiscLanguages()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Misc.MiscLanguages, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Misc.MiscTimezones, input]
 * }
 * ```
 */
export const useMiscApi_GetMiscTimezones = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam,
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<unknown>) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useMiscApi_GetMiscTimezones>[1]) => async () => {
    const response = await MiscApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getMiscTimezones()
    callback && callback(response)
    return response.data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Misc.MiscTimezones, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
