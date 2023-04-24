/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ADtoObjectForResettingUserStatItems = z.object({ statCode: z.string(), additionalData: z.record(z.any()).nullish() })

export interface ADtoObjectForResettingUserStatItems extends z.TypeOf<typeof ADtoObjectForResettingUserStatItems> {}
