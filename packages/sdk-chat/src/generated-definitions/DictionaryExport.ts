/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { DictionaryExportItem } from './DictionaryExportItem.js'

export const DictionaryExport = z.object({ dictionaries: z.array(DictionaryExportItem) })

export interface DictionaryExport extends z.TypeOf<typeof DictionaryExport> {}
