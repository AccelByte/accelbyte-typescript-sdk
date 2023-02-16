/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EmailUpdateRequestV4 = z.object({ code: z.string(), emailAddress: z.string() })

export interface EmailUpdateRequestV4 extends z.TypeOf<typeof EmailUpdateRequestV4> {}
