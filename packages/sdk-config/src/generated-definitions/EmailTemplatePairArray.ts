/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { EmailTemplatePair } from './EmailTemplatePair.js'

export const EmailTemplatePairArray = z.array(EmailTemplatePair)

export interface EmailTemplatePairArray extends z.TypeOf<typeof EmailTemplatePairArray> {}
