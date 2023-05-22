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
import { Config } from '../definitions/Config.js'
import { Configs } from '../definitions/Configs.js'

export class Templates$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  getConfigs_ByTemplate(template: string): Promise<IResponseWithSync<Configs>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/public/namespaces/{namespace}/templates/{template}/configs'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Configs, 'Configs')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  getConfig_ByTemplate_ByConfig(config: string, template: string): Promise<IResponseWithSync<Config>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/public/namespaces/{namespace}/templates/{template}/configs/{config}'
      .replace('{config}', config)
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Config, 'Config')

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }
}
