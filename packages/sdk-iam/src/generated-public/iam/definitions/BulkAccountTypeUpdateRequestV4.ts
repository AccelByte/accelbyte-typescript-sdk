/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BulkAccountTypeUpdateRequestV4 = z.object({ testAccount: z.boolean(), userIds: z.array(z.string()) })

export interface BulkAccountTypeUpdateRequestV4 extends z.TypeOf<typeof BulkAccountTypeUpdateRequestV4> {}
