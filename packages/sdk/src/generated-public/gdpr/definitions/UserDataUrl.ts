/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserDataUrl = z.object({ URL: z.string() })

export type UserDataUrl = z.TypeOf<typeof UserDataUrl>
