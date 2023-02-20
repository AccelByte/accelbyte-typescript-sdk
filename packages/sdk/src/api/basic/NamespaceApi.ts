/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * GET [/basic/v1/public/namespaces](api)
   *
   * Get all namespaces.
   *
   * - _Required permission_: login user
   * - _Action code_: 11303
   * - _Returns_: list of namespaces
   */
  getNamespaces = (activeOnly?: boolean | null) => {
    return this.newInstance().fetchV1PublicNamespaces({ activeOnly })
  }

  private newInstance() {
    return new Namespace$(Network.create(this.conf), this.namespace, this.cache)
  }
}
