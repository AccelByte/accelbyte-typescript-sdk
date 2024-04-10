/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { GetSessionHistoryDetailedResponseItem } from './GetSessionHistoryDetailedResponseItem.js'

export const GetSessionHistoryDetailedResponseItemArray = z.array(GetSessionHistoryDetailedResponseItem)

export interface GetSessionHistoryDetailedResponseItemArray extends z.TypeOf<typeof GetSessionHistoryDetailedResponseItemArray> {}
