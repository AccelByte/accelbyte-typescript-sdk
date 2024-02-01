/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserUnbanCreateRequestV3 = z.object({ banId: z.string(), userId: z.string() })

export interface UserUnbanCreateRequestV3 extends z.TypeOf<typeof UserUnbanCreateRequestV3> {}
