/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/index'
import { UserHelper } from '@od-shared/utils/UserHelper'
import React from 'react'
import { Trans } from 'react-i18next'
import { useDiscoveryConfigs } from '~/hooks/odin-config/useDiscoveryConfigs'
import './LinkedAccountsPage.scss'

interface Props {
  onCancel?: () => unknown
  onConfirm?: () => unknown
  platformId: string
}

export const UnlinkAccountConfirmDialog = ({ onCancel, onConfirm, platformId }: Props) => {
  const { state: discoveryConfigState } = useDiscoveryConfigs()

  const platformName = UserHelper.getPlatformName(platformId)
  const publisherName = discoveryConfigState.discoveryConfigData?.brandName.data.value || ''

  return (
    <Dialog className="purchaseDialog" title={t('LinkedAccountPage.confirmUnlinkDialog.title')} isOpen={true}>
      <DialogBody>
        <p className="dialogPlatformBodyText">
          <Trans i18nKey="LinkedAccountPage.confirmUnlinkDialog.unlinkConfirm">
            Do you want to unlink your <span className="capitalize">{{ platformName }}</span> account from
            {{ publisherName }}?
          </Trans>
        </p>
      </DialogBody>
      <DialogFooter>
        <div className="flex justify-end">
          <Button
            className="btn btn-ghost mr-2 uppercase"
            buttonType={ButtonType.TEXT}
            buttonStyle={ButtonStyle.NONE}
            onClick={() => {
              if (onCancel) onCancel()
            }}>
            <Trans i18nKey="LinkAccountPage.cancel">Cancel</Trans>
          </Button>
          <Button
            className="btn btn-primary uppercase"
            onClick={() => {
              if (onConfirm) {
                onConfirm()
              }
            }}>
            <Trans i18nKey="LinkAccountPage.unlink">Unlink</Trans>
          </Button>
        </div>
      </DialogFooter>
    </Dialog>
  )
}
