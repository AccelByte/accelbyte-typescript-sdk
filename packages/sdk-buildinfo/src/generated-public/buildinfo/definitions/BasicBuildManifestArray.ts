/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'
import { BasicBuildManifest } from './BasicBuildManifest.js'

export const BasicBuildManifestArray = z.array(BasicBuildManifest)

export interface BasicBuildManifestArray extends z.TypeOf<typeof BasicBuildManifestArray> {}
