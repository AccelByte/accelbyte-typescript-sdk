/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import isEqual from 'lodash/isEqual.js'
import { IDataStatus, IResponse, IResponseWithSync } from './Validate'

const logEnabled = false

export class SdkCache {
  // this could be localStorage or indexeddb
  static cacheStrategy: Map<string, any> = new Map()

  static async withoutCache<D>(apiCall: () => Promise<IResponse<D>>): Promise<IResponseWithSync<D>> {
    // Intercept the call and add onSync callback so that even though cache is false, the client cn still safely attach onSync
    let apiResponse
    let apiError
    try {
      apiResponse = await apiCall()
      if (apiResponse.error) throw apiResponse.error
    } catch (e) {
      apiError = e
    }
    return new Promise((resolve, reject) => {
      // const result = apiCall()
      // resolve && resolve(result.then())
      // reject && reject(result.catch())
      const success = {
        response: apiResponse?.response as IDataStatus<D>,
        error: apiError,
        onSync: _syncedData => {
          // Add empty implementation so client onSync call does not fail with undefined 'onSync' function
        }
      }
      resolve && resolve(success)
      reject && reject(apiError || apiResponse.error)
    })
  }

  static async withCache<D>(key, apiCall: () => Promise<IResponse<D>>): Promise<IResponseWithSync<D>> {
    const startTime = Date.now()
    let syncObserver
    const cacheData = this.cacheStrategy.get(key) as D | null

    if (!cacheData) {
      const res = await apiCall()
      const data = res.response?.data as D
      const error = res.error as null

      if (error) {
        return {
          response: res.response,
          error,
          onSync: func => (syncObserver = func)
        }
      }

      const skipNon200FromCaching = res.response?.status !== 200
      if (skipNon200FromCaching) {
        return {
          response: res.response as IDataStatus<D>,
          error: null,
          onSync: func => (syncObserver = func)
        }
      }

      if (data) {
        this.cacheStrategy.set(key, data)
      }
      logEnabled && console.log(`No.Cache ${key}`, Date.now() - startTime + 'ms')
      return {
        response: { data, status: 200 },
        error,
        onSync: func => (syncObserver = func)
      }
    }

    const onSyncCall = async () => {
      const onSyncResponse = await apiCall()
      if (onSyncResponse.error) {
        const res = {
          response: null,
          error: onSyncResponse.error
        }
        logEnabled && console.log(`Cache.Sync ERROR ${key}`, Date.now() - startTime + 'ms')
        syncObserver && syncObserver(res)
        return res
      }
      const newData = onSyncResponse.response?.data
      if (!isEqual(this.cacheStrategy.get(key), newData)) {
        this.cacheStrategy.set(key, newData)
        const res = {
          response: { data: newData, status: 200 },
          error: null
        }
        logEnabled && console.log(`Cache.Sync ${key}`, Date.now() - startTime + 'ms')
        syncObserver && syncObserver(res)
        return res
      }
      logEnabled && console.log(`Cache.Sync.Skip ${key}`, Date.now() - startTime + 'ms')
      const res = {
        response: null,
        error: null
      }
      return res
    }

    Promise.resolve().then(onSyncCall)

    logEnabled && console.log(`Cache.Hit ${key}`, Date.now() - startTime + 'ms')
    return {
      response: { data: cacheData, status: 200 },
      error: null,
      onSync: observer => (syncObserver = observer)
    }
  }

  static clearCache = () => {
    this.cacheStrategy.clear()
  }
}
