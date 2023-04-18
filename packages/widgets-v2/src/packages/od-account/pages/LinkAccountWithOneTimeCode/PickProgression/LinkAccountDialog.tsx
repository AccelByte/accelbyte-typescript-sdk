/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { Button, ButtonStyle } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/index'
import { Trans } from 'react-i18next'

interface Props {
  isConfirming: boolean
  onConfirm: () => void
  onCancel: () => void
}

export class LinkAccountDialog extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { onConfirm, onCancel, isConfirming } = this.props

    return (
      <Dialog
        title={
          <span className="font-body">
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.modal.title">Link an Account</Trans>
          </span>
        }
        isOpen>
        <DialogBody>
          <p className="text-sm text-[color:rgb(var(--od-rgb-text),0.65)]">
            <Trans i18nKey="LinkAccountWithOneTimeCodePage.pickProgression.modal.message">
              Are you sure want to continue to link your account?
            </Trans>
          </p>
        </DialogBody>
        <DialogFooter>
          <div className="flex justify-end">
            <Button className="btn btn-ghost mr-2 uppercase" buttonStyle={ButtonStyle.NONE} onClick={onCancel}>
              {t('Common.cancel')}
            </Button>

            <Button className="btn btn-primary uppercase" isLoading={isConfirming} disabled={isConfirming} onClick={onConfirm}>
              {t('common.yes')}
            </Button>
          </div>
        </DialogFooter>
      </Dialog>
    )
  }
}
