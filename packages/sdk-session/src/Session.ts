/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { CertificateAdminApi } from './generated-admin/CertificateAdminApi.js'
import { ConfigAdminApi } from './generated-admin/ConfigAdminApi.js'
import { ConfigurationTemplateAdminApi } from './generated-admin/ConfigurationTemplateAdminApi.js'
import { DsmcDefaultConfigurationAdminApi } from './generated-admin/DsmcDefaultConfigurationAdminApi.js'
import { EnvironmentVariableAdminApi } from './generated-admin/EnvironmentVariableAdminApi.js'
import { GameSessionAdminApi } from './generated-admin/GameSessionAdminApi.js'
import { GlobalConfigurationAdminApi } from './generated-admin/GlobalConfigurationAdminApi.js'
import { MaxActiveAdminApi } from './generated-admin/MaxActiveAdminApi.js'
import { NativeSessionAdminApi } from './generated-admin/NativeSessionAdminApi.js'
import { PartyAdminApi } from './generated-admin/PartyAdminApi.js'
import { PlatformCredentialAdminApi } from './generated-admin/PlatformCredentialAdminApi.js'
import { PlayerAdminApi } from './generated-admin/PlayerAdminApi.js'
import { RecentPlayerAdminApi } from './generated-admin/RecentPlayerAdminApi.js'
import { SessionStorageAdminApi } from './generated-admin/SessionStorageAdminApi.js'
import { GameSessionApi } from './generated-public/GameSessionApi.js'
import { PartyApi } from './generated-public/PartyApi.js'
import { PlayerApi } from './generated-public/PlayerApi.js'
import { RecentPlayerApi } from './generated-public/RecentPlayerApi.js'
import { SessionStorageApi } from './generated-public/SessionStorageApi.js'

console.log(`${name}@${version}`)

const apis = {
  ConfigAdminApi,
  DsmcDefaultConfigurationAdminApi,
  EnvironmentVariableAdminApi,
  GlobalConfigurationAdminApi,
  PartyAdminApi,
  ConfigurationTemplateAdminApi,
  GameSessionAdminApi,
  RecentPlayerAdminApi,
  NativeSessionAdminApi,
  PlayerAdminApi,
  PlatformCredentialAdminApi,
  SessionStorageAdminApi,
  CertificateAdminApi,
  MaxActiveAdminApi,
  PartyApi,
  GameSessionApi,
  RecentPlayerApi,
  PlayerApi,
  SessionStorageApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Session = apis
