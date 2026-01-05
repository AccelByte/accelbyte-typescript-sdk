## GET /iam/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { BansApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BansApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBans()

// return Promise<Bans>
```

## GET /iam/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoles( queryParams?: {
             isWildcard?: string | null
    })

// return Promise<RoleResponseWithManagersArray>
```

## POST /iam/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRole(data: {
             RoleCreateRequest
    })

// return Promise<Role>
```

## GET /iam/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClients()

// return Promise<ClientResponseArray>
```

## POST /iam/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createClient(data: {
             ClientCreateRequest
    })

// return Promise<ClientCreationResponse>
```

## POST /iam/v3/logout

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLogout_v3()

// return Promise
```

## GET /iam/oauth/jwks

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk)
  .getOauthJwks()

// return Promise<JwkSet>
```

## POST /iam/oauth/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk)
  .postOauthToken(data: {
             grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token',
             code?: string | null,
             extend_exp?: boolean | null,
             namespace?: string | null,
             password?: string | null,
             redirect_uri?: string | null,
             refresh_token?: string | null,
             username?: string | null
    })

// return Promise<TokenResponse>
```

## GET /iam/bans/reasons

```
import { AccelByte } from '@accelbyte/sdk'
import { BansApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BansApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBansReasons()

// return Promise<BanReasons>
```

## POST /iam/oauth/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk)
  .postOauthVerify(data: {
             token: string | null
    })

// return Promise<TokenResponse>
```

## GET /iam/v3/oauth/jwks

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .getOauthJwks_v3()

// return Promise<JwkSet>
```

## DELETE /iam/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRole_ByRoleId(roleId:string)

// return Promise
```

## GET /iam/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRole_ByRoleId(roleId:string)

// return Promise<RoleResponse>
```

## PUT /iam/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRole_ByRoleId(roleId:string, data: {
             RoleUpdateRequest
    })

// return Promise<RoleResponse>
```

## POST /iam/v3/oauth/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthToken_v3(data: {
             grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | 'urn:ietf:params:oauth:grant-type:extend_client_credentials',
             additionalData?: string | null,
             client_id?: string | null,
             client_secret?: string | null,
             code?: string | null,
             code_verifier?: string | null,
             extendNamespace?: string | null,
             extend_exp?: boolean | null,
             password?: string | null,
             redirect_uri?: string | null,
             refresh_token?: string | null,
             username?: string | null
    })

// return Promise<TokenWithDeviceCookieResponseV3>
```

## POST /iam/v4/oauth/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20V4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20V4Api(sdk)
  .postOauthToken_v4(data: {
             grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | 'urn:ietf:params:oauth:grant-type:extend_client_credentials' | 'urn:ietf:params:oauth:grant-type:login_queue_ticket',
             additionalData?: string | null,
             client_id?: string | null,
             client_secret?: string | null,
             code?: string | null,
             code_verifier?: string | null,
             extendNamespace?: string | null,
             extend_exp?: boolean | null,
             login_queue_ticket?: string | null,
             password?: string | null,
             redirect_uri?: string | null,
             refresh_token?: string | null,
             username?: string | null},
             queryParams?: {
             code_challenge?: string | null,
             code_challenge_method?: 'S256' | 'plain'
    })

// return Promise
```

## POST /iam/oauth/authorize

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk)
  .postOauthAuthorize(data: {
             client_id: string | null,
             redirect_uri: string | null,
             response_type: 'code' | 'token',
             login?: string | null,
             password?: string | null,
             scope?: string | null,
             state?: string | null
    })

// return Promise
```

## POST /iam/v3/authenticate

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postAuthenticate_v3(data: {
             password: string | null,
             request_id: string | null,
             user_name: string | null,
             client_id?: string | null,
             extend_exp?: boolean | null,
             redirect_uri?: string | null
    })

// return Promise
```

## POST /iam/v3/oauth/revoke

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthRevoke_v3(data: {
             token: string | null
    })

// return Promise
```

## POST /iam/v3/oauth/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthVerify_v3(data: {
             token: string | null
    })

// return Promise<TokenResponseV3>
```

## GET /iam/v3/public/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk)
  .getRoles_v3( queryParams?: {
             after?: string | null,
             before?: string | null,
             isWildcard?: boolean | null,
             limit?: number
    })

// return Promise<RoleNamesResponseV3>
```

## POST /iam/oauth/revoke/user

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postOauthRevokeUser(data: {
             userID: string | null
    })

// return Promise
```

## POST /iam/v3/headless/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postHeadlesToken_v3(data: {
             linkingToken: string | null,
             additionalData?: string | null,
             extend_exp?: boolean | null
    })

// return Promise<TokenResponseV3>
```

## POST /iam/v3/oauth/mfa/code

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthMfaCode_v3(data: {
             clientId: string | null,
             factor: string | null,
             mfaToken: string | null
    })

// return Promise
```

## POST /iam/v3/token/exchange

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postTokenExchange_v3(data: {
             code: string | null,
             additionalData?: string | null
    })

// return Promise<TokenResponseV3>
```

## DELETE /iam/clients/{clientId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteClient_ByClientId(clientId:string)

// return Promise
```

## GET /iam/clients/{clientId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClient_ByClientId(clientId:string)

// return Promise<ClientResponse>
```

## PUT /iam/clients/{clientId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClient_ByClientId(clientId:string, data: {
             ClientUpdateRequest
    })

// return Promise<ClientResponse>
```

## POST /iam/oauth/revoke/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk)
  .postOauthRevokeToken(data: {
             token: string | null
    })

// return Promise
```

## GET /iam/v3/oauth/authorize

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .getOauthAuthorize_v3( queryParams: {
             client_id: string | null,
             response_type: 'code',
             code_challenge?: string | null,
             code_challenge_method?: 'S256' | 'plain',
             createHeadless?: boolean | null,
             oneTimeLinkCode?: string | null,
             redirect_uri?: string | null,
             scope?: string | null,
             state?: string | null,
             target_auth_page?: string | null,
             useRedirectUriAsLoginUrlWhenLocked?: boolean | null
    })

// return Promise
```

## GET /iam/v3/public/users/me

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMe_v3( queryParams?: {
             includeAllPlatforms?: boolean | null
    })

// return Promise<UserResponseV3>
```

## POST /iam/v3/upgrade/forward

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postUpgradeForward_v3(data: {
             client_id: string | null,
             upgrade_success_token: string | null
    })

// return Promise
```

## GET /iam/v3/location/country

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .getLocationCountry_v3()

// return Promise<CountryLocationResponse>
```

## POST /iam/v3/oauth/introspect

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthIntrospect_v3(data: {
             token: string | null
    })

// return Promise<TokenIntrospectResponse>
```

## POST /iam/v3/oauth/mfa/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthMfaVerify_v3(data: {
             code: string | null,
             factor: string | null,
             mfaToken: string | null,
             rememberDevice: boolean | null
    })

// return Promise<TokenResponseV3>
```

## GET /iam/v3/sso/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { SsoApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SsoApi(sdk)
  .getSso_ByPlatformId_v3(platformId:string,  queryParams?: {
             payload?: string | null
    })

// return Promise
```

## POST /iam/v4/oauth/mfa/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20V4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20V4Api(sdk)
  .postOauthMfaVerify_v4(data: {
             code: string | null,
             factor: string | null,
             mfaToken: string | null,
             rememberDevice: boolean | null
    })

// return Promise
```

## GET /iam/oauth/revocationlist

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk)
  .getOauthRevocationlist()

// return Promise<RevocationList>
```

## DELETE /iam/roles/{roleId}/admin

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAdmin_ByRoleId(roleId:string)

// return Promise
```

## GET /iam/roles/{roleId}/admin

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdmin_ByRoleId(roleId:string)

// return Promise<RoleAdminStatusResponse>
```

## POST /iam/roles/{roleId}/admin

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAdmin_ByRoleId(roleId:string)

// return Promise
```

## POST /iam/v3/link/code/request

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postLinkCodeRequest_v3(data: {
             platformId: string | null
    })

// return Promise<OneTimeLinkingCodeResponse>
```

## POST /iam/v3/link/code/validate

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postLinkCodeValidate_v3(data: {
             oneTimeLinkCode: string | null
    })

// return Promise<OneTimeLinkingCodeValidationResponse>
```

## DELETE /iam/roles/{roleId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMember_ByRoleId(roleId:string, data: {
             RoleMembersRequest
    })

// return Promise
```

## GET /iam/roles/{roleId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMembers_ByRoleId(roleId:string)

// return Promise<RoleMembersResponse>
```

## POST /iam/roles/{roleId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMember_ByRoleId(roleId:string, data: {
             RoleMembersRequest
    })

// return Promise
```

## POST /iam/v3/link/token/exchange

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postLinkTokenExchange_v3(data: {
             client_id: string | null,
             oneTimeLinkCode: string | null,
             additionalData?: string | null,
             isTransient?: boolean | null
    })

// return Promise<TokenResponseV3>
```

## POST /iam/v4/public/users/invite

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk)
  .createUserInvite_v4(data: {
             PublicInviteUserRequestV4
    })

// return Promise<InviteUserResponseV3>
```

## DELETE /iam/roles/{roleId}/managers

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteManager_ByRoleId(roleId:string, data: {
             RoleManagersRequest
    })

// return Promise
```

## GET /iam/roles/{roleId}/managers

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getManagers_ByRoleId(roleId:string)

// return Promise<RoleManagersResponse>
```

## POST /iam/roles/{roleId}/managers

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateManager_ByRoleId(roleId:string, data: {
             RoleManagersRequest
    })

// return Promise
```

## POST /iam/v3/authenticateWithLink

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postAuthenticateWithLink_v3(data: {
             client_id: string | null,
             linkingToken: string | null,
             password: string | null,
             username: string | null,
             extend_exp?: boolean | null
    })

// return Promise<TokenResponseV3>
```

## GET /iam/v3/oauth/revocationlist

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .getOauthRevocationlist_v3()

// return Promise<RevocationList>
```

## POST /iam/v4/oauth/headless/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20V4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20V4Api(sdk)
  .postOauthHeadlesToken_v4(data: {
             linkingToken: string | null,
             additionalData?: string | null,
             extend_exp?: boolean | null
    })

// return Promise
```

## POST /iam/v4/oauth/token/exchange

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20V4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20V4Api(sdk)
  .postOauthTokenExchange_v4(data: {
             code: string | null,
             additionalData?: string | null
    })

// return Promise
```

## GET /iam/v3/public/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk)
  .getRole_ByRoleId_v3(roleId:string)

// return Promise<RoleResponse>
```

## PUT /iam/clients/{clientId}/secret

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSecret_ByClientId(clientId:string, data: {
             ClientUpdateSecretRequest
    })

// return Promise
```

## POST /iam/roles/{roleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByRoleId(roleId:string, data: {
             Permissions
    })

// return Promise
```

## POST /iam/v3/oauth/mfa/factor/change

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthMfaFactorChange_v3(data: {
             factor: string | null,
             mfaToken: string | null
    })

// return Promise
```

## POST /iam/v3/oauth/simultaneousLogin

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthSimultaneousLogin_v3(data: {
             nativePlatform: 'epicgames' | 'steam',
             nativePlatformTicket: string | null,
             simultaneousPlatform?: string | null,
             simultaneousTicket?: string | null
    })

// return Promise<TokenResponseV3>
```

## GET /iam/v3/public/inputValidations

```
import { AccelByte } from '@accelbyte/sdk'
import { InputValidationsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InputValidationsApi(sdk)
  .getInputValidations_v3( queryParams?: {
             defaultOnEmpty?: boolean | null,
             languageCode?: string | null
    })

// return Promise<InputValidationsPublicResponse>
```

## POST /iam/v3/sso/{platformId}/logout

```
import { AccelByte } from '@accelbyte/sdk'
import { SsoApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SsoApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createLogout_ByPlatformId_v3(platformId:string)

// return Promise
```

## POST /iam/v4/oauth/simultaneousLogin

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20V4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20V4Api(sdk)
  .postOauthSimultaneousLogin_v4(data: {
             nativePlatform: 'epicgames' | 'steam',
             nativePlatformTicket: string | null,
             simultaneousPlatform?: string | null,
             simultaneousTicket?: string | null},
             queryParams?: {
             code_challenge?: string | null,
             code_challenge_method?: 'S256' | 'plain'
    })

// return Promise
```

## POST /iam/v3/oauth/mfa/verify/forward

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postOauthMfaVerifyForward_v3(data: {
             code: string | null,
             factor: string | null,
             mfaToken: string | null,
             rememberDevice?: boolean | null
    })

// return Promise
```

## POST /iam/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUser(data: {
             UserCreateRequest
    })

// return Promise<UserCreateResponse>
```

## POST /iam/v4/oauth/authenticateWithLink

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20V4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20V4Api(sdk)
  .postOauthAuthenticateWithLink_v4(data: {
             client_id: string | null,
             linkingToken: string | null,
             password: string | null,
             username: string | null,
             extend_exp?: boolean | null
    })

// return Promise
```

## GET /iam/namespaces/{namespace}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClients_ByNS()

// return Promise<ClientResponseArray>
```

## POST /iam/namespaces/{namespace}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createClient_ByNS(data: {
             ClientCreateRequest
    })

// return Promise<ClientCreationResponse>
```

## POST /iam/v3/authenticateWithLink/forward

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postAuthenticateWithLinkForward_v3(data: {
             client_id: string | null,
             linkingToken: string | null,
             password: string | null,
             username: string | null,
             extend_exp?: boolean | null
    })

// return Promise
```

## GET /iam/v3/public/users/me/profileStatus

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getUsersMeProfileStatus_v3()

// return Promise<UserProfileUpdateAllowStatus>
```

## GET /iam/namespaces/{namespace}/users/admin

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersAdmin( queryParams?: {
             after?: number,
             before?: number,
             limit?: number,
             roleId?: string | null
    })

// return Promise<GetAdminUsersResponse>
```

## GET /iam/v3/public/inputValidations/{field}

```
import { AccelByte } from '@accelbyte/sdk'
import { InputValidationsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InputValidationsApi(sdk)
  .getInputValidation_ByField_v3(field:string)

// return Promise<InputValidationConfigVersion>
```

## GET /iam/v3/public/users/verify_link/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getUsersVerifyLinkVerify_v3( queryParams?: {
             code?: string | null
    })

// return Promise
```

## GET /iam/namespaces/{namespace}/users/search

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersSearch( queryParams?: {
             query?: string | null
    })

// return Promise<SearchUsersResponse>
```

## POST /iam/clients/{clientId}/clientpermissions

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClientpermission_ByClientId(clientId:string, data: {
             ClientPermissions
    })

// return Promise
```

## DELETE /iam/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByUserId(userId:string)

// return Promise
```

## GET /iam/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByUserId(userId:string)

// return Promise<UserResponse>
```

## PUT /iam/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUser_ByUserId(userId:string, data: {
             UserUpdateRequest
    })

// return Promise<UserResponse>
```

## POST /iam/v3/oauth/platforms/{platformId}/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .postTokenOauth_ByPlatformId_v3(platformId:string, data: {
             additionalData?: string | null,
             client_id?: string | null,
             createHeadless?: boolean | null,
             device_id?: string | null,
             macAddress?: string | null,
             platform_token?: string | null,
             serviceLabel?: number,
             skipSetCookie?: boolean | null
    })

// return Promise<TokenResponse>
```

## POST /iam/v4/oauth/platforms/{platformId}/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20V4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20V4Api(sdk)
  .postTokenOauth_ByPlatformId_v4(platformId:string, data: {
             additionalData?: string | null,
             client_id?: string | null,
             createHeadless?: boolean | null,
             device_id?: string | null,
             macAddress?: string | null,
             platform_token?: string | null,
             serviceLabel?: number,
             skipSetCookie?: boolean | null},
             queryParams?: {
             code_challenge?: string | null,
             code_challenge_method?: 'S256' | 'plain'
    })

// return Promise
```

## GET /iam/namespaces/{namespace}/users/byLoginId

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersByLoginId( queryParams?: {
             loginId?: string | null
    })

// return Promise<PublicUserResponse>
```

## POST /iam/v2/public/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUser_v2(data: {
             UserCreateRequest
    })

// return Promise<UserCreateResponse>
```

## POST /iam/v3/namespace/{namespace}/token/request

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postTokenRequest_v3(data: {
             client_id: string | null},
             queryParams?: {
             code_challenge?: string | null,
             code_challenge_method?: 'S256' | 'plain'
    })

// return Promise<TargetTokenCodeResponse>
```

## GET /iam/v3/platforms/{platformId}/authenticate

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .getAuthenticate_ByPlatformId_v3(platformId:string,  queryParams: {
             state: string | null,
             code?: string | null,
             error?: string | null,
             assoc_handle?: string | null,
             claimed_id?: string | null,
             identity?: string | null,
             mode?: string | null,
             ns?: string | null,
             op_endpoint?: string | null,
             response_nonce?: string | null,
             return_to?: string | null,
             sig?: string | null,
             signed?: string | null
    })

// return Promise
```

## POST /iam/v3/platforms/{platformId}/token/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20ExtensionApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20ExtensionApi(sdk)
  .postTokenVerify_ByPlatformId_v3(platformId:string, data: {
             platform_token: string | null
    })

// return Promise<PlatformTokenRefreshResponseV3>
```

## GET /iam/v3/public/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsers_v3( queryParams?: {
             by?: string | null,
             limit?: number,
             offset?: number,
             platformBy?: string | null,
             platformId?: string | null,
             query?: string | null
    })

// return Promise<PublicUserInformationResponseV3>
```

## POST /iam/v3/public/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUser_v3(data: {
             UserCreateRequestV3
    })

// return Promise<UserCreateResponseV3>
```

## POST /iam/v3/public/users/me/verify_link/request

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeVerifyLinkRequest_v3(data: {
             SendVerificationLinkRequest
    })

// return Promise
```

## POST /iam/v4/public/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk)
  .createUser_v4(data: {
             CreateUserRequestV4
    })

// return Promise<CreateUserResponseV4>
```

## POST /iam/v3/public/users/me/code/request/forward

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeCodeRequestForward_v3(data: {
             SendVerificationCodeRequestV3
    })

// return Promise
```

## DELETE /iam/namespaces/{namespace}/clients/{clientId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteClient_ByClientId_ByNS(clientId:string)

// return Promise
```

## POST /iam/namespaces/{namespace}/users/{userId}/ban

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBan_ByUserId(userId:string, data: {
             BanCreateRequest
    })

// return Promise<UserBanResponse>
```

## GET /iam/v3/oauth/platforms/{platformId}/authorize

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk)
  .getAuthorizeOauth_ByPlatformId_v3(platformId:string,  queryParams: {
             request_id: string | null,
             client_id?: string | null,
             redirect_uri?: string | null
    })

// return Promise
```

## PATCH /iam/v3/public/namespaces/{namespace}/users/me

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUserMe_v3(data: {
             PublicUserUpdateRequestV3
    })

// return Promise<UserResponseV3>
```

## PUT /iam/v3/public/namespaces/{namespace}/users/me

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMe_v3(data: {
             PublicUserUpdateRequestV3
    })

// return Promise<UserResponseV3>
```

## GET /iam/v3/public/users/me/headless/link/conflict

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeHeadlessLinkConflict_v3( queryParams: {
             oneTimeLinkCode: string | null
    })

// return Promise<GetLinkHeadlessAccountConflictResponse>
```

## PATCH /iam/v4/public/namespaces/{namespace}/users/me

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUserMe_v4(data: {
             PublicUserUpdateRequestV3
    })

// return Promise<UserResponseV3>
```

## GET /iam/namespaces/{namespace}/users/{userId}/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBans_ByUserId(userId:string)

// return Promise<UserBanResponseArray>
```

## POST /iam/namespaces/{namespace}/users/resetPassword

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserResetPassword(data: {
             ResetPasswordRequest
    })

// return Promise
```

## GET /iam/v3/public/namespaces/{namespace}/countries

```
import { AccelByte } from '@accelbyte/sdk'
import { CountryApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CountryApi(sdk)
  .getCountries_v3()

// return Promise<CountryResponseArray>
```

## POST /iam/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRole_ByUserId(userId:string, data: {
             string[]
    })

// return Promise
```

## POST /iam/namespaces/{namespace}/users/forgotPassword

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserForgotPassword(data: {
             SendVerificationCodeRequest
    })

// return Promise
```

## GET /iam/namespaces/{namespace}/users/listByLoginIds

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersListByLoginIds( queryParams?: {
             loginIds?: string | null
    })

// return Promise<PublicUsersResponse>
```

## POST /iam/v4/public/namespaces/{namespace}/test_users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk)
  .createTestUser_v4(data: {
             CreateTestUserRequestV4
    })

// return Promise<CreateUserResponseV4>
```

## PUT /iam/namespaces/{namespace}/users/{userId}/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateEnable_ByUserId(userId:string)

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/reset

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserReset_v3(data: {
             ResetPasswordRequestV3
    })

// return Promise
```

## PUT /iam/namespaces/{namespace}/users/{userId}/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateDisable_ByUserId(userId:string, data: {
             DisableUserRequest
    })

// return Promise
```

## GET /iam/namespaces/{namespace}/users/byPlatformUserID

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersByPlatformUserId( queryParams: {
             platformID: string | null,
             platformUserID: string | null
    })

// return Promise<PublicUserResponse>
```

## POST /iam/v3/public/namespaces/{namespace}/users/forgot

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserForgot_v3(data: {
             ForgotPasswordRequestV3
    })

// return Promise
```

## PUT /iam/namespaces/{namespace}/users/{userId}/password

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePassword_ByUserId(userId:string, data: {
             UserPasswordUpdateRequest
    })

// return Promise
```

## DELETE /iam/roles/{roleId}/permissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePermission_ByRoleId_ByResource_ByAction(roleId:string, resource:string, action:number)

// return Promise
```

## POST /iam/roles/{roleId}/permissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByRoleId_ByResource_ByAction(roleId:string, resource:string, action:number, data: {
             UpdatePermissionScheduleRequest
    })

// return Promise
```

## POST /iam/namespaces/{namespace}/users/{userId}/crosslink

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postCrosslink_ByUserId(userId:string, data: {
             linkingToken: string | null,
             platformId?: string | null
    })

// return Promise
```

## GET /iam/namespaces/{namespace}/users/{userId}/platforms

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatforms_ByUserId(userId:string)

// return Promise<UserLinkedPlatformArray>
```

## GET /iam/namespaces/{namespace}/users/{userId}/publisher

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublisher_ByUserId(userId:string)

// return Promise<GetPublisherUserResponse>
```

## GET /iam/v2/public/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getUser_ByUserId_v2(userId:string)

// return Promise<UserResponse>
```

## PATCH /iam/v2/public/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUser_ByUserId_v2(userId:string, data: {
             UserUpdateRequest
    })

// return Promise<UserResponseArray>
```

## GET /iam/v3/public/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getUser_ByUserId_v3(userId:string)

// return Promise<PublicUserResponseV3>
```

## POST /iam/v3/public/users/me/headless/linkWithProgression

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeHeadlesLinkWithProgression_v3(data: {
             LinkHeadlessAccountRequest
    })

// return Promise
```

## POST /iam/v3/sso/saml/platforms/{platformId}/authenticate

```
import { AccelByte } from '@accelbyte/sdk'
import { SsoSaml20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SsoSaml20Api(sdk)
  .postAuthenticateSamlSso_ByPlatformId_v3(platformId:string,  queryParams: {
             state: string | null,
             code?: string | null,
             error?: string | null
    })

// return Promise
```

## GET /iam/v4/public/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByUserId_v4(userId:string)

// return Promise<UserPublicInfoResponseV4>
```

## PUT /iam/v4/public/namespaces/{namespace}/users/me/email

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMeEmail_v4(data: {
             EmailUpdateRequestV4
    })

// return Promise
```

## POST /iam/v4/public/users/me/headless/code/verify/forward

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeHeadlesCodeVerifyForward_v4(data: {
             UpgradeHeadlessAccountWithVerificationCodeRequestV4
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/platforms

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserPlatform_v3(data: {
             UsersPlatformInfosRequestV3
    })

// return Promise<UsersPlatformInfosResponse>
```

## DELETE /iam/namespaces/{namespace}/users/{userId}/information

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteInformation_ByUserId(userId:string)

// return Promise
```

## GET /iam/namespaces/{namespace}/users/{userId}/information

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInformation_ByUserId(userId:string)

// return Promise<UserInformation>
```

## POST /iam/namespaces/{namespace}/users/{userId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByUserId(userId:string, data: {
             Permissions
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/bulk/basic

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserBulkBasic_v3(data: {
             UserIDsRequest
    })

// return Promise<ListBulkUserResponse>
```

## POST /iam/namespaces/{namespace}/users/{userId}/verification

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVerification_ByUserId(userId:string, data: {
             UserVerificationRequest
    })

// return Promise
```

## POST /iam/oauth/namespaces/{namespace}/users/{userId}/revoke

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRevokeOauth_ByUserId(userId:string)

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/code/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserCodeVerify_v3(data: {
             VerifyRegistrationCode
    })

// return Promise
```

## PUT /iam/v3/public/namespaces/{namespace}/users/me/password

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMePassword_v3(data: {
             UserPasswordUpdateV3Request
    })

// return Promise
```

## GET /iam/v3/public/namespaces/{namespace}/config/{configKey}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigApi(sdk)
  .getConfig_ByConfigKey_v3(configKey:string)

// return Promise<ConfigValueResponseV3>
```

## GET /iam/v3/public/namespaces/{namespace}/users/availability

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getUsersAvailability_v3( queryParams: {
             field: string | null,
             query: string | null
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/code/request

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserCodeRequest_v3(data: {
             SendRegisterVerificationCodeRequest
    })

// return Promise
```

## DELETE /iam/namespaces/{namespace}/users/{userId}/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRole_ByUserId_ByRoleId(userId:string, roleId:string)

// return Promise
```

## POST /iam/namespaces/{namespace}/users/{userId}/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRole_ByUserId_ByRoleId(userId:string, roleId:string)

// return Promise
```

## GET /iam/v2/public/namespaces/{namespace}/users/{userId}/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getBans_ByUserId_v2(userId:string,  queryParams?: {
             activeOnly?: boolean | null
    })

// return Promise<UserBanResponseArray>
```

## POST /iam/v2/public/namespaces/{namespace}/users/resetPassword

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserResetPassword_v2(data: {
             ResetPasswordRequest
    })

// return Promise
```

## GET /iam/v3/public/namespaces/{namespace}/users/{userId}/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBans_ByUserId_v3(userId:string,  queryParams?: {
             activeOnly?: boolean | null,
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<GetUserBanV3Response>
```

## DELETE /iam/v4/public/namespaces/{namespace}/users/me/mfa/device

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeMfaDevice_v4()

// return Promise
```

## GET /iam/v4/public/namespaces/{namespace}/users/me/mfa/factor

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaFactor_v4()

// return Promise<EnabledFactorsResponseV4>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/factor

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaFactor_v4(data: {
             factor: string | null
    })

// return Promise
```

## GET /iam/v4/public/namespaces/{namespace}/users/me/mfa/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaStatus_v4()

// return Promise<UserMfaStatusResponseV4>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaStatus_v4()

// return Promise<UserMfaStatusResponseV4>
```

## POST /iam/v2/public/namespaces/{namespace}/users/forgotPassword

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserForgotPassword_v2(data: {
             SendVerificationCodeRequest
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/me/code/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeCodeVerify_v3(data: {
             UserVerificationRequestV3
    })

// return Promise
```

## GET /iam/namespaces/{namespace}/users/{userId}/logins/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLoginsHistories_ByUserId(userId:string,  queryParams?: {
             after?: number,
             before?: number,
             limit?: number
    })

// return Promise<LoginHistoriesResponse>
```

## POST /iam/namespaces/{namespace}/users/{userId}/verificationcode

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVerificationcode_ByUserId(userId:string, data: {
             SendVerificationCodeRequest
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/me/code/request

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeCodeRequest_v3(data: {
             SendVerificationCodeRequestV3
    })

// return Promise
```

## GET /iam/v3/public/namespaces/{namespace}/platforms/clients/oidc

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialApi(sdk)
  .getPlatformsClientsOidc_v3( queryParams: {
             clientId: string | null
    })

// return Promise<PublicThirdPartyPlatformInfoArray>
```

## POST /iam/v3/public/namespaces/{namespace}/users/input/validation

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserInputValidation_v3(data: {
             UserInputValidationRequest
    })

// return Promise<UserInputValidationResponse>
```

## DELETE /iam/clients/{clientId}/clientpermissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteClientpermission_ByClientId_ByResource_ByAction(clientId:string, resource:string, action:number)

// return Promise
```

## POST /iam/clients/{clientId}/clientpermissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClientpermission_ByClientId_ByResource_ByAction(clientId:string, resource:string, action:number)

// return Promise
```

## PUT /iam/v2/public/namespaces/{namespace}/users/{userId}/password

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePassword_ByUserId_v2(userId:string, data: {
             UserPasswordUpdateRequest
    })

// return Promise
```

## GET /iam/v3/public/namespaces/{namespace}/profileUpdateStrategies

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfileUpdateStrategyApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfileUpdateStrategyApi(sdk)
  .getProfileUpdateStrategies_v3( queryParams?: {
             field?: 'country' | 'display_name' | 'dob' | 'username'
    })

// return Promise<GetProfileUpdateStrategyConfigResponse>
```

## POST /iam/v3/public/namespaces/{namespace}/users/{userId}/validate

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postValidate_ByUserId_v3(userId:string, data: {
             password: string | null
    })

// return Promise
```

## GET /iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaBackupCode_v4()

// return Promise<BackupCodesResponseV4>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaBackupCode_v4()

// return Promise<BackupCodesResponseV4>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/email/code

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaEmailCode_v4(data: {
             action?: string | null,
             languageTag?: string | null
    })

// return Promise
```

## PUT /iam/namespaces/{namespace}/users/{userId}/bans/{banId}/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateEnable_ByUserId_ByBanId(userId:string, banId:string)

// return Promise<UserBanResponse>
```

## POST /iam/oauth/namespaces/{namespace}/platforms/{platformId}/token

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuthApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuthApi(sdk)
  .postTokenOauth_ByPlatformId(platformId:string, data: {
             device_id?: string | null,
             macAddress?: string | null,
             platform_token?: string | null
    })

// return Promise<TokenResponse>
```

## GET /iam/v3/public/namespaces/{namespace}/platforms/clients/active

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialApi(sdk)
  .getPlatformsClientsActive_v3()

// return Promise<PublicThirdPartyPlatformInfoArray>
```

## GET /iam/v3/public/namespaces/{namespace}/users/{userId}/platforms

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatforms_ByUserId_v3(userId:string,  queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number,
             platformId?: string | null
    })

// return Promise<UserLinkedPlatformsResponseV3>
```

## GET /iam/v3/public/namespaces/{namespace}/users/{userId}/publisher

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublisher_ByUserId_v3(userId:string)

// return Promise<GetPublisherUserResponse>
```

## POST /iam/v3/public/namespaces/{namespace}/users/me/headless/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeHeadlesVerify_v3(data: {
             UpgradeHeadlessAccountV3Request,
             queryParams?: {
             needVerificationCode?: boolean | null
    })

// return Promise<UserResponseV3>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/headless/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeHeadlesVerify_v4(data: {
             UpgradeHeadlessAccountRequestV4
    })

// return Promise<UserResponseV4>
```

## GET /iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaBackupCodes_v4( queryParams?: {
             languageTag?: string | null
    })

// return Promise
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaBackupCode_ByNS_v4( queryParams?: {
             languageTag?: string | null
    })

// return Promise
```

## PUT /iam/namespaces/{namespace}/users/{userId}/bans/{banId}/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateDisable_ByUserId_ByBanId(userId:string, banId:string)

// return Promise<UserBanResponse>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/email/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaEmailEnable_v4(data: {
             code: string | null
    })

// return Promise
```

## GET /iam/v3/public/namespaces/{namespace}/users/{userId}/information

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInformation_ByUserId_v3(userId:string)

// return Promise<UserInformationV3>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/email/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaEmailDisable_v4(data: {
             DisableMfaRequest
    })

// return Promise
```

## POST /iam/namespaces/{namespace}/users/{userId}/upgradeHeadlessAccount

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUpgradeHeadlessAccount_ByUserId(userId:string, data: {
             UpgradeHeadlessAccountRequest
    })

// return Promise<UserResponse>
```

## GET /iam/v3/public/namespaces/{namespace}/users/invite/{invitationId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getUserInvite_ByInvitationId_v3(invitationId:string)

// return Promise<UserInvitationV3>
```

## POST /iam/v3/public/namespaces/{namespace}/users/invite/{invitationId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .createUserInvite_ByInvitationId_v3(invitationId:string, data: {
             UserCreateRequestV3
    })

// return Promise<UserCreateResponseV3>
```

## POST /iam/v4/public/namespaces/{namespace}/users/invite/{invitationId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk)
  .createUserInvite_ByInvitationId_v4(invitationId:string, data: {
             CreateUserRequestV4
    })

// return Promise<CreateUserResponseV4>
```

## POST /iam/v3/public/namespaces/{namespace}/platforms/{platformId}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUser_ByPlatformId_v3(platformId:string, data: {
             PlatformUserIdRequest,
             queryParams?: {
             rawPID?: boolean | null,
             rawPUID?: boolean | null
    })

// return Promise<UserPlatforms>
```

## POST /iam/v4/public/namespaces/{namespace}/platforms/{platformId}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUser_ByPlatformId_v4(platformId:string, data: {
             PlatformUserIdRequestV4,
             queryParams?: {
             rawPUID?: boolean | null
    })

// return Promise<UserPlatforms>
```

## POST /iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/link

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlatformLink_ByUserId_v3(userId:string, data: {
             LinkPlatformAccountRequest
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/me/headless/code/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeHeadlesCodeVerify_v3(data: {
             UpgradeHeadlessAccountWithVerificationCodeRequestV3
    })

// return Promise<UserResponseV3>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/headless/code/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeHeadlesCodeVerify_v4(data: {
             UpgradeHeadlessAccountWithVerificationCodeRequestV4
    })

// return Promise<UserResponseV4>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/challenge/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaChallengeVerify_v4(data: {
             code?: string | null,
             factor?: string | null
    })

// return Promise<UserMfaTokenResponseV4>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/key

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaAuthenticatorKey_v4()

// return Promise<AuthenticatorKeyResponseV4>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaBackupCodeEnable_v4()

// return Promise<BackupCodesResponseV4>
```

## GET /iam/v3/public/namespaces/{namespace}/users/{userId}/logins/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLoginsHistories_ByUserId_v3(userId:string,  queryParams?: {
             after?: number,
             before?: number,
             limit?: number
    })

// return Promise<LoginHistoriesResponse>
```

## DELETE /iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMePlatform_ByPlatformId_v3(platformId:string, data: {
             UnlinkUserPlatformRequest
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMePlatform_ByPlatformId_v3(platformId:string, data: {
             ticket: string | null,
             redirectUri?: string | null
    })

// return Promise
```

## DELETE /iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeMfaBackupCodeDisable_v4(data: {
             DisableMfaRequest
    })

// return Promise
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCodes/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaBackupCodeEnable_ByNS_v4( queryParams?: {
             languageTag?: string | null
    })

// return Promise
```

## POST /iam/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postLink_ByUserId_ByPlatformId(userId:string, platformId:string, data: {
             ticket: string | null
    })

// return Promise
```

## GET /iam/v2/public/namespaces/{namespace}/users/{userId}/platforms/justice

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getPlatformsJustice_ByUserId_v2(userId:string)

// return Promise<GetUserMappingArray>
```

## GET /iam/v3/public/namespaces/{namespace}/users/{userId}/distinctPlatforms

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDistinctPlatforms_ByUserId_v3(userId:string)

// return Promise<DistinctPlatformResponseV3>
```

## GET /iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/justice

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformsJustice_ByUserId_v3(userId:string)

// return Promise<GetUserMappingV3Array>
```

## GET /iam/v4/public/namespaces/{namespace}/users/me/mfa/backupCode/download

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaBackupCodeDownload_v4()

// return Promise
```

## GET /iam/v3/public/namespaces/{namespace}/requests/{requestId}/async/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAsyncStatus_ByRequestId_v3(requestId:string)

// return Promise<LinkRequest>
```

## POST /iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaAuthenticatorEnable_v4(data: {
             code: string | null
    })

// return Promise
```

## POST /iam/namespaces/{namespace}/users/{userId}/platforms/{platformId}/unlink

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUnlink_ByUserId_ByPlatformId(userId:string, platformId:string, data: {
             platform_namespace?: string | null
    })

// return Promise
```

## DELETE /iam/v4/public/namespaces/{namespace}/users/me/mfa/authenticator/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeMfaAuthenticatorDisable_v4(data: {
             DisableMfaRequest
    })

// return Promise
```

## DELETE /iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/all

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAllMeUser_ByPlatformId_v3(platformId:string)

// return Promise
```

## DELETE /iam/namespaces/{namespace}/users/{userId}/permissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePermission_ByUserId_ByResource_ByAction(userId:string, resource:string, action:number)

// return Promise
```

## POST /iam/namespaces/{namespace}/users/{userId}/permissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByUserId_ByResource_ByAction(userId:string, resource:string, action:number, data: {
             UpdatePermissionScheduleRequest
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/force

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postForceMeUser_ByPlatformId_v3(platformId:string, data: {
             ticket: string | null
    })

// return Promise
```

## GET /iam/v2/public/namespaces/{namespace}/countries/{countryCode}/agerestrictions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getAgerestrictions_ByCountryCode_v2(countryCode:string)

// return Promise<Country>
```

## GET /iam/v3/public/namespaces/{namespace}/agerestrictions/countries/{countryCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getAgerestrictionCountry_ByCountryCode_v3(countryCode:string)

// return Promise<CountryV3Response>
```

## GET /iam/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformJustice_ByUserId_ByTargetNamespace(userId:string, targetNamespace:string)

// return Promise<GetUserMapping>
```

## POST /iam/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePlatformJustice_ByUserId_ByTargetNamespace(userId:string, targetNamespace:string)

// return Promise<GetUserJusticePlatformAccountResponse>
```

## GET /iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/web/link

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getWebLinkMeUsers_ByPlatformId_v3(platformId:string,  queryParams?: {
             clientId?: string | null,
             redirectUri?: string | null
    })

// return Promise<WebLinkingResponse>
```

## DELETE /iam/v2/public/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .deleteLink_ByUserId_ByPlatformId_v2(userId:string, platformId:string, data: {
             platform_namespace?: string | null
    })

// return Promise
```

## POST /iam/v2/public/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .postLink_ByUserId_ByPlatformId_v2(userId:string, platformId:string, data: {
             ticket: string | null
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/{userId}/platforms/linkWithProgression

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlatformLinkWithProgression_ByUserId_v3(userId:string, data: {
             LinkPlatformAccountWithProgressionRequest
    })

// return Promise
```

## POST /iam/v3/public/namespaces/{namespace}/users/me/platforms/justice/{targetNamespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMePlatformJustice_ByTargetNamespace_v3(targetNamespace:string)

// return Promise<CreateJusticeUserResponse>
```

## GET /iam/v3/public/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByPlatformId_ByPlatformUserId_v3(platformId:string, platformUserId:string)

// return Promise<UserResponseV3>
```

## POST /iam/namespaces/{namespace}/users/{userId}/upgradeHeadlessAccountWithVerificationCode

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUpgradeHeadlessAccountWithVerificationCode_ByUserId(userId:string, data: {
             UpgradeHeadlessAccountWithVerificationCodeRequest
    })

// return Promise<UserResponse>
```

## POST /iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/web/link/process

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .postWebLinkProcesMeUser_ByPlatformId_v3(platformId:string, data: {
             state: string | null,
             code?: string | null
    })

// return Promise<LinkRequest>
```

## GET /iam/v3/oauth/namespaces/{namespace}/users/{userId}/platforms/{platformId}/platformToken

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20Api } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20Api(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformTokenOauth_ByUserId_ByPlatformId_v3(userId:string, platformId:string)

// return Promise<TokenThirdPartyResponse>
```

## GET /iam/v3/public/namespaces/{namespace}/users/me/platforms/{platformId}/web/link/establish

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersApi(sdk)
  .getWebLinkEstablishMeUsers_ByPlatformId_v3(platformId:string,  queryParams: {
             state: string | null,
             code?: string | null
    })

// return Promise
```

## GET /iam/v3/admin/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { BansAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BansAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBans_v3()

// return Promise<BansV3>
```

## GET /iam/v3/admin/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoles_v3( queryParams?: {
             after?: string | null,
             before?: string | null,
             isWildcard?: boolean | null,
             limit?: number
    })

// return Promise<RoleResponseWithManagersAndPaginationV3>
```

## POST /iam/v3/admin/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRole_v3(data: {
             RoleCreateV3Request
    })

// return Promise<RoleV3>
```

## GET /iam/v4/admin/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoles_v4( queryParams?: {
             adminRole?: boolean | null,
             isWildcard?: boolean | null,
             limit?: number,
             offset?: number
    })

// return Promise<ListRoleV4Response>
```

## POST /iam/v4/admin/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createRole_v4(data: {
             RoleV4Request
    })

// return Promise<RoleV4Response>
```

## GET /iam/v3/admin/users/me

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMe_v3()

// return Promise<UserResponseV3>
```

## PATCH /iam/v4/admin/users/me

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUserMe_v4(data: {
             UserUpdateRequestV3
    })

// return Promise<UserResponseV3>
```

## GET /iam/v3/admin/bans/reasons

```
import { AccelByte } from '@accelbyte/sdk'
import { BansAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BansAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBansReasons_v3()

// return Promise<BanReasonsV3>
```

## POST /iam/v4/admin/users/invite

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserInvite_v4(data: {
             InviteUserRequestV4
    })

// return Promise<InviteUserResponseV3>
```

## DELETE /iam/v3/admin/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRole_ByRoleId_v3(roleId:string)

// return Promise
```

## GET /iam/v3/admin/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRole_ByRoleId_v3(roleId:string)

// return Promise<RoleResponseV3>
```

## PATCH /iam/v3/admin/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchRole_ByRoleId_v3(roleId:string, data: {
             RoleUpdateRequestV3
    })

// return Promise<RoleResponseV3>
```

## DELETE /iam/v4/admin/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRole_ByRoleId_v4(roleId:string)

// return Promise
```

## GET /iam/v4/admin/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRole_ByRoleId_v4(roleId:string)

// return Promise<RoleV4Response>
```

## PATCH /iam/v4/admin/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchRole_ByRoleId_v4(roleId:string, data: {
             RoleV4Request
    })

// return Promise<RoleV4Response>
```

## GET /iam/v3/admin/inputValidations

```
import { AccelByte } from '@accelbyte/sdk'
import { InputValidationsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InputValidationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInputValidations_v3()

// return Promise<InputValidationsResponse>
```

## PUT /iam/v3/admin/inputValidations

```
import { AccelByte } from '@accelbyte/sdk'
import { InputValidationsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InputValidationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateInputValidation_v3(data: {
             InputValidationUpdatePayload[]
    })

// return Promise
```

## POST /iam/v4/admin/users/users/invite

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserUserInvite_v4(data: {
             InviteUserRequestV4
    })

// return Promise<InviteUserResponseV3>
```

## GET /iam/v4/admin/invitationHistories

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInvitationHistories_v4( queryParams?: {
             limit?: number,
             namespace?: string | null,
             offset?: number
    })

// return Promise<ListInvitationHistoriesV4Response>
```

## GET /iam/v4/admin/users/me/mfa/factor

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaFactor_v4()

// return Promise<EnabledFactorsResponseV4>
```

## POST /iam/v4/admin/users/me/mfa/factor

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaFactor_v4(data: {
             factor: string | null
    })

// return Promise
```

## GET /iam/v4/admin/users/me/mfa/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaStatus_v4()

// return Promise<UserMfaStatusResponseV4>
```

## POST /iam/v4/admin/users/me/mfa/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaStatus_v4()

// return Promise<UserMfaStatusResponseV4>
```

## DELETE /iam/v3/admin/roles/{roleId}/admin

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAdmin_ByRoleId_v3(roleId:string)

// return Promise
```

## GET /iam/v3/admin/roles/{roleId}/admin

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdmin_ByRoleId_v3(roleId:string)

// return Promise<RoleAdminStatusResponseV3>
```

## POST /iam/v3/admin/roles/{roleId}/admin

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateAdmin_ByRoleId_v3(roleId:string)

// return Promise
```

## DELETE /iam/v4/admin/roles/{roleId}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUser_ByRoleId_v4(roleId:string, data: {
             RevokeUserV4Request
    })

// return Promise
```

## GET /iam/v4/admin/roles/{roleId}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsers_ByRoleId_v4(roleId:string,  queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<ListAssignedUsersV4Response>
```

## POST /iam/v4/admin/roles/{roleId}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUser_ByRoleId_v4(roleId:string, data: {
             AssignUserV4Request
    })

// return Promise<AssignedUserV4Response>
```

## GET /iam/v3/admin/clientConfig/templates

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClientConfigTemplates_v3()

// return Promise<ListTemplatesResponse>
```

## DELETE /iam/v3/admin/roles/{roleId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMember_ByRoleId_v3(roleId:string, data: {
             RoleMembersRequestV3
    })

// return Promise
```

## GET /iam/v3/admin/roles/{roleId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMembers_ByRoleId_v3(roleId:string,  queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<RoleMembersResponseV3>
```

## POST /iam/v3/admin/roles/{roleId}/members

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMember_ByRoleId_v3(roleId:string, data: {
             RoleMembersRequestV3
    })

// return Promise
```

## DELETE /iam/v3/admin/roles/{roleId}/managers

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteManager_ByRoleId_v3(roleId:string, data: {
             RoleManagersRequestV3
    })

// return Promise
```

## GET /iam/v3/admin/roles/{roleId}/managers

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getManagers_ByRoleId_v3(roleId:string,  queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<RoleManagersResponsesV3>
```

## POST /iam/v3/admin/roles/{roleId}/managers

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateManager_ByRoleId_v3(roleId:string, data: {
             RoleManagersRequestV3
    })

// return Promise
```

## GET /iam/v4/admin/users/me/mfa/backupCode

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaBackupCode_v4()

// return Promise<BackupCodesResponseV4>
```

## POST /iam/v4/admin/users/me/mfa/backupCode

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaBackupCode_v4()

// return Promise<BackupCodesResponseV4>
```

## POST /iam/v4/admin/users/me/mfa/email/code

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaEmailCode_v4(data: {
             action?: string | null,
             languageTag?: string | null
    })

// return Promise
```

## DELETE /iam/v3/admin/clientConfig/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteClientConfigPermission_v3(data: {
             PermissionSetDeleteGroupRequest,
             queryParams?: {
             forceDelete?: boolean | null
    })

// return Promise
```

## GET /iam/v3/admin/clientConfig/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClientConfigPermissions_v3( queryParams?: {
             excludePermissions?: boolean | null
    })

// return Promise<ListClientPermissionSet>
```

## PUT /iam/v3/admin/clientConfig/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClientConfigPermission_v3(data: {
             ListUpsertModulesRequest,
             queryParams?: {
             forceDelete?: boolean | null
    })

// return Promise
```

## DELETE /iam/v3/admin/inputValidations/{field}

```
import { AccelByte } from '@accelbyte/sdk'
import { InputValidationsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

InputValidationsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteInputValidation_ByField_v3(field:string)

// return Promise
```

## GET /iam/v4/admin/users/me/mfa/backupCodes

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaBackupCodes_v4( queryParams?: {
             languageTag?: string | null
    })

// return Promise
```

## POST /iam/v4/admin/users/me/mfa/backupCodes

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaBackupCode_admin_v4( queryParams?: {
             languageTag?: string | null
    })

// return Promise
```

## POST /iam/v4/admin/users/me/mfa/email/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaEmailEnable_v4(data: {
             code: string | null
    })

// return Promise
```

## DELETE /iam/v3/admin/roles/{roleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePermission_ByRoleId_v3(roleId:string, data: {
             string[]
    })

// return Promise
```

## POST /iam/v3/admin/roles/{roleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByRoleId_v3(roleId:string, data: {
             PermissionsV3
    })

// return Promise
```

## PUT /iam/v3/admin/roles/{roleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByRoleId_admin_v3(roleId:string, data: {
             PermissionsV3
    })

// return Promise
```

## DELETE /iam/v4/admin/roles/{roleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePermission_ByRoleId_v4(roleId:string, data: {
             string[]
    })

// return Promise
```

## POST /iam/v4/admin/roles/{roleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByRoleId_v4(roleId:string, data: {
             PermissionsV3
    })

// return Promise<RoleV4Response>
```

## PUT /iam/v4/admin/roles/{roleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByRoleId_admin_v4(roleId:string, data: {
             PermissionsV3
    })

// return Promise<RoleV4Response>
```

## POST /iam/v4/admin/users/me/mfa/email/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaEmailDisable_v4(data: {
             DisableMfaRequest
    })

// return Promise
```

## GET /iam/v2/admin/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsers_v2( queryParams: {
             platformId: string | null,
             after?: string | null,
             before?: string | null,
             displayName?: string | null,
             limit?: number,
             loginId?: string | null,
             platformUserId?: string | null,
             roleId?: string | null,
             userId?: string | null
    })

// return Promise<SearchUsersByPlatformIdResponse>
```

## GET /iam/v3/admin/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsers_v3( queryParams?: {
             emailAddress?: string | null
    })

// return Promise<UserResponseV3>
```

## PUT /iam/v3/admin/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUser_v3(data: {
             UsersUpdateRequestV3
    })

// return Promise
```

## POST /iam/v4/admin/namespaces/{namespace}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUser_v4(data: {
             CreateUserRequestV4
    })

// return Promise<CreateUserResponseV4>
```

## GET /iam/v3/admin/namespaces/{namespace}/admins

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAdmins_v3( queryParams?: {
             after?: string | null,
             before?: string | null,
             endDate?: string | null,
             limit?: number,
             query?: string | null,
             roleId?: string | null,
             startDate?: string | null
    })

// return Promise<GetUsersResponseWithPaginationV3>
```

## POST /iam/v4/admin/users/me/mfa/challenge/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaChallengeVerify_v4(data: {
             code?: string | null,
             factor?: string | null
    })

// return Promise<UserMfaTokenResponseV4>
```

## GET /iam/v3/admin/namespaces/{namespace}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClients_v3( queryParams?: {
             clientId?: string | null,
             clientName?: string | null,
             clientType?: string | null,
             limit?: number,
             offset?: number,
             skipLoginQueue?: boolean | null
    })

// return Promise<ClientsV3Response>
```

## POST /iam/v3/admin/namespaces/{namespace}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createClient_v3(data: {
             ClientCreationV3Request
    })

// return Promise<ClientV3Response>
```

## PUT /iam/v3/admin/namespaces/{namespace}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClient_v3(data: {
             ClientsUpdateRequestV3
    })

// return Promise
```

## GET /iam/v4/admin/namespaces/{namespace}/devices

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDevices_v4( queryParams?: {
             userId?: string | null
    })

// return Promise<DevicesResponseV4>
```

## POST /iam/v4/admin/users/me/mfa/authenticator/key

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaAuthenticatorKey_v4()

// return Promise<AuthenticatorKeyResponseV4>
```

## POST /iam/v4/admin/users/me/mfa/backupCode/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaBackupCodeEnable_v4()

// return Promise<BackupCodesResponseV4>
```

## GET /iam/v3/admin/namespaces/{namespace}/bantypes

```
import { AccelByte } from '@accelbyte/sdk'
import { BansAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BansAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBantypes_v3()

// return Promise<BansV3>
```

## DELETE /iam/v4/admin/users/me/mfa/backupCode/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeMfaBackupCodeDisable_v4(data: {
             DisableMfaRequest
    })

// return Promise
```

## POST /iam/v4/admin/users/me/mfa/backupCodes/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeMfaBackupCodeEnable_admin_v4( queryParams?: {
             languageTag?: string | null
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/countries

```
import { AccelByte } from '@accelbyte/sdk'
import { CountryAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CountryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCountries_v3( queryParams?: {
             filterBlacklist?: boolean | null
    })

// return Promise<CountryResponseArray>
```

## GET /iam/v4/admin/users/me/mfa/backupCode/download

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeMfaBackupCodeDownload_v4()

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/bans/users

```
import { AccelByte } from '@accelbyte/sdk'
import { BansAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BansAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBansUsers_v3( queryParams?: {
             activeOnly?: boolean | null,
             banType?: string | null,
             limit?: number,
             offset?: number
    })

// return Promise<GetUserBanV3Response>
```

## POST /iam/v3/admin/namespaces/{namespace}/bans/users

```
import { AccelByte } from '@accelbyte/sdk'
import { BansAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BansAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBanUser_v3(data: {
             BulkBanCreateRequestV3
    })

// return Promise<ListBulkUserBanResponseV3>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchUserBan_v3(data: {
             GetBulkUserBansRequest,
             queryParams?: {
             activeOnly?: boolean | null,
             banType?: string | null
    })

// return Promise<GetUserBanV3Response>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserBulk_v3(data: {
             UserIDsRequest
    })

// return Promise<ListUserInformationResult>
```

## POST /iam/v4/admin/namespaces/{namespace}/test_users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createTestUser_v4(data: {
             CreateTestUsersRequestV4
    })

// return Promise<CreateTestUsersResponseV4>
```

## POST /iam/v4/admin/users/me/mfa/authenticator/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postUserMeMfaAuthenticatorEnable_v4(data: {
             code: string | null
    })

// return Promise
```

## DELETE /iam/v4/admin/users/me/mfa/authenticator/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteUserMeMfaAuthenticatorDisable_v4(data: {
             DisableMfaRequest
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/roleoverride

```
import { AccelByte } from '@accelbyte/sdk'
import { OverrideRoleConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OverrideRoleConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoleoverride_v3( queryParams: {
             identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY'
    })

// return Promise<RoleOverrideResponse>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/roleoverride

```
import { AccelByte } from '@accelbyte/sdk'
import { OverrideRoleConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OverrideRoleConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchRoleoverride_v3(data: {
             RoleOverrideUpdateRequest,
             queryParams: {
             identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY'
    })

// return Promise<RoleOverrideResponse>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/invite

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserInvite_v3(data: {
             InviteUserRequestV3
    })

// return Promise<InviteUserResponseV3>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/search

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersSearch_v3( queryParams?: {
             by?: string | null,
             endDate?: string | null,
             includeTotal?: boolean | null,
             limit?: number,
             offset?: number,
             platformBy?: string | null,
             platformId?: string | null,
             query?: string | null,
             roleIds?: string | null,
             skipLoginQueue?: boolean | null,
             startDate?: string | null,
             testAccount?: boolean | null
    })

// return Promise<SearchUsersResponseWithPaginationV3>
```

## GET /iam/v3/admin/platforms/{platformId}/availability

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAvailability_ByPlatformId_v3(platformId:string)

// return Promise<CheckAvailabilityResponse>
```

## GET /iam/v4/admin/namespaces/{namespace}/devices/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDevicesBans_v4( queryParams: {
             userId: string | null
    })

// return Promise<DeviceBansResponseV4>
```

## POST /iam/v4/admin/namespaces/{namespace}/devices/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createDeviceBan_v4(data: {
             DeviceBanRequestV4
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/platforms/sso

```
import { AccelByte } from '@accelbyte/sdk'
import { SsoCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SsoCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformsSso_v3( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<SsoPlatformCredentialResponseArray>
```

## GET /iam/v4/admin/namespaces/{namespace}/devices/types

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDevicesTypes_v4()

// return Promise<DeviceTypesResponseV4>
```

## GET /iam/v2/admin/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByUserId_v2(userId:string)

// return Promise<UserResponse>
```

## PATCH /iam/v2/admin/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUser_ByUserId_v2(userId:string, data: {
             UserUpdateRequest
    })

// return Promise<UserResponse>
```

## GET /iam/v3/admin/namespaces/{namespace}/loginAllowlist

```
import { AccelByte } from '@accelbyte/sdk'
import { LoginAllowlistAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LoginAllowlistAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLoginAllowlist_v3()

// return Promise<LoginAllowlistResponse>
```

## PUT /iam/v3/admin/namespaces/{namespace}/loginAllowlist

```
import { AccelByte } from '@accelbyte/sdk'
import { LoginAllowlistAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

LoginAllowlistAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateLoginAllowlist_v3(data: {
             LoginAllowlistRequest
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByUserId_v3(userId:string)

// return Promise<UserResponseV3>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUser_ByUserId_v3(userId:string, data: {
             UserUpdateRequestV3
    })

// return Promise<UserResponseV3>
```

## GET /iam/v4/admin/namespaces/{namespace}/devices/banned

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDevicesBanned_v4( queryParams?: {
             deviceType?: string | null,
             endDate?: string | null,
             limit?: number,
             offset?: number,
             startDate?: string | null
    })

// return Promise<DeviceBannedResponseV4>
```

## GET /iam/v4/admin/namespaces/{namespace}/devices/report

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDevicesReport_v4( queryParams: {
             deviceType: string | null,
             endDate?: string | null,
             startDate?: string | null
    })

// return Promise
```

## PUT /iam/v4/admin/namespaces/{namespace}/users/{userId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUser_ByUserId_v4(userId:string, data: {
             UserUpdateRequestV3
    })

// return Promise<UserResponseV3>
```

## GET /iam/v2/admin/namespaces/{namespace}/agerestrictions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgerestrictions_v2()

// return Promise<AgeRestrictionResponse>
```

## PATCH /iam/v2/admin/namespaces/{namespace}/agerestrictions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchAgerestriction_v2(data: {
             AgeRestrictionRequest
    })

// return Promise<AgeRestrictionResponse>
```

## GET /iam/v3/admin/namespaces/{namespace}/agerestrictions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgerestrictions_v3()

// return Promise<AgeRestrictionResponseV3>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/agerestrictions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchAgerestriction_v3(data: {
             AgeRestrictionRequestV3
    })

// return Promise<AgeRestrictionResponseV3>
```

## PUT /iam/v3/admin/namespaces/{namespace}/{clientId}/secret

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateSecret_ByClientId_v3(clientId:string, data: {
             V3ClientUpdateSecretRequest
    })

// return Promise
```

## POST /iam/v3/admin/namespaces/{namespace}/users/search/bulk

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchUserSearchBulk_v3(data: {
             ListEmailAddressRequest
    })

// return Promise<ListUserResponseV3>
```

## POST /iam/v2/admin/namespaces/{namespace}/users/{userId}/ban

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBan_ByUserId_v2(userId:string, data: {
             BanCreateRequest
    })

// return Promise<UserBanResponse>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/clients/{clientId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteClient_ByClientId_v3(clientId:string)

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/clients/{clientId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClient_ByClientId_v3(clientId:string)

// return Promise<ClientV3Response>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/clients/{clientId}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchClient_ByClientId_v3(clientId:string, data: {
             ClientUpdateV3Request
    })

// return Promise<ClientV3Response>
```

## GET /iam/v3/admin/namespaces/{namespace}/config/{configKey}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig_ByConfigKey_v3(configKey:string)

// return Promise<ConfigValueResponseV3>
```

## GET /iam/v2/admin/namespaces/{namespace}/users/{userId}/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBans_ByUserId_v2(userId:string,  queryParams?: {
             activeOnly?: boolean | null
    })

// return Promise<UserBanResponseArray>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/bans/users/disabled

```
import { AccelByte } from '@accelbyte/sdk'
import { BansAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

BansAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchBanUserDisabled_v3(data: {
             BulkUnbanCreateRequestV3
    })

// return Promise<ListBulkUserBanResponseV3>
```

## GET /iam/v3/admin/namespaces/{namespace}/countries/blacklist

```
import { AccelByte } from '@accelbyte/sdk'
import { CountryAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CountryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCountriesBlacklist_v3()

// return Promise<CountryBlacklistResponse>
```

## POST /iam/v3/admin/namespaces/{namespace}/countries/blacklist

```
import { AccelByte } from '@accelbyte/sdk'
import { CountryAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

CountryAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateCountryBlacklist_v3(data: {
             CountryBlacklistRequest
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/roleoverride/source

```
import { AccelByte } from '@accelbyte/sdk'
import { OverrideRoleConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OverrideRoleConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoleoverrideSource_v3( queryParams: {
             identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY'
    })

// return Promise<RoleOverrideSourceResponse>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/roleoverride/status

```
import { AccelByte } from '@accelbyte/sdk'
import { OverrideRoleConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OverrideRoleConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchRoleoverrideStatus_v3(data: {
             RoleOverrideStatsUpdateRequest,
             queryParams: {
             identity: 'GAME_ADMIN' | 'USER' | 'VIEW_ONLY'
    })

// return Promise<RoleOverrideResponse>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBans_ByUserId_v3(userId:string,  queryParams?: {
             activeOnly?: boolean | null,
             after?: string | null,
             before?: string | null,
             limit?: number
    })

// return Promise<GetUserBanV3Response>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createBan_ByUserId_v3(userId:string, data: {
             BanCreateRequest
    })

// return Promise<UserBanResponseV3>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/linkhistories

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersLinkhistories_v3( queryParams: {
             platformId: string | null,
             limit?: number,
             offset?: number,
             platformUserId?: string | null
    })

// return Promise<LinkingHistoryResponseWithPaginationV3>
```

## GET /iam/v4/admin/namespaces/{namespace}/invitationHistories

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInvitationHistories_ByNS_v4()

// return Promise<InvitationHistoryResponse>
```

## POST /iam/v4/admin/namespaces/{namespace}/users/bulk/validate

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchUserBulkValidate_v4(data: {
             CheckValidUserIdRequestV4
    })

// return Promise<ListValidUserIdResponseV4>
```

## POST /iam/v2/admin/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRole_ByUserId_v2(userId:string, data: {
             string[]
    })

// return Promise
```

## PUT /iam/v2/admin/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRole_ByUserId_ByNS_v2(userId:string, data: {
             string[]
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/roles/{roleId}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsers_ByRoleId_v3(roleId:string,  queryParams?: {
             after?: number,
             before?: number,
             limit?: number
    })

// return Promise<GetUsersResponseWithPaginationV3>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/codes

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCodes_ByUserId_v3(userId:string)

// return Promise<VerificationCodeResponse>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRole_ByUserId_v3(userId:string, data: {
             string[]
    })

// return Promise
```

## PATCH /iam/v3/admin/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchRole_ByUserId_v3(userId:string, data: {
             NamespaceRoleRequest[]
    })

// return Promise
```

## POST /iam/v3/admin/namespaces/{namespace}/users/bulk/platforms

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchUserBulkPlatform_v3(data: {
             UserIDsRequest
    })

// return Promise<ListBulkUserPlatformsResponse>
```

## GET /iam/v4/admin/namespaces/{namespace}/devices/bans/{banId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDeviceBan_ByBanId_v4(banId:string)

// return Promise<DeviceBanResponseV4>
```

## PUT /iam/v4/admin/namespaces/{namespace}/devices/bans/{banId}

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateDeviceBan_ByBanId_v4(banId:string, data: {
             DeviceBanUpdateRequestV4
    })

// return Promise
```

## PUT /iam/v4/admin/namespaces/{namespace}/users/{userId}/email

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateEmail_ByUserId_v4(userId:string, data: {
             EmailUpdateRequestV4
    })

// return Promise
```

## DELETE /iam/v4/admin/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRole_ByUserId_v4(userId:string, data: {
             RemoveUserRoleV4Request
    })

// return Promise
```

## GET /iam/v4/admin/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getRoles_ByUserId_v4(userId:string)

// return Promise<ListUserRolesV4Response>
```

## POST /iam/v4/admin/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRole_ByUserId_v4(userId:string, data: {
             AddUserRoleV4Request
    })

// return Promise<ListUserRolesV4Response>
```

## PUT /iam/v4/admin/namespaces/{namespace}/users/{userId}/roles

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRole_ByUserId_ByNS_v4(userId:string, data: {
             AddUserRoleV4Request
    })

// return Promise<ListUserRolesV4Response>
```

## PUT /iam/v2/admin/namespaces/{namespace}/users/{userId}/enable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateEnable_ByUserId_v2(userId:string)

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/platforms/all/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformsAllClients_v3()

// return Promise<ThirdPartyLoginPlatformCredentialResponseArray>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/users/{userId}/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchStatus_ByUserId_v3(userId:string, data: {
             UpdateUserStatusRequest
    })

// return Promise
```

## PUT /iam/v3/admin/namespaces/{namespace}/users/{userId}/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateVerify_ByUserId_v3(userId:string)

// return Promise
```

## PUT /iam/v2/admin/namespaces/{namespace}/users/{userId}/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateDisable_ByUserId_v2(userId:string, data: {
             DisableUserRequest
    })

// return Promise
```

## PATCH /iam/v4/admin/namespaces/{namespace}/users/bulk/accountType

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUserBulkAccountType_v4(data: {
             BulkAccountTypeUpdateRequestV4
    })

// return Promise
```

## PATCH /iam/v2/admin/namespaces/{namespace}/countries/{countryCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchCountry_ByCountryCode_v2(countryCode:string, data: {
             CountryAgeRestrictionRequest
    })

// return Promise<Country>
```

## PUT /iam/v2/admin/namespaces/{namespace}/users/{userId}/password

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePassword_ByUserId_v2(userId:string, data: {
             UserPasswordUpdateRequest
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/profileUpdateStrategies

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfileUpdateStrategyAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfileUpdateStrategyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfileUpdateStrategies_v3( queryParams?: {
             field?: 'country' | 'display_name' | 'dob' | 'username'
    })

// return Promise<GetProfileUpdateStrategyConfigResponse>
```

## PUT /iam/v3/admin/namespaces/{namespace}/profileUpdateStrategies

```
import { AccelByte } from '@accelbyte/sdk'
import { ProfileUpdateStrategyAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ProfileUpdateStrategyAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfileUpdateStrategy_v3(data: {
             UpdateProfileUpdateStrategyConfigRequest,
             queryParams: {
             field: 'country' | 'display_name' | 'dob' | 'username'
    })

// return Promise<SimpleProfileUpdateStrategyConfigs>
```

## PUT /iam/v3/admin/namespaces/{namespace}/users/{userId}/password

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePassword_ByUserId_v3(userId:string, data: {
             UserPasswordUpdateV3Request
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/users/platforms/justice

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersPlatformsJustice_v3( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<ListUsersWithPlatformAccountsResponse>
```

## DELETE /iam/v3/admin/roles/{roleId}/permissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { RolesAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

RolesAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePermission_ByRoleId_ByResource_ByAction_v3(roleId:string, resource:string, action:number)

// return Promise
```

## GET /iam/v4/admin/namespaces/{namespace}/devices/{deviceId}/bans

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBans_ByDeviceId_v4(deviceId:string)

// return Promise<DeviceBansResponseV4>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatforms_ByUserId_v3(userId:string,  queryParams?: {
             after?: string | null,
             before?: string | null,
             limit?: number,
             platformId?: string | null,
             targetNamespace?: string | null
    })

// return Promise<UserLinkedPlatformsResponseV3>
```

## PUT /iam/v4/admin/namespaces/{namespace}/devices/{deviceId}/unban

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUnban_ByDeviceId_v4(deviceId:string)

// return Promise
```

## GET /iam/v4/admin/namespaces/{namespace}/devices/{deviceId}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsers_ByDeviceId_v4(deviceId:string)

// return Promise<DeviceUsersResponseV4>
```

## GET /iam/v2/admin/namespaces/{namespace}/countries/agerestrictions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getCountriesAgerestrictions_v2()

// return Promise<CountryAgeRestrictionArray>
```

## GET /iam/v3/admin/namespaces/{namespace}/agerestrictions/countries

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getAgerestrictionsCountries_v3()

// return Promise<CountryV3ResponseArray>
```

## GET /iam/v4/admin/namespaces/{namespace}/invitationHistories/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getInvitationHistoriesUsers_v4( queryParams?: {
             limit?: number,
             offset?: number
    })

// return Promise<NamespaceInvitationHistoryUserV4Response>
```

## GET /iam/v4/admin/namespaces/{namespace}/users/{userId}/mfa/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMfaStatus_ByUserId_v4(userId:string)

// return Promise<UserMfaStatusResponseV4>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/sso

```
import { AccelByte } from '@accelbyte/sdk'
import { SsoCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SsoCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteSso_ByPlatformId_v3(platformId:string)

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/sso

```
import { AccelByte } from '@accelbyte/sdk'
import { SsoCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SsoCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getSso_ByPlatformId_v3(platformId:string)

// return Promise<SsoPlatformCredentialResponse>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/sso

```
import { AccelByte } from '@accelbyte/sdk'
import { SsoCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SsoCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchSso_ByPlatformId_v3(platformId:string, data: {
             SsoPlatformCredentialRequest
    })

// return Promise<SsoPlatformCredentialResponse>
```

## POST /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/sso

```
import { AccelByte } from '@accelbyte/sdk'
import { SsoCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

SsoCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createSso_ByPlatformId_v3(platformId:string, data: {
             SsoPlatformCredentialRequest
    })

// return Promise<SsoPlatformCredentialResponse>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/code/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateCodeVerify_ByUserId_v3(userId:string, data: {
             UserVerificationRequest
    })

// return Promise
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/information

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteInformation_ByUserId_v3(userId:string)

// return Promise
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePermission_ByUserId_v3(userId:string, data: {
             PermissionDeleteRequest[]
    })

// return Promise
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPermission_ByUserId_v3(userId:string, data: {
             Permissions
    })

// return Promise
```

## PUT /iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByUserId_v3(userId:string, data: {
             Permissions
    })

// return Promise
```

## GET /iam/v4/admin/namespaces/{namespace}/devices/{deviceId}/decrypt

```
import { AccelByte } from '@accelbyte/sdk'
import { DevicesV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

DevicesV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDecrypt_ByDeviceId_v4(deviceId:string)

// return Promise<DeviceIdDecryptResponseV4>
```

## DELETE /iam/v4/admin/namespaces/{namespace}/users/{userId}/mfa/disable

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersV4AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersV4AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMfaDisable_ByUserId_v4(userId:string, data: {
             DisableMfaRequest
    })

// return Promise
```

## PATCH /iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/{banId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchBan_ByUserId_ByBanId_v3(userId:string, banId:string, data: {
             BanUpdateRequest
    })

// return Promise<UserBanResponseV3>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/bans/summary

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getBansSummary_ByUserId_v3(userId:string)

// return Promise<GetUserBanSummaryV3>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/code/request

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateCodeRequest_ByUserId_v3(userId:string, data: {
             SendVerificationCodeRequestV3
    })

// return Promise
```

## POST /iam/v3/oauth/admin/namespaces/{namespace}/users/{userId}/revoke

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRevokeOauth_ByUserId_v3(userId:string,  queryParams?: {
             includeGameNamespace?: boolean | null
    })

// return Promise
```

## POST /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .fetchUser_ByPlatformId_v3(platformId:string, data: {
             PlatformUserIdRequest,
             queryParams?: {
             rawPID?: boolean | null,
             rawPUID?: boolean | null
    })

// return Promise<UserPlatforms>
```

## GET /iam/v3/admin/namespaces/{namespace}/platforms/all/clients/active

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformsAllClientsActive_v3()

// return Promise<ThirdPartyLoginPlatformCredentialResponseArray>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/link

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePlatformLink_ByUserId_v3(userId:string, data: {
             LinkPlatformAccountRequest,
             queryParams?: {
             skipConflict?: boolean | null
    })

// return Promise
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteRole_ByUserId_ByRoleId_v3(userId:string, roleId:string)

// return Promise
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/roles/{roleId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateRole_ByUserId_ByRoleId_v3(userId:string, roleId:string)

// return Promise
```

## POST /iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByClientId_v3(clientId:string, data: {
             ClientPermissionsV3
    })

// return Promise
```

## PUT /iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updatePermission_ByClientId_ByNS_v3(clientId:string, data: {
             ClientPermissionsV3
    })

// return Promise
```

## DELETE /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteClient_ByPlatformId_v3(platformId:string)

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getClients_ByPlatformId_v3(platformId:string)

// return Promise<ThirdPartyLoginPlatformCredentialResponse>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchClient_ByPlatformId_v3(platformId:string, data: {
             ThirdPartyLoginPlatformCredentialRequest
    })

// return Promise<ThirdPartyLoginPlatformCredentialResponse>
```

## POST /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createClient_ByPlatformId_v3(platformId:string, data: {
             ThirdPartyLoginPlatformCredentialRequest
    })

// return Promise<ThirdPartyLoginPlatformCredentialResponse>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/deletion/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDeletionStatus_ByUserId_v3(userId:string)

// return Promise<UserDeletionStatusResponse>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/users/{userId}/deletion/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchDeletionStatus_ByUserId_v3(userId:string, data: {
             UpdateUserDeletionStatusRequest
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/logins/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getLoginsHistories_ByUserId_v3(userId:string,  queryParams?: {
             after?: number,
             before?: number,
             limit?: number
    })

// return Promise<LoginHistoriesResponse>
```

## PATCH /iam/v3/admin/namespaces/{namespace}/users/{userId}/trustly/identity

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchTrustlyIdentity_ByUserId_v3(userId:string, data: {
             UserIdentityUpdateRequestV3
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/distinctPlatforms

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getDistinctPlatforms_ByUserId_v3(userId:string)

// return Promise<DistinctPlatformResponseV3>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformsJustice_ByUserId_v3(userId:string)

// return Promise<GetUserMappingArray>
```

## GET /iam/v3/admin/namespaces/{namespace}/roleoverride/{roleId}/permissions

```
import { AccelByte } from '@accelbyte/sdk'
import { OverrideRoleConfigV3AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OverrideRoleConfigV3AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPermissions_ByRoleId_v3(roleId:string)

// return Promise<RolePermissionResponseV3>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/distinct

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformsDistinct_ByUserId_v3(userId:string,  queryParams?: {
             status?: string | null
    })

// return Promise<DistinctPlatformResponseV3>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/headless/code/verify

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateHeadlesCodeVerify_ByUserId_v3(userId:string, data: {
             UpgradeHeadlessAccountWithVerificationCodeRequestV3
    })

// return Promise<UserResponseV3>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients/domain

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteClientDomain_ByPlatformId_v3(platformId:string, data: {
             PlatformDomainDeleteRequest
    })

// return Promise
```

## PUT /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/clients/domain

```
import { AccelByte } from '@accelbyte/sdk'
import { ThirdPartyCredentialAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ThirdPartyCredentialAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateClientDomain_ByPlatformId_v3(platformId:string, data: {
             PlatformDomainUpdateRequest
    })

// return Promise<PlatformDomainResponse>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePlatform_ByUserId_ByPlatformId_v3(userId:string, platformId:string, data: {
             UnlinkUserPlatformRequest
    })

// return Promise
```

## PATCH /iam/v3/admin/namespaces/{namespace}/agerestrictions/countries/{countryCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchAgerestrictionCountry_ByCountryCode_v3(countryCode:string, data: {
             CountryAgeRestrictionV3Request
    })

// return Promise<CountryV3Response>
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/link/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformsLinkHistories_ByUserId_v3(userId:string,  queryParams: {
             platformId: string | null
    })

// return Promise<UserPlatformLinkHistories>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/all

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAll_ByUserId_ByPlatformId_v3(userId:string, platformId:string)

// return Promise
```

## DELETE /iam/v2/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLink_ByUserId_ByPlatformId_v2(userId:string, platformId:string, data: {
             platform_namespace?: string | null
    })

// return Promise
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postLink_ByUserId_ByPlatformId_v3(userId:string, platformId:string, data: {
             ticket: string | null
    })

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/platforms/{platformId}/users/{platformUserId}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUser_ByPlatformId_ByPlatformUserId_v3(platformId:string, platformUserId:string)

// return Promise<UserResponseV3>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/permissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePermission_ByUserId_ByResource_ByAction_v3(userId:string, resource:string, action:number)

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/metadata

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMetadata_ByUserId_ByPlatformId_v3(userId:string, platformId:string,  queryParams?: {
             crossNamespace?: boolean | null
    })

// return Promise<UserPlatformMetadata>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/linkStatus

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .postLinkStatu_ByUserId_ByPlatformId_v3(userId:string, platformId:string, data: {
             platformToken: string | null
    })

// return Promise<TokenThirdPartyLinkStatusResponse>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/clients/{clientId}/permissions/{resource}/{action}

```
import { AccelByte } from '@accelbyte/sdk'
import { ClientsAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ClientsAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deletePermission_ByClientId_ByResource_ByAction_v3(clientId:string, resource:string, action:number)

// return Promise
```

## GET /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformJustice_ByUserId_ByTargetNamespace_v3(userId:string, targetNamespace:string)

// return Promise<GetUserMappingV3>
```

## POST /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/justice/{targetNamespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createPlatformJustice_ByUserId_ByTargetNamespace_v3(userId:string, targetNamespace:string)

// return Promise<CreateJusticeUserResponse>
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link/histories

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLinkHistory_ByUserId_ByPlatformId_v3(userId:string, platformId:string)

// return Promise
```

## DELETE /iam/v3/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/link/restrictions

```
import { AccelByte } from '@accelbyte/sdk'
import { UsersAdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UsersAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteLinkRestriction_ByUserId_ByPlatformId_v3(userId:string, platformId:string)

// return Promise
```

## GET /iam/v3/oauth/admin/namespaces/{namespace}/users/{userId}/platforms/{platformId}/platformToken

```
import { AccelByte } from '@accelbyte/sdk'
import { OAuth20AdminApi } from '@accelbyte/sdk-iam'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

OAuth20AdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPlatformTokenOauth_ByUserId_ByPlatformId_v3(userId:string, platformId:string,  queryParams?: {
             platformUserId?: string | null
    })

// return Promise<TokenThirdPartyResponse>
```