/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Misc$ } from '@accelbyte/sdk/generated-public/basic/Misc$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class MiscApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * GET [/basic/v1/public/namespaces/{namespace}/misc/countries](api)
   *
   * _Returns_: country code list
   */
  getCountries = (lang?: string) => {
    return this.newInstance().fetchV1NsMiscCountries({ lang })
  }

  /**
   * GET [/basic/v1/public/namespaces/{namespace}/misc/languages](api)
   *
   * _Returns_: language list
   */
  getLanguages = () => {
    return this.newInstance().fetchV1NsMiscLanguages()
  }

  private newInstance() {
    return new Misc$(Network.create(this.conf), this.namespace, this.cache)
  }
}
