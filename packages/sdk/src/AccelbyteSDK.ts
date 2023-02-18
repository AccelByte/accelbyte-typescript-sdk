/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
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
import { TwoFA } from '@accelbyte/sdk/api/iam/TwoFA'
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
import { LogLevel } from '@accelbyte/sdk/constants/BuildInfoApp'
import { Method } from 'axios'

export type Overrides = { config?: SDKRequestConfig; cache?: boolean }

export interface AccelbyteSDK {
  IAM: {
    UserAuthorization(overrides?: Overrides): UserAuthorizationApi
    User(overrides?: Overrides): UserApi
    OAuth(overrides?: Overrides): OAuthApi
    InputValidation(overrides?: Overrides): InputValidationsApi
    ThirdPartyCredential(overrides?: Overrides): ThirdPartyCredentialApi
    TwoFA(overrides?: Overrides): TwoFA
  }
  BuildInfo: {
    Downloader(overrides?: Overrides): DownloaderApi
    DLC(overrides?: Overrides): DlcApi
    Caching(overrides?: Overrides): CachingApi
  }
  Basic: {
    Misc(overrides?: Overrides): MiscApi
    UserProfile(overrides?: Overrides): UserProfileApi
    FileUpload(overrides?: Overrides): FileUploadApi
    Namespace(overrides?: Overrides): NamespaceApi
  }
  Platform: {
    Currency(overrides?: Overrides): CurrencyApi
    Entitlement(overrides?: Overrides): EntitlementApi
    Fulfillment(overrides?: Overrides): FulfillmentApi
    Item(overrides?: Overrides): ItemApi
    Order(overrides?: Overrides): OrderApi
    Payment(overrides?: Overrides): PaymentApi
    Subscription(overrides?: Overrides): SubscriptionApi
    Wallet(overrides?: Overrides): WalletApi
  }
  Legal: {
    Eligibilities(overrides?: Overrides): EligibilitiesApi
    Policies(overrides?: Overrides): PoliciesApi
    Agreement(overrides?: Overrides): AgreementApi
    LocalizedPolicyVersions(overrides?: Overrides): LocalizedPolicyVersionsApi
  }
  GDPR: {
    DataDeletion(overrides?: Overrides): DataDeletionApi
    DataRetrieval(overrides?: Overrides): DataRetrievalApi
  }
  Event: {
    Event(overrides?: Overrides): EventApi
  }
  AccelbyteConfig: {
    PublicTemplate<ConfigKeysEnum extends string>(overrides?: Overrides): PublicTemplateApi<ConfigKeysEnum>
  }

  refreshTokens(newAccessToken: string | undefined | null, newRefreshToken?: string | undefined | null)
}

export interface SDKOptions {
  clientId: string
  redirectURI: string
  baseURL: string
  namespace: string

  // Optional args
  cache?: boolean
  loglevel?: keyof typeof LogLevel
}

export interface SDKEvents {
  onSessionExpired?: () => void
  onGetUserSession?: (accessToken: string, refreshToken: string) => void
  onUserEligibilityChange?: () => void
  onError?: (error: SDKError) => void
}

// This is high level strict types taken from the AxiosRequestConfig implementation
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
  signal?: AbortSignal
  // `withCredentials` indicates whether or not cross-site Access-Control requests should be made using credentials
  // withCredentials:true will automatically send the cookie to the client-side
  withCredentials?: boolean // default true
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
