/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import AccountPageLayout from '@od-account/components/AccountPageLayout'
import { accountWildCardRedirect } from '@od-account/utils/AccountUtils'
import { UIEvent } from '@od-shared/app-events/UIEvent'
import { AccPath } from '@od-shared/routes/AccPath'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import bgCommon from '@od-assets/images/bg-common.svg'
import React from 'react'
import { Redirect, Route, RouteComponentProps, Switch, withRouter } from 'react-router-dom'
import { accountPageNav, menuVisibility } from './AccountPageNav'

import AccountDeletionPage from './AccountDeletion/AccountDeletionPage'
import AccountHistoryPage from './AccountHistory/AccountHistoryPage'
import ChangePasswordPage from './ChangePassword/ChangePasswordPage'
import LinkedAccountsPage from './LinkedAccountsPage/LinkedAccountsPage'
import NotificationPreferencesPage from './NotificationPreferencesPage/NotificationPreferencesPage'
import OrderHistoryDetailPage from './OrderHistory/OrderHistoryDetailPage'
import OrderHistoryPage from './OrderHistory/OrderHistoryPage'
import AccountOverviewPage from './Overview/AccountOverviewPage'
import PaymentMethodsPage from './PaymentMethodsPage/PaymentMethodsPage'
import PersonalDataPage from './PersonalDataPage/PersonalDataPage'
import PrivacyRecordsPage from './PrivacyRecordsPage/PrivacyRecordsPage'
import ProfilePage from './Profile/ProfilePage'
import PurchasedItemsPage from './PurchasedItems/PurchasedItemsPage'
import RedeemCodePage from './RedeemCode/RedeemCodePage'

// TODO CW-1184
// const SubscriptionDetailPage = '../_legacy/Subscription/SubscriptionDetailPage'
// const SubscriptionPage = '../_legacy/Subscription/SubscriptionPage'

class AccountPage extends React.Component<RouteComponentProps> {
  constructor(props: RouteComponentProps) {
    super(props)
  }

  async componentDidMount() {
    UIEvent.updateBackground(`url(${bgCommon})`)
  }

  componentWillUnmount(): void {
    UIEvent.updateBackground(null)
  }

  render() {
    const {
      accountOverview,
      profile,
      changePassword,
      purchasedItems,
      orderHistory,
      paymentMethods,
      redeemCode,
      notification,
      privacyRecords,
      personalData,
      deleteAccount,
      linkedAccounts
    } = menuVisibility

    return (
      <AccountPageLayout accountPageNav={accountPageNav} backgroundImageUrl={bgCommon} {...this.props}>
        <Switch>
          {accountOverview() && <Route exact path={AccPath.Overview.link} render={() => <AccountOverviewPage />} />}
          {purchasedItems() && <Route path={AccPath.PurchasedItems.link} render={() => <PurchasedItemsPage />} />}
          {paymentMethods() && <Route exact path={AccPath.PaymentMethods.link} render={() => <PaymentMethodsPage />} />}
          {changePassword() && <Route exact path={AccPath.ChangePassword.link} render={() => <ChangePasswordPage />} />}
          {redeemCode() && <Route exact path={AccPath.RedeemCode.link} render={() => <RedeemCodePage />} />}
          {orderHistory() && (
            <Route
              key="OrderHistoryPage"
              exact
              path={AccPath.OrderHistory.link}
              render={routeComponentProps => {
                const page = Number(UrlUtils.silentSearchParamsBuilder(routeComponentProps.location.search).get('page'))
                const hasValidPage = !Number.isNaN(page) && page >= 1
                if (!hasValidPage) {
                  return <Redirect to={AccPath.OrderHistory.withSearchParams({ page: 1 })} />
                }
                return hasValidPage && <OrderHistoryPage page={page} />
              }}
            />
          )}
          {orderHistory() && (
            <Route
              key="OrderHistoryDetailPage"
              path={AccPath.OrderHistoryDetail.link}
              render={routeComponentProps => <OrderHistoryDetailPage orderNo={routeComponentProps.match.params.orderNo} />}
            />
          )}
          {profile() && <Route exact path={AccPath.Profile.link} render={() => <ProfilePage />} />}
          {profile() && <Route path={AccPath.ProfileHistory.link} render={() => <AccountHistoryPage />} />}
          {linkedAccounts() && <Route exact path={AccPath.LinkedAccounts.link} render={() => <LinkedAccountsPage />} />}
          {personalData() && (
            <Route
              exact
              path={AccPath.PersonalData.link}
              render={routeComponentProps => {
                const page = Number(UrlUtils.silentSearchParamsBuilder(routeComponentProps.location.search).get('page'))
                const hasValidPage = !Number.isNaN(page) && page >= 1
                if (!hasValidPage) {
                  return <Redirect to={AccPath.PersonalData.withSearchParams({ page: 1 })} />
                }
                return hasValidPage && <PersonalDataPage page={page} />
              }}
            />
          )}
          {deleteAccount() && <Route exact path={AccPath.AccountDeletion.link} render={() => <AccountDeletionPage />} />}
          {notification() && <Route exact path={AccPath.NotificationPreferences.link} render={() => <NotificationPreferencesPage />} />}
          {privacyRecords() && <Route exact path={AccPath.PrivacyRecords.link} render={() => <PrivacyRecordsPage />} />}

          {/* TODO CW-1184
                {subscription() && <Route exact path={Path.Subscription.link} render={() => <SubscriptionPage />} />}
                {subscription() && (
                  <Route
                    key="SubscriptionDetailPage"
                    path={Path.SubscriptionDetail.link}
                    render={routeComponentProps => (
                      <SubscriptionDetailPage subscriptionId={routeComponentProps.match.params.subscriptionId} />
                    )}
                  />
                )}
                */}

          <Redirect from="/**" to={accountWildCardRedirect()} />
        </Switch>
      </AccountPageLayout>
    )
  }
}

export default withRouter(AccountPage)
