## POST /group/v1/public/namespaces/{namespace}/leave

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeave()

// return Promise<LeaveGroupResponseV1>
```

## GET /group/v1/public/namespaces/{namespace}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoles( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetMemberRolesListResponseV1>
```

## GET /group/v2/public/namespaces/{namespace}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoles_v2( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetMemberRolesListResponseV1>
```

## GET /group/v1/public/namespaces/{namespace}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups( queryParams?: {
             groupName?: string | null,
             groupRegion?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetGroupsListResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGroup(data: {
             PublicCreateNewGroupRequestV1
    })

// return Promise<GroupResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGroup_v2(data: {
             PublicCreateNewGroupRequestV1
    })

// return Promise<GroupResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/groups/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGroupBulk_v2(data: {
             GetGroupListRequestV2
    })

// return Promise<GetGroupsResponseV1>
```

## GET /group/v1/public/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByUserId(userId:string)

// return Promise<GetUserGroupInformationResponseV1>
```

## GET /group/v2/public/namespaces/{namespace}/users/me/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeGroups_v2( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetGroupMemberListResponseV1>
```

## DELETE /group/v1/public/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByGroupId(groupId:string)

// return Promise
```

## GET /group/v1/public/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroup_ByGroupId(groupId:string)

// return Promise<GroupResponseV1>
```

## PATCH /group/v1/public/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchGroup_ByGroupId(groupId:string, data: {
             UpdateGroupRequestV1
    })

// return Promise<GroupResponseV1>
```

## PUT /group/v1/public/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGroup_ByGroupId(groupId:string, data: {
             UpdateGroupRequestV1
    })

// return Promise<GroupResponseV1>
```

## DELETE /group/v2/public/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByGroupId_v2(groupId:string)

// return Promise
```

## PATCH /group/v2/public/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchGroup_ByGroupId_v2(groupId:string, data: {
             UpdateGroupRequestV1
    })

// return Promise<GroupResponseV1>
```

## PUT /group/v2/public/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGroup_ByGroupId_v2(groupId:string, data: {
             UpdateGroupRequestV1
    })

// return Promise<GroupResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/users/{userId}/kick

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createKick_ByUserId(userId:string)

// return Promise<KickGroupMemberResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/groups/{groupId}/join

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createJoin_ByGroupId(groupId:string)

// return Promise<JoinGroupResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/users/{userId}/invite

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInvite_ByUserId(userId:string)

// return Promise<UserInvitationResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/groups/{groupId}/join

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createJoin_ByGroupId_v2(groupId:string)

// return Promise<JoinGroupResponseV1>
```

## GET /group/v2/public/namespaces/{namespace}/users/me/join/request

```
import { AccelByte } from '@accelbyte/sdk'
import { MemberRequestApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MemberRequestApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeJoinRequest_v2( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetMemberRequestsListResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/groups/{groupId}/leave

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLeave_ByGroupId_v2(groupId:string)

// return Promise<LeaveGroupResponseV1>
```

## GET /group/v1/public/namespaces/{namespace}/users/me/invite/request

```
import { AccelByte } from '@accelbyte/sdk'
import { MemberRequestApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MemberRequestApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeInviteRequest( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetMemberRequestsListResponseV1>
```

## GET /group/v1/public/namespaces/{namespace}/groups/{groupId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMembers_ByGroupId(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             order?: string | null
    })

// return Promise<GetGroupMemberListResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/users/{userId}/join/accept

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createJoinAccept_ByUserId(userId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/users/{userId}/join/reject

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createJoinReject_ByUserId(userId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/groups/{groupId}/join/cancel

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createJoinCancel_ByGroupId(groupId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## DELETE /group/v1/public/namespaces/{namespace}/roles/{memberRoleId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMember_ByMemberRoleId(memberRoleId:string, data: {
             RemoveRoleFromMemberRequestV1
    })

// return Promise
```

## POST /group/v1/public/namespaces/{namespace}/roles/{memberRoleId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMember_ByMemberRoleId(memberRoleId:string, data: {
             AssignRoleToMemberRequestV1
    })

// return Promise<GetUserGroupInformationResponseV1>
```

## GET /group/v1/public/namespaces/{namespace}/groups/{groupId}/join/request

```
import { AccelByte } from '@accelbyte/sdk'
import { MemberRequestApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MemberRequestApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getJoinRequest_ByGroupId(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetMemberRequestsListResponseV1>
```

## PUT /group/v1/public/namespaces/{namespace}/groups/{groupId}/rules/custom

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRuleCustom_ByGroupId(groupId:string, data: {
             UpdateGroupCustomRuleRequestV1
    })

// return Promise<GroupResponseV1>
```

## GET /group/v2/public/namespaces/{namespace}/groups/{groupId}/join/request

```
import { AccelByte } from '@accelbyte/sdk'
import { MemberRequestApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MemberRequestApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getJoinRequest_ByGroupId_v2(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetMemberRequestsListResponseV1>
```

## PUT /group/v2/public/namespaces/{namespace}/groups/{groupId}/rules/custom

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRuleCustom_ByGroupId_v2(groupId:string, data: {
             UpdateGroupCustomRuleRequestV1
    })

// return Promise<GroupResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/groups/{groupId}/invite/accept

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInviteAccept_ByGroupId(groupId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## POST /group/v1/public/namespaces/{namespace}/groups/{groupId}/invite/reject

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInviteReject_ByGroupId(groupId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/accept

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInviteAccept_ByGroupId_v2(groupId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/reject

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInviteReject_ByGroupId_v2(groupId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## GET /group/v2/public/namespaces/{namespace}/groups/{groupId}/invite/request

```
import { AccelByte } from '@accelbyte/sdk'
import { MemberRequestApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MemberRequestApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInviteRequest_ByGroupId_v2(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetMemberRequestsListResponseV1>
```

## PUT /group/v1/public/namespaces/{namespace}/groups/{groupId}/attributes/custom

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAttributeCustom_ByGroupId(groupId:string, data: {
             UpdateGroupCustomAttributesRequestV1
    })

// return Promise<GroupResponseV1>
```

## PUT /group/v2/public/namespaces/{namespace}/groups/{groupId}/attributes/custom

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAttributeCustom_ByGroupId_v2(groupId:string, data: {
             UpdateGroupCustomAttributesRequestV1
    })

// return Promise<GroupResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/kick

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createKick_ByUserId_ByGroupId_v2(userId:string, groupId:string)

// return Promise<KickGroupMemberResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/invite

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInvite_ByUserId_ByGroupId_v2(userId:string, groupId:string)

// return Promise<UserInvitationResponseV1>
```

## GET /group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/status

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStatus_ByUserId_ByGroupId_v2(userId:string, groupId:string)

// return Promise<GetUserGroupInformationResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/join/accept

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createJoinAccept_ByUserId_ByGroupId_v2(userId:string, groupId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/join/reject

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createJoinReject_ByUserId_ByGroupId_v2(userId:string, groupId:string)

// return Promise<MemberRequestGroupResponseV1>
```

## DELETE /group/v2/public/namespaces/{namespace}/roles/{memberRoleId}/groups/{groupId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMember_ByMemberRoleId_ByGroupId_v2(memberRoleId:string, groupId:string, data: {
             RemoveRoleFromMemberRequestV1
    })

// return Promise
```

## POST /group/v2/public/namespaces/{namespace}/roles/{memberRoleId}/groups/{groupId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMember_ByMemberRoleId_ByGroupId_v2(memberRoleId:string, groupId:string, data: {
             AssignRoleToMemberRequestV1
    })

// return Promise<GetUserGroupInformationResponseV1>
```

## POST /group/v2/public/namespaces/{namespace}/users/{userId}/groups/{groupId}/invite/cancel

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInviteCancel_ByUserId_ByGroupId_v2(userId:string, groupId:string)

// return Promise<CancelInvitationGroupResponseV2>
```

## DELETE /group/v1/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRuleDefined_ByGroupId_ByAllowedAction(groupId:string, allowedAction:string)

// return Promise
```

## PUT /group/v1/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRuleDefined_ByGroupId_ByAllowedAction(groupId:string, allowedAction:string, data: {
             UpdateGroupPredefinedRuleRequestV1
    })

// return Promise<GroupResponseV1>
```

## DELETE /group/v2/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRuleDefined_ByGroupId_ByAllowedAction_v2(groupId:string, allowedAction:string)

// return Promise
```

## PUT /group/v2/public/namespaces/{namespace}/groups/{groupId}/rules/defined/{allowedAction}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRuleDefined_ByGroupId_ByAllowedAction_v2(groupId:string, allowedAction:string, data: {
             UpdateGroupPredefinedRuleRequestV1
    })

// return Promise<GroupResponseV1>
```

## GET /group/v1/admin/namespaces/{namespace}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoles( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetMemberRolesListResponseV1>
```

## POST /group/v1/admin/namespaces/{namespace}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRole(data: {
             CreateMemberRoleRequestV1
    })

// return Promise<MemberRoleResponseV1>
```

## GET /group/v1/admin/namespaces/{namespace}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups( queryParams?: {
             configurationCode?: string | null,
             groupName?: string | null,
             groupRegion?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetGroupsListResponseV1>
```

## POST /group/v2/admin/namespaces/{namespace}/groups/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchGroupBulk_v2(data: {
             GetGroupListRequestV2
    })

// return Promise<GetGroupsResponseV1>
```

## GET /group/v1/admin/namespaces/{namespace}/configuration

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfiguration( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListConfigurationResponseV1>
```

## POST /group/v1/admin/namespaces/{namespace}/configuration

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createConfiguration(data: {
             CreateGroupConfigurationRequestV1
    })

// return Promise<CreateGroupConfigurationResponseV1>
```

## DELETE /group/v1/admin/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGroup_ByGroupId(groupId:string)

// return Promise
```

## GET /group/v1/admin/namespaces/{namespace}/groups/{groupId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroup_ByGroupId(groupId:string)

// return Promise<GroupResponseV1>
```

## DELETE /group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRole_ByMemberRoleId(memberRoleId:string)

// return Promise
```

## GET /group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRole_ByMemberRoleId(memberRoleId:string)

// return Promise<MemberRoleResponseV1>
```

## PATCH /group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchRole_ByMemberRoleId(memberRoleId:string, data: {
             UpdateMemberRoleRequestV1
    })

// return Promise<MemberRoleResponseV1>
```

## GET /group/v2/admin/namespaces/{namespace}/users/{userId}/groups

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGroups_ByUserId_v2(userId:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<GetGroupMemberListResponseV1>
```

## POST /group/v1/admin/namespaces/{namespace}/configuration/initiate

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createConfigurationInitiate()

// return Promise<CreateGroupConfigurationResponseV1>
```

## GET /group/v1/admin/namespaces/{namespace}/groups/{groupId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMembers_ByGroupId(groupId:string,  queryParams?: {
             limit?: number,
             offset?: number,
             order?: string | null
    })

// return Promise<GetGroupMemberListResponseV1>
```

## PUT /group/v1/admin/namespaces/{namespace}/roles/{memberRoleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupRolesAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupRolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByMemberRoleId(memberRoleId:string, data: {
             UpdateMemberRolePermissionsRequestV1
    })

// return Promise<MemberRoleResponseV1>
```

## DELETE /group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteConfiguration_ByConfigurationCode(configurationCode:string)

// return Promise
```

## GET /group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfiguration_ByConfigurationCode(configurationCode:string)

// return Promise<GetGroupConfigurationResponseV1>
```

## PATCH /group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfiguration_ByConfigurationCode(configurationCode:string, data: {
             UpdateGroupConfigurationRequestV1
    })

// return Promise<UpdateGroupConfigurationResponseV1>
```

## GET /group/v2/admin/namespaces/{namespace}/users/{userId}/groups/{groupId}/status

```
import { AccelByte } from '@accelbyte/sdk'
import { GroupMemberAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GroupMemberAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStatus_ByUserId_ByGroupId_v2(userId:string, groupId:string)

// return Promise<GetUserGroupInformationResponseV1>
```

## DELETE /group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}/rules/{allowedAction}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRule_ByConfigurationCode_ByAllowedAction(configurationCode:string, allowedAction:string)

// return Promise<UpdateGroupConfigurationResponseV1>
```

## PUT /group/v1/admin/namespaces/{namespace}/configuration/{configurationCode}/rules/{allowedAction}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationAdminApi } from '@accelbyte/sdk-groups'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRule_ByConfigurationCode_ByAllowedAction(configurationCode:string, allowedAction:string, data: {
             UpdateGroupConfigurationGlobalRulesRequestV1
    })

// return Promise<UpdateGroupConfigurationResponseV1>
```