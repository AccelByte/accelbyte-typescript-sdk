/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { LOCAL_STORAGE_KEY } from '../pages/constants'

export const getLocalStorage = (key: string) => {
  if (typeof window === 'undefined') return
  return localStorage.getItem(key)
}

export const saveToLocalStorage = (key: string, value: string) => {
  if (typeof window === 'undefined') return
  return localStorage.setItem(key, value)
}

export const removeLocalStorageKey = (key: string) => {
  if (typeof window === 'undefined') return
  return localStorage.removeItem(key)
}

export const clearUserToken = () => {
  removeLocalStorageKey(LOCAL_STORAGE_KEY.enum.access_token)
  removeLocalStorageKey(LOCAL_STORAGE_KEY.enum.refresh_token)
}
