/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export const getLocalStorage = (key: string) => {
  if (typeof window === 'undefined') return
  return localStorage.getItem(key)
}

export const saveToLocalSorage = (key: string, value: string) => {
  if (typeof window === 'undefined') return
  return localStorage.setItem(key, value)
}
