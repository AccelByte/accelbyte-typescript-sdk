/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import PromptLegalPage from '@od-legal/pages/PromptLegalPage'
import { Ctx } from '@od-shared/Ctx'
import { AccPath } from '@od-shared/routes/AccPath'
import { LoginPath } from '@od-shared/routes/LoginPath'
import { FeUtils } from '@od-shared/utils/FeUtils'
import { IamHelper, IamUserAuthorizationClient } from '@accelbyte/sdk-iam'
import { LegalHelper } from '@accelbyte/sdk-legal'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'

import AccountDeletionSuccessPage from '@od-account/pages/AccountDeletion/AccountDeletionSuccessPage'
import AccountDeletionNoticePage from '@od-account/pages/AccountDeletion/AccountDeletionNoticePage'
import EmailVerificationPage from '@od-account/pages/EmailVerification/EmailVerificationPage'
import UpgradeHeadlessAccountPage from '@od-account/pages/UpgradeHeadlessAccount/UpgradeHeadlessAccountPage'

import ErrorFetchUserPage from '../components/ErrorPage/ErrorFetchUserPage'
// Use normal import instead of dynamic import since it cause glitch
// import PromptLegalPage from '@od-legal/pages/PromptLegalPage'
import { TwitchDropPageContainer } from '@od-twitch/TwitchDropPageContainer'
import TwoFactorAuthentication from '@od-account/pages/2FA/TwoFactorAuthentication'
import LinkPlatformAccountPage from '@od-account/pages/LinkPlatformAccount/LinkPlatformAccountPage'
import VerifyUserPage from '@od-account/pages/VerifyUser/VerifyUserPage'
import LinkAccountWithOneTimeCodePage from '@od-account/pages/LinkAccountWithOneTimeCode/LinkAccountWithOneTimeCodePage'
import { TwitchPath } from '@od-shared/routes/TwitchPath'
import { FeatureFlags } from '@od-shared/FeatureFlags'

export const AccountInterceptorsWidget = () => {
  const userCtx = Ctx.getUserManager()
  const legalCtx = Ctx.getLegalManager()
  const gdprCtx = Ctx.getGdprManager()
  const { user, errorFetchingUser, mfaData } = userCtx.state
  const { eligibilities } = legalCtx.state
  const { gdprDeletionStatus } = gdprCtx.state

  const appState = Ctx.getAppState()
  const { appHistory } = appState.state
  const searchParams = FeUtils.getSearchParamsObject(appHistory)
  const errorParams = searchParams.get('error')

  if (errorParams) {
    FeUtils.redirectToErrorPage(appHistory, IamUserAuthorizationClient.deduceLoginError(errorParams))
    return null
  }

  return [
    <Route exact key="LinkPlatformAccountPage" path={AccPath.LinkPlatformAccount.link} render={() => <LinkPlatformAccountPage />} />,
    <Route
      exact
      key="LinkAccountWithOneTimeCodePage"
      path={AccPath.LinkAccountWithOneTimeCode.link}
      render={() => <LinkAccountWithOneTimeCodePage />}
    />,

    <Route exact key="VerifyUserPage" path={LoginPath.VerifyUser.link} render={() => <VerifyUserPage />} />,

    <Route
      exact
      key="AccountDeletionSuccessPage"
      path={AccPath.AccountDeletionSuccess.link}
      render={() => <AccountDeletionSuccessPage />}
    />,

    <Route
      exact
      key="TwitchLink"
      path={AccPath.TwitchLinking.link}
      render={() =>
        Ctx.hasFeature(FeatureFlags.isTwitchDropEnabled) ? <Redirect to={TwitchPath.twitchDropPage.link} /> : <TwitchDropPageContainer />
      }
    />,

    !!errorFetchingUser && <Route key="FetchUserErrorPage" render={() => <ErrorFetchUserPage />} />,

    IamHelper.currentUserIsHeadlessAccount(user) && (
      <Route exact key="UpgradeHeadlessAccountPage" render={() => <UpgradeHeadlessAccountPage />} />
    ),

    !user && mfaData?.mfaToken && <Route exact key="TwoFactorAuthentication" render={() => <TwoFactorAuthentication />} />,

    LegalHelper.currentUserIsBlockedByLegal(eligibilities) && <Route key="PromptLegalPage" render={() => <PromptLegalPage />} />,

    user && gdprDeletionStatus && gdprDeletionStatus.DeletionStatus && (
      <Route exact key="AccountDeletionNoticePage" render={() => <AccountDeletionNoticePage appState={appState} />} />
    ),

    IamHelper.currentUserNeedsVerification(user) && <Route key="EmailVerificationPage" render={() => <EmailVerificationPage />} />
  ]
}
