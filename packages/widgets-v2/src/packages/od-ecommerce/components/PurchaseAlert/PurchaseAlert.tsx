/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { AlertType } from '@od-shared/models/Alert'
import { PurchaseHelper } from '@od-shared/utils/PurchaseHelper'
import { UserResponseV3 } from '@accelbyte/sdk-iam'
import React from 'react'
import { Trans } from 'react-i18next'
import { useHistory } from '~/hooks/routes/useHistory'
import { PrepurchaseInformation } from '~/hooks/platform/useOrderProcess'
import { OrderInfo } from '@accelbyte/sdk-platform'

interface Props {
  user?: UserResponseV3 | null
  prepurchaseInformation: PrepurchaseInformation | null
  pendingOrders: OrderInfo[] | null
  isPreviewMode?: boolean
}

export function PurchaseAlert({ user, isPreviewMode, prepurchaseInformation, pendingOrders }: Props) {
  const {
    state: { location }
  } = useHistory()

  if (isPreviewMode || !location) return null

  const isItemOwned = !!(user && prepurchaseInformation?.itemOwnership?.owned)
  const isItemUnavailable = PurchaseHelper.purchaseUnavailable(prepurchaseInformation?.purchaseConstraint)
  const hasPendingOrder = pendingOrders && pendingOrders.length > 0
  const isStorePage = location.pathname.includes('store')

  if (hasPendingOrder && isStorePage) {
    return (
      <div>
        <Alert type={AlertType.warning} className="headerAlert rounded-none">
          <Trans i18nKey="BundleItemDetailPage.itemAlreadyOrdered">You already ordered this item. Please complete your order.</Trans>
        </Alert>
      </div>
    )
  }

  if (isItemOwned && isItemUnavailable && isStorePage) {
    return (
      <div>
        <Alert type={AlertType.warning} className="headerAlert rounded-none">
          <Trans i18nKey="BundleItemDetailPage.itemAlreadyOwned">You already own this item.</Trans>
        </Alert>
      </div>
    )
  }

  return (
    <div>
      {isItemUnavailable && !isItemOwned && !hasPendingOrder && (
        <Alert type={AlertType.danger} className="headerAlert rounded-none">
          <Trans i18nKey="BundleItemDetailPage.itemNotAvailable">This item is unavailable.</Trans>
        </Alert>
      )}
    </div>
  )
}
