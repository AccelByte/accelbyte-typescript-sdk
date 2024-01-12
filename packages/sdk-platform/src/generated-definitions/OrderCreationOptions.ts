/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const OrderCreationOptions = z.object({ skipPriceValidation: z.boolean().nullish() })

export interface OrderCreationOptions extends z.TypeOf<typeof OrderCreationOptions> {}
