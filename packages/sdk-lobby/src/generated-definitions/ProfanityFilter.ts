/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ProfanityFilter = z.object({ filter: z.string(), listName: z.string(), namespace: z.string(), note: z.string() })

export interface ProfanityFilter extends z.TypeOf<typeof ProfanityFilter> {}
