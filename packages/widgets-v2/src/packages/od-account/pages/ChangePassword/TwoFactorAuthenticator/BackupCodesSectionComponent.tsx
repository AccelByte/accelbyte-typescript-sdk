/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { BackupCodeIcon } from '@od-components/components/Icons/BackupCodeIcon'
import { t } from '@od-components/i18n/i18n'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { BackupCodesModal } from './BackupCodesModal'
import { FactorSectionComponent } from './components/FactorSectionComponent'
import { BackupCodeError, FactorDialogProps } from './models'
import { useSdk } from '~/hooks/useSdk'
import { BackupCodesResponseV4, Iam } from '@accelbyte/sdk-iam'

const BACKUP_CODE_FACTOR = 'backupCode'

interface State {
  isBackupCodesModalOpen: boolean
  backupCode: BackupCodesResponseV4 | null
  isFetching: boolean
  isGenerating: boolean
  alert: AlertValue | null
  backupCodeError: BackupCodeError | null
}

export const BackupCodesSectionComponent = ({
  enabledFactors,
  isPreviewMode,
  onError,
  onSuccess,
  onUpdated,
  closeConfirmDialog,
  setConfirmDialogData
}: FactorDialogProps) => {
  const [state, setState] = useState<State>({
    isBackupCodesModalOpen: false,
    backupCode: null,
    isFetching: false,
    isGenerating: false,
    alert: null,
    backupCodeError: null
  })
  const { isBackupCodesModalOpen, backupCode, isFetching, isGenerating, alert, backupCodeError } = state
  const [sdk] = useSdk()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  const onClickOpenBackupCodes = () => {
    updateState({ isBackupCodesModalOpen: true })
    getBackupCodes()
  }

  const onCloseBackupCodes = () => {
    updateState({ isBackupCodesModalOpen: false })
  }

  const enableBackupCodes = async () => {
    updateState({ isBackupCodesModalOpen: true, isGenerating: true })

    try {
      await Iam.UsersV4Api(sdk).createUserMeMfaBackupCodeEnable()
      onSuccess()
      updateState({ isBackupCodesModalOpen: true })
      onUpdated()
      getBackupCodes()
      updateState({
        alert: {
          type: AlertType.success,
          element: <Trans i18nKey="AccountPasswordSecurity.2fa.updated">Two-factor authentication has been updated.</Trans>
        }
      })
    } catch (error) {
      console.error(error)

      updateState({
        backupCode: null,
        backupCodeError: {
          message: t('AccountPasswordSecurity.2fa.backupCode.error.generate'),
          retryLabel: t('AccountPasswordSecurity.2fa.backupCode.generateNewCode'),
          onRetry: enableBackupCodes
        }
      })
    } finally {
      updateState({ isGenerating: false })
    }
  }

  const getBackupCodes = async () => {
    updateState({ backupCodeError: null, isFetching: true })
    try {
      const backupCode = await Iam.UsersV4Api(sdk).getUsersMeMfaBackupCode()
      updateState({ backupCode })
    } catch (error) {
      console.error(error)
      updateState({
        backupCodeError: {
          message: t('AccountPasswordSecurity.2fa.backupCode.error.fetch'),
          retryLabel: t('AccountPasswordSecurity.2fa.backupCode.tryAgain'),
          onRetry: getBackupCodes
        }
      })
    } finally {
      updateState({ isFetching: false })
    }
  }

  const generateCodes = async () => {
    updateState({ backupCodeError: null, isGenerating: true })
    try {
      const backupCode = await Iam.UsersV4Api(sdk).createUserMeMfaBackupCode()
      updateState({ backupCode })
      updateState({
        alert: {
          type: AlertType.success,
          element: <Trans i18nKey="AccountPasswordSecurity.2fa.backupCode.updated">Backup codes updated</Trans>
        }
      })
    } catch (error) {
      console.error(error)
      updateState({
        backupCodeError: {
          message: t('AccountPasswordSecurity.2fa.backupCode.error.generate'),
          retryLabel: t('AccountPasswordSecurity.2fa.backupCode.generateNewCode'),
          onRetry: generateCodes
        }
      })
    } finally {
      updateState({ isGenerating: false })
    }
  }

  const disableBackupCodesFactor = async () => {
    try {
      await Iam.UsersV4Api(sdk).deleteUserMeMfaBackupCodeDisable()
      onSuccess()
      closeConfirmDialog()
      onUpdated()
    } catch (error) {
      console.error(error)
      onError(error)
    }
  }

  const setBackupcodeDefault = async () => {
    try {
      await Iam.UsersV4Api(sdk).postUserMeMfaFactor({ factor: BACKUP_CODE_FACTOR })
      onSuccess()
      closeConfirmDialog()
      onUpdated()
    } catch (error) {
      console.error(error)
      onError(error)
    }
  }

  const onClickDisable = () => {
    setConfirmDialogData({
      title: t('AccountPasswordSecurity.2fa.disable.backupcode'),
      message: (
        <Trans i18nKey="AccountPasswordSecurity.2fa.disable.backupcode.message">
          Are you sure want to disable <span className="font-semibold">Backup Codes</span>?
        </Trans>
      ),
      cancelBtnLabel: t('AccountPasswordSecurity.2fa.cancelBtn'),
      confirmBtnLabel: t('AccountPasswordSecurity.2fa.disableBtn'),
      isOpen: true,
      onCancel: closeConfirmDialog,
      onConfirm: () => disableBackupCodesFactor()
    })
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
      onConfirm: () => setBackupcodeDefault()
    })
  }

  const isBackupCodesEnabled = () => {
    if (!enabledFactors) return false

    return enabledFactors.enabled.includes(BACKUP_CODE_FACTOR)
  }

  return (
    <>
      <FactorSectionComponent
        icon={<BackupCodeIcon className="iconMethod" />}
        title={<Trans i18nKey="AccountPasswordSecurity.2fa.backupCodes">Backup Codes</Trans>}
        description={
          <>
            <Trans i18nKey="AccountPasswordSecurity.2fa.backupCodesDesc">
              These one-time passcodes allow you to sign in when away from your phone.
            </Trans>
            {isBackupCodesEnabled() && (
              <Trans i18nKey="AccountPasswordSecurity.2fa.clickMore">
                To manage your backup codes,
                <span onClick={onClickOpenBackupCodes} className="ml-2 cursor-pointer text-blue-50">
                  Click here.
                </span>
              </Trans>
            )}
          </>
        }
        enabledFactors={enabledFactors}
        checkBoxLabel={t('AccountPasswordSecurity.2fa.backupCodesCheckbox')}
        onClickCheckbox={enabledFactors && enabledFactors.default !== BACKUP_CODE_FACTOR ? onClickDefault : undefined}
        isCheckboxDisabled={!!enabledFactors && enabledFactors.default === BACKUP_CODE_FACTOR && enabledFactors.enabled.length === 1}
        isFactorEnabled={isBackupCodesEnabled()}
        onEnable={enableBackupCodes}
        onDisable={onClickDisable}
        FactorValue={BACKUP_CODE_FACTOR}
        isFirstSection
        isPreviewMode={isPreviewMode}
      />
      <BackupCodesModal
        isOpen={isBackupCodesModalOpen}
        onClose={onCloseBackupCodes}
        backupCode={backupCode}
        isFetching={isFetching}
        isGenerating={isGenerating}
        alert={alert}
        backupCodeError={backupCodeError}
        setAlert={(alert: AlertValue | null) => updateState({ alert })}
        generateCodes={generateCodes}
      />
    </>
  )
}
