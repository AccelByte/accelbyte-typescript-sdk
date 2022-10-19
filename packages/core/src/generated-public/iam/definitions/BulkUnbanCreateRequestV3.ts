/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { UserUnbanCreateRequestV3 } from './UserUnbanCreateRequestV3'

export const BulkUnbanCreateRequestV3 = z.object({ bans: z.array(UserUnbanCreateRequestV3).nullish() })

export type BulkUnbanCreateRequestV3 = z.TypeOf<typeof BulkUnbanCreateRequestV3>
