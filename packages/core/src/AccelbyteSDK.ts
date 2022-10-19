/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
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
import { LogLevel } from '@od-web-sdk/constants/BuildInfoApp'
import { Method } from 'axios'

export type Overrides = { config?: SDKRequestConfig; cache?: boolean }

export interface AccelbyteSDK {
  updateOption(option: Partial<SDKOptions>): void
  updateConfig(config?: SDKRequestConfig): void

  iam: {
    userAuthorization(overrides?: Overrides): UserAuthorization
    userApi(overrides?: Overrides): UserApi
    oauth(overrides?: Overrides): OAuthApi
    inputValidation(overrides?: Overrides): InputValidationsApi
    thirdPartyCredential(overrides?: Overrides): ThirdPartyCredentialApi
    twoFA(overrides?: Overrides): TwoFA
  }
  buildInfo: {
    downloader(overrides?: Overrides): DownloaderApi
    dlc(overrides?: Overrides): DlcApi
    caching(overrides?: Overrides): CachingApi
  }
  basic: {
    misc(overrides?: Overrides): MiscApi
    userProfile(overrides?: Overrides): UserProfileApi
    fileUpload(overrides?: Overrides): FileUploadApi
    namespace(overrides?: Overrides): NamespaceApi
  }
  platform: {
    currency(overrides?: Overrides): CurrencyApi
    entitlement(overrides?: Overrides): EntitlementApi
    fulfillment(overrides?: Overrides): FulfillmentApi
    item(overrides?: Overrides): ItemApi
    order(overrides?: Overrides): OrderApi
    payment(overrides?: Overrides): PaymentApi
    subscription(overrides?: Overrides): SubscriptionApi
    wallet(overrides?: Overrides): WalletApi
  }
  legal: {
    eligibilities(overrides?: Overrides): EligibilitiesApi
    policies(overrides?: Overrides): PoliciesApi
    agreement(overrides?: Overrides): AgreementApi
    localizedPolicyVersions(overrides?: Overrides): LocalizedPolicyVersionsApi
  }
  gdpr: {
    dataDeletion(overrides?: Overrides): DataDeletionApi
    dataRetrieval(overrides?: Overrides): DataRetrievalApi
  }
  event: {
    event(overrides?: Overrides): EventApi
  }
  odinConfig: {
    publicTemplate<ConfigKeysEnum extends string>(overrides?: Overrides): PublicTemplateApi<ConfigKeysEnum>
  }
}

export interface SDKOptions {
  clientId: string
  redirectURI: string
  baseURL: string
  namespace: string
  cache?: boolean
  loglevel?: keyof typeof LogLevel
  environment?: string
  accessToken?: string
  refreshToken?: string
  isDesktopApp?: boolean
}

export interface SDKEvents {
  onSessionExpired?: () => void
  onGetUserSession?: (accessToken: string, refreshToken: string) => void
  onUserEligibilityChange?: () => void
  onError?: (error: SDKError) => void
}

// This is high level strict types taken from actual AxiosRequestConfig implementation
export interface SDKRequestConfig<D = any> {
  // AxiosRequestConfig
  url?: string
  method?: Method | string
  baseURL?: string
  headers?: Record<string, string | number | boolean>
  params?: any
  paramsSerializer?: (params: any) => string
  data?: D
  timeout?: number
  timeoutErrorMessage?: string
  withCredentials?: boolean
}

// The actual implementation is AxiosError
class SDKError extends Error {
  // AxiosError
  // message?: string
  // config: AxiosRequestConfig<D>;
  code?: string
  request?: any
  response?: any // AxiosResponse<T, D>
  isAxiosError: boolean | undefined
  status?: string
}
