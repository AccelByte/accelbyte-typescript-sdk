/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const TagCreateRequestV3 = z.object({ tagName: z.string() })

export interface TagCreateRequestV3 extends z.TypeOf<typeof TagCreateRequestV3> {}
