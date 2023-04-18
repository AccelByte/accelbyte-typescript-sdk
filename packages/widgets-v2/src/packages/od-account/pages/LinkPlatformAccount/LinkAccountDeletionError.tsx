/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import * as React from 'react'
import { Trans } from 'react-i18next'
import { deletionDays } from './common'

interface Props {
  onClose: () => void
}

export const LinkAccountDeletionError = (props: Props) => {
  const { onClose } = props

  return (
    <Dialog title={<Trans i18nKey="AccountDeletionNoticePage.title">Account deletion in-progress</Trans>} className="w-552" isOpen={true}>
      <DialogBody className="text-xs">
        <Trans i18nKey="AccountDeletionNoticePage.content">
          Your account will be deleted <strong className="text-[color:rgb(var(--od-rgba-text))]">{{ deletionDays }} days</strong> after the
          day you requested for deletion. For more information, you can check your email related to the deletion request.
        </Trans>
      </DialogBody>
      <DialogFooter>
        <div className="flex justify-end">
          <Button className="btn big btn-primary" onClick={onClose}>
            <Trans i18nKey="Common.close">Close</Trans>
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  )
}
