/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { Namespace$ } from '@accelbyte/sdk/generated-public/basic/Namespace$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class NamespaceApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Get all namespaces.<br>Other detail info: <ul><li><i>Required permission</i>: login user</li><li><i>Action code</i>: 11303</li><li><i>Returns</i>: list of namespaces</li></ul>
   */
  getNamespaces = (activeOnly?: boolean | null) => {
    return this.newInstance().fetchV1PublicNamespaces({ activeOnly })
  }

  private newInstance() {
    return new Namespace$(Network.create(this.conf), this.namespace, this.cache)
  }
}
