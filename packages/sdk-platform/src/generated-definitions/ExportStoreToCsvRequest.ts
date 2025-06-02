/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExportStoreToCsvRequest = z.object({
  catalogType: z.enum(['APP', 'CATEGORY', 'ITEM', 'SECTION', 'VIEW']),
  fieldsToBeIncluded: z.array(z.string()).nullish(),
  idsToBeExported: z.array(z.string()).nullish(),
  storeId: z.string().nullish()
})

export interface ExportStoreToCsvRequest extends z.TypeOf<typeof ExportStoreToCsvRequest> {}
