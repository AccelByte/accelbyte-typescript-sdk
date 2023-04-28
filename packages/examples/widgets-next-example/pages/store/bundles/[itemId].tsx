/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { BundleStoreDetail } from '@accelbyte/widgets-v2'
import { useRouter } from 'next/router'
import React from 'react'

export default function Payment() {
  const router = useRouter()
  const { itemId } = router.query

  if (!router.query) return <div>Not found</div>

  return <BundleStoreDetail itemId={itemId as string} />
}
