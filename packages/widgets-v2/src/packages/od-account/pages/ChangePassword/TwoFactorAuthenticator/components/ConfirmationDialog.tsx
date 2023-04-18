/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/i18n'
import React, { useState } from 'react'
import { ConfirmDialog } from '../models'

export const ConfirmationDialog = ({ title, message, onCancel, isOpen, cancelBtnLabel, confirmBtnLabel, onConfirm }: ConfirmDialog) => {
  const [isLoading, setIsLoading] = useState(false)

  const onClickConfirm = async () => {
    setIsLoading(true)

    try {
      await onConfirm()
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Dialog title={title} isOpen={isOpen} className="w-400">
      <DialogBody>
        <div className="mb-5 text-sm">{message}</div>
      </DialogBody>
      <DialogFooter>
        <div className="flex justify-end">
          <Button
            className="btn btn-ghost mr-2 h-10 w-24"
            onClick={onCancel}
            buttonStyle={ButtonStyle.NONE}
            buttonType={ButtonType.TEXT}
            disabled={isLoading}>
            {cancelBtnLabel || t('Common.cancel')}
          </Button>
          <Button
            loadingIndicator="SPINNER"
            disabled={isLoading}
            className="btn btn-primary h-10 w-28"
            isLoading={isLoading}
            onClick={onClickConfirm}>
            {confirmBtnLabel || t('Common.confirm')}
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  )
}
