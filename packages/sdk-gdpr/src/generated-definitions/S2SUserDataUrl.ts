/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const S2SUserDataUrl = z.object({ url: z.string() })

export interface S2SUserDataUrl extends z.TypeOf<typeof S2SUserDataUrl> {}
