/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AppMessageDeclaration = z.object({
  Attributes: z.array(z.string()),
  Code: z.string(),
  CodeName: z.string(),
  Section: z.string(),
  Service: z.string(),
  Text: z.string()
})

export interface AppMessageDeclaration extends z.TypeOf<typeof AppMessageDeclaration> {}
