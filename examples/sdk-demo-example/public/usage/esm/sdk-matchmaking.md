## GET /match2/v1/config

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig()

// return Promise<NamespaceConfigList>
```

## GET /match2/v1/environment-variables

```
import { AccelByte } from '@accelbyte/sdk'
import { EnvironmentVariablesApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

EnvironmentVariablesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEnvironmentVariables()

// return Promise<ListEnvironmentVariablesResponse>
```

## GET /match2/v1/config/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig_ByNamespace()

// return Promise<NamespaceConfig>
```

## PATCH /match2/v1/config/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfig_ByNamespace(data: {
             PatchNamespaceConfigRequest
    })

// return Promise<NamespaceConfig>
```

## POST /match2/v1/namespaces/{namespace}/backfill

```
import { AccelByte } from '@accelbyte/sdk'
import { BackfillApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBackfill(data: {
             BackFillCreateRequest
    })

// return Promise<BackfillCreateResponse>
```

## GET /match2/v1/namespaces/{namespace}/rulesets

```
import { AccelByte } from '@accelbyte/sdk'
import { RuleSetsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRulesets( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number
    })

// return Promise<ListRuleSetsResponse>
```

## POST /match2/v1/namespaces/{namespace}/rulesets

```
import { AccelByte } from '@accelbyte/sdk'
import { RuleSetsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRuleset(data: {
             RuleSetPayload
    })

// return Promise
```

## GET /match2/v1/namespaces/{namespace}/match-pools

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchPools( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number
    })

// return Promise<ListMatchPoolsResponse>
```

## POST /match2/v1/namespaces/{namespace}/match-pools

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMatchPool(data: {
             MatchPool
    })

// return Promise
```

## POST /match2/v1/namespaces/{namespace}/match-tickets

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchTicketsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchTicketsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMatchTicket(data: {
             MatchTicketRequest
    })

// return Promise<MatchTicketResponse>
```

## GET /match2/v1/namespaces/{namespace}/match-functions

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchFunctionsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchFunctionsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchFunctions( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListMatchFunctionsResponse>
```

## POST /match2/v1/namespaces/{namespace}/match-functions

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchFunctionsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchFunctionsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMatchFunction(data: {
             MatchFunctionRequest
    })

// return Promise
```

## GET /match2/v1/namespaces/{namespace}/match-tickets/me

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchTicketsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchTicketsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchTicketsMe( queryParams?: {
             limit?: number,
             matchPool?: string | null,
             offset?: number
    })

// return Promise<MatchTicketStatuses>
```

## GET /match2/v1/namespaces/{namespace}/backfill/proposal

```
import { AccelByte } from '@accelbyte/sdk'
import { BackfillApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBackfillProposal( queryParams: {
             sessionID: string | null
    })

// return Promise<BackfillProposalResponse>
```

## DELETE /match2/v1/namespaces/{namespace}/match-pools/{pool}

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMatchPool_ByPool(pool:string)

// return Promise
```

## GET /match2/v1/namespaces/{namespace}/match-pools/{pool}

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchPool_ByPool(pool:string)

// return Promise<MatchPool>
```

## PUT /match2/v1/namespaces/{namespace}/match-pools/{pool}

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMatchPool_ByPool(pool:string, data: {
             MatchPoolConfig
    })

// return Promise<MatchPool>
```

## DELETE /match2/v1/namespaces/{namespace}/rulesets/{ruleset}

```
import { AccelByte } from '@accelbyte/sdk'
import { RuleSetsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRuleset_ByRuleset(ruleset:string)

// return Promise
```

## GET /match2/v1/namespaces/{namespace}/rulesets/{ruleset}

```
import { AccelByte } from '@accelbyte/sdk'
import { RuleSetsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRuleset_ByRuleset(ruleset:string)

// return Promise<RuleSetPayload>
```

## PUT /match2/v1/namespaces/{namespace}/rulesets/{ruleset}

```
import { AccelByte } from '@accelbyte/sdk'
import { RuleSetsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRuleset_ByRuleset(ruleset:string, data: {
             RuleSetPayload
    })

// return Promise<RuleSetPayload>
```

## DELETE /match2/v1/namespaces/{namespace}/backfill/{backfillID}

```
import { AccelByte } from '@accelbyte/sdk'
import { BackfillApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBackfill_ByBackfillId(backfillID:string)

// return Promise
```

## GET /match2/v1/namespaces/{namespace}/backfill/{backfillID}

```
import { AccelByte } from '@accelbyte/sdk'
import { BackfillApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBackfill_ByBackfillId(backfillID:string)

// return Promise<BackfillGetResponse>
```

## DELETE /match2/v1/namespaces/{namespace}/match-functions/{name}

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchFunctionsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchFunctionsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMatchFunction_ByName(name:string)

// return Promise
```

## PUT /match2/v1/namespaces/{namespace}/match-functions/{name}

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchFunctionsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchFunctionsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMatchFunction_ByName(name:string, data: {
             MatchFunctionRequest
    })

// return Promise<MatchFunctionConfig>
```

## DELETE /match2/v1/namespaces/{namespace}/match-tickets/{ticketid}

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchTicketsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchTicketsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMatchTicket_ByTicketid(ticketid:string)

// return Promise
```

## GET /match2/v1/namespaces/{namespace}/match-tickets/{ticketid}

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchTicketsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchTicketsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchTicket_ByTicketid(ticketid:string)

// return Promise<MatchTicketStatus>
```

## GET /match2/v1/namespaces/{namespace}/match-pools/{pool}/metrics

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMetrics_ByPool(pool:string)

// return Promise<TicketMetricResultRecord>
```

## GET /match2/v1/namespaces/{namespace}/match-pools/{pool}/tickets

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTickets_ByPool(pool:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListMatchPoolTicketsResponse>
```

## GET /match2/v1/namespaces/{namespace}/match-pools/{pool}/metrics/player

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMetricsPlayer_ByPool(pool:string)

// return Promise<PlayerMetricRecord>
```

## PUT /match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/accept

```
import { AccelByte } from '@accelbyte/sdk'
import { BackfillApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProposalAccept_ByBackfillId(backfillID:string, data: {
             BackFillAcceptRequest
    })

// return Promise<GameSession>
```

## PUT /match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/reject

```
import { AccelByte } from '@accelbyte/sdk'
import { BackfillApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProposalReject_ByBackfillId(backfillID:string, data: {
             BackFillRejectRequest
    })

// return Promise
```

## GET /match2/v1/public/namespaces/{namespace}/match-pools/{pool}/metrics/player

```
import { AccelByte } from '@accelbyte/sdk'
import { MatchPoolsApi } from '@accelbyte/sdk-matchmaking'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMetricsPlayer_ByPool_ByNS(pool:string)

// return Promise<PlayerMetricRecord>
```

## GET /match2/v1/admin/config/log

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-matchmaking'

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

## PATCH /match2/v1/admin/config/log

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-matchmaking'

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