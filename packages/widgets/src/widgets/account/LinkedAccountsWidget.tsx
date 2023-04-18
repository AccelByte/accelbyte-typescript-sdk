/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'

import LinkedAccountsPage from '@od-account/pages/LinkedAccountsPage/LinkedAccountsPage'

export class LinkedAccountsWidget extends React.Component {
  render() {
    return (
      <div className="linkedAccountsWidget">
        <LinkedAccountsPage />
      </div>
    )
  }
}
