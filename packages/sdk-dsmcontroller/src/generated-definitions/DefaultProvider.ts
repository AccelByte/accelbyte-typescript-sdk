/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DefaultProvider = z.object({ provider_name: z.string() })

export interface DefaultProvider extends z.TypeOf<typeof DefaultProvider> {}
