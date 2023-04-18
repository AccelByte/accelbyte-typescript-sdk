/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { createBrowserHistory } from 'history'

export const basename = '/'
const history = createBrowserHistory({
  basename
})

export const replaceUrlOnly = (url: string) => {
  if ('history' in window && typeof window.history.replaceState === 'function') {
    window.history.replaceState({}, '', url)
  }
}

export const pushUrlOnly = (url: string) => {
  if ('history' in window && typeof window.history.replaceState === 'function') {
    window.history.pushState({}, '', url)
  }
}

export default history
