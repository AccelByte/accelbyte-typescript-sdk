/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { OptionBoxItem } from './OptionBoxItem'

export const OptionBoxConfig = z.object({ boxItems: z.array(OptionBoxItem).nullish() })

export type OptionBoxConfig = z.TypeOf<typeof OptionBoxConfig>
