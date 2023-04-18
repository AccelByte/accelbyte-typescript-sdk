/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { LauncherDownloadButton } from '@od-components/components/LauncherDownloadButton/LauncherDownloadButton'
import { t } from '@od-components/i18n/index'
import { DesktopChecker } from '@accelbyte/sdk'
import React from 'react'
import { Trans } from 'react-i18next'
import { OpenLibraryLauncherButton } from '../OpenLibraryLauncherButton/OpenLibraryLauncherButton'
import './DownloadLauncherDialog.scss'
import { ItemInfo } from '@accelbyte/sdk-platform'

interface Props {
  item: ItemInfo
  isDialogOpen: boolean
  onCloseDialog: () => void
}

export function DownloadLauncherDialog({ item, isDialogOpen, onCloseDialog }: Props) {
  return (
    <Dialog title={t('BaseStoreDetailCatalog.dialog.downloadLauncher.title')} isOpen={isDialogOpen} className="downloadLauncherDialog">
      <DialogBody>
        <Trans i18nKey={'BaseStoreDetailCatalog.dialog.downloadLauncher.content'}>
          <p className="message">You can play this game using Launcher.</p>
          <p className="message bottom">Don't have Launcher? Click here to download and install.</p>
        </Trans>
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button onClick={() => onCloseDialog()} className="btn small btn-ghost btnCancel">
          <Trans i18nKey="BaseStoreDetailCatalog.dialog.downloadLauncher.cancel">Cancel</Trans>
        </button>
        {DesktopChecker.isDesktopApp() && <OpenLibraryLauncherButton item={item} />}
        {!DesktopChecker.isDesktopApp() && (
          <LauncherDownloadButton>
            <Trans i18nKey="BaseStoreDetailCatalog.download">DOWNLOAD</Trans>
          </LauncherDownloadButton>
        )}
      </DialogFooter>
    </Dialog>
  )
}
