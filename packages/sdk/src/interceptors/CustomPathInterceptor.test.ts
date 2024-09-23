/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { UsersApi } from '@accelbyte/sdk-iam'
import { afterAll, afterEach, beforeAll, describe, expect, it } from 'vitest'
import { AccelByte } from '../AccelByteSDK'
import { coreConfig } from '../test/constants'
import { getCustomUserMeHandler, getInternalUserMeHandler, getUserMeHandler } from '../test/iamHandlers'
import { emptyServer } from '../test/mock'
import { createCustomPathInterceptor } from './CustomPathInterceptor'

describe('CustomPathInterceptor', () => {
  beforeAll(() => {
    // Start the interception.
    emptyServer.listen()
  })

  afterEach(() => {
    // Remove any handlers you may have added
    // in individual tests (runtime handlers).
    emptyServer.resetHandlers()
  })

  afterAll(() => {
    // Disable request interception and clean up.
    emptyServer.close()
  })

  it('should return valid UserResponse', async () => {
    emptyServer.use(getUserMeHandler)

    const sdk = AccelByte.SDK({ coreConfig })
    // @ts-ignore
    const { data } = await UsersApi(sdk).getUsersMe_v3()
    expect(data).toBeDefined()
  })

  it('should return a response when using customPathInterceptor with a custom basePath', async () => {
    emptyServer.use(getCustomUserMeHandler)

    const sdk = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [
          createCustomPathInterceptor({
            basePath: {
              '/iam': '/iam-service'
            }
          })
        ]
      }
    })
    // @ts-ignore
    const { data } = await UsersApi(sdk).getUsersMe_v3()
    expect(data).toBeDefined()
  })

  it('should return a response when using customPathInterceptor with a custom basePath and isInternalNetwork=true', async () => {
    emptyServer.use(getInternalUserMeHandler)

    const sdk = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [
          createCustomPathInterceptor({
            isInternalNetwork: true,
            basePath: {
              '/iam': '/iam-service'
            }
          })
        ]
      }
    })
    // @ts-ignore
    const { data } = await UsersApi(sdk).getUsersMe_v3()
    expect(data).toBeDefined()
  })
})
