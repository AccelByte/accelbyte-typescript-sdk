/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CustomConfig = z.object({ GRPCAddress: z.string() })

export interface CustomConfig extends z.TypeOf<typeof CustomConfig> {}
