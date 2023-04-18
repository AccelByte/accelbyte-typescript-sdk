/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { AlertType } from '@od-shared/models/Alert'
import { AccountConflictInformation } from '@od-shared/models/Linked'
import { UserHelper } from '@od-shared/utils/UserHelper'
import { ERROR_LINK_ANOTHER_3RD_PARTY_ACCOUNT } from '@accelbyte/sdk'
import React from 'react'
import { Trans } from 'react-i18next'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { UserLinkedPlatformV3 } from '@accelbyte/sdk-iam'

interface Props {
  error: Error | unknown | null
  accountConflictInformation: AccountConflictInformation | null
  onDismiss?: () => void
}

export const LinkedAccountsErrorAlert = (props: Props) => {
  const { state: userState } = useUserInfo()
  const { error, accountConflictInformation, onDismiss } = props

  if (accountConflictInformation?.errorCode === ERROR_LINK_ANOTHER_3RD_PARTY_ACCOUNT && accountConflictInformation) {
    const platformName = UserHelper.getPlatformName(accountConflictInformation.platformId)
    const customAttributes: { [key: string]: UserLinkedPlatformV3 } = userState.userProfile?.customAttributes || {}
    const { displayName, platformUserId } = customAttributes[accountConflictInformation.platformId] || {
      displayName: '',
      platformUserId: ''
    }

    return (
      <Alert className="mb-6" type={AlertType.danger} onDismiss={onDismiss}>
        <Trans i18nKey="LinkedAccountpage.cannotLinkWithAnotherAccount">
          Unable to link this {{ platformName }} account. Please link the {{ platformName }} account previously linked to this account :{' '}
          {{ displayName }} ( {{ platformUserId }} ).
        </Trans>
      </Alert>
    )
  }

  if (accountConflictInformation) {
    const platformName = UserHelper.getPlatformName(accountConflictInformation.platformId)
    return (
      <Alert className="mb-6" type={AlertType.danger} onDismiss={onDismiss}>
        <Trans i18nKey="LinkedAccountPage.linkConflictError">
          That {{ platformName }} account is already linked with another account.
          <br /> Please unlink it first or try linking a different {{ platformName }} account.
        </Trans>
      </Alert>
    )
  }

  if (error) {
    return (
      <Alert type={AlertType.danger} className={'alert'} onDismiss={onDismiss}>
        <CommonError error={error} />
      </Alert>
    )
  }

  return null
}
