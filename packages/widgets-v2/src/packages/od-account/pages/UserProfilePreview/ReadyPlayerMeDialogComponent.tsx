/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { CloseIcon } from '@od-components/components/Icons/CloseIcon'
import { Env } from '@od-shared/Env'
import React from 'react'
import { Trans } from 'react-i18next'
import './ReadyPlayerMeDialog.scss'

interface Props {
  onCloseDialog: () => void
  toggleDialogConfirmation: () => void
  isDialogConfirmationOpen: boolean
}

export const ReadyPlayerMeDialogComponent = (props: Props) => {
  const { onCloseDialog, toggleDialogConfirmation, isDialogConfirmationOpen } = props
  return (
    <>
      <Dialog isOpen={true} className="creatorAvatarDialog">
        <div className="containerCreatorAvatar">
          <button className="closeButton" onClick={toggleDialogConfirmation}>
            <CloseIcon className="text-[color:rgb(var(--od-rgba-text))]" />
          </button>
          <iframe id="avatar-creator" className="iframeCreatorAvatar" allow="camera" src={Env.READY_PLAYER_ME_AVATAR_URL} />
        </div>
      </Dialog>
      <Dialog
        title={<Trans i18nKey="RPMCreator.closeConfirmation">Close avatar editor</Trans>}
        isOpen={isDialogConfirmationOpen}
        className="confirmationDialog">
        <DialogBody>
          <Trans i18nKey="RPMCreator.textContent">
            Are you sure to close the avatar editor without finishing all the steps? Your progress may be lost.
          </Trans>
        </DialogBody>
        <DialogFooter className="flex justify-end">
          <button className="btn btn-ghost mr-2" onClick={toggleDialogConfirmation}>
            <Trans i18nKey="RPMCreator.backToEditor">Back to Editor</Trans>
          </button>
          <Button className="btn btn-primary" onClick={onCloseDialog}>
            <Trans i18nKey="RPMCreator.closeBtn">Close</Trans>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
