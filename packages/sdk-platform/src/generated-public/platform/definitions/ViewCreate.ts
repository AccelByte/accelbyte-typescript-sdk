/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization.js'

export const ViewCreate = z.object({ name: z.string(), displayOrder: z.number().int(), localizations: z.record(Localization) })

export interface ViewCreate extends z.TypeOf<typeof ViewCreate> {}
