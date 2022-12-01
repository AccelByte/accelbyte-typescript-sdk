/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const NamespacePublisherInfo = z.object({ publisher: z.boolean().nullish(), publisherNamespace: z.string().nullish() })

export type NamespacePublisherInfo = z.TypeOf<typeof NamespacePublisherInfo>
