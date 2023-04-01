/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKOptions, SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { FileUploadApi } from '@accelbyte/sdk/api/basic/FileUploadApi'
import { MiscApi } from '@accelbyte/sdk/api/basic/MiscApi'
import { NamespaceApi } from '@accelbyte/sdk/api/basic/NamespaceApi'
import { UserProfileApi } from '@accelbyte/sdk/api/basic/UserProfileApi'
import { CachingApi } from '@accelbyte/sdk/api/buildInfo/CachingApi'
import { DlcApi } from '@accelbyte/sdk/api/buildInfo/DlcApi'
import { DownloaderApi } from '@accelbyte/sdk/api/buildInfo/DownloaderApi'
import { EventApi } from '@accelbyte/sdk/api/event/EventApi'
import { DataDeletionApi } from '@accelbyte/sdk/api/gdpr/DataDeletionApi'
import { DataRetrievalApi } from '@accelbyte/sdk/api/gdpr/DataRetrievalApi'
import { InputValidationsApi } from '@accelbyte/sdk/api/iam/InputValidationsApi'
import { OAuthApi } from '@accelbyte/sdk/api/iam/OAuthApi'
import { ThirdPartyCredentialApi } from '@accelbyte/sdk/api/iam/ThirdPartyCredentialApi'
import { TwoFAApi } from '@accelbyte/sdk/api/iam/TwoFAApi'
import { UserApi } from '@accelbyte/sdk/api/iam/UserApi'
import { UserAuthorizationApi } from '@accelbyte/sdk/api/iam/UserAuthorizationApi'
import { AgreementApi } from '@accelbyte/sdk/api/legal/AgreementApi'
import { EligibilitiesApi } from '@accelbyte/sdk/api/legal/EligibilitiesApi'
import { LocalizedPolicyVersionsApi } from '@accelbyte/sdk/api/legal/LocalizedPolicyVersionsApi'
import { PoliciesApi } from '@accelbyte/sdk/api/legal/PoliciesApi'
import { PublicTemplateApi } from '@accelbyte/sdk/api/accelbyteconfig/PublicTemplateApi'
import { CurrencyApi } from '@accelbyte/sdk/api/platform/CurrencyApi'
import { EntitlementApi } from '@accelbyte/sdk/api/platform/EntitlementApi'
import { FulfillmentApi } from '@accelbyte/sdk/api/platform/FulfillmentApi'
import { ItemApi } from '@accelbyte/sdk/api/platform/ItemApi'
import { OrderApi } from '@accelbyte/sdk/api/platform/OrderApi'
import { PaymentApi } from '@accelbyte/sdk/api/platform/PaymentApi'
import { SubscriptionApi } from '@accelbyte/sdk/api/platform/SubscriptionApi'
import { WalletApi } from '@accelbyte/sdk/api/platform/WalletApi'
import { IAPApi } from './api/platform/IAPApi'

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
    refreshToken: string | undefined,
    namespace: string,
    overrides?: { config?: SDKRequestConfig; cache?: boolean }
  ) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new UserAuthorizationApi(conf, namespace, false, {
      clientId: options.clientId,
      redirectURI: options.redirectURI,
      baseURL: options.baseURL,
      refreshToken
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

  static inputValidationsApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new InputValidationsApi(conf, namespace)
  }

  static thirdPartyCredentialApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new ThirdPartyCredentialApi(conf, namespace, overrides?.cache)
  }

  static twoFAApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new TwoFAApi(conf, namespace)
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
    return new PaymentApi(conf, namespace)
  }

  static eligibillitiesApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new EligibilitiesApi(conf, namespace)
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
    return new DataDeletionApi(conf, namespace)
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
    return new EntitlementApi(conf, namespace)
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
    return new OrderApi(conf, namespace)
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

  static iapApi(config: SDKRequestConfig, namespace: string, overrides?: { config?: SDKRequestConfig; cache?: boolean }) {
    const conf = ApiFactory.mergedConfigs(config, overrides)
    return new IAPApi(conf, namespace, overrides?.cache)
  }
}
