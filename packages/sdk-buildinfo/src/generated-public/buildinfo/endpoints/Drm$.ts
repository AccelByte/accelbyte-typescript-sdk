/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { EncryptedIdentity } from '../definitions/EncryptedIdentity.js'
import { PublicKeyPresignedUrl } from '../definitions/PublicKeyPresignedUrl.js'

export class Drm$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  /**
   * This API is used to get encrypted userId and machineId for entitled user.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: data field containing encrypted userId and machineId separated by comma&lt;/li&gt;&lt;/ul&gt;
   */
  getDrmlicenseEncrypt(queryParams: { appId: string | null; machineId: string | null }): Promise<IResponseWithSync<EncryptedIdentity>> {
    const params = { ...queryParams } as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/drmlicense/encrypt'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, EncryptedIdentity, 'EncryptedIdentity')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * This API is used to get public key.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;NAMESPACE:{namespace}:BUILDINFO&#34;, action=2 (READ)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: url to download the key&lt;/li&gt;&lt;/ul&gt;
   */
  getDrmlicenseRetrievePublicKey(): Promise<IResponseWithSync<PublicKeyPresignedUrl>> {
    const params = {} as SDKRequestConfig
    const url = '/buildinfo/public/namespaces/{namespace}/drmlicense/retrievePublicKey'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, PublicKeyPresignedUrl, 'PublicKeyPresignedUrl')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
