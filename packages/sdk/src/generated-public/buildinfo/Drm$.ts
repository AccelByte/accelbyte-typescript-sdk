/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { EncryptedIdentity } from './definitions/EncryptedIdentity'
import { PublicKeyPresignedUrl } from './definitions/PublicKeyPresignedUrl'

export class Drm$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get encrypted userId and machineId for entitled user.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:BUILDINFO", action=2 (READ)</li><li><i>Returns</i>: data field containing encrypted userId and machineId separated by comma</li></ul>
   */
  fetchDrmlicenseEncrypt<T = EncryptedIdentity>(queryParams: {
    appId: string | null
    machineId: string | null
  }): Promise<IResponseWithSync<T>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/drmlicense/encrypt'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EncryptedIdentity)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get public key.<p>Other detail info: <ul><li><i>Required permission</i>: resource="NAMESPACE:{namespace}:BUILDINFO", action=2 (READ)</li><li><i>Returns</i>: url to download the key</li></ul>
   */
  fetchDrmlicenseRetrievePublicKey<T = PublicKeyPresignedUrl>(): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/drmlicense/retrievePublicKey'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicKeyPresignedUrl)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
