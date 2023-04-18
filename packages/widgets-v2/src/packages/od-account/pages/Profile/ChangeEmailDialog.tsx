/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/index'
import { AlertType, AlertValue } from '@od-shared/models/Alert'
import React from 'react'
import { Trans } from 'react-i18next'
import styles from './ChangeEmailDialog.module.scss'

interface Props {
  isRequestingVerificationCode: boolean
  onClose: () => void
  onSendVerification: () => void
  onDismissAlert: () => void
  alert?: AlertValue | null
}

export const ChangeEmailDialog = (props: Props) => {
  const { isRequestingVerificationCode, onClose, onSendVerification, onDismissAlert, alert } = props

  return (
    <Dialog title={t('AccountMyProfilePage.dialog.changeEmail.title')} isOpen={true}>
      <DialogBody className={styles.dialogBody}>
        {alert && alert.type === AlertType.danger && (
          <div className="mb-3">
            <Alert type={alert.type} className="profilePageAlerts" onDismiss={onDismissAlert}>
              {alert.element}
            </Alert>
          </div>
        )}
        <Trans i18nKey={'AccountMyProfilePage.dialog.changeEmail.content'}>
          <p>You will need a verification code to make this change.</p>
          <p>Click the button below to receive an email containing your code.</p>
        </Trans>
      </DialogBody>
      <DialogFooter className={styles.dialogFooter}>
        <button onClick={() => onClose()} className="btn big btn-ghost btnVerification">
          <Trans i18nKey="AccountMyProfilePage.dialog.cancel">CANCEL</Trans>
        </button>
        <Button
          loadingIndicator="SPINNER"
          onClick={() => onSendVerification()}
          className="btn big btn-primary btnCancel"
          disabled={isRequestingVerificationCode}
          isLoading={isRequestingVerificationCode}>
          <Trans i18nKey="AccountMyProfilePage.dialog.sendVerification">Send Verification</Trans>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
