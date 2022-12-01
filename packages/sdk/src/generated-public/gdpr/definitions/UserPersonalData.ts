/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserPersonalData = z.object({ DataExpirationDate: z.string(), RequestDate: z.string(), Status: z.string() })

export type UserPersonalData = z.TypeOf<typeof UserPersonalData>
