/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import { Link } from 'react-router-dom'
import './PurchaseBaseAppButton.scss'
import { useRoutes } from '~/hooks/routes/useRoutes'
import { ItemInfo } from '@accelbyte/sdk-platform'

interface PurchaseBaseAppDialogProps {
  baseApp: ItemInfo
  onClose: () => void
}

const PurchaseBaseAppDialog = ({ baseApp, onClose }: PurchaseBaseAppDialogProps) => {
  const { state: routesState } = useRoutes()
  return (
    <Dialog isOpen={true} className="purchaseBaseAppDialog">
      <DialogBody>
        <Trans i18nKey="PurchaseBaseApp.lockedDownloadableContent.content">
          This expansion requires the base game {{ appTitle: baseApp.title }} to play
        </Trans>
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button onClick={onClose} className="btn small btn-ghost btnCancel">
          <Trans i18nKey="PurchaseBaseApp.cancel">Cancel</Trans>
        </button>
        <Link
          to={routesState.store.apps.detail.makePath({
            params: { itemId: baseApp.itemId }
          })}
          className="btn small btn-primary btnGoToGamePage">
          <Trans i18nKey="PurchaseBaseApp.goToGamePage">Go to the game page</Trans>
        </Link>
      </DialogFooter>
    </Dialog>
  )
}

interface Props {
  baseApp: ItemInfo
}

export function PurchaseBaseAppButton({ baseApp }: Props) {
  const [isDownloadBaseAppDialogOpen, setIsDownloadBaseAppDialogOpen] = useState(false)

  return (
    <React.Fragment>
      <button className="btn big btn-primary btnGoToLibrary" onClick={() => setIsDownloadBaseAppDialogOpen(true)}>
        <Trans i18nKey="PurchaseBaseApp.goToLibrary">GO TO LIBRARY</Trans>
      </button>
      {isDownloadBaseAppDialogOpen && <PurchaseBaseAppDialog baseApp={baseApp} onClose={() => setIsDownloadBaseAppDialogOpen(false)} />}
    </React.Fragment>
  )
}
