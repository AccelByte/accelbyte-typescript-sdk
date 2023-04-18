/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { UrlUtils } from '@od-shared/utils/UrlUtils'
import React from 'react'
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom'

import OrderHistoryPage from '@od-account/pages/OrderHistory/OrderHistoryPage'
import OrderHistoryDetailPage from '@od-account/pages/OrderHistory/OrderHistoryDetailPage'

export class OrderHistoryWidget extends React.Component<RouteComponentProps> {
  render() {
    return (
      <Switch>
        <Route
          exact
          path={this.props.match.path}
          render={routeComponentProps => {
            const page = Number(UrlUtils.silentSearchParamsBuilder(routeComponentProps.location.search).get('page'))
            const hasValidPage = !Number.isNaN(page) && page >= 1
            if (!hasValidPage) {
              return <Redirect to={`${this.props.match.path}?page=1`} />
            }
            return <OrderHistoryPage page={page} />
          }}
        />
        <Route
          path={`${this.props.match.path}/:orderNo`}
          render={routeComponentProps => <OrderHistoryDetailPage orderNo={routeComponentProps.match.params.orderNo} />}
        />
      </Switch>
    )
  }
}
