/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CheckAvailabilityResponse = z.object({ Accessible: z.boolean(), PlatformErrorMessage: z.record(z.string()) })

export interface CheckAvailabilityResponse extends z.TypeOf<typeof CheckAvailabilityResponse> {}
