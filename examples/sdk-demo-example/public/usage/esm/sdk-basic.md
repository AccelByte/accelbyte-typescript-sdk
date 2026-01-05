## GET /basic/v1/public/misc/time

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscApi(sdk)
  .getMiscTime()

// return Promise<RetrieveTimeResponse>
```

## GET /basic/v1/public/namespaces

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNamespaces( queryParams?: {
             activeOnly?: boolean | null
    })

// return Promise<NamespaceInfoArray>
```

## GET /basic/v1/public/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceApi(sdk)
  .getNamespace_ByNamespace()

// return Promise<NamespaceSimpleInfo>
```

## GET /basic/v1/public/namespaces/{namespace}/publisher

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublisher()

// return Promise<NamespacePublisherInfo>
```

## GET /basic/v1/public/namespaces/{namespace}/misc/countries

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscApi(sdk)
  .getMiscCountries( queryParams?: {
             lang?: string | null
    })

// return Promise<CountryObjectArray>
```

## GET /basic/v1/public/namespaces/{namespace}/misc/languages

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscApi(sdk)
  .getMiscLanguages()

// return Promise
```

## GET /basic/v1/public/namespaces/{namespace}/misc/timezones

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscApi(sdk)
  .getMiscTimezones()

// return Promise
```

## GET /basic/v1/public/namespaces/{namespace}/profiles/public

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk)
  .getProfilesPublic( queryParams: {
             userIds: string | null
    })

// return Promise<UserProfilePublicInfoArray>
```

## POST /basic/v1/public/namespaces/{namespace}/profiles/public

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk)
  .createProfilePublic(data: {
             UserProfileBulkRequest
    })

// return Promise<UserProfilePublicInfoArray>
```

## GET /basic/v1/public/namespaces/{namespace}/users/me/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeProfiles()

// return Promise<UserProfilePrivateInfo>
```

## POST /basic/v1/public/namespaces/{namespace}/users/me/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createUserMeProfile(data: {
             UserProfilePrivateCreate
    })

// return Promise<UserProfilePrivateInfo>
```

## PUT /basic/v1/public/namespaces/{namespace}/users/me/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMeProfile(data: {
             UserProfileUpdate
    })

// return Promise<UserProfilePrivateInfo>
```

## POST /basic/v1/public/namespaces/{namespace}/users/{userId}/files

```
import { AccelByte } from '@accelbyte/sdk'
import { FileUploadApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FileUploadApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFile_ByUserId(userId:string,  queryParams: {
             fileType: string | null,
             category?: string | null
    })

// return Promise<FileUploadUrlInfo>
```

## POST /basic/v1/public/namespaces/{namespace}/folders/{folder}/files

```
import { AccelByte } from '@accelbyte/sdk'
import { FileUploadApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FileUploadApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFile_ByFolder(folder:string,  queryParams: {
             fileType: string | null
    })

// return Promise<FileUploadUrlInfo>
```

## GET /basic/v1/public/namespaces/{namespace}/users/{userId}/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfiles_ByUserId(userId:string)

// return Promise<UserProfileInfo>
```

## POST /basic/v1/public/namespaces/{namespace}/users/{userId}/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createProfile_ByUserId(userId:string, data: {
             UserProfileCreate
    })

// return Promise<UserProfileInfo>
```

## PUT /basic/v1/public/namespaces/{namespace}/users/{userId}/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfile_ByUserId(userId:string, data: {
             UserProfileUpdate
    })

// return Promise<UserProfileInfo>
```

## GET /basic/v1/public/namespaces/{namespace}/users/me/profiles/zipCode

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeProfilesZipCode()

// return Promise<UserZipCode>
```

## PATCH /basic/v1/public/namespaces/{namespace}/users/me/profiles/zipCode

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchUserMeProfileZipCode(data: {
             UserZipCodeUpdate
    })

// return Promise<UserZipCode>
```

## GET /basic/v1/public/namespaces/{namespace}/profiles/public/byPublicId

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk)
  .getProfilesPublicByPublicId( queryParams: {
             publicId: string | null
    })

// return Promise<UserProfilePublicInfo>
```

## GET /basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/public

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk)
  .getProfilesPublic_ByUserId(userId:string)

// return Promise<UserProfilePublicInfo>
```

## PATCH /basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchProfileStatus_ByUserId(userId:string, data: {
             UserProfileStatusUpdate
    })

// return Promise<UserProfileInfo>
```

## GET /basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk)
  .getProfilesCustomAttributes_ByUserId(userId:string)

// return Promise
```

## PUT /basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfileCustomAttribute_ByUserId(userId:string, data: {
             any
    })

// return Promise
```

## GET /basic/v1/public/namespaces/{namespace}/users/me/profiles/privateCustomAttributes

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getUsersMeProfilesPrivateCustomAttributes()

// return Promise
```

## PUT /basic/v1/public/namespaces/{namespace}/users/me/profiles/privateCustomAttributes

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateUserMeProfilePrivateCustomAttribute(data: {
             any
    })

// return Promise
```

## GET /basic/v1/admin/namespaces

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNamespaces( queryParams?: {
             activeOnly?: boolean | null
    })

// return Promise<NamespaceInfoArray>
```

## POST /basic/v1/admin/namespaces

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createNamespace(data: {
             NamespaceCreate
    })

// return Promise<NamespaceInfo>
```

## DELETE /basic/v1/admin/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteNamespace_ByNamespace()

// return Promise<NamespaceInfo>
```

## GET /basic/v1/admin/namespaces/{namespace}

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getNamespace_ByNamespace( queryParams?: {
             activeOnly?: boolean | null
    })

// return Promise<NamespaceInfo>
```

## GET /basic/v1/admin/namespaces/{namespace}/game

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getGame( queryParams?: {
             activeOnly?: boolean | null
    })

// return Promise<NamespaceInfoArray>
```

## PATCH /basic/v1/admin/namespaces/{namespace}/basic

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchBasic(data: {
             NamespaceUpdate
    })

// return Promise<NamespaceInfo>
```

## GET /basic/v1/admin/namespaces/{namespace}/child

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getChild( queryParams?: {
             activeOnly?: boolean | null
    })

// return Promise<NamespaceInfoArray>
```

## PATCH /basic/v1/admin/namespaces/{namespace}/status

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchStatus(data: {
             NamespaceStatusUpdate
    })

// return Promise<NamespaceInfo>
```

## POST /basic/v1/admin/namespaces/{namespace}/configs

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createConfig(data: {
             ConfigCreate
    })

// return Promise<ConfigInfo>
```

## GET /basic/v1/admin/namespaces/{namespace}/context

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getContext()

// return Promise<NamespaceContext>
```

## GET /basic/v1/admin/namespaces/{namespace}/publisher

```
import { AccelByte } from '@accelbyte/sdk'
import { NamespaceAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

NamespaceAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublisher()

// return Promise<NamespacePublisherInfo>
```

## GET /basic/v1/admin/namespaces/{namespace}/misc/countries

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMiscCountries( queryParams?: {
             lang?: string | null
    })

// return Promise<CountryObjectArray>
```

## GET /basic/v1/admin/namespaces/{namespace}/misc/languages

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMiscLanguages()

// return Promise
```

## GET /basic/v1/admin/namespaces/{namespace}/misc/timezones

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMiscTimezones()

// return Promise
```

## POST /basic/v1/admin/namespaces/{namespace}/profiles/public

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createProfilePublic(data: {
             UserProfileBulkRequest
    })

// return Promise<UserProfilePublicInfoArray>
```

## GET /basic/v1/admin/namespaces/{namespace}/misc/countrygroups

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getMiscCountrygroups( queryParams?: {
             groupCode?: string | null
    })

// return Promise<RetrieveCountryGroupResponseArray>
```

## POST /basic/v1/admin/namespaces/{namespace}/misc/countrygroups

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createMiscCountrygroup(data: {
             AddCountryGroupRequest
    })

// return Promise<AddCountryGroupResponse>
```

## DELETE /basic/v1/admin/namespaces/{namespace}/configs/{configKey}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteConfig_ByConfigKey(configKey:string)

// return Promise
```

## GET /basic/v1/admin/namespaces/{namespace}/configs/{configKey}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getConfig_ByConfigKey(configKey:string)

// return Promise<ConfigInfo>
```

## PATCH /basic/v1/admin/namespaces/{namespace}/configs/{configKey}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchConfig_ByConfigKey(configKey:string, data: {
             ConfigUpdate
    })

// return Promise<ConfigInfo>
```

## GET /basic/v1/admin/namespaces/{namespace}/profiles/byPublicId

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfilesByPublicId( queryParams: {
             publicId: string | null
    })

// return Promise<UserProfileInfo>
```

## POST /basic/v1/admin/namespaces/{namespace}/users/{userId}/files

```
import { AccelByte } from '@accelbyte/sdk'
import { FileUploadAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FileUploadAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFile_ByUserId(userId:string,  queryParams: {
             fileType: string | null,
             category?: string | null
    })

// return Promise<FileUploadUrlInfo>
```

## POST /basic/v1/admin/namespaces/{namespace}/folders/{folder}/files

```
import { AccelByte } from '@accelbyte/sdk'
import { FileUploadAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

FileUploadAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .createFile_ByFolder(folder:string,  queryParams: {
             fileType: string | null
    })

// return Promise<FileUploadUrlInfo>
```

## DELETE /basic/v1/admin/namespaces/{namespace}/users/{userId}/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteProfile_ByUserId(userId:string)

// return Promise<UserProfilePrivateInfo>
```

## GET /basic/v1/admin/namespaces/{namespace}/users/{userId}/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfiles_ByUserId(userId:string)

// return Promise<UserProfilePrivateInfo>
```

## PUT /basic/v1/admin/namespaces/{namespace}/users/{userId}/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfile_ByUserId(userId:string, data: {
             UserProfileAdmin
    })

// return Promise<UserProfilePrivateInfo>
```

## GET /basic/v1/admin/namespaces/{namespace}/publisher/configs/{configKey}

```
import { AccelByte } from '@accelbyte/sdk'
import { ConfigAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

ConfigAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getPublisherConfig_ByConfigKey(configKey:string)

// return Promise<ConfigInfo>
```

## PATCH /basic/v1/admin/namespaces/{namespace}/users/{userId}/profiles/status

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .patchProfileStatus_ByUserId(userId:string, data: {
             UserProfileStatusUpdate
    })

// return Promise<UserProfilePrivateInfo>
```

## DELETE /basic/v1/admin/namespaces/{namespace}/misc/countrygroups/{countryGroupCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteMiscCountrygroup_ByCountryGroupCode(countryGroupCode:string)

// return Promise
```

## PUT /basic/v1/admin/namespaces/{namespace}/misc/countrygroups/{countryGroupCode}

```
import { AccelByte } from '@accelbyte/sdk'
import { MiscAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

MiscAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateMiscCountrygroup_ByCountryGroupCode(countryGroupCode:string, data: {
             UpdateCountryGroupRequest
    })

// return Promise<CountryGroupObject>
```

## DELETE /basic/v1/admin/namespaces/{namespace}/users/{userId}/anonymization/profiles

```
import { AccelByte } from '@accelbyte/sdk'
import { AnonymizationAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

AnonymizationAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .deleteAnonymizationProfile_ByUserId(userId:string)

// return Promise
```

## GET /basic/v1/admin/namespaces/{namespace}/users/{userId}/profiles/customAttributes

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfilesCustomAttributes_ByUserId(userId:string)

// return Promise
```

## PUT /basic/v1/admin/namespaces/{namespace}/users/{userId}/profiles/customAttributes

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfileCustomAttribute_ByUserId(userId:string, data: {
             any
    })

// return Promise
```

## GET /basic/v1/admin/namespaces/{namespace}/users/{userId}/profiles/privateCustomAttributes

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .getProfilesPrivateCustomAttributes_ByUserId(userId:string)

// return Promise
```

## PUT /basic/v1/admin/namespaces/{namespace}/users/{userId}/profiles/privateCustomAttributes

```
import { AccelByte } from '@accelbyte/sdk'
import { UserProfileAdminApi } from '@accelbyte/sdk-basic'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__AGS_DOMAIN__',
    clientId: '__IAM_CLIENT_ID__',
    namespace: '__NAMESPACE__',
    redirectURI: '__IAM_CLIENT_REDIRECT_URI__'
  }
})

UserProfileAdminApi(sdk, { axiosConfig: { request: { headers: { Authorization: 'Bearer {access_token}' } } } })
  .updateProfilePrivateCustomAttribute_ByUserId(userId:string, data: {
             any
    })

// return Promise
```