/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ListEmailAddressRequest = z.object({ listEmailAddressRequest: z.array(z.string()) })

export type ListEmailAddressRequest = z.TypeOf<typeof ListEmailAddressRequest>
