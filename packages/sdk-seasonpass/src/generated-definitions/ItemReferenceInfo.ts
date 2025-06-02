/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { ItemReference } from './ItemReference.js'

export const ItemReferenceInfo = z.object({ references: z.array(ItemReference).nullish() })

export interface ItemReferenceInfo extends z.TypeOf<typeof ItemReferenceInfo> {}
