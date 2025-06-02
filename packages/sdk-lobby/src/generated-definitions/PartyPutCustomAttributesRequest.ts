/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const PartyPutCustomAttributesRequest = z.object({ custom_attribute: z.record(z.any()), updatedAt: z.number().int() })

export interface PartyPutCustomAttributesRequest extends z.TypeOf<typeof PartyPutCustomAttributesRequest> {}
