/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OptionBoxItem = z.object({ itemId: z.string().nullish(), itemSku: z.string().nullish(), count: z.number().int().nullish() })

export type OptionBoxItem = z.TypeOf<typeof OptionBoxItem>
