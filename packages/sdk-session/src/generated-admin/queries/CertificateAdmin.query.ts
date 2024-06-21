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
import { CertificateAdminApi } from '../CertificateAdminApi.js'

import { PlatformCredentials } from '../../generated-definitions/PlatformCredentials.js'

export enum Key_CertificateAdmin {
  CertificatePfxPlatformXbl = 'CertificateAdmin.CertificatePfxPlatformXbl'
}

export const useAdmUpdateCertificatePfxPlatformXblMutation = (
  sdk: AccelbyteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformCredentials,
      AxiosError<ApiError>,
      ApiArgs & { data: { file: File; password: string | null; certname: string | null; description?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformCredentials) => void
): UseMutationResult<
  PlatformCredentials,
  AxiosError<ApiError>,
  ApiArgs & { data: { file: File; password: string | null; certname: string | null; description?: string | null } }
> => {
  //
  const mutationFn = async (
    input: ApiArgs & { data: { file: File; password: string | null; certname: string | null; description?: string | null } }
  ) => {
    const data = await CertificateAdminApi(sdk, { namespace: input.namespace, config: input.config }).updateCertificatePfxPlatformXbl(
      input.data
    )
    callback && callback(data)
    return data
  }

  return useMutation({
    mutationKey: [Key_CertificateAdmin.CertificatePfxPlatformXbl],
    mutationFn,
    ...options
  })
}
