/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Ban = z.object({ Ban: z.string(), Description: z.string() })

export interface Ban extends z.TypeOf<typeof Ban> {}
