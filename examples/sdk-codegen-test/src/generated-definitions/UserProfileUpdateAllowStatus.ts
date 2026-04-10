/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { FieldUpdateAllowStatus } from './FieldUpdateAllowStatus.js'

export const UserProfileUpdateAllowStatus = z.object({ status: z.array(FieldUpdateAllowStatus) })

export interface UserProfileUpdateAllowStatus extends z.TypeOf<typeof UserProfileUpdateAllowStatus> {}
