/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { getCurrentLanguage } from '@od-components/i18n/index'
import { PrivateRoute } from '@od-components/utils/PrivateRoute'
import { EcomPath } from '@od-shared/routes/EcomPath'
import { RCP } from '@od-shared/routes/PageRoute'
import React from 'react'
import { Route } from 'react-router-dom'

import OrderPage from '@od-ecommerce/pages/Orders/OrderPage/OrderPage'
import CodeItemDetailPage from '@od-ecommerce/pages/Store/CodeItemDetailPage/CodeItemDetailPage'
import StorePage from '@od-ecommerce/pages/Store/StorePage'
import BundleItemDetailPage from '@od-ecommerce/pages/Store/BundleItemDetail/BundleItemDetailPage'
import OptionboxItemDetailPage from '@od-ecommerce/pages/Store/OptionboxItemDetail/OptionboxItemDetailPage'
import DlcDetailPage from '@od-ecommerce/pages/Store/DlcDetailPage/DlcDetailPage'
import AppDetailPage from '@od-ecommerce/pages/Store/GameDetailPage/AppDetailPage'
import InGameItemDetailPage from '@od-ecommerce/pages/Store/InGameItemDetailPage/InGameItemDetailPage'

// TODO CW-1459
// import RechargePage from '@od-ecommerce/pages/Recharge/RechargePage'
// TODO CW-1184
// import SubscriptionPage from '@od-ecommerce/_on_the_roadmap/Subscription/SubscriptionPage'
// import SubscriptionPaymentPage from '@od-ecommerce/_on_the_roadmap/Subscription/SubscriptionPaymentPage'

/**
 * EcommerceRoutesWidget contains Store page AND Payment page.
 */
export function EcommerceRoutesWidget() {
  return [
    <Route
      key="GameDetailPage"
      exact
      path={EcomPath.GameItem.link}
      render={(routeComponentProps: RCP<typeof EcomPath.GameItem>) => (
        <AppDetailPage itemId={routeComponentProps.match.params.itemId} language={getCurrentLanguage()} />
      )}
    />,

    <Route
      key="DlcDetailItemPage"
      exact
      path={EcomPath.DlcItem.link}
      render={(routeComponentProps: RCP<typeof EcomPath.DlcItem>) => (
        <DlcDetailPage itemId={routeComponentProps.match.params.itemId} language={getCurrentLanguage()} />
      )}
    />,

    <Route
      key="InGameDetailItemPage"
      exact
      path={EcomPath.InGameItem.link}
      render={(routeComponentProps: RCP<typeof EcomPath.InGameItem>) => (
        <InGameItemDetailPage itemId={routeComponentProps.match.params.itemId} language={getCurrentLanguage()} />
      )}
    />,

    <Route
      key="BundleDetailItemPage"
      exact
      path={EcomPath.BundleItem.link}
      render={(routeComponentProps: RCP<typeof EcomPath.BundleItem>) => (
        <BundleItemDetailPage itemId={routeComponentProps.match.params.itemId} language={getCurrentLanguage()} />
      )}
    />,

    <Route
      key="CodeItemDetailPage"
      exact
      path={EcomPath.CodeItem.link}
      render={(routeComponentProps: RCP<typeof EcomPath.CodeItem>) => (
        <CodeItemDetailPage itemId={routeComponentProps.match.params.itemId} language={getCurrentLanguage()} />
      )}
    />,

    <Route
      key="OptionboxDetailPage"
      exact
      path={EcomPath.OptionboxItem.link}
      render={(routeComponentProps: RCP<typeof EcomPath.OptionboxItem>) => (
        <OptionboxItemDetailPage itemId={routeComponentProps.match.params.itemId} language={getCurrentLanguage()} />
      )}
    />,

    <PrivateRoute
      key="OrderDetailPage"
      exact
      path={EcomPath.OrderDetail.link}
      render={props => {
        const routeComponentProps = props as RCP<typeof EcomPath.OrderDetail>
        const referrer = new URLSearchParams(routeComponentProps.location.search).get('referrer')
        return <OrderPage orderNo={routeComponentProps.match.params.orderNo} redirectPath={referrer || undefined} />
      }}
    />,

    // TODO CW-1459
    // Ctx.hasFeature(FeatureFlags.isVirtualCurrencyVisible) ? (
    //   <PrivateRoute key="RechargePage" path={Path.Recharge.link} render={() => <RechargePage />} />
    // ) : null,

    <Route key="StorePage" path={EcomPath.Store.link} render={() => <StorePage />} />
  ]
}

// TODO CW-1184
// Ctx.hasFeature(FeatureFlags.isSubscriptionsVisible) && (
//   <>
//     <Route key="SubscriptionPage" exact path={Path.Subscription.link} render={() => <SubscriptionPage />} />
//     <PrivateRoute
//       key="SubscriptionOrderPage"
//       exact
//       path={Path.SubscriptionOrder.link}
//       render={props => {
//         const routeComponentProps = props as RCP<typeof Path.SubscriptionOrder>
//         return (
//           <SubscriptionPaymentPage subscriptionId={routeComponentProps.match.params.subscriptionId} language={getCurrentLanguage()} />
//         )
//       }}
//     />
//   </>
// )
