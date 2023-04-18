/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
// import { UIEvent } from '@od-shared/app-events/UIEvent'
// import bgCommon from '@od-assets/images/bg-common.svg'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import styles from './EmailVerificationPage.module.scss'
import { LogoutConfirmationModal } from './LogoutConfirmationModal'
import { NewAccountVerificationForm } from './NewAccountVerificationForm'
import { UpdatingEmailVerification } from './UpdatingEmailVerification'
import { useAppState } from '~/hooks/useAppState'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { HeaderLogoContainer } from '@od-account/components/HeaderLogoContainer'
import { IamHelper } from '@accelbyte/sdk-iam'

interface State {
  isLogoutAvailable: boolean
  isLogoutConfirmationModalOpen: boolean
  isUpdatingEmail: boolean
}

export const EmailVerificationPage = () => {
  const appState = useAppState()
  const { state: userState } = useUserInfo()
  const [state, setState] = useState<State>({
    isLogoutAvailable: false,
    isLogoutConfirmationModalOpen: false,
    isUpdatingEmail: IamHelper.currentUserIsUpdatingEmail(userState.user)
  })

  // useEffect(() => {
  //   UIEvent.updateBackground(`url(${bgCommon})`)

  //   return () => {
  //     UIEvent.updateBackground(null)
  //   }
  // }, [])

  const setIsLogoutAvailable = (value: boolean) => {
    setState(oldState => ({ ...oldState, isLogoutAvailable: value }))
  }

  const toggleLogoutConfirmationModal = () => {
    setState(oldState => ({ ...oldState, isLogoutConfirmationModalOpen: oldState.isLogoutConfirmationModalOpen }))
  }

  const logout = () => {
    appState.logout()
  }

  return (
    <>
      <div className={styles.emailVerificationPage}>
        <div className={styles.emailVerificationPageContainer}>
          <HeaderLogoContainer />
          <div className={styles.emailVerificationPageForm}>
            {state.isUpdatingEmail && <UpdatingEmailVerification setIsLogoutAvailable={setIsLogoutAvailable} />}
            {!state.isUpdatingEmail && <NewAccountVerificationForm />}
          </div>
          {state.isUpdatingEmail && state.isLogoutAvailable && (
            <span onClick={toggleLogoutConfirmationModal}>
              <Trans i18nKey="UserSessionItem.logout">Logout</Trans>
            </span>
          )}
        </div>
      </div>
      <LogoutConfirmationModal isOpen={state.isLogoutConfirmationModalOpen} onLogout={logout} onClose={toggleLogoutConfirmationModal} />
    </>
  )
}
