/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { AccountIdentifierTagAdminApi } from './generated-admin/AccountIdentifierTagAdminApi.js'
import { BansAdminApi } from './generated-admin/BansAdminApi.js'
import { ClientsAdminApi } from './generated-admin/ClientsAdminApi.js'
import { ClientsConfigV3AdminApi } from './generated-admin/ClientsConfigV3AdminApi.js'
import { ConfigAdminApi } from './generated-admin/ConfigAdminApi.js'
import { CountryAdminApi } from './generated-admin/CountryAdminApi.js'
import { DevicesV4AdminApi } from './generated-admin/DevicesV4AdminApi.js'
import { InputValidationsAdminApi } from './generated-admin/InputValidationsAdminApi.js'
import { LoginAllowlistAdminApi } from './generated-admin/LoginAllowlistAdminApi.js'
import { OAuth20AdminApi } from './generated-admin/OAuth20AdminApi.js'
import { OverrideRoleConfigV3AdminApi } from './generated-admin/OverrideRoleConfigV3AdminApi.js'
import { ProfileUpdateStrategyAdminApi } from './generated-admin/ProfileUpdateStrategyAdminApi.js'
import { RolesAdminApi } from './generated-admin/RolesAdminApi.js'
import { SsoCredentialAdminApi } from './generated-admin/SsoCredentialAdminApi.js'
import { ThirdPartyCredentialAdminApi } from './generated-admin/ThirdPartyCredentialAdminApi.js'
import { UsersAdminApi } from './generated-admin/UsersAdminApi.js'
import { UsersV4AdminApi } from './generated-admin/UsersV4AdminApi.js'
import { BansApi } from './generated-public/BansApi.js'
import { ClientsApi } from './generated-public/ClientsApi.js'
import { ConfigApi } from './generated-public/ConfigApi.js'
import { CountryApi } from './generated-public/CountryApi.js'
import { InputValidationsApi } from './generated-public/InputValidationsApi.js'
import { OAuth20Api } from './generated-public/OAuth20Api.js'
import { OAuth20ExtensionApi } from './generated-public/OAuth20ExtensionApi.js'
import { OAuth20V4Api } from './generated-public/OAuth20V4Api.js'
import { OAuthApi } from './generated-public/OAuthApi.js'
import { ProfileUpdateStrategyApi } from './generated-public/ProfileUpdateStrategyApi.js'
import { RolesApi } from './generated-public/RolesApi.js'
import { SsoApi } from './generated-public/SsoApi.js'
import { SsoSaml20Api } from './generated-public/SsoSaml20Api.js'
import { ThirdPartyCredentialApi } from './generated-public/ThirdPartyCredentialApi.js'
import { UsersApi } from './generated-public/UsersApi.js'
import { UsersV4Api } from './generated-public/UsersV4Api.js'

console.log(`${name}@${version}`)

const apis = {
  BansAdminApi,
  RolesAdminApi,
  UsersAdminApi,
  UsersV4AdminApi,
  InputValidationsAdminApi,
  ClientsConfigV3AdminApi,
  AccountIdentifierTagAdminApi,
  ClientsAdminApi,
  DevicesV4AdminApi,
  CountryAdminApi,
  OverrideRoleConfigV3AdminApi,
  ThirdPartyCredentialAdminApi,
  SsoCredentialAdminApi,
  LoginAllowlistAdminApi,
  ConfigAdminApi,
  ProfileUpdateStrategyAdminApi,
  OAuth20AdminApi,
  BansApi,
  RolesApi,
  ClientsApi,
  OAuth20ExtensionApi,
  OAuthApi,
  OAuth20Api,
  OAuth20V4Api,
  ConfigApi,
  UsersApi,
  SsoApi,
  UsersV4Api,
  InputValidationsApi,
  CountryApi,
  SsoSaml20Api,
  ThirdPartyCredentialApi,
  ProfileUpdateStrategyApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Iam = apis
