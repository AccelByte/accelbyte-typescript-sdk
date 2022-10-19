/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ApiFactory } from '@od-web-sdk/ApiFactory'
import { LogLevel } from '@od-web-sdk/constants/BuildInfoApp'
import { injectAuthInterceptors } from '@od-web-sdk/interceptors/AuthInterceptors'
import { injectErrorInterceptors } from '@od-web-sdk/interceptors/ErrorInterceptor'
import { AccelbyteSDK, Overrides, SDKEvents, SDKOptions, SDKRequestConfig } from './AccelbyteSDK'
import buildInfo from './buildInfo.json'
import { Logger } from './utils/Logger'

/**
 * This is the main SDK class
 * ----------------
 * const sdk = await Accelbyte.SDK(..)
 *
 * // provide custom axios args
 * const options = { baseUrl: 'http://service.url', headers: {  customHeader1: 'dummy1' } }
 *
 * // obtain the service
 * const {response, error} = sdk.iam.getUser(options)
 * const {response, error} = sdk.iam.postWhatever(options)
 * ----------------
 */

class AccelbyteSDKFactory {
  options: SDKOptions
  events: SDKEvents | undefined
  config: SDKRequestConfig

  constructor(options: SDKOptions, config?: SDKRequestConfig, events?: SDKEvents) {
    this.options = {
      loglevel: 'INFO',
      environment: 'prod',
      ...options
    }
    this.events = events
    this.config = {
      timeout: 60000,
      baseURL: options.baseURL,
      withCredentials: true,
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
        ...(options.accessToken && { Authorization: `Bearer ${this.options.accessToken}` })
      }
    }
    if (options.loglevel === LogLevel.DEBUG) {
      Logger.info('Accelbyte-SDK initialized with config', this.config)
    }
  }

  private getOption = () => this.options
  private getConfig = () => this.config

  private updateOption = (optionOverride: SDKOptions) => {
    this.options = {
      ...this.options,
      ...optionOverride
    }
  }

  private mergeConfigs = (configOverride?: SDKRequestConfig) => {
    this.config = {
      ...this.config,
      ...configOverride,
      headers: {
        ...this.config.headers,
        ...configOverride?.headers
      }
    }
  }

  init(): AccelbyteSDK {
    const { baseURL } = this.options
    injectAuthInterceptors({
      getSDKConfig: this.getConfig,
      getSDKOption: this.getOption,
      onSessionExpired: this.events?.onSessionExpired,
      onGetUserSession: this.events?.onGetUserSession
    })
    injectErrorInterceptors(baseURL, this.events?.onUserEligibilityChange, this.events?.onError)

    return {
      updateConfig: (conf?: SDKRequestConfig) => this.mergeConfigs(conf),
      updateOption: (option: SDKOptions) => this.updateOption(option),
      iam: {
        userAuthorization: (overrides?: Overrides) =>
          ApiFactory.userAuthorization(this.config, this.options, this.options.namespace, overrides),
        userApi: (overrides?: Overrides) => ApiFactory.userApi(this.config, this.options.namespace, overrides),
        oauth: (overrides?: Overrides) => ApiFactory.oauthApi(this.config, this.options, this.options.namespace, overrides),
        inputValidation: (overrides?: Overrides) => ApiFactory.inputValidationApi(this.config, this.options.namespace, overrides),
        thirdPartyCredential: (overrides?: Overrides) => ApiFactory.thirdPartyCredentialApi(this.config, this.options.namespace, overrides),
        twoFA: (overrides?: Overrides) => ApiFactory.twoFA(this.config, this.options.namespace, overrides)
      },
      buildInfo: {
        downloader: (overrides?: Overrides) => ApiFactory.downloaderApi(this.config, this.options.namespace, overrides),
        caching: (overrides?: Overrides) => ApiFactory.cachingApi(this.config, this.options.namespace, overrides),
        dlc: (overrides?: Overrides) => ApiFactory.dlcApi(this.config, this.options.namespace, overrides)
      },
      basic: {
        misc: (overrides?: Overrides) => ApiFactory.miscApi(this.config, this.options.namespace, overrides),
        userProfile: (overrides?: Overrides) => ApiFactory.userProfileApi(this.config, this.options.namespace, overrides),
        fileUpload: (overrides?: Overrides) => ApiFactory.fileUploadApi(this.config, this.options.namespace, overrides),
        namespace: (overrides?: Overrides) => ApiFactory.namespaceApi(this.config, this.options.namespace, overrides)
      },
      platform: {
        currency: (overrides?: Overrides) => ApiFactory.currencyApi(this.config, this.options.namespace, overrides),
        entitlement: (overrides?: Overrides) => ApiFactory.entitlementApi(this.config, this.options.namespace, overrides),
        fulfillment: (overrides?: Overrides) => ApiFactory.fulfillmentApi(this.config, this.options.namespace, overrides),
        item: (overrides?: Overrides) => ApiFactory.itemApi(this.config, this.options.namespace, overrides),
        order: (overrides?: Overrides) => ApiFactory.orderApi(this.config, this.options.namespace, overrides),
        payment: (overrides?: Overrides) => ApiFactory.paymentApi(this.config, this.options.namespace, overrides),
        subscription: (overrides?: Overrides) => ApiFactory.subscriptionApi(this.config, this.options.namespace, overrides),
        wallet: (overrides?: Overrides) => ApiFactory.walletApi(this.config, this.options.namespace, overrides)
      },
      legal: {
        eligibilities: (overrides?: Overrides) => ApiFactory.eligibillitiesApi(this.config, this.options.namespace, overrides),
        agreement: (overrides?: Overrides) => ApiFactory.agreementApi(this.config, this.options.namespace, overrides),
        policies: (overrides?: Overrides) => ApiFactory.policiesApi(this.config, this.options.namespace, overrides),
        localizedPolicyVersions: (overrides?: Overrides) =>
          ApiFactory.localizedPolicyVersionsApi(this.config, this.options.namespace, overrides)
      },
      gdpr: {
        dataDeletion: (overrides?: Overrides) => ApiFactory.dataDeletionApi(this.config, this.options.namespace, overrides),
        dataRetrieval: (overrides?: Overrides) => ApiFactory.dataRetrievalApi(this.config, this.options.namespace, overrides)
      },
      event: {
        event: (overrides?: Overrides) => ApiFactory.eventApi(this.config, this.options.namespace, overrides)
      },
      odinConfig: {
        publicTemplate: (overrides?: Overrides) => ApiFactory.publicTemplateApi(this.config, this.options.namespace, overrides)
      }
    }
  }
}

const sdkInit = ({ options, config, events }: { options: SDKOptions; config?: SDKRequestConfig; events?: SDKEvents }): AccelbyteSDK => {
  if (options.loglevel === LogLevel.DEBUG) {
    Logger.info('Accelbyte-SDK instantiated:', options)
  }
  const sdkFactory = new AccelbyteSDKFactory(options, config, events)
  if (options.loglevel === LogLevel.DEBUG) {
    Logger.info(`Accelbyte-SDK version: ${buildInfo.version} \nBuild: ${buildInfo.build} \nTimestamp: ${new Date(buildInfo.timestamp)}`)
  }
  return sdkFactory.init()
}

// ts-prune-ignore-next
// export { sdkInit as SDK }
export const Accelbyte = { SDK: sdkInit }
