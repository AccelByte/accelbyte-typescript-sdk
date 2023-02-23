/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ApiFactory } from '@accelbyte/sdk/ApiFactory'
import { injectAuthInterceptors } from '@accelbyte/sdk/interceptors/AuthInterceptors'
import { injectErrorInterceptors } from '@accelbyte/sdk/interceptors/ErrorInterceptor'
import { AccelbyteSDK, Overrides, SDKEvents, SDKOptions, SDKRequestConfig } from './AccelbyteSDK'
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

interface ServiceVersion {
  title: string
  version: string | undefined
  name: string
  buildDate: string
}

const TIMEOUT_TO_DIAGNOSTICS = 1000 // 1 sec

class AccelbyteSDKFactory {
  private readonly options: SDKOptions
  private readonly events: SDKEvents | undefined
  private config: SDKRequestConfig
  private refreshToken: string | undefined

  constructor(options: SDKOptions, config?: SDKRequestConfig, events?: SDKEvents) {
    this.options = {
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
    // Logger.info('Accelbyte-SDK initialized with config', this.config)
  }

  init(): AccelbyteSDK {
    const { baseURL, clientId } = this.options

    injectAuthInterceptors(clientId, this.getConfig, this.events?.onSessionExpired, this.events?.onGetUserSession, this.getRefreshToken)
    injectErrorInterceptors(baseURL, this.events?.onUserEligibilityChange, this.events?.onError)

    setTimeout(() => this.doVersionDiagnostics, TIMEOUT_TO_DIAGNOSTICS)

    return {
      refreshTokens: (accessToken, refreshToken) => this.refreshTokensImpl(accessToken, refreshToken),
      IAM: {
        UserAuthorization: (overrides?: Overrides) =>
          ApiFactory.userAuthorization(this.config, this.options, this.refreshToken, this.options.namespace, this.override(overrides)),
        User: (overrides?: Overrides) => ApiFactory.userApi(this.config, this.options.namespace, this.override(overrides)),
        OAuth: (overrides?: Overrides) => ApiFactory.oauthApi(this.config, this.options, this.options.namespace, this.override(overrides)),
        InputValidations: (overrides?: Overrides) =>
          ApiFactory.inputValidationsApi(this.config, this.options.namespace, this.override(overrides)),
        ThirdPartyCredential: (overrides?: Overrides) =>
          ApiFactory.thirdPartyCredentialApi(this.config, this.options.namespace, this.override(overrides)),
        TwoFA: (overrides?: Overrides) => ApiFactory.twoFAApi(this.config, this.options.namespace, this.override(overrides)),
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
      }
    }
  }

  /**
   * Diagnose all services by comparing them with the sdk codegen versions and raise a WARN log if mismatch
   */
  private doVersionDiagnostics = () => {
    const mapServices = {
      [IamVersion.name]: IamVersion,
      [BuildinfoVersion.name]: BuildinfoVersion,
      [PlatformVersion.name]: PlatformVersion,
      [GdprVersion.name]: GdprVersion,
      [EventVersion.name]: EventVersion
    }
    /* Call /<service-name>/version to pull service version
      GET https://development.accelbyte.io/iam/version
      {
        "buildDate": "2023-02-22T04:12:23+00:00",
        "gitHash": "abc",
        "name": "justice-iam-service",
        "realm": "dev",
        "version": "5.28.0"
      }
     */
    const axiosRequest = service_ => Network.create(this.config).get(`/${service_.title}/version`)
    Promise.all([
      axiosRequest(IamVersion),
      axiosRequest(BuildinfoVersion),
      axiosRequest(BasicVersion),
      axiosRequest(PlatformVersion),
      axiosRequest(GdprVersion),
      axiosRequest(EventVersion)
    ]).then(values => {
      values.forEach(res => {
        const remoteService = res.data
        const sdkService: ServiceVersion = mapServices[remoteService.name]
        if (sdkService?.version !== remoteService.version) {
          console.log(`WARN: SDK(${sdkService.title}) v${sdkService.version} doesn't match service version ${remoteService.version}`)
        }
      })
    })
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
  Logger.info('Accelbyte-SDK instantiated:', options)
  const sdkFactory = new AccelbyteSDKFactory(options, config, onEvents)
  return sdkFactory.init()
}

// ts-prune-ignore-next
export const Accelbyte = { SDK: sdkInit }
