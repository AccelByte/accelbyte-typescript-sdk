/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { SDKRequestConfig } from '@accelbyte/sdk/AccelbyteSDK'
import { EventV2$ } from '@accelbyte/sdk/generated-public/event/EventV2$'
import { Network } from '@accelbyte/sdk/utils/Network'

export class EventApi {
  /**
   * @internal
   */
  constructor(private readonly conf: SDKRequestConfig, private readonly namespace: string, private cache = false) {}

  /**
   * <p>Available Type: </p>
   *      <ul>
   *        <li>email</li>
   *        <li>password</li>
   *        <li>displayname</li>
   *        <li>dateofbirth</li>
   *        <li>country</li>
   *        <li>language</li>
   *      </ul>
   *      <p>Requires a valid user access token</p>
   */
  getAccountHistoryByUserId = ({
    userId,
    queryParams
  }: {
    userId: string
    queryParams?: {
      pageSize?: number | null
      startDate?: string | null
      endDate?: string | null
      offset?: number | null
      type?: string | null
    }
  }) => {
    return this.newInstance().fetchEventV2UsersByUseridEdithistory(userId, queryParams)
  }

  private newInstance() {
    return new EventV2$(Network.create(this.conf), this.namespace, this.cache)
  }
}
