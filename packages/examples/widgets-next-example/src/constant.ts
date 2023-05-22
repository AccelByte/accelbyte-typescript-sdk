/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import z from 'zod'
import { ItemInfo } from '@accelbyte/sdk-platform'

export const ItemType = ItemInfo.shape.itemType
export type ItemType = z.infer<typeof ItemType>

export const AppType = ItemInfo.shape.appType.unwrap().unwrap()
export type AppType = z.infer<typeof AppType>
