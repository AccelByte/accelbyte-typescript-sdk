/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AppStore, StoreWidget } from '@accelbyte/widgets-v2'
import { useRouter } from 'next/router'
import React from 'react'

export default function Apps() {
  const router = useRouter()
  const page = router.query.page ? Number(router.query.page) : 1

  return <AppStore page={page} />
}
