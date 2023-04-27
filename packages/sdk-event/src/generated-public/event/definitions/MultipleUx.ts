/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Ux } from './Ux.js'

export const MultipleUx = z.object({ UX: z.array(Ux) })

export interface MultipleUx extends z.TypeOf<typeof MultipleUx> {}
