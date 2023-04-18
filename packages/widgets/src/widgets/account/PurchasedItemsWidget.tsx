/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import '@od-account/pages/AccountPage.module.scss'
import React from 'react'

import PurchasedItemsPage from '@od-account/pages/PurchasedItems/PurchasedItemsPage'

export class PurchasedItemsWidget extends React.Component {
  render() {
    return (
      <div className="purchasedItemsWidget">
        <PurchasedItemsPage />
      </div>
    )
  }
}
