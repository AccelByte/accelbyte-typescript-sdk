/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Trans } from 'react-i18next'
import styles from './PrivacyRecords.module.scss'
import { DateUtils } from '~/utils/DateUtils'
import { RetrieveAcceptedAgreementResponse } from '@accelbyte/sdk-legal'

const PrivacyRecordItem = ({ agreement }: { agreement: RetrieveAcceptedAgreementResponse }) => {
  return (
    <tr>
      <td>{agreement.policyName}</td>
      <td>{agreement.displayVersion}</td>
      <td>{DateUtils.formatDate(agreement.signingDate, { type: 'dynamic', format: 'LL' })}</td>
    </tr>
  )
}

interface Props {
  agreements: RetrieveAcceptedAgreementResponse[]
}

export const PrivacyRecords = ({ agreements }: Props) => {
  return (
    <table className={styles.privacyRecordsTable}>
      <thead>
        <tr>
          <th>
            <Trans i18nKey={'PrivacyRecordsPage.PrivacyRecords.document'}>Document</Trans>
          </th>
          <th>
            <Trans i18nKey={'PrivacyRecordsPage.PrivacyRecords.version'}>Version</Trans>
          </th>
          <th>
            <Trans i18nKey={'PrivacyRecordsPage.PrivacyRecords.date'}>Date</Trans>
          </th>
        </tr>
      </thead>
      <tbody>
        {agreements.map(agreement => (
          <PrivacyRecordItem key={agreement.id} agreement={agreement} />
        ))}
      </tbody>
    </table>
  )
}
