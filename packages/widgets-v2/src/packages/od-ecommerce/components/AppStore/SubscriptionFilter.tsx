/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'
import { NavLink } from 'react-router-dom'
import { useSubscription } from '~/hooks/platform/useSubscription'

export function SubscriptionFilter() {
  const {
    state: { subscriptionItems }
  } = useSubscription()
  if (!subscriptionItems) return null

  const menu = subscriptionItems.map(item => {
    if (!item.sku) return null
    return (
      <NavLink key={item.itemId} className="tab" to="">
        {/* to={EcomPath.GameList.withSearchParams({
          page: 1,
          plan: item.sku
        })}> */}
        {item.title}
      </NavLink>
    )
  })

  menu.unshift(
    // <NavLink key={'all'} className="tab" to={EcomPath.GameList.makePath()}>
    <NavLink key={'all'} className="tab" to="">
      <Trans i18nKey="AppStore.subscriptionFilter.allGames">All Games</Trans>
    </NavLink>
  )

  return <div className="subscriptionFilter tabs">{menu}</div>
}
