/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { LegalHelper } from '@accelbyte/sdk-legal'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useLegal } from '~/hooks/legal/useLegal'
import { useGdpr } from '~/hooks/gdpr/useGdpr'
import { ErrorHelper } from '@od-shared/utils/ErrorHelper'

import { TwoFactorAuthentication } from '@od-account/pages/2FA/TwoFactorAuthentication'
import { AccountDeletionNoticePage } from '@od-account/pages/AccountDeletion/AccountDeletionNoticePage'
import { EmailVerificationPage } from '@od-account/pages/EmailVerification/EmailVerificationPage'
import { UpgradeHeadlessAccountPage } from '@od-account/pages/UpgradeHeadlessAccount/UpgradeHeadlessAccountPage'
import { PromptLegalPage } from '@od-legal/pages/PromptLegalPage'
import { ErrorFetchUserPage } from '~/packages/od-player-portal/pages/ErrorPage/ErrorFetchUserPage'
import { NetworkError } from '@od-components/components/ErrorPage/NetworkError'
import UserInitializationErrorPage from '~/packages/od-player-portal/pages/ErrorPage/UserInitializationErrorPage'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { useHistory } from '~/hooks/routes/useHistory'
import { IamHelper } from '@accelbyte/sdk-iam'

export const AccountInterceptorsWidget = ({ children }) => {
  const { state: userState } = useUserInfo()
  const { state: legalState } = useLegal()
  const { state: gdprState } = useGdpr()
  const { state: routes } = useRoutes()
  const {
    state: { location }
  } = useHistory()

  if (userState.userError) {
    if (ErrorHelper.isAxiosError(userState.userError)) {
      const status = userState.userError.response?.status || -1

      if (status >= 500) {
        return <ErrorFetchUserPage />
      }

      if (!userState.userError.response) {
        return <NetworkError />
      }

      if (status !== 401) {
        return <UserInitializationErrorPage />
      }
    }
  }

  // Exclude link account one time code page,
  // so it will show upgrade headless account page after input email address
  if (routes.linkAccountOneTimeCode.link === location.pathname) {
    return children
  }

  if (IamHelper.currentUserIsHeadlessAccount(userState.user)) {
    return <UpgradeHeadlessAccountPage />
  }

  if (!userState.user && userState.mfaData?.mfaToken) {
    return <TwoFactorAuthentication />
  }

  if (LegalHelper.currentUserIsBlockedByLegal(legalState.eligibilities)) {
    return <PromptLegalPage />
  }

  if (userState.user && gdprState.gdprDeletionStatus?.DeletionStatus) {
    return <AccountDeletionNoticePage />
  }

  if (IamHelper.currentUserNeedsVerification(userState.user)) {
    return <EmailVerificationPage />
  }

  return children
}
