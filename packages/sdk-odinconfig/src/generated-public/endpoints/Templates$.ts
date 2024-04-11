/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { IResponse, SDKRequestConfig, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { Config } from '../../generated-definitions/Config.js'
import { Configs } from '../../generated-definitions/Configs.js'

export class Templates$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  getConfigs_ByTemplate(template: string): Promise<IResponse<Configs>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/public/namespaces/{namespace}/templates/{template}/configs'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, Configs, 'Configs')
  }

  getConfig_ByTemplate_ByConfig(template: string, config: string): Promise<IResponse<Config>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/public/namespaces/{namespace}/templates/{template}/configs/{config}'
      .replace('{namespace}', this.namespace)
      .replace('{template}', template)
      .replace('{config}', config)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, Config, 'Config')
  }
}
