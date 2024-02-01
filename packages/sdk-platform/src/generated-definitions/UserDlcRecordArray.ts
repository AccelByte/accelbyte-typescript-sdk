/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserDlcRecord } from './UserDlcRecord.js'

export const UserDlcRecordArray = z.array(UserDlcRecord)

export interface UserDlcRecordArray extends z.TypeOf<typeof UserDlcRecordArray> {}
