/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const DownloadExportedAgreementsInCsvResponse = z.object({ done: z.boolean(), downloadUrl: z.string().nullish() })

export interface DownloadExportedAgreementsInCsvResponse extends z.TypeOf<typeof DownloadExportedAgreementsInCsvResponse> {}
