/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKOptions, SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { FileUploadApi } from '@od-web-sdk/api/basic/FileUploadApi'
import { MiscApi } from '@od-web-sdk/api/basic/MiscApi'
import { NamespaceApi } from '@od-web-sdk/api/basic/NamespaceApi'
import { UserProfileApi } from '@od-web-sdk/api/basic/UserProfileApi'
import { CachingApi } from '@od-web-sdk/api/buildInfo/CachingApi'
import { DlcApi } from '@od-web-sdk/api/buildInfo/DlcApi'
import { DownloaderApi } from '@od-web-sdk/api/buildInfo/DownloaderApi'
import { EventApi } from '@od-web-sdk/api/event/EventApi'
import { DataDeletionApi } from '@od-web-sdk/api/gdpr/DataDeletionApi'
import { DataRetrievalApi } from '@od-web-sdk/api/gdpr/DataRetrievalApi'
import { InputValidationsApi } from '@od-web-sdk/api/iam/InputValidationApi'
import { OAuthApi } from '@od-web-sdk/api/iam/OAuthApi'
import { ThirdPartyCredentialApi } from '@od-web-sdk/api/iam/ThirdPartyCredentialApi'
import { TwoFA } from '@od-web-sdk/api/iam/TwoFA'
import { UserApi } from '@od-web-sdk/api/iam/UserApi'
import { UserAuthorization } from '@od-web-sdk/api/iam/UserAuthorization'
import { AgreementApi } from '@od-web-sdk/api/legal/AgreementApi'
import { EligibilitiesApi } from '@od-web-sdk/api/legal/EligibilitiesApi'
import { LocalizedPolicyVersionsApi } from '@od-web-sdk/api/legal/LocalizedPolicyVersionsApi'
import { PoliciesApi } from '@od-web-sdk/api/legal/PoliciesApi'
import { PublicTemplateApi } from '@od-web-sdk/api/odin-config/PublicTemplateApi'
import { CurrencyApi } from '@od-web-sdk/api/platform/CurrencyApi'
import { EntitlementApi } from '@od-web-sdk/api/platform/EntitlementApi'
import { FulfillmentApi } from '@od-web-sdk/api/platform/FulfillmentApi'
import { ItemApi } from '@od-web-sdk/api/platform/ItemApi'
import { OrderApi } from '@od-web-sdk/api/platform/OrderApi'
import { PaymentApi } from '@od-web-sdk/api/platform/PaymentApi'
import { SubscriptionApi } from '@od-web-sdk/api/platform/SubscriptionApi'
import { WalletApi } from '@od-web-sdk/api/platform/WalletApi'

export class ApiFactory {
  static mergedConfigs = (config: SDKRequestConfig, overrides?: { config?: SDKRequestConfig; cache?: boolean }) => {
    return {
      ...config,
      ...overrides?.config,
      headers: {
        ...config.headers,
        ...overrides?.config?.headers
      }
    }
  }

  static userAuthorization(
    config: SDKRequestConfig,
    options: SDKOptions,
    namespace: string,
    overrides?: { config?: SDKRequestConfig; cache?: boolean }
  ) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new UserAuthorization(conf, namespace, false, {
      clientId: options.clientId,
      redirectURI: options.redirectURI,
      baseURL: options.baseURL,
      refreshToken: options.refreshToken,
      isDesktopApp: options.isDesktopApp
    })
  }

  static userApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new UserApi(conf, namespace, overrides?.cache)
  }

  static oauthApi(
    config: SDKRequestConfig,
    options: SDKOptions,
    namespace: string,
    overrides?: { config?: SDKRequestConfig; cache?: boolean }
  ) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new OAuthApi(conf, namespace, false, {
      clientId: options.clientId
    })
  }

  static inputValidationApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new InputValidationsApi(conf, namespace)
  }

  static thirdPartyCredentialApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new ThirdPartyCredentialApi(conf, namespace, overrides?.cache)
  }

  static twoFA(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new TwoFA(conf, namespace, overrides?.cache)
  }

  static downloaderApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new DownloaderApi(conf, namespace)
  }

  static dlcApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new DlcApi(conf, namespace)
  }

  static cachingApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new CachingApi(conf, namespace)
  }

  static miscApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new MiscApi(conf, namespace, overrides?.cache)
  }

  static userProfileApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new UserProfileApi(conf, namespace, overrides?.cache)
  }

  static fileUploadApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new FileUploadApi(conf, namespace)
  }

  static namespaceApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new NamespaceApi(conf, namespace, overrides?.cache)
  }

  static paymentApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new PaymentApi(conf, namespace, overrides?.cache)
  }

  static eligibillitiesApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new EligibilitiesApi(conf, namespace, overrides?.cache)
  }

  static agreementApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new AgreementApi(conf, namespace, overrides?.cache)
  }

  static policiesApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new PoliciesApi(conf, namespace, overrides?.cache)
  }

  static localizedPolicyVersionsApi(
    config: SDKRequestConfig,
    namespace: string,
    overrides?: { config?: SDKRequestConfig; cache?: boolean }
  ) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new LocalizedPolicyVersionsApi(conf, namespace, overrides?.cache)
  }

  static dataDeletionApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new DataDeletionApi(conf, namespace, overrides?.cache)
  }

  static dataRetrievalApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new DataRetrievalApi(conf, namespace, overrides?.cache)
  }

  static currencyApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new CurrencyApi(conf, namespace, overrides?.cache)
  }

  static entitlementApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new EntitlementApi(conf, namespace, overrides?.cache)
  }

  static fulfillmentApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new FulfillmentApi(conf, namespace, overrides?.cache)
  }

  static itemApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new ItemApi(conf, namespace, overrides?.cache)
  }

  static orderApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new OrderApi(conf, namespace, overrides?.cache)
  }

  static subscriptionApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new SubscriptionApi(conf, namespace, overrides?.cache)
  }

  static walletApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new WalletApi(conf, namespace, overrides?.cache)
  }

  static eventApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new EventApi(conf, namespace, overrides?.cache)
  }

  static publicTemplateApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new PublicTemplateApi(conf, namespace, overrides?.cache)
  }
}
