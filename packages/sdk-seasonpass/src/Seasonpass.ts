/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ExportAdminApi } from './generated-admin/ExportAdminApi.js'
import { PassAdminApi } from './generated-admin/PassAdminApi.js'
import { RewardAdminApi } from './generated-admin/RewardAdminApi.js'
import { SeasonAdminApi } from './generated-admin/SeasonAdminApi.js'
import { TierAdminApi } from './generated-admin/TierAdminApi.js'
import { RewardApi } from './generated-public/RewardApi.js'
import { SeasonApi } from './generated-public/SeasonApi.js'

console.log(`${name}@${version}`)

const apis = {
  ExportAdminApi,
  SeasonAdminApi,
  TierAdminApi,
  PassAdminApi,
  RewardAdminApi,
  SeasonApi,
  RewardApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Seasonpass = apis
