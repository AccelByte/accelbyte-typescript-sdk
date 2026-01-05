/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Description = z.object({ 'en-US': z.string(), 'zh-CN': z.string() })

export interface Description extends z.TypeOf<typeof Description> {}
