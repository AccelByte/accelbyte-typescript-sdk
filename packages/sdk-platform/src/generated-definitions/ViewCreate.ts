/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization.js'

export const ViewCreate = z.object({ displayOrder: z.number().int(), localizations: z.record(Localization), name: z.string() })

export interface ViewCreate extends z.TypeOf<typeof ViewCreate> {}
