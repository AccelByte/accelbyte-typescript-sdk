/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Paging = z.object({ next: z.string().nullish(), previous: z.string().nullish() })

export interface Paging extends z.TypeOf<typeof Paging> {}
