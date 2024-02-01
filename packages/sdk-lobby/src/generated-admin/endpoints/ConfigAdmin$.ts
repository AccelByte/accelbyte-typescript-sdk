/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
import { CodeGenUtil, IResponse, IResponseWithSync, SDKRequestConfig, SdkCache, Validate } from '@accelbyte/sdk'
import { AxiosInstance } from 'axios'
import { z } from 'zod'
import { ConfigList } from '../../generated-definitions/ConfigList.js'
import { ConfigReq } from '../../generated-definitions/ConfigReq.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'

export class ConfigAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Get lobby config of all namespaces.&lt;br&gt;default MaxDSWaitTime is 120 (second)
   */
  getConfig(): Promise<IResponseWithSync<ConfigList>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/config'
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigList, 'ConfigList')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Get lobby config of a namespace.&lt;br&gt;default MaxDSWaitTime is 120 (second)
   */
  getConfig_ByNamespace(): Promise<IResponseWithSync<ConfigReq>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigReq, 'ConfigReq')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Update lobby config of a namespace.&lt;br&gt;MaxDSWaitTime value is cannot less than 1, if null it will use default value in 120 (second)
   */
  updateConfig_ByNamespace(data: ConfigReq): Promise<IResponse<ConfigReq>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/config/namespaces/{namespace}'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ConfigReq, 'ConfigReq')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   *  Export lobby configuration to a json file. The file can then be imported from the /import endpoint. JSON Schema of the exported file: { &#34;required&#34;: [ &#34;namespace&#34;, &#34;entitlementItemID&#34;, &#34;chatRateLimitDuration&#34;, &#34;unregisterDelay&#34;, &#34;generalRateLimitDuration&#34;, &#34;autoKickOnDisconnectDelay&#34;, &#34;chatRateLimitBurst&#34;, &#34;generalRateLimitBurst&#34;, &#34;maxPartyMember&#34;, &#34;autoKickOnDisconnect&#34;, &#34;profanityFilter&#34;, &#34;enableChat&#34;, &#34;entitlementCheck&#34;, &#34;cancelTicketOnDisconnect&#34;, &#34;concurrentUsersLimit&#34;, &#34;readyConsentTimeout&#34;, &#34;disableInvitationOnJoinParty&#34;, &#34;allowJoinPartyDuringMatchmaking&#34;, &#34;allowInviteNonConnectedUser&#34;, &#34;keepPresenceActivityOnDisconnect&#34;, &#34;maxDSWaitTime&#34;, &#34;maxFriendsLimit&#34; ], &#34;properties&#34;: { &#34;allowInviteNonConnectedUser&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;allowJoinPartyDuringMatchmaking&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;autoKickOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;autoKickOnDisconnectDelay&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;cancelTicketOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;chatRateLimitBurst&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;chatRateLimitDuration&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;concurrentUsersLimit&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;disableInvitationOnJoinParty&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;enableChat&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;entitlementCheck&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;entitlementItemID&#34;: { &#34;type&#34;: &#34;string&#34; }, &#34;generalRateLimitBurst&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;generalRateLimitDuration&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;keepPresenceActivityOnDisconnect&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;maxDSWaitTime&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;maxFriendsLimit&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;maxPartyMember&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int32&#34; }, &#34;namespace&#34;: { &#34;type&#34;: &#34;string&#34; }, &#34;profanityFilter&#34;: { &#34;type&#34;: &#34;boolean&#34; }, &#34;readyConsentTimeout&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; }, &#34;unregisterDelay&#34;: { &#34;type&#34;: &#34;integer&#34;, &#34;format&#34;: &#34;int64&#34; } } }
   */
  getConfigExport(): Promise<IResponseWithSync<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/config/namespaces/{namespace}/export'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint. MaxDSWaitTime value is cannot less than 1, if null it will use default value in 120 (second)
   */
  createConfigImport(data: { file?: File }): Promise<IResponse<ImportConfigResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/lobby/v1/admin/config/namespaces/{namespace}/import'.replace('{namespace}', this.namespace)
    // TODO file upload not implemented
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ImportConfigResponse, 'ImportConfigResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
