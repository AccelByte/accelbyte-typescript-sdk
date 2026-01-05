/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DictionaryWithChildren } from './DictionaryWithChildren.js'

export const DictionaryQueryResult = z.object({ data: z.array(DictionaryWithChildren), next: z.string(), previous: z.string() })

export interface DictionaryQueryResult extends z.TypeOf<typeof DictionaryQueryResult> {}
