/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization.js'

export const NotificationTemplateResponse = z.object({ templateLocalizations: z.array(Localization), templateSlug: z.string() })

export interface NotificationTemplateResponse extends z.TypeOf<typeof NotificationTemplateResponse> {}
