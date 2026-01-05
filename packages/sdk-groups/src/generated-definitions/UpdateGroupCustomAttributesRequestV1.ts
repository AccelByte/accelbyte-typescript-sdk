/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UpdateGroupCustomAttributesRequestV1 = z.object({ customAttributes: z.record(z.any()) })

export interface UpdateGroupCustomAttributesRequestV1 extends z.TypeOf<typeof UpdateGroupCustomAttributesRequestV1> {}
