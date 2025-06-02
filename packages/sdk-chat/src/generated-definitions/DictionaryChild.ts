/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DictionaryChild = z.object({ id: z.string(), word: z.string() })

export interface DictionaryChild extends z.TypeOf<typeof DictionaryChild> {}
