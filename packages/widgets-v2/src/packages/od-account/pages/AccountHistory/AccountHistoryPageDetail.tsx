/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DatePicker } from '@od-components/components/DatePicker/DatePicker'
import React, { useEffect, useState } from 'react'
import { Trans } from 'react-i18next'
import { z } from 'zod'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { useAccountHistory } from '~/hooks/event/useAccountHistory'
import { UrlUtils } from '@od-shared/utils/UrlUtils'
import { useHistory } from '~/hooks/routes/useHistory'
import { FetchStatus } from '~/constants/fetch-statuses'
import { endOfDay, subYears } from 'date-fns'
import { AccountHistoryTable } from './AccountHistoryTable'
import { AccountHistoryPagination } from './AccountHistoryPagination'

export const EditableInputWithHistory = z.enum(['email', 'password', 'displayname', 'dateofbirth'])
export type EditableInputWithHistory = z.infer<typeof EditableInputWithHistory>

const DateType = z.enum(['startDate', 'endDate'])
type DateType = z.infer<typeof DateType>

const PAGE_LIMIT = 10
const LAST_YEAR = subYears(new Date(), 1)

const getLimit = (pageSize?: number) => {
  return pageSize || PAGE_LIMIT
}

const getOffset = (page: number, pageSize?: number): number => {
  return page ? (page - 1) * getLimit(pageSize) : 0
}

const formatDate = (date: Date) => {
  return date.toISOString()
}

export interface AccountHistoryPageDetailProps {
  activeType: EditableInputWithHistory
}

interface State {
  startDate: string
  endDate: string
  currentPage: number
}

export const AccountHistoryPageDetail = ({ activeType }: AccountHistoryPageDetailProps) => {
  const [state, setState] = useState<State>({
    startDate: formatDate(LAST_YEAR),
    endDate: formatDate(endOfDay(new Date())),
    currentPage: 0
  })
  const { state: userState } = useUserInfo()
  const { state: accountHistoryState, mutations: accountHistoryMutations } = useAccountHistory()
  const { state: historyState } = useHistory()

  const updateState = (state: Partial<State>) => {
    setState(oldState => ({
      ...oldState,
      ...state
    }))
  }

  useEffect(() => {
    const userId = userState.user?.userId
    const page = Number(UrlUtils.silentSearchParamsBuilder(historyState.location.search).get('page'))
    const startDate = UrlUtils.silentSearchParamsBuilder(historyState.location.search).get('startdate') || ''
    const endDate = UrlUtils.silentSearchParamsBuilder(historyState.location.search).get('enddate') || ''
    const hasValidPage = !Number.isNaN(page) && page >= 1

    if (!hasValidPage) {
      historyState.replace(`${historyState.location.pathname}?page=1`)
      return
    }

    if (startDate) {
      updateState({ startDate })
    }
    if (endDate) {
      updateState({ endDate })
    }
    if (page) {
      updateState({ currentPage: page })
    }

    if (userId && page) {
      accountHistoryMutations.fetchAccountHistory({
        userId,
        startDate,
        endDate,
        pageSize: getLimit(),
        offset: getOffset(page),
        type: activeType
      })
    }
  }, [userState.user?.userId, historyState.location.search, historyState.location.pathname, activeType])

  const updateUrlParamByDateChange = (startDate: string, endDate: string) => {
    if (accountHistoryState.accountHistory) {
      const searchParams = new URLSearchParams({ startdate: startDate, enddate: endDate })
      const filterDate = startDate && endDate ? `&${searchParams}` : ''

      historyState.replace(`${historyState.location.pathname}?page=1${filterDate}`)
    }
  }

  const handleChangeDatePicker = (date: Date | [Date, Date] | null, dateType: DateType) => {
    if (date && !Array.isArray(date)) {
      if (dateType === DateType.enum.startDate) {
        const startDate = formatDate(date)
        updateState({ startDate })

        if (state.endDate) {
          updateUrlParamByDateChange(startDate, state.endDate)
        }
      }

      if (dateType === DateType.enum.endDate) {
        const endDate = formatDate(endOfDay(date))
        updateState({ endDate })

        if (state.startDate) {
          updateUrlParamByDateChange(state.startDate, endDate)
        }
      }
    }
  }

  return (
    <>
      <div className="datepicker">
        <Trans i18nKey="AccountHistoryPage.Detail.dateRange">Date Range:</Trans>
        <div className="startDatePicker">
          <DatePicker
            key="startDatePicker"
            selected={new Date(state.startDate)}
            onChange={date => handleChangeDatePicker(date, DateType.enum.startDate)}
            value={state.startDate}
            maxDate={new Date(state.endDate)}
          />
        </div>
        <DatePicker
          key="endDatePicker"
          onChange={date => handleChangeDatePicker(date, DateType.enum.endDate)}
          value={state.endDate}
          minDate={new Date(state.startDate)}
          maxDate={new Date()}
        />
      </div>

      <AccountHistoryTable
        activeType={activeType}
        editHistoryList={accountHistoryState.accountHistory?.data || null}
        isLoading={accountHistoryState.accountHistoryFetchStatus === FetchStatus.FETCHING}
        error={accountHistoryState.accountHistoryError}
      />
      <AccountHistoryPagination
        paginationPath={historyState.location.pathname}
        paging={accountHistoryState.accountHistory?.paging}
        currentPage={state.currentPage}
        startDate={state.startDate}
        endDate={state.endDate}
      />
    </>
  )
}
