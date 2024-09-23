/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AccountAdminApi } from './generated-admin/AccountAdminApi.js'
import { AmsInfoAdminApi } from './generated-admin/AmsInfoAdminApi.js'
import { AmsQoSAdminApi } from './generated-admin/AmsQoSAdminApi.js'
import { ArtifactsAdminApi } from './generated-admin/ArtifactsAdminApi.js'
import { DevelopmentAdminApi } from './generated-admin/DevelopmentAdminApi.js'
import { FleetsAdminApi } from './generated-admin/FleetsAdminApi.js'
import { ImagesAdminApi } from './generated-admin/ImagesAdminApi.js'
import { ServersAdminApi } from './generated-admin/ServersAdminApi.js'
import { AccountApi } from './generated-public/AccountApi.js'
import { AmsInfoApi } from './generated-public/AmsInfoApi.js'
import { AuthApi } from './generated-public/AuthApi.js'
import { FleetCommanderApi } from './generated-public/FleetCommanderApi.js'
import { FleetsApi } from './generated-public/FleetsApi.js'
import { WatchdogsApi } from './generated-public/WatchdogsApi.js'

console.log(`${name}@${version}`)

const apis = {
  AmsQoSAdminApi,
  FleetsAdminApi,
  ImagesAdminApi,
  AccountAdminApi,
  AmsInfoAdminApi,
  ArtifactsAdminApi,
  ServersAdminApi,
  DevelopmentAdminApi,
  AuthApi,
  FleetCommanderApi,
  AmsInfoApi,
  AccountApi,
  FleetsApi,
  WatchdogsApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Ams = apis
