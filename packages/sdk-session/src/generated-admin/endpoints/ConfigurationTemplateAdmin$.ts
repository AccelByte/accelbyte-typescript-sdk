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
import { ConfigAlertRequestCreate } from '../../generated-definitions/ConfigAlertRequestCreate.js'
import { ConfigAlertResponse } from '../../generated-definitions/ConfigAlertResponse.js'
import { ConfigurationTemplateResponse } from '../../generated-definitions/ConfigurationTemplateResponse.js'
import { ConfigurationTemplatesResponse } from '../../generated-definitions/ConfigurationTemplatesResponse.js'
import { CreateConfigurationTemplateRequest } from '../../generated-definitions/CreateConfigurationTemplateRequest.js'
import { DsmConfigRecord } from '../../generated-definitions/DsmConfigRecord.js'
import { UpdateConfigurationTemplateRequest } from '../../generated-definitions/UpdateConfigurationTemplateRequest.js'

export class ConfigurationTemplateAdmin$ {
  // @ts-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private cache = false, private isValidationEnabled = true) {}

  /**
   * Get a dsmc configuration.
   */
  getDsconfigs(): Promise<IResponseWithSync<DsmConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/dsconfigs'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, DsmConfigRecord, 'DsmConfigRecord')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create template configuration to be applied across party and session. Session configuration mandatory : - name - joinability (example value : OPEN, CLOSED, INVITE_ONLY) - autoJoin: when enabled, players will automatically join the initial game session creation. Game session will not send any invite and players dont need to act upon it. default: false (disabled) - Type (example value : P2P, DS, NONE) if type empty, type will be assign to NONE - MinPlayers (must greater or equal 0) - MaxPlayers (must greater than 0) - InviteTimeout (must greater or equal 0) if InviteTimeout equal 0 will be use default DefaultTimeoutSecond (60s) - InactiveTimeout (must greater or equal 0) if InactiveTimeout equal 0 will be use default DefaultTimeoutSecond (60s) - Persistent will only applies to session with type DS (example value true or false, default: false) - If Persistent True the session always active even DS removing or terminate and Session will be request DS again until DS Ready or Busy. - To Stop Session Not request again to DS or want Delete Session can Delete Session using endpoint DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} - If Persistent False the session will be inactive if all member left and DS terminate or removing - nativeSessionSetting: - XboxSessionTemplateName: the XBox session template name that correspondent to the AB session template, and is needed to define XBox session&#39;s joinRestriction and maxMembersCount when doing the session sync. - XboxServiceConfigID: the XBox service configuration ID. - PSNServiceLabel: the PSN service label. - SessionTitle: the session title. In PSN, this will be used to define name of the session thats displayed on PlayStation system UI. - ShouldSync: to define whether the service needs to do session sync with native platform(s). Default: false (disabled). - PSNSupportedPlatforms: the PSN supported platforms. In PSN, if ShouldSync true and PSNSupportedPlatforms is empty, then PS5 will be set as default value. - PSNBaseUrl this is for base URL PSN if not set will be default value https://s2s.sp-int.playstation.net. In a single namespace only 1 PSN Env that can be used. Multiple session template should refers to the same PSN Env as we have in IAM Service. - https://s2s.sp-int.playstation.net (DEV, need IP Whitelist) - https://s2s.prod-qa.playstation.net (QA Environment/PSN Certification) - https://s2s.np.playstation.net (Production) - localizedSessionName : for localized name and default language example payload : &#34;localizedSessionName&#34;:{ &#34;defaultLanguage&#34; : &#34;en-US&#34; &#34;localizedText&#34; :{ &#34;en-US&#34; : &#34;title&#34; } } - if the game client wants to enable push context to PSN, game client will need to store PSN_PUSH_CONTEXT_ID on the player attributes, otherwise Session service will try to populate from the session attributes or auto generate with random UUID if empty. - TieTeamsSessionLifetime (optional, default: false): If it is set to true, the lifetime of any partyId session inside teams attribute will be tied to the game session. Only applies when the teams partyId is game session. - DisableCodeGeneration (optional, default: false): If it is set to true, code will not be generated for party session automatically. - DSManualSetReady (optional, default: false): The DS need to call specific end point to flag the DS for game session is ready to accept client connection. - EnableSecret (optional, default: false): if configuration template is created with TypeDS and EnableSecret is True, A secret will be created - LeaderElectionGracePeriod this is on second (optional, default:0) this is only use for party session, if value &gt; 0 if leader disconnect will be wait until value reach and leader will be change after reach - ManualRejoin (optional, default: false): indicates if game client will handle manual rejoin upon websocket reconnection when enabled.
   */
  createConfiguration(data: CreateConfigurationTemplateRequest): Promise<IResponse<ConfigurationTemplateResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ConfigurationTemplateResponse, 'ConfigurationTemplateResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get all template configurations in specified namespace.
   */
  getConfigurations(queryParams?: {
    limit?: number
    name?: string | null
    offset?: number
    order?: string | null
    orderBy?: string | null
  }): Promise<IResponseWithSync<ConfigurationTemplatesResponse>> {
    const params = { limit: 20, ...queryParams } as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configurations'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigurationTemplatesResponse, 'ConfigurationTemplatesResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * sync dsmc configuration.
   */
  getDsconfigsSync(): Promise<IResponseWithSync<DsmConfigRecord>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/dsconfigs/sync'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, DsmConfigRecord, 'DsmConfigRecord')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Delete configuration alert.
   */
  deleteAlertsConfiguration(): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/alerts-configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a configuration alert.
   */
  getAlertsConfiguration(): Promise<IResponseWithSync<ConfigAlertResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/alerts-configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigAlertResponse, 'ConfigAlertResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Create configuration alert configuration alert mandatory : - namespace - durationDays must be greater than 0
   */
  createAlertsConfiguration(data: ConfigAlertRequestCreate): Promise<IResponse<ConfigAlertResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/alerts-configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.post(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ConfigAlertResponse, 'ConfigAlertResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Update configuration alert configuration alert mandatory : - namespace - durationDays must be greater than 0
   */
  updateAlertsConfiguration(data: ConfigAlertRequestCreate): Promise<IResponse<ConfigAlertResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/alerts-configuration'.replace('{namespace}', this.namespace)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ConfigAlertResponse, 'ConfigAlertResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Delete a template configuration.
   */
  deleteConfiguration_ByName(name: string): Promise<IResponse<unknown>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configurations/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.delete(url, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, z.unknown(), 'z.unknown()')
      : Validate.unsafeResponse(() => resultPromise)
  }

  /**
   * Get a template configuration.
   */
  getConfiguration_ByName(name: string): Promise<IResponseWithSync<ConfigurationTemplateResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configurations/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.get(url, { params })

    const res = () =>
      this.isValidationEnabled
        ? Validate.responseType(() => resultPromise, ConfigurationTemplateResponse, 'ConfigurationTemplateResponse')
        : Validate.unsafeResponse(() => resultPromise)

    if (!this.cache) {
      return SdkCache.withoutCache(res)
    }
    const cacheKey = url + CodeGenUtil.hashCode(JSON.stringify({ params }))
    return SdkCache.withCache(cacheKey, res)
  }

  /**
   * Modify template configuration Session configuration mandatory : - name - joinability (example value : OPEN, CLOSED, INVITE_ONLY) - autoJoin: when enabled, players will automatically join the initial game session creation. Game session will not send any invite and players dont need to act upon it. default: false (disabled) - Type (example value : P2P, DS, NONE) if type empty, type will be assign to NONE - MinPlayers (must greater or equal 0) - MaxPlayers (must greater than 0) - InviteTimeout (must greater or equal 0) if InviteTimeout equal 0 will be use default DefaultTimeoutSecond (60s) - InactiveTimeout (must greater or equal 0) if InactiveTimeout equal 0 will be use default DefaultTimeoutSecond (60s) - Persistent Flag only can use with type DS (example value true or false) - If Persistent True the session always active even DS removing or terminate and Session will be request DS again until DS Ready or Busy. - To Stop Session Not request again to DS or want Delete Session can Delete Session using endpoint DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId} - If Persistent False the session will be inactive if all member left and DS terminate or removing - nativeSessionSetting: - XboxSessionTemplateName: the XBox session template name that correspondent to the AB session template, and is needed to define XBox session&#39;s joinRestriction and maxMembersCount when doing the session sync. - XboxServiceConfigID: the XBox service configuration ID. - PSNServiceLabel: the PSN service label. - SessionTitle: the session title. In PSN, this will be used to define name of the session thats displayed on PlayStation system UI. - ShouldSync: to define whether the service needs to do session sync with native platform(s). Default: false (disabled). - PSNSupportedPlatforms: the PSN supported platforms. In PSN, if ShouldSync true and PSNSupportedPlatforms is empty, then PS5 will be set as default value. - PSNBaseUrl this is for base URL PSN if not set will be default value https://s2s.sp-int.playstation.net. In a single namespace only 1 PSN Env that can be used. Multiple session template should refers to the same PSN Env as we have in IAM Service. - https://s2s.sp-int.playstation.net (DEV, need IP Whitelist) - https://s2s.prod-qa.playstation.net (QA Environment/PSN Certification) - https://s2s.np.playstation.net (Production) - localizedSessionName : for localized name and default language example payload : &#34;localizedSessionName&#34;:{ &#34;defaultLanguage&#34; : &#34;en-US&#34; &#34;localizedText&#34; :{ &#34;en-US&#34; : &#34;title&#34; } } - if the game client wants to enable push context to PSN, game client will need to store PSN_PUSH_CONTEXT_ID on the player attributes, otherwise Session service will try to populate from the session attributes or auto generate with random UUID if empty. - TieTeamsSessionLifetime: If it is set to true, the lifetime of any partyId session inside teams attribute will be tied to the game session. Only applies when the teams partyId is game session. - DisableCodeGeneration (optional, default: false): If it is set to true, code will not be generated for party session automatically. - DSManualSetReady (optional, default: false): The DS need to call specific end point to flag the DS for game session is ready to accept client connection. - EnableSecret (optional, default: false): if configuration template is created with TypeDS and EnableSecret is True, A secret will be created. - ManualRejoin (optional, default: false): indicates if game client will handle manual rejoin upon websocket reconnection when enabled.
   */
  updateConfiguration_ByName(name: string, data: UpdateConfigurationTemplateRequest): Promise<IResponse<ConfigurationTemplateResponse>> {
    const params = {} as SDKRequestConfig
    const url = '/session/v1/admin/namespaces/{namespace}/configurations/{name}'
      .replace('{namespace}', this.namespace)
      .replace('{name}', name)
    const resultPromise = this.axiosInstance.put(url, data, { params })

    return this.isValidationEnabled
      ? Validate.responseType(() => resultPromise, ConfigurationTemplateResponse, 'ConfigurationTemplateResponse')
      : Validate.unsafeResponse(() => resultPromise)
  }
}
