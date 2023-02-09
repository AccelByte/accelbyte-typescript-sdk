/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
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
   * List countries.<br>Other detail info: <ul><li><i>Returns</i>: country code list</li></ul>
   */
  getCountries = (lang?: string) => {
    return this.newInstance().fetchV1NsMiscCountries({ lang })
  }

  getLanguages = () => {
    return this.newInstance().fetchV1NsMiscLanguages()
  }

  private newInstance() {
    return new Misc$(Network.create(this.conf), this.namespace, this.cache)
  }
}
