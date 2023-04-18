/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AuthAppIcon } from '@od-components/components/Icons/AuthAppIcon'
import { t } from '@od-components/i18n/i18n'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { AuthenticatorAppDialog } from './AuthenticatorAppDialog'
import { FactorSectionComponent } from './components/FactorSectionComponent'
import { FactorDialogProps } from './models'
import { useSdk } from '~/hooks/useSdk'
import { Iam } from '@accelbyte/sdk-iam'

const AUTHENTICATOR_FACTOR = 'authenticator'

export const AuthAppSection = ({
  enabledFactors,
  isPreviewMode,
  onError,
  onUpdated,
  onSuccess,
  closeConfirmDialog,
  setConfirmDialogData
}: FactorDialogProps) => {
  const [isAuthenticationAppDialogOpen, setIsAuthenticationAppDialogOpen] = useState(false)
  const [sdk] = useSdk()

  const disableAuthenticatorFactor = async () => {
    try {
      await Iam.UsersV4Api(sdk).deleteUserMeMfaAuthenticatorDisable()
      onSuccess()
      closeConfirmDialog()
      onUpdated()
    } catch (error) {
      closeConfirmDialog()
      console.error(error)
      onError(error)
    }
  }

  const setAuthenticatorDefault = async () => {
    try {
      await Iam.UsersV4Api(sdk).postUserMeMfaFactor({ factor: AUTHENTICATOR_FACTOR })
      onSuccess()
      closeConfirmDialog()
      onUpdated()
    } catch (error) {
      console.error(error)
      onError(error)
      closeConfirmDialog()
    }
  }

  const enableAuthenticationApp = (value: boolean) => {
    setIsAuthenticationAppDialogOpen(value)
  }

  const isAuthenticatorEnabled = () => {
    if (!enabledFactors) return false

    return enabledFactors.enabled.includes(AUTHENTICATOR_FACTOR)
  }

  const onClickDisable = () => {
    setConfirmDialogData({
      title: t('AccountPasswordSecurity.2fa.disable.authenticator'),
      message: (
        <Trans i18nKey="AccountPasswordSecurity.2fa.disable.message.authenticator">
          Are you sure want to disable <span className="font-semibold">Authenticator App</span>?
        </Trans>
      ),
      cancelBtnLabel: t('AccountPasswordSecurity.2fa.cancelBtn'),
      confirmBtnLabel: t('AccountPasswordSecurity.2fa.disableBtn'),
      onCancel: closeConfirmDialog,
      onConfirm: disableAuthenticatorFactor,
      isOpen: true
    })
  }

  const onClickDefault = () => {
    setConfirmDialogData({
      title: t('AccountPasswordSecurity.2fa.confirmation.label'),
      message: (
        <Trans i18nKey="AccountPasswordSecurity.2fa.authenticator.default.message">
          Are you sure want to set <span className="font-semibold">Authentication App</span> as default two-factor authentication method?
        </Trans>
      ),
      cancelBtnLabel: t('AccountPasswordSecurity.2fa.cancelBtn'),
      confirmBtnLabel: t('AccountPasswordSecurity.2fa.yesBtn'),
      isOpen: true,
      onCancel: closeConfirmDialog,
      onConfirm: setAuthenticatorDefault
    })
  }

  return (
    <>
      <FactorSectionComponent
        icon={<AuthAppIcon className="iconMethod" />}
        title={<Trans i18nKey="AccountPasswordSecurity.2fa.authenticatorApp">Authenticator App</Trans>}
        description={
          <Trans i18nKey="AccountPasswordSecurity.2fa.authenticatorAppDesc">
            Use an Authenticator app to get free verification codes, even when your phone is offline. Available for Android and iPhone
          </Trans>
        }
        enabledFactors={enabledFactors}
        checkBoxLabel={t('AccountPasswordSecurity.2fa.authenticatorAppCheckbox')}
        onClickCheckbox={enabledFactors && enabledFactors.default !== AUTHENTICATOR_FACTOR ? onClickDefault : undefined}
        isCheckboxDisabled={!!enabledFactors && enabledFactors.default === AUTHENTICATOR_FACTOR && enabledFactors.enabled.length === 1}
        isFactorEnabled={isAuthenticatorEnabled()}
        onEnable={() => enableAuthenticationApp(true)}
        onDisable={onClickDisable}
        FactorValue={AUTHENTICATOR_FACTOR}
        isFirstSection
        isPreviewMode={isPreviewMode}
      />
      <AuthenticatorAppDialog
        isOpen={isAuthenticationAppDialogOpen}
        onClose={() => enableAuthenticationApp(false)}
        onSuccess={onSuccess}
        onUpdated={onUpdated}
      />
    </>
  )
}
