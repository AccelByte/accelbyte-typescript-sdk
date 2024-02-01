/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { NotificationTemplateResponse } from './NotificationTemplateResponse.js'

export const NotificationTemplateResponseArray = z.array(NotificationTemplateResponse)

export interface NotificationTemplateResponseArray extends z.TypeOf<typeof NotificationTemplateResponseArray> {}
