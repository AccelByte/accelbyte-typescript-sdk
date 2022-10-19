/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const GetUserMappingV3 = z.object({ namespace: z.string(), userId: z.string() })

export type GetUserMappingV3 = z.TypeOf<typeof GetUserMappingV3>
