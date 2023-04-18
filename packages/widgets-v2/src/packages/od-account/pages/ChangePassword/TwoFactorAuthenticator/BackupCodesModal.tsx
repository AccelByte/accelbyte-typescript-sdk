/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button, ButtonStyle } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { LoadingBarIcon } from '@od-components/components/Icons/LoadingBarIcon'
import { t } from '@od-components/i18n/i18n'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import classNames from 'classnames'
import { format } from 'date-fns'
import { saveAs } from 'file-saver'
import React from 'react'
import { Trans } from 'react-i18next'
import { ErrorGenerateCode } from './components/ErrorGenerateCode'
import { BackupCodeError } from './models'
import { BackupCodesResponseV4 } from '@accelbyte/sdk-iam'

interface Props {
  isOpen: boolean
  onClose: () => void
  backupCode: BackupCodesResponseV4 | null
  isFetching: boolean
  isGenerating: boolean
  alert: AlertValue | null
  backupCodeError: BackupCodeError | null
  setAlert: (alert: AlertValue | null) => void
  generateCodes: () => void
}

interface State {
  isDownloading: boolean
}

export class BackupCodesModal extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)

    this.state = {
      isDownloading: false
    }
  }

  downloadCodes = async () => {
    const { backupCode, setAlert } = this.props
    if (!backupCode) return

    this.setState({ isDownloading: true })
    const blob = new Blob([backupCode.validCodes as any], { type: 'text/plain;charset=utf-8' })
    saveAs(blob, `backup_codes_${backupCode && format(new Date(backupCode.generatedAt * 1000), 'M/dd/yyyy, hh:mm a')}.txt`)
    setAlert({
      type: AlertType.success,
      element: <Trans i18nKey="AccountPasswordsecurity.2fa.backupcode.success.download">Backup codes downloaded</Trans>
    })
    this.setState({ isDownloading: false })
  }

  closeBackupCodeModal = () => {
    const { onClose, setAlert } = this.props
    setAlert(null)
    onClose()
  }

  renderLoading = () => {
    const { isFetching, isGenerating } = this.props

    return (
      <div className="flex justify-center">
        <LoadingBarIcon />
        <div className="ml-3 leading-3">
          {isGenerating && <Trans i18nKey="AccountPasswordSecurity.2fa.backupCode.generating">Generating new codes...</Trans>}
          {isFetching && <Trans i18nKey="AccountPasswordSecurity.2fa.backupCode.loading">Loading backup codes...</Trans>}
        </div>
      </div>
    )
  }

  renderBackupCodes = () => {
    const { backupCode, isFetching, isGenerating } = this.props
    if (isFetching || isGenerating) return this.renderLoading()

    if (!backupCode) return null

    let backupCodes: { code: string; isValid: boolean }[] = []
    if (backupCode.validCodes) {
      backupCodes = backupCode.validCodes.map(validCode => ({ code: validCode, isValid: true }))
    }

    if (backupCode.invalidCodes) {
      backupCodes = backupCodes.concat(backupCode.invalidCodes.map(invalidCode => ({ code: invalidCode, isValid: false })))
    }

    return (
      <div className="border-gray-80 mx-6 flex flex-wrap border-b border-t pt-6 pb-3">
        {backupCodes.map(backupCode => {
          return (
            <div
              key={backupCode.code}
              className={classNames('mb-4 w-1/2 text-center sm:w-1/5', !backupCode.isValid && 'text-gray-70 line-through')}>
              {backupCode.code}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    const { isOpen, backupCode, isFetching, isGenerating, alert, backupCodeError, setAlert, generateCodes } = this.props
    return (
      <Dialog
        isOpen={isOpen}
        title={t('AccountPasswordSecurity.2fa.backupCode.title')}
        className="sm:w-680 w-5/6"
        onClose={this.closeBackupCodeModal}>
        <DialogBody>
          {alert && (
            <Alert type={alert.type} onDismiss={() => setAlert(null)} className="mb-3">
              {alert.element}
            </Alert>
          )}
          <Alert type={AlertType.info}>
            <Trans i18nKey="AccountpasswordSecurity.2fa.backupCode.info">
              Download your backup codes and keep them somewhere safe. Treat them the same way as you save your password.
            </Trans>
          </Alert>
          {!backupCodeError ? (
            <>
              <div className="justify-between p-6 pb-2 lg:flex">
                <div>
                  <div>
                    <span>{backupCode && backupCode.validCodes ? backupCode.validCodes.length : 0}</span>{' '}
                    <Trans i18nKey="AccountPasswordSecurity.2fa.backupCode.remaining">backup codes remaining</Trans>
                  </div>
                  <div className="pb-6 text-[color:rgb(var(--od-rgb-text),0.65)]">
                    <Trans i18nKey="AccountPasswordSecurity.2fa.backupCode.info2">you can only use each code once.</Trans>
                  </div>
                </div>
                <div className="italic text-[color:rgb(var(--od-rgb-text),0.65)]">
                  <Trans i18nKey="AccountPasswordSecurity.2fa.backupCode.generatedAt">Generated at:</Trans>{' '}
                  {backupCode && format(new Date(backupCode.generatedAt * 1000), 'M/dd/yyyy, hh:mm a')}
                </div>
              </div>
              {this.renderBackupCodes()}
            </>
          ) : (
            <ErrorGenerateCode
              onRetry={backupCodeError.onRetry}
              message={backupCodeError.message}
              retryLabel={backupCodeError.retryLabel}
            />
          )}
        </DialogBody>
        {!backupCodeError && (
          <DialogFooter>
            <div className="justify-end sm:flex">
              <Button
                className="btn btn-ghost mr-5 w-full text-sm font-normal sm:w-48"
                buttonStyle={ButtonStyle.NONE}
                onClick={generateCodes}>
                <Trans i18nKey="AccountPasswordSecurity.2fa.backupCode.generateCode">GENERATE NEW CODES</Trans>
              </Button>
              <Button
                className="btn btn-primary mt-3 w-full text-sm font-normal sm:mt-0 sm:w-40"
                onClick={this.downloadCodes}
                disabled={this.state.isDownloading || !backupCode?.validCodes || isFetching || isGenerating}>
                <Trans i18nKey="AccountPasswordSecurity.2fa.backupCode.downloadCode">DOWNLOAD CODES</Trans>
              </Button>
            </div>
          </DialogFooter>
        )}
      </Dialog>
    )
  }
}
