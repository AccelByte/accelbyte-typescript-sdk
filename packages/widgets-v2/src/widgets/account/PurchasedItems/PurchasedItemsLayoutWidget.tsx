/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { PurchasedItemsLayout } from '@od-account/pages/PurchasedItems/PurchasedItemsLayout'

interface Props {
  children: React.ReactNode
  isPreviewMode?: boolean
}

export function PurchasedItemsLayoutWidget(props: Omit<Props, 'isPreviewMode'>) {
  return <PurchasedItemsLayout {...props} />
}
