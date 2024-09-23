/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { GameProfileAdminApi } from './generated-admin/GameProfileAdminApi.js'
import { GlobalStatisticAdminApi } from './generated-admin/GlobalStatisticAdminApi.js'
import { SlotAdminApi } from './generated-admin/SlotAdminApi.js'
import { SlotConfigAdminApi } from './generated-admin/SlotConfigAdminApi.js'
import { StatConfigurationAdminApi } from './generated-admin/StatConfigurationAdminApi.js'
import { StatCycleConfigurationAdminApi } from './generated-admin/StatCycleConfigurationAdminApi.js'
import { UserStatisticAdminApi } from './generated-admin/UserStatisticAdminApi.js'
import { UserStatisticCycleAdminApi } from './generated-admin/UserStatisticCycleAdminApi.js'
import { GameProfileApi } from './generated-public/GameProfileApi.js'
import { GlobalStatisticApi } from './generated-public/GlobalStatisticApi.js'
import { SlotApi } from './generated-public/SlotApi.js'
import { StatConfigurationApi } from './generated-public/StatConfigurationApi.js'
import { StatCycleConfigurationApi } from './generated-public/StatCycleConfigurationApi.js'
import { UserStatisticApi } from './generated-public/UserStatisticApi.js'
import { UserStatisticCycleApi } from './generated-public/UserStatisticCycleApi.js'

console.log(`${name}@${version}`)

const apis = {
  SlotConfigAdminApi,
  StatConfigurationAdminApi,
  StatCycleConfigurationAdminApi,
  UserStatisticAdminApi,
  GlobalStatisticAdminApi,
  SlotAdminApi,
  GameProfileAdminApi,
  UserStatisticCycleAdminApi,
  GameProfileApi,
  StatConfigurationApi,
  StatCycleConfigurationApi,
  UserStatisticApi,
  GlobalStatisticApi,
  SlotApi,
  UserStatisticCycleApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Social = apis
