/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { UserHelper } from '@od-shared/utils/UserHelper'
import * as React from 'react'
import { Trans } from 'react-i18next'
import styles from './LinkPlatformAccountConfirmationDialog.module.scss'

interface Props {
  onCloseDialog: () => void
  toggleDialogConfirmation: () => void
  platformId: string
  isLoading: boolean
}

export const LinkPlatformAccountConfirmationDialog = (props: Props) => {
  const { platformId, onCloseDialog, toggleDialogConfirmation, isLoading } = props
  const platformName = UserHelper.getPlatformName(platformId)
  return (
    <>
      <Dialog isOpen={true} className={styles.confirmationDialog}>
        <DialogBody>
          <h1 className={styles.title}>
            <Trans i18nKey={'LinkPlatformAccount.modal.confirmation.title'}>Link to {{ platformName }} Account</Trans>
          </h1>

          <p className={styles.description}>
            <Trans i18nKey={'LinkPlatformAccount.modal.confirmation.description'}>
              Link to {{ platformName }} Account will allow you to share your <strong>profile, game progression,</strong> and{' '}
              <strong>earned game content</strong> with your current account.
            </Trans>
          </p>
        </DialogBody>
        <DialogFooter className={'flex justify-end'}>
          <Button
            className="btn big btn-ghost footer-btn mr-2 uppercase"
            buttonType={ButtonType.TEXT}
            buttonStyle={ButtonStyle.NONE}
            onClick={onCloseDialog}
            disabled={isLoading}>
            <Trans i18nKey={'Common.cancel'}>Cancel</Trans>
          </Button>
          <Button
            loadingIndicator="SPINNER"
            className="btn big btn-primary footer-btn uppercase"
            onClick={toggleDialogConfirmation}
            disabled={isLoading}
            isLoading={isLoading}>
            <Trans i18nKey={'LinkPlatformAccount.modal.confirmation.continue'}>Continue</Trans>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  )
}
