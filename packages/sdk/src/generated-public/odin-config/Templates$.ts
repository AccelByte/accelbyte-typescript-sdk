/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { CodeGenUtil } from '@accelbyte/sdk/utils/CodeGenUtil'
import { SdkCache } from '@accelbyte/sdk/utils/SdkCache'
import { IResponseWithSync, Validate } from '@accelbyte/sdk/utils/Validate'
import { AxiosInstance } from 'axios'
import { Config } from './definitions/Config'
/* eslint-disable camelcase */
import { Configs } from './definitions/Configs'

/**
 * DON'T EDIT THIS FILE, it is AUTO GENERATED
 */
export class Templates$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false) {}

  fetchV1TemplatesByTemplateConfigs<T = Configs>(template: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/public/namespaces/{namespace}/templates/{template}/configs'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Configs)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }

  fetchV1TemplatesByTemplateConfigsByConfig<T = Config>(template: string, config: string): Promise<IResponseWithSync<T>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/public/namespaces/{namespace}/templates/{template}/configs/{config}'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
      .replace('{config}', config)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () => Validate.responseType(() => resultPromise, Config)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const key = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(key, res)
  }
}
