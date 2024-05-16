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
import { Configs } from '../../generated-definitions/Configs.js'

export class CompatibilityConfigs$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private isZodEnabled = true) {}

  getTemplatesDefaultConfigs_DEPRECATED(): Promise<IResponse<Configs>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/public/namespaces/{namespace}/templates/default/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, Configs, 'Configs')
  }

  getTemplatesTemplateDiscoveryConfigs_DEPRECATED(): Promise<IResponse<Configs>> {
    const params = {} as SDKRequestConfig
    const url = '/odin-config/v1/public/namespaces/{namespace}/templates/template-discovery/configs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.isZodEnabled, () => resultPromise, Configs, 'Configs')
  }
}
