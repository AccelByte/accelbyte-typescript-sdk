/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../../AccountMainSection/AccountMainSection'
import { AuthAppSection } from './AuthAppSection'
import { BackupCodesSectionComponent } from './BackupCodesSectionComponent'
import { ConfirmationDialog } from './components/ConfirmationDialog'
import { EmailAuthSection } from './EmailAuthSection'
import { ConfirmDialog } from './models'
import './TwoFactorAuthenticatorSection.scss'
import { useSdk } from '~/hooks/useSdk'
import { EnabledFactorsResponseV4, Iam } from '@accelbyte/sdk-iam'

interface State {
  alert: AlertValue | null
  enabledFactors: EnabledFactorsResponseV4 | null
  confirmDialogData: ConfirmDialog | null
}

interface Props {
  isPreviewMode?: boolean
}

export const TwoFactorAuthenticatorSection = ({ isPreviewMode }: Props) => {
  const [state, setState] = useState<State>({
    alert: null,
    enabledFactors: null,
    confirmDialogData: null
  })
  const { alert, enabledFactors, confirmDialogData } = state
  const [sdk] = useSdk()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    if (isPreviewMode) return
    getEnabledFactor()
  }, [])

  const getEnabledFactor = async () => {
    try {
      const enabledFactors = await Iam.UsersV4Api(sdk).getUsersMeMfaFactor()
      updateState({ enabledFactors })
    } catch (error) {
      console.error(error)
      updateState({ enabledFactors: null })
    }
  }

  const onSuccess = () => {
    updateState({
      alert: {
        type: AlertType.success,
        element: <Trans i18nKey="AccountPasswordSecurity.2fa.updated">Two-factor authentication has been updated.</Trans>
      }
    })
  }

  const onError = (error: Error | unknown) => {
    updateState({
      alert: {
        type: AlertType.danger,
        element: <CommonError error={error} />
      }
    })
  }

  const setConfirmDialogInfo = (dialogData: ConfirmDialog) => {
    updateState({ confirmDialogData: dialogData })
  }

  const closeConfirmDialog = () => {
    updateState({ confirmDialogData: null })
  }

  return (
    <>
      <AccountMainSection className="twoFactorAuthenticator">
        <AccountMainSectionHeader>
          <Trans i18nKey="AccountPasswordSecurity.2fa.title">Two-Factor Authentication</Trans>
        </AccountMainSectionHeader>
        <AccountMainSectionBody className="w-full">
          {!!alert && (
            <div className="mb-2">
              <Alert type={alert.type} onDismiss={() => updateState({ alert: null })}>
                {alert.element}
              </Alert>
            </div>
          )}
          <div className="mb-2 text-[color:rgb(var(--od-rgb-text),0.65)]">
            <Trans i18nKey="AccountPasswordSecurity.2fa.desc">
              Two-Factor Authentication is required to add protection to your account from unauthorized access.
            </Trans>
          </div>
          <div className="mb-10">
            <Trans i18nKey="AccountPasswordSecurity.2fa.availableMethod">Available authentication method:</Trans>
          </div>
          <AuthAppSection
            onError={onError}
            onSuccess={onSuccess}
            enabledFactors={enabledFactors}
            onUpdated={getEnabledFactor}
            setConfirmDialogData={setConfirmDialogInfo}
            closeConfirmDialog={closeConfirmDialog}
            isPreviewMode={isPreviewMode}
          />
          <BackupCodesSectionComponent
            onSuccess={onSuccess}
            onError={onError}
            enabledFactors={enabledFactors}
            onUpdated={getEnabledFactor}
            setConfirmDialogData={setConfirmDialogInfo}
            closeConfirmDialog={closeConfirmDialog}
            isPreviewMode={isPreviewMode}
          />
          <EmailAuthSection
            onSuccess={onSuccess}
            onError={onError}
            enabledFactors={enabledFactors}
            onUpdated={getEnabledFactor}
            setConfirmDialogData={setConfirmDialogInfo}
            closeConfirmDialog={closeConfirmDialog}
            isPreviewMode={isPreviewMode}
          />
        </AccountMainSectionBody>
      </AccountMainSection>
      {confirmDialogData && <ConfirmationDialog {...confirmDialogData} />}
    </>
  )
}
