/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AxiosRequestConfig } from 'axios'
import { UrlHelper } from '@accelbyte/sdk'

export class RefreshSession {
  // --
  static KEY = 'RefreshSession.lock'

  static isLocked = (): boolean => {
    if (!UrlHelper.isOnBrowser()) return false
    const lockStatus = localStorage.getItem(RefreshSession.KEY)
    if (!lockStatus) {
      return false
    }
    const lockExpiry = Number(lockStatus)
    if (isNaN(lockExpiry)) {
      return false
    }
    return lockExpiry > new Date().getTime()
  }

  static lock = (expiry: number) => {
    if (!UrlHelper.isOnBrowser()) return
    localStorage.setItem(RefreshSession.KEY, `${new Date().getTime() + expiry}`)
  }

  static unlock = () => {
    if (!UrlHelper.isOnBrowser()) return
    localStorage.removeItem(RefreshSession.KEY)
  }

  static sleepAsync = (timeInMs: number) => new Promise(resolve => setTimeout(resolve, timeInMs))

  static isBearerAuth = (config?: AxiosRequestConfig) => {
    // @ts-ignore
    if (config?.headers?.Authorization?.toLowerCase().indexOf('bearer') > -1) {
      return true
    }
    return false
  }
}
