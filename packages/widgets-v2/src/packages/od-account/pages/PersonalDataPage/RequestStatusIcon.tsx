/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { DataRetrievalStatus } from '@od-account/utils/AccountUtils'
import { CircleIconStatus } from '@od-components/components/Icons/CircleIconStatus'
import React from 'react'

export function requestStatusIcon(status?: DataRetrievalStatus) {
  switch (status) {
    case DataRetrievalStatus.enum.Completed:
      return <CircleIconStatus className="completed" />
    case DataRetrievalStatus.enum.Pending:
      return <CircleIconStatus className="pending" />
    case DataRetrievalStatus.enum.Failed:
      return <CircleIconStatus className="failed" />
    case DataRetrievalStatus.enum.InProgress:
      return <CircleIconStatus className="inProgress" />
    case DataRetrievalStatus.enum.Expired:
      return <CircleIconStatus className="failed" />
    default:
      return <CircleIconStatus className="pending" />
  }
}
