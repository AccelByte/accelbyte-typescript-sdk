/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const EmailUpdateRequestV4 = z.object({ code: z.string(), emailAddress: z.string() })

export type EmailUpdateRequestV4 = z.TypeOf<typeof EmailUpdateRequestV4>
