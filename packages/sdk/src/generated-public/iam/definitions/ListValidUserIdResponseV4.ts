/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ValidUserIdResponseV4 } from './ValidUserIdResponseV4'

export const ListValidUserIdResponseV4 = z.object({ data: z.array(ValidUserIdResponseV4) })

export type ListValidUserIdResponseV4 = z.TypeOf<typeof ListValidUserIdResponseV4>
