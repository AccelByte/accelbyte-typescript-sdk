/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { PrivateRoute } from '@od-components/utils/PrivateRoute'
import { Ctx } from '@od-shared/Ctx'
import { AccPath } from '@od-shared/routes/AccPath'
import { LoginPath } from '@od-shared/routes/LoginPath'
import { RCP } from '@od-shared/routes/PageRoute'
import { IamHelper } from '@accelbyte/sdk-iam'
import React from 'react'
import { Route } from 'react-router-dom'

import AccountHistoryPage from '@od-account/pages/AccountHistory/AccountHistoryPage'
import AccountPage from '@od-account/pages/AccountPage'
import InvitationURLGenerator from '@od-account/pages/Auth/InvitationURLGenerator'
import LoginURLGenerator from '@od-account/pages/Auth/LoginURLGenerator'
import RegisterURLGenerator from '@od-account/pages/Auth/RegisterURLGenerator'
import ChangeEmailPage from '@od-account/pages/ChangeEmail/ChangeEmailPage'
import UpgradeAccountPageContainer from '@od-account/pages/UpgradeAccount/UpgradeAccountPageContainer'
import LogoutPage from '@od-account/pages/LogoutPage'

export function AccountRoutesWidget() {
  const appState = Ctx.getAppState()

  return [
    <Route key="LoginPageRoute" exact path={LoginPath.Login.link} render={() => <LoginURLGenerator />} />,

    <Route key="LogoutPageRoute" exact path={LoginPath.Logout.link} render={() => <LogoutPage />} />,

    <Route key="RegisterPageRoute" exact path={LoginPath.Register.link} render={() => <RegisterURLGenerator />} />,

    <Route
      key="InvitationPageRoute"
      exact
      path={LoginPath.Invitation.link}
      render={(props: RCP<typeof LoginPath.Invitation>) => <InvitationURLGenerator invitationId={props.match.params.invitationId} />}
    />,

    <PrivateRoute key="ChangeEmailPageRoute" exact path={AccPath.ChangeEmail.link} render={() => <ChangeEmailPage />} />,

    <PrivateRoute key="AccountHistoryPageRoute" path={AccPath.AccountHistory.link} render={() => <AccountHistoryPage />} />,

    <PrivateRoute key="AccountPageRoute" path={AccPath.Account.link} render={() => <AccountPage />} />,

    IamHelper.currentUserIsHeadlessAccount(appState.getUser()) && (
      <Route exact path={AccPath.UpgradeAccount.link} render={() => <UpgradeAccountPageContainer />} />
    )
  ]
}
