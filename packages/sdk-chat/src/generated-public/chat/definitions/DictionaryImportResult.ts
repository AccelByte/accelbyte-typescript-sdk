/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DictionaryWordChanges } from './DictionaryWordChanges.js'

export const DictionaryImportResult = z.object({ words: DictionaryWordChanges })

export interface DictionaryImportResult extends z.TypeOf<typeof DictionaryImportResult> {}
