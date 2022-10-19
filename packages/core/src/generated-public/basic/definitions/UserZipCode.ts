/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserZipCode = z.object({ zipCode: z.string().nullish() })

export type UserZipCode = z.TypeOf<typeof UserZipCode>
