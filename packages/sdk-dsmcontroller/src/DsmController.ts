/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AdminAdminApi } from './generated-admin/AdminAdminApi.js'
import { ConfigAdminApi } from './generated-admin/ConfigAdminApi.js'
import { DeploymentConfigAdminApi } from './generated-admin/DeploymentConfigAdminApi.js'
import { ImageConfigAdminApi } from './generated-admin/ImageConfigAdminApi.js'
import { PodConfigAdminApi } from './generated-admin/PodConfigAdminApi.js'
import { DeploymentConfigApi } from './generated-public/DeploymentConfigApi.js'
import { DsmcOperationsApi } from './generated-public/DsmcOperationsApi.js'
import { ImageConfigApi } from './generated-public/ImageConfigApi.js'
import { PodConfigApi } from './generated-public/PodConfigApi.js'
import { PublicApi } from './generated-public/PublicApi.js'
import { ServerApi } from './generated-public/ServerApi.js'
import { SessionApi } from './generated-public/SessionApi.js'

console.log(`${name}@${version}`)

const apis = {
  ImageConfigAdminApi,
  ConfigAdminApi,
  PodConfigAdminApi,
  AdminAdminApi,
  DeploymentConfigAdminApi,
  DsmcOperationsApi,
  PublicApi,
  ImageConfigApi,
  ServerApi,
  SessionApi,
  PodConfigApi,
  DeploymentConfigApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const DsmController = apis
