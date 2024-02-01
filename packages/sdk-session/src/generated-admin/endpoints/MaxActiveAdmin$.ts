/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { MemberActiveSession } from '../../generated-definitions/MemberActiveSession.js'
import { RequestReconcileMaxActiveSession } from '../../generated-definitions/RequestReconcileMaxActiveSession.js'

export class MaxActiveAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   *  Reconcile Max Active Session.
   */
  createReconcile_ByName(name: string, data: RequestReconcileMaxActiveSession): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configurations/{name}/reconcile'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Get Member Active Session.
   */
  getMemberactivesession_ByName_ByUserId(name: string, userId: string): Promise<IResponseWithSync<MemberActiveSession>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configurations/{name}/memberactivesession/{userId}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
      .replace('{userId}', userId)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, MemberActiveSession, 'MemberActiveSession')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
