/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import '@od-account/pages/AccountPage.module.scss'
import React from 'react'
import { Route, RouteComponentProps, Switch } from 'react-router-dom'

import ProfilePage from '@od-account/pages/Profile/ProfilePage'
import AccountHistoryPage from '@od-account/pages/AccountHistory/AccountHistoryPage'

export class ProfileWidget extends React.Component<RouteComponentProps> {
  render() {
    return (
      <Switch>
        <Route exact path={this.props.match.path} render={() => <ProfilePage />} />
        <Route path={`${this.props.match.path}/account-history`} render={() => <AccountHistoryPage />} />
      </Switch>
    )
  }
}
