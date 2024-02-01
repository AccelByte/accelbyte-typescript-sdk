/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPersonalData = z.object({ DataExpirationDate: z.string(), RequestDate: z.string(), Status: z.string() })

export interface UserPersonalData extends z.TypeOf<typeof UserPersonalData> {}
