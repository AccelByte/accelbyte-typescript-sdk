/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DeletionData = z.object({ DisplayName: z.string(), RequestDate: z.string(), Status: z.string(), UserID: z.string() })

export type DeletionData = z.TypeOf<typeof DeletionData>
