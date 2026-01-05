/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { z } from 'zod'
import { PlayFeatureFlag } from '../../generated-definitions/PlayFeatureFlag.js'

export class PlayFeatureFlagAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   *  Delete matchmaking Play Feature Flag. Deleting the current namespace&#39;s custom config only removes it from the database, the system will then use the environment variable defined in the ConfigMap instead.
   */
  deletePlayfeatureflag(): Promise<Response<unknown>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/admin/namespaces/{namespace}/playfeatureflag'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, z.unknown(), 'z.unknown()')
  }
  /**
   * Get matchmaking Play Feature Flag.
   */
  getPlayfeatureflag(): Promise<Response<PlayFeatureFlag>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/admin/namespaces/{namespace}/playfeatureflag'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlayFeatureFlag, 'PlayFeatureFlag')
  }
  /**
   * Upsert matchmaking Play Feature Flag.
   */
  updatePlayfeatureflag(data: PlayFeatureFlag): Promise<Response<PlayFeatureFlag>> {
    const params = {} as AxiosRequestConfig
    const url = '/match2/v1/admin/namespaces/{namespace}/playfeatureflag'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, PlayFeatureFlag, 'PlayFeatureFlag')
  }
}
