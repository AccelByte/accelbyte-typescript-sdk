/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { UserProfilePrivateCreate } from '@accelbyte/sdk/generated-public/basic/definitions/UserProfilePrivateCreate'
import { UserProfilePrivateUpdate } from '@accelbyte/sdk/generated-public/basic/definitions/UserProfilePrivateUpdate'
import { UserProfile$ } from '@accelbyte/sdk/generated-public/basic/UserProfile$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class UserProfileApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * Get my profile<br><b>Client with user token can get user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=2 <b>(READ)</b></li><li><i>Action code</i>: 11403</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to get <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to get <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  getUsersMeProfiles = () => {
    return this.newInstance().fetchV1NsUsersMeProfiles()
  }

  /**
   * Create my profile.<br><b>Client with user token can create user profile in target namespace</b><br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=1 <b>(CREATE)</b></li><li><i>Action code</i>: 11401</li><li><i>Returns</i>: Created user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to create <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to create <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Country</i>  : ISO3166-1 alpha-2 two letter, e.g. US </li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  createUserMeProfile = (data: UserProfilePrivateCreate) => {
    return this.newInstance().postV1NsUsersMeProfiles(data)
  }

  /**
   * Update my profile.<br>Updates user profile in the target namespace. If token's namespace doesn't match the target namespace, the service automatically maps the token's user ID into the user ID in the target namespace. The method returns the updated user profile on a successful call.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Returns</i>: user profile</li><li><i>Path's namespace</i> : <ul><li>can be filled with <b>publisher namespace</b> in order to update <b>publisher user profile</b></li><li>can be filled with <b>game namespace</b> in order to update <b>game user profile</b></li></ul></li><li><i>Language</i> : allowed format: en, en-US</li><li><i>Timezone</i> : IANA time zone, e.g. Asia/Shanghai</li></ul>
   */
  updateUserMeProfile = (data: UserProfilePrivateUpdate) => {
    return this.newInstance().putV1NsUsersMeProfiles(data)
  }

  /**
   * Update partially custom attributes tied to user id.<br>Other detail info: <ul><li><i>Required permission</i>: resource=<b>"NAMESPACE:{namespace}:USER:{userId}:PROFILE"</b>, action=4 <b>(UPDATE)</b></li><li><i>Action code</i>: 11402</li><li><i>Request body</i> : allowed format: JSON object</li><li><i>Returns</i>: Updated custom attributes</li></ul>
   */
  updateUserCustomAttributes = (userId: string, data: any) => {
    return this.newInstance().putV1NsUsersByUseridProfilesCustomAttributes(userId, data)
  }

  private newInstance() {
    return new UserProfile$(Network.create(this.conf), this.namespace, this.cache)
  }
}
