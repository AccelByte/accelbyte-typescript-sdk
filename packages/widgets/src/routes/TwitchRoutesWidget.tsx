/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { TwitchPath } from '@od-shared/routes/TwitchPath'
import { TwitchDropLandingPageContainer } from '@od-twitch/TwitchDropLandingPageContainer'
import { TwitchDropPageContainer } from '@od-twitch/TwitchDropPageContainer'
import { Ctx, FeatureFlags } from '@od-shared/index'

export function TwitchRoutesWidget() {
  return [
    <Route
      key="twitchDropLandingPage"
      exact
      path={TwitchPath.twitchDropLandingPage.link}
      render={() => (Ctx.hasFeature(FeatureFlags.isTwitchDropEnabled) ? <TwitchDropLandingPageContainer /> : <Redirect to="/error/404" />)}
    />,
    <Route
      key="TwitchDropPage"
      exact
      path={TwitchPath.twitchDropPage.link}
      render={() => (Ctx.hasFeature(FeatureFlags.isTwitchDropEnabled) ? <TwitchDropPageContainer /> : <Redirect to="/error/404" />)}
    />
  ]
}
