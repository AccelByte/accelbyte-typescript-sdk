## GET /match2/v1/config

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.ConfigApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig()

// return Promise<NamespaceConfigList>

</script>
```

## GET /match2/v1/environment-variables

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.EnvironmentVariablesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getEnvironmentVariables()

// return Promise<ListEnvironmentVariablesResponse>

</script>
```

## GET /match2/v1/config/namespaces/{namespace}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.ConfigApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig_ByNamespace()

// return Promise<NamespaceConfig>

</script>
```

## PATCH /match2/v1/config/namespaces/{namespace}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.ConfigApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfig_ByNamespace(data: {
             PatchNamespaceConfigRequest
    })

// return Promise<NamespaceConfig>

</script>
```

## POST /match2/v1/namespaces/{namespace}/backfill

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBackfill(data: {
             BackFillCreateRequest
    })

// return Promise<BackfillCreateResponse>

</script>
```

## GET /match2/v1/namespaces/{namespace}/rulesets

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRulesets( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number
    })

// return Promise<ListRuleSetsResponse>

</script>
```

## POST /match2/v1/namespaces/{namespace}/rulesets

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRuleset(data: {
             RuleSetPayload
    })

// return Promise

</script>
```

## GET /match2/v1/namespaces/{namespace}/match-pools

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchPools( queryParams?: {
             limit?: number,
             name?: string | null,
             offset?: number
    })

// return Promise<ListMatchPoolsResponse>

</script>
```

## POST /match2/v1/namespaces/{namespace}/match-pools

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMatchPool(data: {
             MatchPool
    })

// return Promise

</script>
```

## POST /match2/v1/namespaces/{namespace}/match-tickets

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchTicketsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMatchTicket(data: {
             MatchTicketRequest
    })

// return Promise<MatchTicketResponse>

</script>
```

## GET /match2/v1/namespaces/{namespace}/match-functions

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchFunctionsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchFunctions( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListMatchFunctionsResponse>

</script>
```

## POST /match2/v1/namespaces/{namespace}/match-functions

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchFunctionsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMatchFunction(data: {
             MatchFunctionRequest
    })

// return Promise

</script>
```

## GET /match2/v1/namespaces/{namespace}/match-tickets/me

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchTicketsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchTicketsMe( queryParams?: {
             limit?: number,
             matchPool?: string | null,
             offset?: number
    })

// return Promise<MatchTicketStatuses>

</script>
```

## GET /match2/v1/namespaces/{namespace}/backfill/proposal

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBackfillProposal( queryParams: {
             sessionID: string | null
    })

// return Promise<BackfillProposalResponse>

</script>
```

## DELETE /match2/v1/namespaces/{namespace}/match-pools/{pool}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMatchPool_ByPool(pool:string)

// return Promise

</script>
```

## GET /match2/v1/namespaces/{namespace}/match-pools/{pool}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchPool_ByPool(pool:string)

// return Promise<MatchPool>

</script>
```

## PUT /match2/v1/namespaces/{namespace}/match-pools/{pool}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMatchPool_ByPool(pool:string, data: {
             MatchPoolConfig
    })

// return Promise<MatchPool>

</script>
```

## DELETE /match2/v1/namespaces/{namespace}/rulesets/{ruleset}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRuleset_ByRuleset(ruleset:string)

// return Promise

</script>
```

## GET /match2/v1/namespaces/{namespace}/rulesets/{ruleset}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRuleset_ByRuleset(ruleset:string)

// return Promise<RuleSetPayload>

</script>
```

## PUT /match2/v1/namespaces/{namespace}/rulesets/{ruleset}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.RuleSetsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRuleset_ByRuleset(ruleset:string, data: {
             RuleSetPayload
    })

// return Promise<RuleSetPayload>

</script>
```

## DELETE /match2/v1/namespaces/{namespace}/backfill/{backfillID}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteBackfill_ByBackfillId(backfillID:string)

// return Promise

</script>
```

## GET /match2/v1/namespaces/{namespace}/backfill/{backfillID}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBackfill_ByBackfillId(backfillID:string)

// return Promise<BackfillGetResponse>

</script>
```

## DELETE /match2/v1/namespaces/{namespace}/match-functions/{name}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchFunctionsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMatchFunction_ByName(name:string)

// return Promise

</script>
```

## PUT /match2/v1/namespaces/{namespace}/match-functions/{name}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchFunctionsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMatchFunction_ByName(name:string, data: {
             MatchFunctionRequest
    })

// return Promise<MatchFunctionConfig>

</script>
```

## DELETE /match2/v1/namespaces/{namespace}/match-tickets/{ticketid}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchTicketsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMatchTicket_ByTicketid(ticketid:string)

// return Promise

</script>
```

## GET /match2/v1/namespaces/{namespace}/match-tickets/{ticketid}

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchTicketsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMatchTicket_ByTicketid(ticketid:string)

// return Promise<MatchTicketStatus>

</script>
```

## GET /match2/v1/namespaces/{namespace}/match-pools/{pool}/metrics

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMetrics_ByPool(pool:string)

// return Promise<TicketMetricResultRecord>

</script>
```

## GET /match2/v1/namespaces/{namespace}/match-pools/{pool}/tickets

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getTickets_ByPool(pool:string,  queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListMatchPoolTicketsResponse>

</script>
```

## GET /match2/v1/namespaces/{namespace}/match-pools/{pool}/metrics/player

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMetricsPlayer_ByPool(pool:string)

// return Promise<PlayerMetricRecord>

</script>
```

## PUT /match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/accept

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProposalAccept_ByBackfillId(backfillID:string, data: {
             BackFillAcceptRequest
    })

// return Promise<GameSession>

</script>
```

## PUT /match2/v1/namespaces/{namespace}/backfill/{backfillID}/proposal/reject

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.BackfillApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProposalReject_ByBackfillId(backfillID:string, data: {
             BackFillRejectRequest
    })

// return Promise

</script>
```

## GET /match2/v1/public/namespaces/{namespace}/match-pools/{pool}/metrics/player

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.MatchPoolsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMetricsPlayer_ByPool_ByNS(pool:string)

// return Promise<PlayerMetricRecord>

</script>
```

## GET /match2/v1/admin/config/log

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfigLog()

// return Promise<Configuration>

</script>
```

## PATCH /match2/v1/admin/config/log

```
<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-matchmaking/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AccelByteSDK_Matchmaking.ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfigLog(data: {
             Configuration
    })

// return Promise<Configuration>

</script>
```