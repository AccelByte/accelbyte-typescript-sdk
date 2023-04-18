/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import './StoreWidget.scss'

import StorePage from '@od-ecommerce/pages/Store/StorePage'

export class StoreWidget extends React.Component {
  render() {
    return (
      <div className="storeWidget">
        <StorePage />
      </div>
    )
  }
}
