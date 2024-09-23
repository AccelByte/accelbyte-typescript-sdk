/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DnsData = z.object({ data: z.string(), host: z.string(), type: z.string(), valid: z.boolean() })

export interface DnsData extends z.TypeOf<typeof DnsData> {}
