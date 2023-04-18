/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
// import { UIEvent } from '@od-shared/app-events/UIEvent'
import { GlobalPath } from '@od-shared/routes/GlobalPath'
// import bgCommon from '@od-assets/images/bg-common.svg'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './AccountDeletionSuccesPage.scss'
import { useAppState } from '~/hooks/useAppState'
import { useGdpr } from '~/hooks/gdpr/useGdpr'
import { useHistory } from '~/hooks/routes/useHistory'
import { useRoutes } from '~/hooks/routes/useRoutes'

const DAYS_LEFT = 28

export const AccountDeletionSuccessPage = () => {
  const appState = useAppState()
  const {
    state: { isAccountDeletionSuccessPageLocked },
    mutations: { updateAccountDeletionSuccessPageLocked, ignoreDeletionMark }
  } = useGdpr()
  const { state: historyState } = useHistory()
  const { state: routesState } = useRoutes()

  useEffect(() => {
    if (!isAccountDeletionSuccessPageLocked) {
      return historyState.replace(routesState.home.link)
    }
  }, [isAccountDeletionSuccessPageLocked])

  // useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => {
  //     UIEvent.updateBackground(null)
  //   }
  // }, [])

  const onGoToHomeLinkClick = async () => {
    ignoreDeletionMark()
    updateAccountDeletionSuccessPageLocked(false)
    await appState.logout()
  }

  return (
    <div className="deletionSuccessContainer">
      <div>
        <p className="title">
          <Trans i18nKey="RequestAccountDeletionSuccessPage.title">Account Deletion</Trans>
        </p>
        <div className="content">
          <Trans i18nKey="RequestAccountDeletionSuccessPage.content">
            <p className="top">
              Your account is scheduled for deletion in {{ daysLeft: DAYS_LEFT }} days. You will have the option to cancel the deletion
              process by logging in to your account within the next {{ daysLeft: DAYS_LEFT }} days.
            </p>
            <p className="bottom">We hope you come back soon!</p>
          </Trans>
        </div>
        <Link onClick={onGoToHomeLinkClick} to={GlobalPath.Home.link} className="btn big btn-primary btnGoToHome">
          <Trans i18nKey="RequestAccountDeletionSuccessPage.button.goToHomepage">Go To Homepage</Trans>
        </Link>
      </div>
    </div>
  )
}
