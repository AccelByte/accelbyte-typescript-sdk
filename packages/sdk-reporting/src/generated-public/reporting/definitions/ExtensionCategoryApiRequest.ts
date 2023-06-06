/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExtensionCategoryApiRequest = z.object({
  extensionCategory: z.string(),
  extensionCategoryName: z.string(),
  serviceSource: z.string()
})

export interface ExtensionCategoryApiRequest extends z.TypeOf<typeof ExtensionCategoryApiRequest> {}
