/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Pagination } from '@od-components/components/Pagination/Pagination'
import React from 'react'

interface AccountHistoryPaginationProps {
  paging?: {
    first?: string | null
    last?: string | null
    next?: string | null
    previous?: string | null
  }
  paginationPath: string
  currentPage: number
  startDate: string
  endDate: string
}

export const AccountHistoryPagination = ({ paginationPath, currentPage, startDate, endDate, paging }: AccountHistoryPaginationProps) => {
  const hasNext = !!paging?.next
  const hasPrev = !!paging?.previous

  const filterDate = new URLSearchParams({ startdate: startDate, enddate: endDate })
  return (
    <div className="paginationContainer">
      <Pagination
        next={hasNext && `${paginationPath}?page=${currentPage + 1}&${filterDate}`}
        prev={hasPrev && `${paginationPath}?page=${currentPage - 1}&${filterDate}`}
      />
    </div>
  )
}
