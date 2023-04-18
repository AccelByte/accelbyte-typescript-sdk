/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import * as React from 'react'
import { Trans } from 'react-i18next'
import { useSdkOptions } from '~/hooks/useSdk'

interface Props {
  onClose: () => void
}

export const LinkBannedAccountError = (props: Props) => {
  const { onClose } = props
  const [sdkOptions] = useSdkOptions()

  return (
    <Dialog
      title={<Trans i18nKey="linkPlatformAccountPage.LinkBannedError.title">Your account has been banned</Trans>}
      className="w-400"
      isOpen={true}>
      <DialogBody className="text-xs">
        <Trans i18nKey="linkPlatformAccountPage.LinkBannedError.message">
          Your account has been banned because you may have violated our terms of service. If you believe this is an error, please contact
          <a href={`${sdkOptions.baseURL}/support`} target="_blank" rel="noreferrer" className="color-blue-50 underline-offset-1">
            Customer Support
          </a>
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
