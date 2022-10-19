/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { Namespace$ } from '@od-web-sdk/generated-public/basic/Namespace$'
import { Network } from '@od-web-sdk/utils/Network'

export class NamespaceApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new Namespace$(Network.create(this.conf), this.namespace, this.cache)
  }

  getNamespaces = (activeOnly?: boolean | null) => {
    return this.newInstance().fetchV1PublicNamespaces({ activeOnly })
  }
}
