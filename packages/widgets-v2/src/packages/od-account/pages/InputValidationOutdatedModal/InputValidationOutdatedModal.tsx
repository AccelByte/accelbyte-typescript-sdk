/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import './InputValidationOutdatedModal.scss'

export const InputValidationOutdatedModal = () => {
  const [isOpen, setInOpen] = useState(false)

  const closeModal = () => {
    setInOpen(false)
  }

  return (
    <Dialog
      title={<Trans i18nKey="InputValidation.dialog.title">Process Failed</Trans>}
      isOpen={isOpen}
      className="inputValidationOutdatedModal">
      <DialogBody>
        <Trans i18nKey="InputValidation.dialog.bodyText">
          This error occurs because we have updated the input <br />
          validation format. Please resubmit.
        </Trans>
      </DialogBody>

      <DialogFooter>
        <Button className="btn btn-primary btnClose" onClick={closeModal}>
          <Trans i18nKey="Common.close">Close</Trans>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
