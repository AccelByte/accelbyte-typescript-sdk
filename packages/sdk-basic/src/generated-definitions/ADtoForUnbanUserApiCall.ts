/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoForUnbanUserApiCall = z.object({ comment: z.string().nullish(), userIds: z.array(z.string()) })

export interface ADtoForUnbanUserApiCall extends z.TypeOf<typeof ADtoForUnbanUserApiCall> {}
