/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Alert } from '@od-components/components/Alert/Alert'
import { CommonError } from '@od-components/components/CommonError'
import { Loading } from '@od-components/components/Loading/Loading'
import { AlertType } from '@od-shared/models/Alert'
import React, { useEffect } from 'react'
import { Trans } from 'react-i18next'
import { AccountMainSection, AccountMainSectionBody, AccountMainSectionHeader } from '../AccountMainSection/AccountMainSection'
import { PrivacyRecords } from './PrivacyRecords'
import styles from './PrivacyRecordsPage.module.scss'
import { mockPrivacyPolicies } from '@od-shared/mocks/MockVars'
import { useLegal } from '~/hooks/legal/useLegal'
import { FetchStatus } from '~/constants/fetch-statuses'

interface Props {
  isPreviewMode?: boolean
}

export const LegalAgreementsPage = ({ isPreviewMode }: Props) => {
  const {
    state: { acceptedAgreements: acceptedAgreementsState, acceptedAgreementsError, acceptedAgreementsFetchStatus },
    mutations: { fetchAcceptedAgreements }
  } = useLegal()

  useEffect(() => {
    if (isPreviewMode) return
    fetchAcceptedAgreements()
  }, [])

  const acceptedAgreements = !isPreviewMode ? acceptedAgreementsState : mockPrivacyPolicies
  const isLoading = acceptedAgreementsFetchStatus === FetchStatus.FETCHING

  return (
    <AccountMainSection className={styles.accountPrivacyRecordsPage}>
      <AccountMainSectionHeader>
        <Trans i18nKey={'PrivacyRecordsPage.title'}>Legal Agreements</Trans>
      </AccountMainSectionHeader>
      <AccountMainSectionBody className={styles.mainBody}>
        {!isLoading && acceptedAgreementsError && (
          <Alert type={AlertType.danger}>
            <CommonError error={acceptedAgreementsError} />
          </Alert>
        )}
        {isLoading && <Loading />}
        {!isLoading && Array.isArray(acceptedAgreements) && (
          <>
            {acceptedAgreements.length > 0 ? (
              <PrivacyRecords agreements={acceptedAgreements} />
            ) : (
              <p>
                <Trans i18nKey={'PrivacyRecordsPage.noRecord'}>There is no record to show</Trans>
              </p>
            )}
          </>
        )}
      </AccountMainSectionBody>
    </AccountMainSection>
  )
}
