/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import React from 'react'
import { Trans } from 'react-i18next'

interface Props {
  onConfirm: () => void
  onCancel: () => void
  platformName: string
  isSubmitting: boolean
}

export const ConfirmationLinkAccountDialog = (props: Props) => {
  const { onConfirm, onCancel, platformName, isSubmitting } = props

  return (
    <Dialog
      title={<Trans i18nKey="linkPlatformAccountPage.confirmation.title">Link to {{ platformName }} Account</Trans>}
      className="w-400 text-center"
      isOpen={true}>
      <DialogBody>
        <p className="text-left text-[color:rgb(var(--od-rgb-text),0.65)]">
          <Trans i18nKey="linkPlatformAccountPage.confirmation.subTitle">
            Link to {{ platformName }} Account will allow you to share your{' '}
            <span className="font-medium text-[color:rgb(var(--od-rgba-text))]">profile, game progression,</span> and{' '}
            <span className="font-medium text-[color:rgb(var(--od-rgba-text))]">earned game content</span> with your account.
          </Trans>
        </p>
      </DialogBody>
      <DialogFooter>
        <div className="flex justify-end">
          <Button
            className="btn big btn-ghost mr-2 uppercase"
            buttonType={ButtonType.TEXT}
            buttonStyle={ButtonStyle.NONE}
            onClick={onCancel}
            disabled={isSubmitting}>
            <Trans i18nKey="common.cancel">Cancel</Trans>
          </Button>
          <Button
            loadingIndicator="SPINNER"
            className="btn big btn-primary uppercase"
            onClick={onConfirm}
            disabled={isSubmitting}
            isLoading={isSubmitting}>
            <Trans i18nKey="linkPlatformAccountPage.confirmation.continue">Continue</Trans>
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  )
}
