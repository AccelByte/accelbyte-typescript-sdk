/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BoxItem } from './BoxItem'

export const OptionBoxConfig = z.object({ boxItems: z.array(BoxItem).nullish() })

export type OptionBoxConfig = z.TypeOf<typeof OptionBoxConfig>
