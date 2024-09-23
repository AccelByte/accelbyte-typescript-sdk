/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DsHistoryEvent } from './DsHistoryEvent.js'
import { PagingInfo } from './PagingInfo.js'

export const DsHistoryList = z.object({ events: z.array(DsHistoryEvent), paging: PagingInfo })

export interface DsHistoryList extends z.TypeOf<typeof DsHistoryList> {}
