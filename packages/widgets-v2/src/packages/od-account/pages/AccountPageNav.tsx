/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { separatorVisibility } from '@od-account/utils/AccountUtils'
import { FeatureFlagsType } from '@od-shared/FeatureFlags'

import classNames from 'classnames'
import React from 'react'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import { AllWidgetRoutesWithPathMaker } from '~/utils/RouteUtils'
import { t } from '@od-components/i18n/index'
import styles from './AccountPage.module.scss'

type CheckIsVisible = (flags: FeatureFlagsType | null) => boolean | null

export interface NavLinkItem {
  type: 'link'
  key: string
  to: string
  label: string
  isVisible?: boolean | null
}

export interface NavLinkSeparator {
  type: 'separator'
  component?: () => JSX.Element
}

interface IMenuVisibility {
  accountOverview: CheckIsVisible
  subscription: CheckIsVisible
  redeemCode: CheckIsVisible
  notification: CheckIsVisible
  profile: CheckIsVisible
  changePassword: CheckIsVisible
  purchasedItems: CheckIsVisible
  orderHistory: CheckIsVisible
  paymentMethods: CheckIsVisible
  privacyRecords: CheckIsVisible
  personalData: CheckIsVisible
  deleteAccount: CheckIsVisible
  linkedAccounts: CheckIsVisible
}

export const menuVisibility: IMenuVisibility = {
  accountOverview: (flags: FeatureFlagsType | null) => Boolean(flags?.isAccountOverviewVisible),
  redeemCode: (flags: FeatureFlagsType | null) => Boolean(flags?.isRedeemCodeVisible),
  profile: (flags: FeatureFlagsType | null) => Boolean(flags?.isMyProfileVisible),
  changePassword: (flags: FeatureFlagsType | null) => Boolean(flags?.isChangePasswordVisible),
  purchasedItems: (flags: FeatureFlagsType | null) => Boolean(flags?.isPurchasedItemsVisible),
  orderHistory: (flags: FeatureFlagsType | null) => Boolean(flags?.isOrderHistoryVisible),
  paymentMethods: (flags: FeatureFlagsType | null) => Boolean(flags?.isPaymentMethodsVisible),
  privacyRecords: (flags: FeatureFlagsType | null) => Boolean(flags?.isLegalAgreementsVisible),
  personalData: (flags: FeatureFlagsType | null) => Boolean(flags?.isPersonalDataVisible),
  deleteAccount: (flags: FeatureFlagsType | null) => Boolean(flags?.isDeleteAccountVisible),
  linkedAccounts: (flags: FeatureFlagsType | null) => Boolean(flags?.isLinkedAccountsVisible),
  notification: (flags: FeatureFlagsType | null) => Boolean(flags?.isNotificationsVisible),
  subscription: (flags: FeatureFlagsType | null) => Boolean(flags?.isSubscriptionsVisible)
}

const ProfileSeparator = () => {
  const { state: discoveryConfigsState } = useDiscoveryConfigs()

  return (
    <div
      key="profileSeparator"
      className={classNames(
        styles.separator,
        separatorVisibility([!!menuVisibility.accountOverview(discoveryConfigsState.flags)], styles.hide)
      )}
    />
  )
}

const PurchaseSeparator = () => {
  const { state: discoveryConfigsState } = useDiscoveryConfigs()

  return (
    <div
      key="purchasedSeparator"
      className={classNames(
        styles.separator,
        separatorVisibility(
          [
            !!menuVisibility.purchasedItems(discoveryConfigsState.flags),
            !!menuVisibility.subscription(discoveryConfigsState.flags),
            !!menuVisibility.orderHistory(discoveryConfigsState.flags),
            !!menuVisibility.paymentMethods(discoveryConfigsState.flags),
            !!menuVisibility.redeemCode(discoveryConfigsState.flags)
          ],
          styles.hide
        )
      )}
    />
  )
}

const NotificationSeparator = () => {
  const { state: discoveryConfigsState } = useDiscoveryConfigs()

  return (
    <div
      key="notificationSeparator"
      className={classNames(
        styles.separator,
        separatorVisibility(
          [
            !!menuVisibility.notification(discoveryConfigsState.flags),
            !!menuVisibility.privacyRecords(discoveryConfigsState.flags),
            !!menuVisibility.personalData(discoveryConfigsState.flags),
            !!menuVisibility.deleteAccount(discoveryConfigsState.flags)
          ],
          styles.hide
        )
      )}
    />
  )
}

export const getAccountPageNav = (
  routes: AllWidgetRoutesWithPathMaker,
  flags: FeatureFlagsType | null
): (NavLinkItem | NavLinkSeparator)[] => [
  {
    type: 'link',
    key: 'overview',
    to: routes.account.overview.link,
    label: t('Navigation.account.overview'),
    isVisible: !!menuVisibility.accountOverview(flags)
  },
  {
    type: 'separator',
    component: ProfileSeparator
  },
  {
    type: 'link',
    key: 'profile',
    to: routes.account.profile.link,
    label: t('Navigation.account.profile'),
    isVisible: !!menuVisibility.profile(flags)
  },
  {
    type: 'link',
    key: 'change-password',
    to: routes.account.changePassword.link,
    label: t('Navigation.account.changePassword'),
    isVisible: !!menuVisibility.changePassword(flags)
  },
  {
    type: 'link',
    key: 'linked-accounts',
    to: routes.account.linkedAccounts.link,
    label: t('Navigation.account.linkedAccounts'),
    isVisible: !!menuVisibility.linkedAccounts(flags)
  },
  {
    type: 'separator',
    component: PurchaseSeparator
  },
  {
    type: 'link',
    key: 'purchased-items',
    to: routes.account.purchasedItems.index.link,
    label: t('Navigation.account.purchasedItems'),
    isVisible: !!menuVisibility.purchasedItems(flags)
  },
  // TODO CW-1184
  // {
  //   type: 'link',
  //   key: 'subscription',
  //   to: '/account/subscription',
  //   label: t('Navigation.account.subscription'),
  //  !! isVisible: menuVisibility.subscription(flags)
  // },
  {
    type: 'link',
    key: 'order-history',
    to: routes.account.orderHistory.index.link,
    label: t('Navigation.account.orderHistory'),
    isVisible: !!menuVisibility.orderHistory(flags)
  },
  {
    type: 'link',
    key: 'payment-methods',
    to: routes.account.paymentMethods.link,
    label: t('Navigation.account.payment-methods'),
    isVisible: !!menuVisibility.paymentMethods(flags)
  },
  {
    type: 'link',
    key: 'redeem-code',
    to: routes.account.redeemCode.link,
    label: t('Navigation.account.redeemCode'),
    isVisible: !!menuVisibility.redeemCode(flags)
  },
  {
    type: 'separator',
    component: NotificationSeparator
  },

  {
    type: 'link',
    key: 'notification',
    to: routes.account.notificationPreferences.link,
    label: t('Navigation.account.notifications'),
    isVisible: !!menuVisibility.notification(flags)
  },
  {
    type: 'link',
    key: 'legal-agreements',
    to: routes.account.legalAgreements.link,
    label: t('Navigation.account.privacyRecords'),
    isVisible: !!menuVisibility.privacyRecords(flags)
  },
  {
    type: 'link',
    key: 'personal-data',
    to: routes.account.personalData.link,
    label: t('Navigation.account.personalData'),
    isVisible: !!menuVisibility.personalData(flags)
  },
  {
    type: 'link',
    key: 'account-deletion',
    to: routes.account.accountDeletion.link,
    label: t('Navigation.account.accountDeletion'),
    isVisible: !!menuVisibility.deleteAccount(flags)
  }
]

// TODO: think of a better way to define the preview so we don't have to duplicate these 2.
const previewSeparator = (key: string) => <div key={key} className={styles.separator} />

export const previewAccountPageNav = (routes: AllWidgetRoutesWithPathMaker): (NavLinkItem | NavLinkSeparator)[] => [
  {
    type: 'link',
    key: 'overview',
    to: routes.account.overview.link,
    label: t('Navigation.account.overview')
  },
  {
    type: 'separator',
    component: () => previewSeparator('profileSeparator')
  },
  {
    type: 'link',
    key: 'profile',
    to: routes.account.profile.link,
    label: t('Navigation.account.profile')
  },
  {
    type: 'link',
    key: 'change-password',
    to: routes.account.changePassword.link,
    label: t('Navigation.account.changePassword')
  },
  {
    type: 'link',
    key: 'linked-accounts',
    to: routes.account.linkedAccounts.link,
    label: t('Navigation.account.linkedAccounts')
  },
  {
    type: 'separator',
    component: () => previewSeparator('purchaseSeparator')
  },
  {
    type: 'link',
    key: 'purchased-items',
    to: routes.account.purchasedItems.index.link,
    label: t('Navigation.account.purchasedItems')
  },
  // TODO CW-1184
  // {
  //   type: 'link',
  //   key: 'subscription',
  //   to: '/account/subscription',
  //   label: t('Navigation.account.subscription',)
  // },
  {
    type: 'link',
    key: 'order-history',
    to: routes.account.orderHistory.index.link,
    label: t('Navigation.account.orderHistory')
  },
  {
    type: 'link',
    key: 'payment-methods',
    to: routes.account.paymentMethods.link,
    label: t('Navigation.account.payment-methods')
  },
  {
    type: 'link',
    key: 'redeem-code',
    to: routes.account.redeemCode.link,
    label: t('Navigation.account.redeemCode')
  },
  {
    type: 'separator',
    component: () => previewSeparator('notificationSeparator')
  },

  {
    type: 'link',
    key: 'notification',
    to: routes.account.notificationPreferences.link,
    label: t('Navigation.account.notifications')
  },
  {
    type: 'link',
    key: 'legal-agreements',
    to: routes.account.legalAgreements.link,
    label: t('Navigation.account.privacyRecords')
  },
  {
    type: 'link',
    key: 'personal-data',
    to: routes.account.personalData.link,
    label: t('Navigation.account.personalData')
  },
  {
    type: 'link',
    key: 'account-deletion',
    to: routes.account.accountDeletion.link,
    label: t('Navigation.account.accountDeletion')
  }
]
