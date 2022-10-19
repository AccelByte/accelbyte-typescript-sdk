/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@od-web-sdk/AccelbyteSDK'
import { UserProfilePrivateCreate } from '@od-web-sdk/generated-public/basic/definitions/UserProfilePrivateCreate'
import { UserProfilePrivateUpdate } from '@od-web-sdk/generated-public/basic/definitions/UserProfilePrivateUpdate'
import { UserProfile$ } from '@od-web-sdk/generated-public/basic/UserProfile$'
import { Network } from '@od-web-sdk/utils/Network'

export class UserProfileApi {
  constructor(private conf: SDKRequestConfig, private namespace: string, private cache = true) {}

  newInstance() {
    return new UserProfile$(Network.create(this.conf), this.namespace, this.cache)
  }

  getUsersMeProfiles = () => {
    return this.newInstance().fetchV1UsersMeProfiles()
  }

  createUserMeProfile = (data: UserProfilePrivateCreate) => {
    return this.newInstance().postV1UsersMeProfiles(data)
  }

  updateUserMeProfile = (data: UserProfilePrivateUpdate) => {
    return this.newInstance().putV1UsersMeProfiles(data)
  }

  updateUserCustomAttributes = (userId: string, data: any) => {
    return this.newInstance().putV1UsersByUseridProfilesCustomAttributes(userId, data)
  }
}
