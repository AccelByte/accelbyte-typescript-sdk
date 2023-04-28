/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { IngameItemStoreDetail } from '@accelbyte/widgets-v2'
import { useRouter } from 'next/router'
import React from 'react'

export default function IngameItemStoreDetailPage() {
  const router = useRouter()
  const { itemInfo } = router.query

  if (!itemInfo) return <div>Not found</div>

  return <IngameItemStoreDetail itemId={itemInfo as string} />
}
