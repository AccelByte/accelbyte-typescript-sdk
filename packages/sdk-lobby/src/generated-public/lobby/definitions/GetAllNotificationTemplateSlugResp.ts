/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { Localization } from './Localization.js'
import { Pagination } from './Pagination.js'

export const GetAllNotificationTemplateSlugResp = z.object({ data: z.array(Localization), paging: Pagination })

export interface GetAllNotificationTemplateSlugResp extends z.TypeOf<typeof GetAllNotificationTemplateSlugResp> {}
