/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import classNames from 'classnames'
import { LandingPanel } from '../components/core/panels/LandingPanel/LandingPanel'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'

export interface TwitchDropLandingPageProps {
  className?: string
}

export function TwitchDropLandingPage({ className }: TwitchDropLandingPageProps) {
  const { state: history } = useHistory()
  const { state: routes } = useRoutes()

  const onLinkAccount = () => {
    history.push(routes.twitchDrops.claim.link)
  }

  function onReclaim() {
    history.push(routes.twitchDrops.claim.makePath({ query: { step: 'reclaim' } }))
  }

  return (
    <LandingPanel
      onLinkAccount={onLinkAccount}
      onReclaim={onReclaim}
      className={classNames('twitchDropLandingPage twitchDropLayout', className)}
    />
  )
}
