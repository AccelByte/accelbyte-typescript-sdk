/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AxiosResponse } from 'axios'
import { DecodeError } from 'src'
import { expect, it } from 'vitest'
import { z } from 'zod'

// Hide console error.
// eslint-disable-next-line @typescript-eslint/no-empty-function
global.console.error = () => {}

it('should properly log human-readable and informative error', () => {
  const response: AxiosResponse = {
    data: null,
    headers: {},
    config: {
      url: 'https://hello.world'
    },
    status: 400,
    statusText: ''
  }
  const TestSchema = z.object({ hello: z.string() })
  const result = TestSchema.safeParse('hello')

  if (result.success) throw new Error('result.error should exist')

  const error = new DecodeError({ error: result.error, response, modelName: 'TestSchema' })
  const errorPaths = [
    { code: 'invalid_type', expected: 'object', received: 'string', path: [], message: 'Expected object, received string' }
  ]

  expect(error.message).toBe(`url "https://hello.world", modelName "TestSchema", ${JSON.stringify(errorPaths, null, 2)}`)
})
