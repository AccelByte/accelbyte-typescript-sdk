/*
 * Copyright (c) 2022-2025 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AppAdminApi } from './generated-admin/AppAdminApi.js'
import { AppV2AdminApi } from './generated-admin/AppV2AdminApi.js'
import { ConfigurationAdminApi } from './generated-admin/ConfigurationAdminApi.js'
import { ConfigurationV2AdminApi } from './generated-admin/ConfigurationV2AdminApi.js'
import { DeploymentAdminApi } from './generated-admin/DeploymentAdminApi.js'
import { DeploymentV2AdminApi } from './generated-admin/DeploymentV2AdminApi.js'
import { ImageAdminApi } from './generated-admin/ImageAdminApi.js'
import { ImageV2AdminApi } from './generated-admin/ImageV2AdminApi.js'
import { NotificationSubscriptionAdminApi } from './generated-admin/NotificationSubscriptionAdminApi.js'
import { ResourcesLimitsAdminApi } from './generated-admin/ResourcesLimitsAdminApi.js'
import { MessagesApi } from './generated-public/MessagesApi.js'

console.log(`${name}@${version}`)

const apis = {
  AppAdminApi,
  AppV2AdminApi,
  DeploymentAdminApi,
  DeploymentV2AdminApi,
  ResourcesLimitsAdminApi,
  ImageAdminApi,
  ImageV2AdminApi,
  ConfigurationAdminApi,
  ConfigurationV2AdminApi,
  NotificationSubscriptionAdminApi,
  MessagesApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Csm = apis
