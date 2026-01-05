/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CreateTemplateRequest = z.object({ templateContent: z.string(), templateLanguage: z.string(), templateSlug: z.string() })

export interface CreateTemplateRequest extends z.TypeOf<typeof CreateTemplateRequest> {}
