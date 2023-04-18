/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Dialog, DialogBody, DialogFooter } from '@od-components/components/Dialog/Dialog'
import { t } from '@od-components/i18n/index'
import { ItemInfo } from '@accelbyte/sdk-platform'
import React from 'react'
import { Trans } from 'react-i18next'
import './PurchaseRequirementUnmatchListDialog.scss'

interface PurchaseRequirementUnmatchListDialogProps {
  unmatchedItems: ItemInfo[] | null | undefined
  onCloseDialog: () => void
}

export const PurchaseRequirementUnmatchListDialog = ({ unmatchedItems, onCloseDialog }: PurchaseRequirementUnmatchListDialogProps) => {
  return (
    <Dialog title={t('BaseStoreDetailCatalog.dialog.purchasingRequirement.title')} isOpen className="purchaseRequirementUnmatchListDialog">
      <DialogBody>
        <Trans i18nKey="CommonTip.userNotMeetItemPurchaseCondition">
          To purchase this item, you must first purchase the following item(s):
        </Trans>
        <ul className="item-list">
          {unmatchedItems?.map(({ title }) => (
            <li key={title}>{title}</li>
          ))}
        </ul>
      </DialogBody>
      <DialogFooter className="dialogFooter">
        <button onClick={onCloseDialog} className="btn btnClose uppercase">
          <Trans i18nKey="common.close">Close</Trans>
        </button>
      </DialogFooter>
    </Dialog>
  )
}
