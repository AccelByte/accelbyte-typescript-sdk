/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization'

export const ViewCreate = z.object({ name: z.string(), displayOrder: z.number().int(), localizations: z.record(Localization) })

export type ViewCreate = z.TypeOf<typeof ViewCreate>
