/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SlotConfigUpdate = z.object({ maxSlotSize: z.number().int().nullish(), maxSlots: z.number().int().nullish() })

export interface SlotConfigUpdate extends z.TypeOf<typeof SlotConfigUpdate> {}
