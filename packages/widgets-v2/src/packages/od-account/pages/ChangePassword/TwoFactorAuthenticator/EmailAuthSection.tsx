/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { CommonError } from '@od-components/components/CommonError'
import { EmailIcon } from '@od-components/components/Icons/EmailIcon'
import { t } from '@od-components/i18n/i18n'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { useSdk } from '~/hooks/useSdk'
import { FactorSectionComponent } from './components/FactorSectionComponent'
import { EmailAuthModal } from './EmailAuthModal'
import { FactorDialogProps } from './models'
import { Iam } from '@accelbyte/sdk-iam'

interface State {
  isEnableModalOpen: boolean
  isLoading: boolean
  modalAlert: AlertValue | null
}

const EMAIL_FACTOR = 'email'

export const EmailAuthSection = ({
  enabledFactors,
  isPreviewMode,
  onError,
  onSuccess,
  onUpdated,
  closeConfirmDialog,
  setConfirmDialogData
}: FactorDialogProps) => {
  const [state, setState] = useState<State>({
    isEnableModalOpen: false,
    isLoading: false,
    modalAlert: null
  })
  const { modalAlert, isLoading, isEnableModalOpen } = state
  const [sdk] = useSdk()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const requestEmailCode = async (isFromModal = false) => {
    updateState({ isLoading: true })
    try {
      await Iam.UsersV4Api(sdk).createUserMeMfaEmailCode()
      updateState({ isEnableModalOpen: true })
      if (isFromModal) {
        updateState({
          modalAlert: {
            type: AlertType.success,
            element: (
              <Trans i18nKey="AccountPasswordSecurity.2fa.emailModal.sendCodeSuccess">
                A verification code has been sent to your email
              </Trans>
            )
          }
        })
      }
    } catch (error) {
      console.error(error)
      if (isFromModal) {
        updateState({
          modalAlert: {
            type: AlertType.danger,
            element: <CommonError error={error} />
          }
        })
        return
      }
      onError(error)
    } finally {
      updateState({ isLoading: false })
    }
  }

  const enableEmailMethod = async (code: string, callbackError?: () => void) => {
    updateState({ isLoading: true })
    try {
      await Iam.UsersV4Api(sdk).postUserMeMfaEmailEnable({ code })
      onSuccess()
      onUpdated()
      updateState({ isEnableModalOpen: false })
    } catch (error) {
      console.error(error)
      updateState({
        modalAlert: {
          type: AlertType.danger,
          element: <CommonError error={error} />
        }
      })
      callbackError && callbackError()
    } finally {
      updateState({ isLoading: false })
    }
  }

  const setEmailDefault = async () => {
    try {
      await Iam.UsersV4Api(sdk).postUserMeMfaFactor({ factor: EMAIL_FACTOR })
      onSuccess()
      closeConfirmDialog()
      onUpdated()
    } catch (error) {
      console.error(error)
      onError(error)
    }
  }

  const disableEmailFactor = async () => {
    try {
      await Iam.UsersV4Api(sdk).createUserMeMfaEmailDisable()
      onSuccess()
      closeConfirmDialog()
      onUpdated()
    } catch (error) {
      console.error(error)
      onError(error)
    }
  }

  const closeModal = () => {
    updateState({ isEnableModalOpen: false, modalAlert: null })
  }

  const isEmailMethodEnabled = () => {
    if (!enabledFactors) return false

    return enabledFactors.enabled.includes(EMAIL_FACTOR)
  }

  const onClickDefault = () => {
    setConfirmDialogData({
      title: t('AccountPasswordSecurity.2fa.confirmation.label'),
      message: (
        <Trans i18nKey="AccountPasswordSecurity.2fa.backupcode.default.message">
          Are you sure want to set <span className="font-semibold">Backup Codes</span> as default two-factor authentication method?
        </Trans>
      ),
      cancelBtnLabel: t('AccountPasswordSecurity.2fa.cancelBtn'),
      confirmBtnLabel: t('AccountPasswordSecurity.2fa.yesBtn'),
      isOpen: true,
      onCancel: closeConfirmDialog,
      onConfirm: () => setEmailDefault()
    })
  }

  const onClickDisable = () => {
    setConfirmDialogData({
      title: t('AccountPasswordSecurity.2fa.disable.backupcode'),
      message: (
        <Trans i18nKey="AccountPasswordSecurity.2fa.disable.email.message">
          Are you sure want to disable <span className="font-semibold">Email Authentication</span>?
        </Trans>
      ),
      cancelBtnLabel: t('AccountPasswordSecurity.2fa.cancelBtn'),
      confirmBtnLabel: t('AccountPasswordSecurity.2fa.disableBtn'),
      isOpen: true,
      onCancel: closeConfirmDialog,
      onConfirm: () => disableEmailFactor()
    })
  }

  return (
    <>
      <FactorSectionComponent
        icon={<EmailIcon className="iconMethod" />}
        title={t('AccountPasswordSecurity.2fa.email')}
        description={
          <Trans i18nKey="AccountPasswordSecurity.2fa.emailDesc">Get a verification code sent to your email each time you log in.</Trans>
        }
        enabledFactors={enabledFactors}
        checkBoxLabel={t('AccountPasswordSecurity.2fa.backupCodesCheckbox')}
        onClickCheckbox={enabledFactors && enabledFactors.default !== EMAIL_FACTOR ? onClickDefault : undefined}
        isCheckboxDisabled={!!enabledFactors && enabledFactors.default === EMAIL_FACTOR && enabledFactors.enabled.length === 1}
        isFactorEnabled={isEmailMethodEnabled()}
        onEnable={() => requestEmailCode(false)}
        onDisable={onClickDisable}
        FactorValue={EMAIL_FACTOR}
        isPreviewMode={isPreviewMode}
      />
      <EmailAuthModal
        isOpen={isEnableModalOpen}
        onClose={closeModal}
        onResendCode={() => requestEmailCode(true)}
        closeAlert={() => updateState({ modalAlert: null })}
        alert={modalAlert}
        enableEmail={enableEmailMethod}
        isLoading={isLoading}
      />
    </>
  )
}
