/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ApiFactory } from '@accelbyte/sdk/ApiFactory'
import { LogLevel } from '@accelbyte/sdk/constants/BuildInfoApp'
import { injectAuthInterceptors } from '@accelbyte/sdk/interceptors/AuthInterceptors'
import { injectErrorInterceptors } from '@accelbyte/sdk/interceptors/ErrorInterceptor'
import { AccelbyteSDK, Overrides, SDKEvents, SDKOptions, SDKRequestConfig } from './AccelbyteSDK'
import buildInfo from './buildInfo.json'
import { Logger } from './utils/Logger'
import BasicVersion from '@accelbyte/sdk/generated-public/basic/Version'
import BuildinfoVersion from '@accelbyte/sdk/generated-public/buildinfo/Version'
import EventVersion from '@accelbyte/sdk/generated-public/event/Version'
import GdprVersion from '@accelbyte/sdk/generated-public/gdpr/Version'
import IamVersion from '@accelbyte/sdk/generated-public/iam/Version'
import LegalVersion from '@accelbyte/sdk/generated-public/legal/Version'
import OdinConfigVersion from '@accelbyte/sdk/generated-public/odin-config/Version'
import PlatformVersion from '@accelbyte/sdk/generated-public/platform/Version'
import { Network } from '@accelbyte/sdk/utils/Network'

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
  private readonly options: SDKOptions
  private readonly events: SDKEvents | undefined
  private config: SDKRequestConfig
  private refreshToken: string | undefined

  constructor(options: SDKOptions, config?: SDKRequestConfig, events?: SDKEvents) {
    this.options = {
      loglevel: 'INFO',
      cache: false,
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
        ...config?.headers
      }
    }
    if (options.loglevel === LogLevel.DEBUG) {
      Logger.info('Accelbyte-SDK initialized with config', this.config)
    }
  }

  init(): AccelbyteSDK {
    const { baseURL, clientId } = this.options

    injectAuthInterceptors(clientId, this.getConfig, this.events?.onSessionExpired, this.events?.onGetUserSession, this.getRefreshToken)
    injectErrorInterceptors(baseURL, this.events?.onUserEligibilityChange, this.events?.onError)

    return {
      refreshTokens: (accessToken, refreshToken) => this.refreshTokensImpl(accessToken, refreshToken),
      IAM: {
        UserAuthorization: (overrides?: Overrides) =>
          ApiFactory.userAuthorization(this.config, this.options, this.refreshToken, this.options.namespace, this.override(overrides)),
        User: (overrides?: Overrides) => ApiFactory.userApi(this.config, this.options.namespace, this.override(overrides)),
        OAuth: (overrides?: Overrides) => ApiFactory.oauthApi(this.config, this.options, this.options.namespace, this.override(overrides)),
        InputValidation: (overrides?: Overrides) =>
          ApiFactory.inputValidationApi(this.config, this.options.namespace, this.override(overrides)),
        ThirdPartyCredential: (overrides?: Overrides) =>
          ApiFactory.thirdPartyCredentialApi(this.config, this.options.namespace, this.override(overrides)),
        TwoFA: (overrides?: Overrides) => ApiFactory.twoFA(this.config, this.options.namespace, this.override(overrides)),
        version: IamVersion
      },
      BuildInfo: {
        Downloader: (overrides?: Overrides) => ApiFactory.downloaderApi(this.config, this.options.namespace, this.override(overrides)),
        Caching: (overrides?: Overrides) => ApiFactory.cachingApi(this.config, this.options.namespace, this.override(overrides)),
        DLC: (overrides?: Overrides) => ApiFactory.dlcApi(this.config, this.options.namespace, this.override(overrides)),
        version: BuildinfoVersion
      },
      Basic: {
        Misc: (overrides?: Overrides) => ApiFactory.miscApi(this.config, this.options.namespace, this.override(overrides)),
        UserProfile: (overrides?: Overrides) => ApiFactory.userProfileApi(this.config, this.options.namespace, this.override(overrides)),
        FileUpload: (overrides?: Overrides) => ApiFactory.fileUploadApi(this.config, this.options.namespace, this.override(overrides)),
        Namespace: (overrides?: Overrides) => ApiFactory.namespaceApi(this.config, this.options.namespace, this.override(overrides)),
        version: BasicVersion
      },
      Platform: {
        Currency: (overrides?: Overrides) => ApiFactory.currencyApi(this.config, this.options.namespace, this.override(overrides)),
        Entitlement: (overrides?: Overrides) => ApiFactory.entitlementApi(this.config, this.options.namespace, this.override(overrides)),
        Fulfillment: (overrides?: Overrides) => ApiFactory.fulfillmentApi(this.config, this.options.namespace, this.override(overrides)),
        Item: (overrides?: Overrides) => ApiFactory.itemApi(this.config, this.options.namespace, this.override(overrides)),
        Order: (overrides?: Overrides) => ApiFactory.orderApi(this.config, this.options.namespace, this.override(overrides)),
        Payment: (overrides?: Overrides) => ApiFactory.paymentApi(this.config, this.options.namespace, this.override(overrides)),
        Subscription: (overrides?: Overrides) => ApiFactory.subscriptionApi(this.config, this.options.namespace, this.override(overrides)),
        Wallet: (overrides?: Overrides) => ApiFactory.walletApi(this.config, this.options.namespace, this.override(overrides)),
        version: PlatformVersion
      },
      Legal: {
        Eligibilities: (overrides?: Overrides) =>
          ApiFactory.eligibillitiesApi(this.config, this.options.namespace, this.override(overrides)),
        Agreement: (overrides?: Overrides) => ApiFactory.agreementApi(this.config, this.options.namespace, this.override(overrides)),
        Policies: (overrides?: Overrides) => ApiFactory.policiesApi(this.config, this.options.namespace, this.override(overrides)),
        LocalizedPolicyVersions: (overrides?: Overrides) =>
          ApiFactory.localizedPolicyVersionsApi(this.config, this.options.namespace, this.override(overrides)),
        version: LegalVersion
      },
      GDPR: {
        DataDeletion: (overrides?: Overrides) => ApiFactory.dataDeletionApi(this.config, this.options.namespace, this.override(overrides)),
        DataRetrieval: (overrides?: Overrides) =>
          ApiFactory.dataRetrievalApi(this.config, this.options.namespace, this.override(overrides)),
        version: GdprVersion
      },
      Event: {
        Event: (overrides?: Overrides) => ApiFactory.eventApi(this.config, this.options.namespace, this.override(overrides)),
        version: EventVersion
      },
      AccelbyteConfig: {
        PublicTemplate: (overrides?: Overrides) =>
          ApiFactory.publicTemplateApi(this.config, this.options.namespace, this.override(overrides)),
        version: OdinConfigVersion
      },
      version: () => {
        console.log('IamVersion: ', IamVersion.version)
        console.log('BuildinfoVersion: ', BuildinfoVersion.version)
        console.log('BasicVersion: ', BasicVersion.version)
        console.log('PlatformVersion: ', PlatformVersion.version)
        console.log('LegalVersion: ', LegalVersion.version)
        console.log('GdprVersion: ', GdprVersion.version)
        console.log('EventVersion: ', EventVersion.version)

        const axiosInstance = Network.create(this.config)
        axiosInstance
          .get('https://development.accelbyte.io/iam/version')
          .then(res => {
            console.log('-- axiosInstance res', res)
            console.log('-- current ver', IamVersion)
          })
          .catch(err => {
            console.log('-- axiosInstance err', err)
          })
      }
    }
  }

  private getRefreshToken = (): string | undefined => this.refreshToken

  private getConfig = () => this.config

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

  private refreshTokensImpl = (accessToken, refreshToken) => {
    if (refreshToken) {
      this.refreshToken = refreshToken
    }
    this.mergeConfigs({ headers: { Authorization: accessToken ? `Bearer ${accessToken}` : '' } })
  }

  private override = (overrides?: Overrides): Overrides | undefined => {
    if (overrides && overrides.cache !== undefined) {
      return overrides
    } else {
      return { ...(overrides ?? {}), cache: this.options.cache }
    }
  }
}

const sdkInit = ({ options, config, onEvents }: { options: SDKOptions; config?: SDKRequestConfig; onEvents?: SDKEvents }): AccelbyteSDK => {
  if (options.loglevel === LogLevel.DEBUG) {
    Logger.info('Accelbyte-SDK instantiated:', options)
  }
  const sdkFactory = new AccelbyteSDKFactory(options, config, onEvents)
  if (options.loglevel === LogLevel.DEBUG) {
    Logger.info(`Accelbyte-SDK version: ${buildInfo.version} \nBuild: ${buildInfo.build} \nTimestamp: ${new Date(buildInfo.timestamp)}`)
  }
  return sdkFactory.init()
}

// ts-prune-ignore-next
export const Accelbyte = { SDK: sdkInit }
