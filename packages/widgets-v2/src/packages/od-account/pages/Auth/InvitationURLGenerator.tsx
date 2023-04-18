/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Loading } from '@od-components/components/Loading/Loading'
import React, { useEffect } from 'react'
import styles from './URLGenerator.module.scss'
import { useSdk } from '~/hooks/useSdk'
import { IamUserAuthorizationClient } from '@accelbyte/sdk-iam'

export const InvitationURLGenerator = ({ invitationId }: { invitationId: string }) => {
  const [sdk] = useSdk()

  useEffect(() => {
    tryInvite()
  }, [])

  const tryInvite = () => {
    const invitationURL = new IamUserAuthorizationClient(sdk).createLoginURL(null, `invitation/${invitationId}`)
    window.location.replace(invitationURL)
  }

  return (
    <div className={styles.invitationURLGenerator}>
      <div className="loadingContainer">
        <Loading />
      </div>
    </div>
  )
}
