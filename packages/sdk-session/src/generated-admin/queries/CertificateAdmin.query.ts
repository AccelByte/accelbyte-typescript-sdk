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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { CertificateAdminApi } from '../CertificateAdminApi.js'

import { PlatformCredentials } from '../../generated-definitions/PlatformCredentials.js'

export enum Key_CertificateAdmin {
  CertificatePfxPlatformXbl = 'Session.CertificateAdmin.CertificatePfxPlatformXbl'
}

/**
 * @deprecated
 * Upload certificates for XBox. Certificate must be in the valid form of PFX format. &#39;certname&#39;&#39; must be specified to &#39;xbl-pfx&#39; for Session Sync to work
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_CertificateAdmin.CertificatePfxPlatformXbl, input]
 * }
 * ```
 */
export const useCertificateAdminApi_UpdateCertificatePfxPlatformXblMutation = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<
      PlatformCredentials,
      AxiosError<ApiError>,
      SdkSetConfigParam & { data: { file: File; password: string | null; certname: string | null; description?: string | null } }
    >,
    'mutationKey'
  >,
  callback?: (data: PlatformCredentials) => void
): UseMutationResult<
  PlatformCredentials,
  AxiosError<ApiError>,
  SdkSetConfigParam & { data: { file: File; password: string | null; certname: string | null; description?: string | null } }
> => {
  const mutationFn = async (
    input: SdkSetConfigParam & { data: { file: File; password: string | null; certname: string | null; description?: string | null } }
  ) => {
    const response = await CertificateAdminApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).updateCertificatePfxPlatformXbl(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_CertificateAdmin.CertificatePfxPlatformXbl],
    mutationFn,
    ...options
  })
}
