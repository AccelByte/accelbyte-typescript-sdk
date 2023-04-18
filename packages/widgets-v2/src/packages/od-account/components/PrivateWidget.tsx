/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { FetchStatus } from '~/constants/fetch-statuses'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useHistory } from '~/hooks/routes/useHistory'
import { useSdk } from '~/hooks/useSdk'
import React, { useEffect } from 'react'
import { IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

export const PrivateWidget = ({ children }: { children: React.ReactNode }) => {
  const {
    state: { user, fetchUserStatus }
  } = useUserInfo()
  const { state: historyState } = useHistory()
  const [sdk] = useSdk()

  useEffect(() => {
    if (!user && fetchUserStatus !== FetchStatus.FETCHING) {
      const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL(historyState.location.pathname)
      window.location.replace(loginURL)
    }
  }, [])

  return <>{children}</>
}
