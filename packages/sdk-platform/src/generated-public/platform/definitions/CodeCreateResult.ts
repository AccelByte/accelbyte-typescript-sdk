/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CodeCreateResult = z.object({ numCreated: z.number().int() })

export interface CodeCreateResult extends z.TypeOf<typeof CodeCreateResult> {}
