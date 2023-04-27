/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { IapItemFlatEntry } from './IapItemFlatEntry.js'

export const IapItemMappingInfo = z.object({ data: z.array(IapItemFlatEntry).nullish() })

export interface IapItemMappingInfo extends z.TypeOf<typeof IapItemMappingInfo> {}
