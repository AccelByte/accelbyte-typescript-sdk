/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminSetProfanityRuleForNamespaceRequest = z.object({ rule: z.string() })

export interface AdminSetProfanityRuleForNamespaceRequest extends z.TypeOf<typeof AdminSetProfanityRuleForNamespaceRequest> {}
