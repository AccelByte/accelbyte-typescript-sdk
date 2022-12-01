/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const BanUpdateRequest = z.object({ enabled: z.boolean(), skipNotif: z.boolean() })

export type BanUpdateRequest = z.TypeOf<typeof BanUpdateRequest>
