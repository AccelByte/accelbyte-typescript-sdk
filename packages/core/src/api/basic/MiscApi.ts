/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { Misc$ } from '@od-web-sdk/generated-public/basic/Misc$'
import { Network } from '@od-web-sdk/utils/Network'

export class MiscApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Misc$(Network.create(this.conf), this.namespace, this.cache)
  }

  getCountries = () => {
    return this.newInstance().fetchV1MiscCountries()
  }
}
