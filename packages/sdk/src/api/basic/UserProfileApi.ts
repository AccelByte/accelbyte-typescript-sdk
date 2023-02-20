/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
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
   * GET [/basic/v1/public/namespaces/{namespace}/users/me/profiles](api)
   *
   * Get my profile
   *
   * __Client with user token can get user profile in target namespace__
   */
  getUsersMeProfiles = () => {
    return this.newInstance().fetchV1NsUsersMeProfiles()
  }

  /**
   * POST [/basic/v1/public/namespaces/{namespace}/users/me/profiles](api)
   *
   * Create my profile.
   *
   * __Client with user token can create user profile in target namespace__
   */
  createUserMeProfile = (data: UserProfilePrivateCreate) => {
    return this.newInstance().postV1NsUsersMeProfiles(data)
  }

  /**
   * PUT [/basic/v1/public/namespaces/{namespace}/users/me/profiles](api)
   *
   * Update my profile.
   * Updates user profile in the target namespace. If token's namespace doesn't match the target namespace, the service automatically maps the token's user ID into the user ID in the target namespace. The method returns the updated user profile on a successful call.
   */
  updateUserMeProfile = (data: UserProfilePrivateUpdate) => {
    return this.newInstance().putV1NsUsersMeProfiles(data)
  }

  /**
   * PUT [/basic/v1/public/namespaces/{namespace}/users/{userId}/profiles/customAttributes](api)
   *
   * Update partially custom attributes tied to user id.
   * _Returns_: Updated custom attributes
   */
  updateUserCustomAttributes = (userId: string, data: any) => {
    return this.newInstance().putV1NsUsersByUseridProfilesCustomAttributes(userId, data)
  }

  private newInstance() {
    return new UserProfile$(Network.create(this.conf), this.namespace, this.cache)
  }
}
