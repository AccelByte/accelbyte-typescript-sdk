/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { PurchasedItemsLayoutWidget } from './PurchasedItemsLayoutWidget'

export function PurchasedItemsWidget({ children }: { children: React.ReactNode }) {
  return <PurchasedItemsLayoutWidget>{children}</PurchasedItemsLayoutWidget>
}