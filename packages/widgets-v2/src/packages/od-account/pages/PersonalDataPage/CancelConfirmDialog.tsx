/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/index'
import React from 'react'
import { Trans } from 'react-i18next'
import './CancelConfirmDialog.scss'

interface Props {
  onCancel?: () => unknown
  onConfirm?: () => unknown
}

export class CancelConfirmDialog extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { onCancel, onConfirm } = this.props
    return (
      <Dialog className="cancelConfirmDialog" title={t('PersonalDataPage.cancelConfirmDialog.title')} isOpen={true}>
        <DialogBody className="dialogBody">
          <Trans i18nKey="PersonalDataPage.cancelConfirmDialog.bodyText">Do you want to cancel your personal data request?</Trans>
        </DialogBody>
        <DialogFooter className="dialogFooter">
          <div className="btnContainer">
            <Button
              className="btn big btn-ghost btnCancel"
              buttonType={ButtonType.TEXT}
              buttonStyle={ButtonStyle.NONE}
              onClick={() => {
                if (onCancel) onCancel()
              }}>
              <Trans i18nKey="PersonalDataPage.cancelDialogConfirm.close">Close</Trans>
            </Button>
            <Button
              className="btn big btn-primary btnContinue"
              onClick={() => {
                if (onConfirm) {
                  onConfirm()
                }
              }}>
              <Trans i18nKey="PersonalDataPage.cancelDialogConfirm.continue">Continue</Trans>
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    )
  }
}
