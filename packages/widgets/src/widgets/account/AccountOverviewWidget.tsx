/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'

import AccountOverviewPage from '@od-account/pages/Overview/AccountOverviewPage'

export class AccountOverviewWidget extends React.Component {
  render() {
    return (
      <div className="accountOverviewWidget">
        <AccountOverviewPage />
      </div>
    )
  }
}
