/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { Response, Validate } from '@accelbyte/sdk'
import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { DefaultDsmcConfig } from '../../generated-definitions/DefaultDsmcConfig.js'

export class DsmcDefaultConfigurationAdmin$ {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  /**
   * Get dsmc default configuration.
   */
  getDsconfigsDefault(): Promise<Response<DefaultDsmcConfig>> {
    const params = {} as AxiosRequestConfig
    const url = '/session/v1/admin/dsconfigs/default'
    const resultPromise = this.axiosInstance.get(url, { params })

    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, DefaultDsmcConfig, 'DefaultDsmcConfig')
  }
}
