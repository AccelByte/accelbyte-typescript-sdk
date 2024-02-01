/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { TemplateResponse } from './TemplateResponse.js'

export const TemplateResponseArray = z.array(TemplateResponse)

export interface TemplateResponseArray extends z.TypeOf<typeof TemplateResponseArray> {}
