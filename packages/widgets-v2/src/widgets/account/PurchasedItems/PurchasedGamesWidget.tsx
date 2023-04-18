/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { PurchasedGames, PurchasedGamesProps } from '@od-account/pages/PurchasedItems/PurchasedGames'

export function PurchasedGamesWidget(props: Omit<PurchasedGamesProps, 'isPreviewMode'>) {
  return <PurchasedGames {...props} />
}
