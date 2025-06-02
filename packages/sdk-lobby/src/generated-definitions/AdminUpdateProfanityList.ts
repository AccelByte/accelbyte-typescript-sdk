/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const AdminUpdateProfanityList = z.object({ isEnabled: z.boolean(), isMandatory: z.boolean(), newName: z.string() })

export interface AdminUpdateProfanityList extends z.TypeOf<typeof AdminUpdateProfanityList> {}
