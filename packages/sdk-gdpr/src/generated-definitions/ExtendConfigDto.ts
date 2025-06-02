/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ExtendConfigDto = z.object({ appName: z.string(), namespace: z.string() })

export interface ExtendConfigDto extends z.TypeOf<typeof ExtendConfigDto> {}
