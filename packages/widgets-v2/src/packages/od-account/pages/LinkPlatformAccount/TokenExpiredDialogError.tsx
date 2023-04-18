/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import * as React from 'react'
import { Trans } from 'react-i18next'

interface Props {
  onClose: () => void
}

export const TokenExpiredDialogError = (props: Props) => {
  const { onClose } = props

  return (
    <Dialog title={<Trans i18nKey="linkPlatformAccountPage.tokenExpired.title">Token Expired</Trans>} className="w-400" isOpen={true}>
      <DialogBody>
        <Trans i18nKey="linkPlatformAccountPage.tokenExpired.desc">Your account linking token has expired. Please login again</Trans>
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
