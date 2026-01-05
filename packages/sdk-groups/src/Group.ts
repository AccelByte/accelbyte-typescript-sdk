/*
 * Copyright (c) 2022-2026 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */

import { author, name, version } from '../package.json'
import { ConfigurationAdminApi } from './generated-admin/ConfigurationAdminApi.js'
import { GroupAdminApi } from './generated-admin/GroupAdminApi.js'
import { GroupMemberAdminApi } from './generated-admin/GroupMemberAdminApi.js'
import { GroupRolesAdminApi } from './generated-admin/GroupRolesAdminApi.js'
import { GroupApi } from './generated-public/GroupApi.js'
import { GroupMemberApi } from './generated-public/GroupMemberApi.js'
import { GroupRolesApi } from './generated-public/GroupRolesApi.js'
import { MemberRequestApi } from './generated-public/MemberRequestApi.js'

console.log(`${name}@${version}`)

const apis = {
  GroupRolesAdminApi,
  GroupAdminApi,
  ConfigurationAdminApi,
  GroupMemberAdminApi,
  GroupMemberApi,
  GroupRolesApi,
  GroupApi,
  MemberRequestApi,
  version: () =>
    console.log({
      version,
      name,
      author
    })
}

export const Group = apis
