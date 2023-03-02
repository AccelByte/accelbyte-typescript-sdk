/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TwitchSyncResult } from './TwitchSyncResult'

export const TwitchSyncResultArray = z.array(TwitchSyncResult)

export interface TwitchSyncResultArray extends z.TypeOf<typeof TwitchSyncResultArray> {}
