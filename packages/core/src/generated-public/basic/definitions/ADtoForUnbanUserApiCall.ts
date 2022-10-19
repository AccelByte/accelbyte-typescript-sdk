/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoForUnbanUserApiCall = z.object({ userIds: z.array(z.string()), comment: z.string().nullish() })

export type ADtoForUnbanUserApiCall = z.TypeOf<typeof ADtoForUnbanUserApiCall>
