/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { FailedIcon } from '@od-components/components/Icons/FailedIcon'
import { t } from '@od-components/i18n/index'
import { Env } from '@od-shared/Env'
import React from 'react'
import { Trans } from 'react-i18next'
import './ClaimStatusDialog.scss'

interface ClaimFailedDialogProps {
  onCloseDialog: () => void
}

export const ClaimFailedDialog = (props: ClaimFailedDialogProps) => {
  const contactSupportEmail = Env.CONTACT_SUPPORT_EMAIL
  return (
    <Dialog title={t('AppDetailPage.dialog.claimFailed.title')} isOpen={true} className="claimStatusDialog">
      <DialogBody>
        <FailedIcon className="failedIcon" />
        {!contactSupportEmail && (
          <Trans i18nKey="AppDetailPage.dialog.claimFailed.content">
            <p className="failedMessage">Failed to claim the game. Please contact support for assistance.</p>
          </Trans>
        )}
        {contactSupportEmail && (
          <Trans i18nKey="AppDetailPage.dialog.claimFailed.contentWithEmail">
            <p className="failedMessage">
              Failed to claim the game. Please contact support at <a href={`mailto:${contactSupportEmail}`}>{{ contactSupportEmail }}</a>{' '}
              for assistance.
            </p>
          </Trans>
        )}
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button onClick={props.onCloseDialog} className="btn btnClose">
          <Trans i18nKey="AppDetailPage.dialog.claimFailed.close">Close</Trans>
        </button>
      </DialogFooter>
    </Dialog>
  )
}
