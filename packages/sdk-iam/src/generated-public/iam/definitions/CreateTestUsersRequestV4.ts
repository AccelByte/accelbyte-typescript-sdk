/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTestUsersRequestV4 = z.object({ count: z.number().int() })

export interface CreateTestUsersRequestV4 extends z.TypeOf<typeof CreateTestUsersRequestV4> {}
