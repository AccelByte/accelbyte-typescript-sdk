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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { InvoiceAdminApi } from '../InvoiceAdminApi.js'

import { InvoiceSummary } from '../../generated-definitions/InvoiceSummary.js'

export enum Key_InvoiceAdmin {
  InvoiceSummary = 'InvoiceAdmin.InvoiceSummary',
  InvoiceDetailsCsv = 'InvoiceAdmin.InvoiceDetailsCsv'
}

export const useAdmInvoiceSummary = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      endTime: string | null
      startTime: string | null
      feature?: string | null
      itemId?: string | null
      itemType?:
        | 'APP'
        | 'BUNDLE'
        | 'CODE'
        | 'COINS'
        | 'EXTENSION'
        | 'INGAMEITEM'
        | 'LOOTBOX'
        | 'MEDIA'
        | 'OPTIONBOX'
        | 'SEASON'
        | 'SUBSCRIPTION'
    }
  },
  options?: Omit<UseQueryOptions<InvoiceSummary, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: InvoiceSummary) => void
): UseQueryResult<InvoiceSummary, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInvoiceSummary>[1]) => async () => {
    const data = await InvoiceAdminApi(sdk, { namespace: input.namespace }).getInvoiceSummary(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<InvoiceSummary, AxiosError<ApiError>>({
    queryKey: [Key_InvoiceAdmin.InvoiceSummary, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

export const useAdmInvoiceDetailsCsv = (
  sdk: AccelbyteSDK,
  input: ApiArgs & {
    queryParams: {
      endTime: string | null
      startTime: string | null
      feature?: string | null
      itemId?: string | null
      itemType?:
        | 'APP'
        | 'BUNDLE'
        | 'CODE'
        | 'COINS'
        | 'EXTENSION'
        | 'INGAMEITEM'
        | 'LOOTBOX'
        | 'MEDIA'
        | 'OPTIONBOX'
        | 'SEASON'
        | 'SUBSCRIPTION'
    }
  },
  options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: unknown) => void
): UseQueryResult<unknown, AxiosError<ApiError>> => {
  //
  const queryFn = (sdk: AccelbyteSDK, input: Parameters<typeof useAdmInvoiceDetailsCsv>[1]) => async () => {
    const data = await InvoiceAdminApi(sdk, { namespace: input.namespace }).getInvoiceDetailsCsv(input.queryParams)
    callback && callback(data)
    return data
  }

  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_InvoiceAdmin.InvoiceDetailsCsv, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
