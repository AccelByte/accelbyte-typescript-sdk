/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization.js'

export const ViewUpdate = z.object({
  displayOrder: z.number().int().nullish(),
  localizations: z.record(Localization).nullish(),
  name: z.string()
})

export interface ViewUpdate extends z.TypeOf<typeof ViewUpdate> {}
