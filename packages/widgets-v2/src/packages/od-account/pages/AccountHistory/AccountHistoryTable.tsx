/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { Trans } from 'react-i18next'
import { DateUtils } from '~/utils/DateUtils'
import { EditorTypePreview } from './EditorTypePreview'
import { EventV2 } from '@accelbyte/sdk-event'
import { EditableInputWithHistory } from './AccountHistoryPageDetail'
import { Loading } from '~/packages/od-components/components/Loading/Loading'
import { AccountHistoryErrorFetchingData } from './AccountHistoryErrorFetchingData'

export const AccountHistoryTable = ({
  editHistoryList,
  activeType,
  isLoading,
  error
}: {
  editHistoryList: EventV2[] | null
  activeType: EditableInputWithHistory
  isLoading: boolean
  error?: Error | null
}) => {
  const getFirstColumnLabel = () => {
    if (activeType === EditableInputWithHistory.enum.displayname) {
      return <Trans i18nKey="DisplayNameAccountHistoryPage.displayName">Display Name</Trans>
    }
    if (activeType === EditableInputWithHistory.enum.email) {
      return <Trans i18nKey="EmailAddressAccountHistoryPage.emailAddress">Email Address</Trans>
    }

    return null
  }

  const getFirstColumnValue = (editHistory: EventV2) => {
    if (activeType === EditableInputWithHistory.enum.displayname) {
      return editHistory?.payload?.userInformation?.displayName || '-'
    }
    if (activeType === EditableInputWithHistory.enum.email) {
      return editHistory?.payload?.userAccount?.emailAddress || '-'
    }

    return null
  }

  if (isLoading) {
    return <Loading className="loading" />
  }

  if (error) {
    return <AccountHistoryErrorFetchingData />
  }

  if (!editHistoryList || editHistoryList.length === 0) {
    return (
      <p className="noData">
        <Trans i18nKey="AccountHistoryPage.Detail.noData">There is no history to show here</Trans>
      </p>
    )
  }

  return (
    <div>
      <table className="historyTable common">
        <thead>
          <tr>
            {getFirstColumnLabel() && <th>{getFirstColumnLabel()}</th>}
            <th>
              <Trans i18nKey="DisplayNameAccountHistoryPage.date">Date</Trans>
            </th>
            {activeType !== EditableInputWithHistory.enum.password && (
              <th>
                <Trans i18nKey="DisplayNameAccountHistoryPage.editedBy">Edited By</Trans>
              </th>
            )}
          </tr>
        </thead>
        <tbody>
          {editHistoryList.map(history => (
            <tr key={history.timestamp}>
              {getFirstColumnValue(history) && <td>{getFirstColumnValue(history)}</td>}
              <td>{DateUtils.formatDate(history.timestamp, { type: 'dynamic', format: 'LL' })}</td>
              {activeType !== EditableInputWithHistory.enum.password && (
                <td>
                  <EditorTypePreview history={history} />
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
