/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ModelsProfanityFilter = z.object({ filter: z.string(), listName: z.string(), namespace: z.string(), note: z.string() })

export interface ModelsProfanityFilter extends z.TypeOf<typeof ModelsProfanityFilter> {}
