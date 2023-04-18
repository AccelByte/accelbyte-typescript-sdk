/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { Spinner, SpinnerStyle } from '@od-components/components/Spinner/Spinner'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { FetchStatus } from '~/constants/fetch-statuses'
import { useGdpr } from '~/hooks/gdpr/useGdpr'
import { useHeaderAlerts } from '~/hooks/header/useHeaderAlerts'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useAppState } from '~/hooks/useAppState'
import './AccountDeletionNoticePage.scss'

export const AccountDeletionNoticePage = () => {
  const [alert, setAlert] = useState<AlertValue | null>(null)
  const appState = useAppState()
  const { state: userState } = useUserInfo()
  const { state: gdprState, mutations: gdprMutations } = useGdpr()
  const { mutations: headerAlertsMutations } = useHeaderAlerts()
  const deletionDays = 28
  const isCancellingDeletion = gdprState.requestDeletionFetchStatus === FetchStatus.CANCELLING

  const notifyCancelAccountDeletionSuccess = async () => {
    headerAlertsMutations.push({
      type: AlertType.success,
      element: (
        <Trans i18nKey={'AccountDeletionNoticePage.cancelAccountDeletionSuccess'}>
          The account deletion process has been cancelled. Please log in to continue.
        </Trans>
      ),
      autoDismiss: true
    })
    appState.clear()
  }

  const notifyCancelAccountDeletionError = (error: Error | unknown) => {
    setAlert({
      type: AlertType.danger,
      element: <CommonError error={error} />
    })
  }

  const cancelDeletion = async () => {
    const user = userState.user
    if (!user) return

    try {
      await gdprMutations.cancelDeleteAccount(user.userId)
      notifyCancelAccountDeletionSuccess()
      await appState.logout()
    } catch (error) {
      notifyCancelAccountDeletionError(error)
    }
  }

  const continueDeletion = async () => {
    await appState.logout()
  }

  return (
    <div className="deletionNoticeContainer">
      <main>
        {!!alert && !isCancellingDeletion && (
          <Alert type={alert.type} className="alert" onDismiss={() => setAlert(null)}>
            {alert.element}
          </Alert>
        )}

        <p className="title">
          <Trans i18nKey="AccountDeletionNoticePage.title">Account deletion in-progress</Trans>
        </p>
        <div className="content">
          <Trans i18nKey="AccountDeletionNoticePage.content">
            Your account will be deleted <strong className="text-[color:rgb(var(--od-rgba-text))]">{{ deletionDays }} days</strong> after
            the day you requested for deletion. For more information, you can check your email related to the deletion request.
          </Trans>
        </div>
        <div className="btnContainer">
          <button className="btn big btnContinue" onClick={() => continueDeletion()}>
            <Trans i18nKey="AccountDeletionNoticePage.button.keepDeleting">Continue the Deletion</Trans>
          </button>

          <button className="btn big btn-primary btnCancel" disabled={isCancellingDeletion} onClick={() => cancelDeletion()}>
            {isCancellingDeletion && (
              <>
                <Spinner className={`${SpinnerStyle.inline} spinner`} />
                <Trans i18nKey="AccountDeletionNoticePage.form.processing">Processing...</Trans>
              </>
            )}
            {!isCancellingDeletion && <Trans i18nKey="AccountDeletionNoticePage.button.cancelDeletion">Cancel Deletion</Trans>}
          </button>
        </div>
      </main>
    </div>
  )
}
