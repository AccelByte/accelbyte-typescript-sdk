/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DictionaryInsertRequest } from './DictionaryInsertRequest.js'

export const DictionaryInsertBulkRequest = z.object({ dictionaries: z.array(DictionaryInsertRequest) })

export interface DictionaryInsertBulkRequest extends z.TypeOf<typeof DictionaryInsertBulkRequest> {}
