/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export * from './SdkWidget'

export * from '@od-components/components/LoadingPage'
export * from '@od-components/components/Icons/LockIcon'
export * from '@od-components/components/Icons/LogoutIcon'
export * from '@od-components/components/Icons/ShopBagIcon'
export * from '@od-components/components/Icons/UserIcon'
export * from '@od-components/components/Icons/VoucherIcon'

// Account widgets.
export * from './widgets/account/ChangeEmail/ChangeEmailWidget'
export * from './widgets/account/Profile/ProfileWidget'
export * from './widgets/account/AccountPageLayoutWidget'
export * from './widgets/account/AccountHistory/AccountHistoryPageLayoutWidget'
export * from './widgets/account/AccountHistory/AccountHistoryPageWidget'
export * from './widgets/account/AccountOverview/AccountOverviewWidget'
export * from './widgets/account/ChangePassword/ChangePasswordWidget'
export * from './widgets/account/LinkedAccount/LinkedAccountWidget'
export * from './widgets/account/LinkPlatformAccount/LinkPlatformAccountWidget'
export * from './widgets/account/VerifyUser/VerifyUserWidget'
export * from './widgets/account/LinkAccountWithOneTimeCode/LinkAccountWithOneTimeCodeWidget'
export * from './widgets/account/PurchasedItems/PurchasedGamesWidget'
export * from './widgets/account/PurchasedItems/PurchasedKeysWidget'
export * from './widgets/account/PurchasedItems/PurchasedOptionboxesWidget'
export * from './widgets/account/PurchasedItems/PurchasedItemsLayoutWidget'
export * from './widgets/account/PurchasedItems/PurchasedItemsWidget'
export * from './widgets/account/OrderHistory/OrderHistoryWidget'
export * from './widgets/account/OrderHistory/OrderHistoryDetailWidget'
export * from './widgets/account/RedeemCode/RedeemCodeWidget'
export * from './widgets/account/AccountDeletion/AccountDeletionPage'
export * from './widgets/account/AccountDeletion/AccountDeletionSuccessPage'
export * from './widgets/account/LegalAgreements/LegalAgreementsWidget'
export * from './widgets/account/PersonalData/PersonalDataWidget'
export * from './widgets/account/PaymentMethods/PaymentMethodsWidget'

export * from './widgets/login/LoginWidget'
export * from './widgets/header/HeaderWidget'
export * from './widgets/footer/FooterWidget'
export * from './widgets/home/HomePageWidget'
export * from './widgets/interceptors/AuthCodeExchangerWidget'
export * from './widgets/interceptors/AccountInterceptorsWidget'

export * from './packages/od-account/pages/Auth/InvitationURLGenerator'

// Ecommerce widgets.
// TODO: refactor these so that we always import the widgets from `/widgets` folder.
// Also, `/widgets` folder shouldn't contain the `isPreviewMode`.
export { StoreWidget } from './widgets/store/StoreWidget'
export { StoreEntry } from './widgets/store/StoreEntry/StoreEntry'
export { MultipleGameStore } from './widgets/store/StoreEntry/MultipleGameStore'

export { SingleGameStore } from './widgets/store/StoreEntry/SingleGameStore'
export { SingleGameStoreWrapper } from './widgets/store/StoreEntry/SingleGameStoreWrapper'
export type { SingleGameStoreWrapperChildrenProps } from './widgets/store/StoreEntry/SingleGameStoreWrapper'

export { AppStoreDetail, AppStoreDetailError } from './widgets/store/AppStoreDetail/AppStoreDetail'
export { BundleStoreDetail } from './widgets/store/BundleStoreDetail/BundleStoreDetail'
export { CodeStoreDetail } from './widgets/store/CodeStoreDetail/CodeStoreDetail'
export { DlcStoreDetail } from './widgets/store/DlcStoreDetail/DlcStoreDetail'
export { IngameItemStoreDetail } from './widgets/store/IngameItemStoreDetail/IngameItemStoreDetail'
export { OptionboxStoreDetail } from './widgets/store/OptionboxStoreDetail/OptionboxStoreDetail'

export { AppStore, SingleGameAppStore } from './packages/od-ecommerce/components/AppStore/AppStore'
export { CodeStore } from './packages/od-ecommerce/components/CodeStore/CodeStore'
export { BundleStore, SingleGameBundleStore } from './packages/od-ecommerce/components/BundleStore/BundleStore'
export { SingleInGameItemsStore } from './packages/od-ecommerce/components/InGameItems/InGameItemsStore'
export { OptionboxStore, SingleGameOptionboxStore } from './packages/od-ecommerce/components/OptionboxStore/OptionboxStore'

// Payment widgets.
export * from './widgets/payment/PaymentWidget'

// Twitch Drops widgets
export { TwitchDropLandingWidget } from './widgets/twitch-drop/TwitchDropLandingWidget'
export { TwitchDropWidget } from './widgets/twitch-drop/TwitchDropWidget'

// Error Page
export * from './packages/od-player-portal/pages/ErrorPage/Error404Page'

// Utils.
export { RouteUtils } from './utils/RouteUtils'
export type { AllWidgetRoutesWithPathMaker, SimplifiedWidgetRoutes } from './utils/RouteUtils'
