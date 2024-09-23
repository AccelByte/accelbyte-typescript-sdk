/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AchievementPlatformAdminApi } from './generated-admin/AchievementPlatformAdminApi.js'
import { AnonymizationAdminApi } from './generated-admin/AnonymizationAdminApi.js'
import { CampaignAdminApi } from './generated-admin/CampaignAdminApi.js'
import { CatalogChangesAdminApi } from './generated-admin/CatalogChangesAdminApi.js'
import { CategoryAdminApi } from './generated-admin/CategoryAdminApi.js'
import { ClawbackAdminApi } from './generated-admin/ClawbackAdminApi.js'
import { CurrencyAdminApi } from './generated-admin/CurrencyAdminApi.js'
import { DlcAdminApi } from './generated-admin/DlcAdminApi.js'
import { EntitlementAdminApi } from './generated-admin/EntitlementAdminApi.js'
import { FulfillmentAdminApi } from './generated-admin/FulfillmentAdminApi.js'
import { FulfillmentScriptAdminApi } from './generated-admin/FulfillmentScriptAdminApi.js'
import { IapAdminApi } from './generated-admin/IapAdminApi.js'
import { IapNotificationAdminApi } from './generated-admin/IapNotificationAdminApi.js'
import { IapSubscriptionAdminApi } from './generated-admin/IapSubscriptionAdminApi.js'
import { InvoiceAdminApi } from './generated-admin/InvoiceAdminApi.js'
import { ItemAdminApi } from './generated-admin/ItemAdminApi.js'
import { KeyGroupAdminApi } from './generated-admin/KeyGroupAdminApi.js'
import { OrderAdminApi } from './generated-admin/OrderAdminApi.js'
import { OrderDedicatedAdminApi } from './generated-admin/OrderDedicatedAdminApi.js'
import { PaymentAdminApi } from './generated-admin/PaymentAdminApi.js'
import { PaymentCallbackConfigAdminApi } from './generated-admin/PaymentCallbackConfigAdminApi.js'
import { PaymentConfigAdminApi } from './generated-admin/PaymentConfigAdminApi.js'
import { PaymentDedicatedAdminApi } from './generated-admin/PaymentDedicatedAdminApi.js'
import { PlatformAccountClosureAdminApi } from './generated-admin/PlatformAccountClosureAdminApi.js'
import { PlatformAdminApi } from './generated-admin/PlatformAdminApi.js'
import { RevocationAdminApi } from './generated-admin/RevocationAdminApi.js'
import { RewardAdminApi } from './generated-admin/RewardAdminApi.js'
import { SectionAdminApi } from './generated-admin/SectionAdminApi.js'
import { ServicePluginConfigAdminApi } from './generated-admin/ServicePluginConfigAdminApi.js'
import { SessionPlatformAdminApi } from './generated-admin/SessionPlatformAdminApi.js'
import { StoreAdminApi } from './generated-admin/StoreAdminApi.js'
import { SubscriptionAdminApi } from './generated-admin/SubscriptionAdminApi.js'
import { TicketAdminApi } from './generated-admin/TicketAdminApi.js'
import { TradeActionAdminApi } from './generated-admin/TradeActionAdminApi.js'
import { ViewAdminApi } from './generated-admin/ViewAdminApi.js'
import { WalletAdminApi } from './generated-admin/WalletAdminApi.js'
import { CategoryApi } from './generated-public/CategoryApi.js'
import { CurrencyApi } from './generated-public/CurrencyApi.js'
import { DlcApi } from './generated-public/DlcApi.js'
import { EntitlementApi } from './generated-public/EntitlementApi.js'
import { FulfillmentApi } from './generated-public/FulfillmentApi.js'
import { IapApi } from './generated-public/IapApi.js'
import { IapSubscriptionApi } from './generated-public/IapSubscriptionApi.js'
import { ItemApi } from './generated-public/ItemApi.js'
import { OrderApi } from './generated-public/OrderApi.js'
import { PaymentAccountApi } from './generated-public/PaymentAccountApi.js'
import { PaymentStationApi } from './generated-public/PaymentStationApi.js'
import { RewardApi } from './generated-public/RewardApi.js'
import { SectionApi } from './generated-public/SectionApi.js'
import { StoreApi } from './generated-public/StoreApi.js'
import { SubscriptionApi } from './generated-public/SubscriptionApi.js'
import { ViewApi } from './generated-public/ViewApi.js'
import { WalletApi } from './generated-public/WalletApi.js'

console.log(`${name}@${version}`)

const apis = {
  OrderDedicatedAdminApi,
  ItemAdminApi,
  PaymentDedicatedAdminApi,
  PaymentConfigAdminApi,
  FulfillmentScriptAdminApi,
  ViewAdminApi,
  OrderAdminApi,
  StoreAdminApi,
  RewardAdminApi,
  WalletAdminApi,
  SectionAdminApi,
  CampaignAdminApi,
  KeyGroupAdminApi,
  CategoryAdminApi,
  CurrencyAdminApi,
  EntitlementAdminApi,
  TradeActionAdminApi,
  SubscriptionAdminApi,
  IapAdminApi,
  PaymentAdminApi,
  DlcAdminApi,
  InvoiceAdminApi,
  FulfillmentAdminApi,
  IapNotificationAdminApi,
  IapSubscriptionAdminApi,
  RevocationAdminApi,
  TicketAdminApi,
  ServicePluginConfigAdminApi,
  ClawbackAdminApi,
  PaymentCallbackConfigAdminApi,
  SessionPlatformAdminApi,
  AchievementPlatformAdminApi,
  AnonymizationAdminApi,
  PlatformAccountClosureAdminApi,
  CatalogChangesAdminApi,
  PlatformAdminApi,
  DlcApi,
  StoreApi,
  CategoryApi,
  CurrencyApi,
  ItemApi,
  PaymentStationApi,
  RewardApi,
  IapApi,
  ViewApi,
  OrderApi,
  SectionApi,
  EntitlementApi,
  SubscriptionApi,
  FulfillmentApi,
  PaymentAccountApi,
  WalletApi,
  IapSubscriptionApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Platform = apis
