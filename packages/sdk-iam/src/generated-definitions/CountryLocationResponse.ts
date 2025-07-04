/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const CountryLocationResponse = z.object({ city: z.string(), countryCode: z.string(), countryName: z.string(), state: z.string() })

export interface CountryLocationResponse extends z.TypeOf<typeof CountryLocationResponse> {}
