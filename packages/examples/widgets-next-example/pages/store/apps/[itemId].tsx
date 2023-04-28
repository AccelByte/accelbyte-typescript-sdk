/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { AppStoreDetail } from '@accelbyte/widgets-v2'
import { useRouter } from 'next/router'

export default function AppStoreDetailPage() {
  const router = useRouter()
  const { itemId } = router.query

  if (!router.query) return <div>Not found</div>

  return <AppStoreDetail itemId={itemId as string} />
}
