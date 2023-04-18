/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { ItemInfo } from '@accelbyte/sdk-platform'
import React from 'react'
import { Trans } from 'react-i18next'
import './PurchaseAccessibleItemDialog.scss'

interface Props {
  item: ItemInfo
  onClose: () => void
  onBuy: () => void
}

export const PurchaseAccessibleItemDialog = (props: Props) => {
  const { item, onClose, onBuy } = props
  const itemTitle = item.title
  return (
    <Dialog
      isOpen={true}
      title={<Trans i18nKey="PurchaseAccessibleItemDialog.title">Buy Game</Trans>}
      onClose={() => onClose()}
      className="purchaseAccessibleItemDialog">
      <DialogBody>
        <Trans i18nKey="PurchaseAccessibleItemDialog.content">
          <p>
            Do you want to buy permanent access to <strong>{{ itemTitle }}</strong> ?
          </p>
          <p>You can access this game with your Prime subscription</p>
        </Trans>
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button className="btn big btnCancel" onClick={() => onClose()}>
          <Trans i18nKey="PurchaseAccessibleItemDialog.buttons.cancel">CANCEL</Trans>
        </button>
        <Button className="btn big btnContinuePayment" onClick={() => onBuy()}>
          <Trans i18nKey="PurchaseAccessibleItemDialog.buttons.buy">BUY</Trans>
        </Button>
      </DialogFooter>
    </Dialog>
  )
}
