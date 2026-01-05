## POST /session/v1/public/namespaces/{namespace}/party

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createParty(data: {
             CreatePartyRequest
    })

// return Promise<PartySessionResponse>
```

## POST /session/v1/public/namespaces/{namespace}/gamesession

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGamesession(data: {
             CreateGameSessionRequest
    })

// return Promise<GameSessionResponse>
```

## POST /session/v1/public/namespaces/{namespace}/gamesessions

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGamesession_ByNS()

// return Promise<GameSessionQueryResponse>
```

## GET /session/v1/public/namespaces/{namespace}/recent-player

```
import { AccelByte } from '@accelbyte/sdk'
import { RecentPlayerApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecentPlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecentPlayer( queryParams?: {
             limit?: number
    })

// return Promise<RecentPlayerQueryResponse>
```

## GET /session/v1/public/namespaces/{namespace}/users/me/parties

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeParties( queryParams?: {
             order?: string | null,
             orderBy?: string | null,
             status?: string | null
    })

// return Promise<PartyQueryResponse>
```

## GET /session/v1/public/namespaces/{namespace}/parties/{partyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getParty_ByPartyId(partyId:string)

// return Promise<PartySessionResponse>
```

## PATCH /session/v1/public/namespaces/{namespace}/parties/{partyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchParty_ByPartyId(partyId:string, data: {
             UpdatePartyRequest
    })

// return Promise<PartySessionResponse>
```

## PUT /session/v1/public/namespaces/{namespace}/parties/{partyId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateParty_ByPartyId(partyId:string, data: {
             UpdatePartyRequest
    })

// return Promise<PartySessionResponse>
```

## GET /session/v1/public/namespaces/{namespace}/recent-team-player

```
import { AccelByte } from '@accelbyte/sdk'
import { RecentPlayerApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecentPlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecentTeamPlayer( queryParams?: {
             limit?: number
    })

// return Promise<RecentPlayerQueryResponse>
```

## POST /session/v1/public/namespaces/{namespace}/users/bulk/platform

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchUserBulkPlatform(data: {
             PlayersCurrentPlatformRequest
    })

// return Promise<PlayersCurrentPlatformResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/users/me/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeAttribute()

// return Promise
```

## GET /session/v1/public/namespaces/{namespace}/users/me/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeAttributes()

// return Promise<PlayerAttributesResponseBody>
```

## POST /session/v1/public/namespaces/{namespace}/users/me/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeAttribute(data: {
             PlayerAttributesRequestBody
    })

// return Promise<PlayerAttributesResponseBody>
```

## GET /session/v1/public/namespaces/{namespace}/users/me/gamesessions

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeGamesessions( queryParams?: {
             order?: string | null,
             orderBy?: string | null,
             status?: string | null
    })

// return Promise<GameSessionQueryResponse>
```

## POST /session/v1/public/namespaces/{namespace}/gamesessions/join/code

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createGamesessionJoinCode(data: {
             JoinByCodeRequest
    })

// return Promise<GameSessionResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/parties/{partyId}/code

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteCode_ByPartyId(partyId:string)

// return Promise
```

## POST /session/v1/public/namespaces/{namespace}/parties/{partyId}/code

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateCode_ByPartyId(partyId:string)

// return Promise<PartySessionResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGamesession_BySessionId(sessionId:string)

// return Promise
```

## GET /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGamesession_BySessionId(sessionId:string)

// return Promise<GameSessionResponse>
```

## PATCH /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchGamesession_BySessionId(sessionId:string, data: {
             UpdateGameSessionRequest
    })

// return Promise<GameSessionResponse>
```

## PUT /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGamesession_BySessionId(sessionId:string, data: {
             UpdateGameSessionRequest
    })

// return Promise<GameSessionResponse>
```

## POST /session/v1/public/namespaces/{namespace}/parties/{partyId}/invite

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInvite_ByPartyId(partyId:string, data: {
             SessionInviteRequest
    })

// return Promise<SessionInviteResponse>
```

## POST /session/v1/public/namespaces/{namespace}/parties/{partyId}/leader

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLeader_ByPartyId(partyId:string, data: {
             PromoteLeaderRequest
    })

// return Promise<PartySessionResponse>
```

## GET /session/v1/public/namespaces/{namespace}/parties/{partyId}/storage

```
import { AccelByte } from '@accelbyte/sdk'
import { SessionStorageApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SessionStorageApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStorage_ByPartyId(partyId:string)

// return Promise
```

## POST /session/v1/public/namespaces/{namespace}/parties/users/me/join/code

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPartyUserMeJoinCode(data: {
             JoinByCodeRequest
    })

// return Promise<PartySessionResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/code

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteCode_BySessionId(sessionId:string)

// return Promise
```

## POST /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/code

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateCode_BySessionId(sessionId:string)

// return Promise<GameSessionResponse>
```

## POST /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/join

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createJoin_BySessionId(sessionId:string)

// return Promise<GameSessionResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/leave

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLeave_BySessionId(sessionId:string)

// return Promise
```

## POST /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/teams

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateTeam_BySessionId(sessionId:string, data: {
             AppendTeamGameSessionRequest
    })

// return Promise<GameSessionResponse>
```

## GET /session/v1/public/namespaces/{namespace}/gamesessions/servers/{podName}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGamesessionServer_ByPodName(podName:string)

// return Promise<GameSessionResponse>
```

## POST /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/invite

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createInvite_BySessionId(sessionId:string, data: {
             SessionInviteRequest
    })

// return Promise
```

## POST /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/leader

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLeader_BySessionId(sessionId:string, data: {
             PromoteLeaderRequest
    })

// return Promise<GameSessionResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/reject

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteReject_BySessionId(sessionId:string)

// return Promise
```

## GET /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/secret

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSecret_BySessionId(sessionId:string)

// return Promise<ServerSecret>
```

## POST /session/v1/public/namespaces/{namespace}/parties/{partyId}/users/me/join

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeJoin_ByPartyId(partyId:string)

// return Promise<PartySessionResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/parties/{partyId}/users/me/leave

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeLeave_ByPartyId(partyId:string)

// return Promise
```

## PUT /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/backfill

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateBackfill_BySessionId(sessionId:string, data: {
             UpdateGameSessionBackfillRequest
    })

// return Promise<GameSessionResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/parties/{partyId}/users/me/reject

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeReject_ByPartyId(partyId:string)

// return Promise
```

## PATCH /session/v1/public/namespaces/{namespace}/sessions/{sessionId}/storage/leader

```
import { AccelByte } from '@accelbyte/sdk'
import { SessionStorageApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SessionStorageApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchStorageLeader_BySessionId(sessionId:string)

// return Promise
```

## DELETE /session/v1/public/namespaces/{namespace}/parties/{partyId}/users/{userId}/kick

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteKick_ByPartyId_ByUserId(partyId:string, userId:string)

// return Promise<KickResponse>
```

## DELETE /session/v1/public/namespaces/{namespace}/parties/{partyId}/users/{userId}/cancel

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteCancel_ByPartyId_ByUserId(partyId:string, userId:string)

// return Promise
```

## PATCH /session/v1/public/namespaces/{namespace}/sessions/{sessionId}/storage/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { SessionStorageApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SessionStorageApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchStorageUser_BySessionId_ByUserId(sessionId:string, userId:string)

// return Promise
```

## DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/users/{userId}/cancel

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteCancel_BySessionId_ByUserId(sessionId:string, userId:string)

// return Promise
```

## DELETE /session/v1/public/namespaces/{namespace}/gamesessions/{sessionId}/members/{memberId}/kick

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteKick_BySessionId_ByMemberId(sessionId:string, memberId:string)

// return Promise
```

## PATCH /session/v1/public/namespaces/{namespace}/parties/{partyId}/storage/users/{userId}/reserved

```
import { AccelByte } from '@accelbyte/sdk'
import { SessionStorageApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SessionStorageApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchReservedStorage_ByPartyId_ByUserId(partyId:string, userId:string)

// return Promise
```

## GET /session/v1/admin/config/log

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigLog()

// return Promise<Configuration>
```

## PATCH /session/v1/admin/config/log

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfigLog(data: {
             Configuration
    })

// return Promise<Configuration>
```

## GET /session/v1/admin/dsconfigs/default

```
import { AccelByte } from '@accelbyte/sdk'
import { DsmcDefaultConfigurationAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DsmcDefaultConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDsconfigsDefault()

// return Promise<DefaultDsmcConfig>
```

## GET /session/v1/admin/environment-variables

```
import { AccelByte } from '@accelbyte/sdk'
import { EnvironmentVariableAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EnvironmentVariableAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEnvironmentVariables()

// return Promise<EnvironmentVariableListResponse>
```

## DELETE /session/v1/admin/global-configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalConfigurationAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGlobalConfiguration()

// return Promise
```

## GET /session/v1/admin/global-configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalConfigurationAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGlobalConfigurations()

// return Promise<GlobalConfigurationResponse>
```

## PUT /session/v1/admin/global-configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { GlobalConfigurationAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GlobalConfigurationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateGlobalConfiguration(data: {
             PutGlobalConfigurationRequest
    })

// return Promise<GlobalConfigurationResponse>
```

## GET /session/v1/admin/namespaces/{namespace}/parties

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getParties( queryParams?: {
             isSoftDeleted?: string | null,
             joinability?: string | null,
             key?: string | null,
             leaderID?: string | null,
             limit?: number,
             memberID?: string | null,
             memberStatus?: string | null,
             offset?: number,
             order?: string | null,
             orderBy?: string | null,
             partyID?: string | null,
             value?: string | null
    })

// return Promise<PartyQueryResponse>
```

## GET /session/v1/admin/namespaces/{namespace}/dsconfigs

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDsconfigs()

// return Promise<DsmConfigRecord>
```

## GET /session/v1/admin/namespaces/{namespace}/gamesessions

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGamesessions( queryParams?: {
             configurationName?: string | null,
             dsPodName?: string | null,
             fromTime?: string | null,
             gameMode?: string | null,
             isPersistent?: string | null,
             isSoftDeleted?: string | null,
             joinability?: string | null,
             limit?: number,
             matchPool?: string | null,
             memberID?: string | null,
             offset?: number,
             order?: string | null,
             orderBy?: string | null,
             sessionID?: string | null,
             status?: string | null,
             statusV2?: string | null,
             toTime?: string | null
    })

// return Promise<GameSessionQueryResponse>
```

## POST /session/v1/admin/namespaces/{namespace}/gamesessions

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchGamesession()

// return Promise<GameSessionQueryResponse>
```

## DELETE /session/v1/admin/namespaces/{namespace}/parties/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePartyBulk(data: {
             DeleteBulkPartySessionRequest
    })

// return Promise<DeleteBulkPartySessionsApiResponse>
```

## POST /session/v1/admin/namespaces/{namespace}/configuration

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createConfiguration(data: {
             CreateConfigurationTemplateRequest
    })

// return Promise<ConfigurationTemplateResponse>
```

## GET /session/v1/admin/namespaces/{namespace}/recent-player

```
import { AccelByte } from '@accelbyte/sdk'
import { RecentPlayerAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecentPlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecentPlayer( queryParams?: {
             limit?: number,
             userId?: string | null
    })

// return Promise<RecentPlayerQueryResponse>
```

## GET /session/v1/admin/namespaces/{namespace}/configurations

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigurations( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number,
             order?: string | null,
             orderBy?: string | null
    })

// return Promise<ConfigurationTemplatesResponse>
```

## GET /session/v1/admin/namespaces/{namespace}/dsconfigs/sync

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDsconfigsSync()

// return Promise<DsmConfigRecord>
```

## GET /session/v1/admin/namespaces/{namespace}/native-sessions

```
import { AccelByte } from '@accelbyte/sdk'
import { NativeSessionAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NativeSessionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNativeSessions( queryParams?: {
             limit?: number,
             offset?: number,
             order?: string | null
    })

// return Promise<NativeSessionPagingResponse>
```

## GET /session/v1/admin/namespaces/{namespace}/users/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersAttributes( queryParams?: {
             users?: string | null
    })

// return Promise<PlayerAttributesResponseBodyArray>
```

## DELETE /session/v1/admin/namespaces/{namespace}/gamesessions/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteGamesessionBulk(data: {
             DeleteBulkGameSessionRequest
    })

// return Promise<DeleteBulkGameSessionsApiResponse>
```

## GET /session/v1/admin/namespaces/{namespace}/recent-team-player

```
import { AccelByte } from '@accelbyte/sdk'
import { RecentPlayerAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RecentPlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRecentTeamPlayer( queryParams?: {
             limit?: number,
             userId?: string | null
    })

// return Promise<RecentPlayerQueryResponse>
```

## DELETE /session/v1/admin/namespaces/{namespace}/alerts-configuration

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAlertsConfiguration()

// return Promise
```

## GET /session/v1/admin/namespaces/{namespace}/alerts-configuration

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAlertsConfiguration()

// return Promise<ConfigAlertResponse>
```

## POST /session/v1/admin/namespaces/{namespace}/alerts-configuration

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAlertsConfiguration(data: {
             ConfigAlertRequestCreate
    })

// return Promise<ConfigAlertResponse>
```

## PUT /session/v1/admin/namespaces/{namespace}/alerts-configuration

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAlertsConfiguration_ByNS(data: {
             ConfigAlertRequestCreate
    })

// return Promise<ConfigAlertResponse>
```

## DELETE /session/v1/admin/namespaces/{namespace}/platform-credentials

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformCredentialAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePlatformCredential()

// return Promise
```

## GET /session/v1/admin/namespaces/{namespace}/platform-credentials

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformCredentialAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformCredentials()

// return Promise<PlatformCredentials>
```

## PUT /session/v1/admin/namespaces/{namespace}/platform-credentials

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformCredentialAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePlatformCredential(data: {
             PutPlatformCredentialsRequest
    })

// return Promise<PlatformCredentials>
```

## DELETE /session/v1/admin/namespaces/{namespace}/configurations/{name}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteConfiguration_ByName(name:string)

// return Promise
```

## GET /session/v1/admin/namespaces/{namespace}/configurations/{name}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfiguration_ByName(name:string)

// return Promise<ConfigurationTemplateResponse>
```

## PUT /session/v1/admin/namespaces/{namespace}/configurations/{name}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigurationTemplateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigurationTemplateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateConfiguration_ByName(name:string, data: {
             UpdateConfigurationTemplateRequest
    })

// return Promise<ConfigurationTemplateResponse>
```

## GET /session/v1/admin/namespaces/{namespace}/parties/{partyId}/storage

```
import { AccelByte } from '@accelbyte/sdk'
import { SessionStorageAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SessionStorageAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStorage_ByPartyId(partyId:string)

// return Promise
```

## GET /session/v1/admin/namespaces/{namespace}/users/{userId}/attributes

```
import { AccelByte } from '@accelbyte/sdk'
import { PlayerAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlayerAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAttributes_ByUserId(userId:string)

// return Promise<PlayerAttributesResponseBody>
```

## POST /session/v1/admin/namespaces/{namespace}/users/{userId}/native-sync

```
import { AccelByte } from '@accelbyte/sdk'
import { PartyAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PartyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNativeSync_ByUserId(userId:string)

// return Promise
```

## PUT /session/v1/admin/namespaces/{namespace}/gamesessions/{sessionId}/ds

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateD_BySessionId(sessionId:string, data: {
             SetDsReadyRequest
    })

// return Promise
```

## DELETE /session/v1/admin/namespaces/{namespace}/sessions/{sessionId}/storage

```
import { AccelByte } from '@accelbyte/sdk'
import { SessionStorageAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SessionStorageAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteStorage_BySessionId(sessionId:string)

// return Promise
```

## GET /session/v1/admin/namespaces/{namespace}/sessions/{sessionId}/storage

```
import { AccelByte } from '@accelbyte/sdk'
import { SessionStorageAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SessionStorageAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStorage_BySessionId(sessionId:string)

// return Promise
```

## PUT /session/v1/admin/namespaces/{namespace}/certificates/pfx/platforms/xbl

```
import { AccelByte } from '@accelbyte/sdk'
import { CertificateAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CertificateAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateCertificatePfxPlatformXbl(data: {
             file: File,
             password: string | null,
             certname: string | null,
             description?: string | null
    })

// return Promise<PlatformCredentials>
```

## POST /session/v1/admin/namespaces/{namespace}/configurations/{name}/reconcile

```
import { AccelByte } from '@accelbyte/sdk'
import { MaxActiveAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MaxActiveAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateReconcile_ByName(name:string, data: {
             RequestReconcileMaxActiveSession
    })

// return Promise
```

## DELETE /session/v1/admin/namespaces/{namespace}/platform-credentials/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformCredentialAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePlatformCredential_ByPlatformId(platformId:string)

// return Promise
```

## PUT /session/v1/admin/namespaces/{namespace}/platform-credentials/{platformId}/sync

```
import { AccelByte } from '@accelbyte/sdk'
import { PlatformCredentialAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

PlatformCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSync_ByPlatformId(platformId:string)

// return Promise<XblCertificateResponseBody>
```

## GET /session/v1/admin/namespaces/{namespace}/sessions/{sessionId}/storage/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { SessionStorageAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SessionStorageAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getStorageUser_BySessionId_ByUserId(sessionId:string, userId:string)

// return Promise
```

## DELETE /session/v1/admin/namespaces/{namespace}/gamesessions/{sessionId}/members/{memberId}/kick

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteKick_BySessionId_ByMemberId(sessionId:string, memberId:string)

// return Promise
```

## GET /session/v1/admin/namespaces/{namespace}/configurations/{name}/memberactivesession/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { MaxActiveAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MaxActiveAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMemberactivesession_ByName_ByUserId(name:string, userId:string)

// return Promise<MemberActiveSession>
```

## PUT /session/v1/admin/namespaces/{namespace}/gamesessions/{sessionId}/members/{memberId}/status/{statusType}

```
import { AccelByte } from '@accelbyte/sdk'
import { GameSessionAdminApi } from '@accelbyte/sdk-session'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

GameSessionAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateStatu_BySessionId_ByMemberId_ByStatusType(sessionId:string, memberId:string, statusType:string)

// return Promise<UpdateGameSessionMemberStatusResponse>
```