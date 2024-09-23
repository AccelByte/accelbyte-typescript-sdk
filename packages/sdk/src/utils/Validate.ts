/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AxiosError, AxiosResponse } from 'axios'
import { z, ZodError } from 'zod'

export type ResponseError = Error | AxiosError

export type Response<T> =
  | {
      response: AxiosResponse<T>
      error: null
    }
  | {
      response: null
      error: ResponseError
    }

export class Validate {
  static validateOrReturnResponse<D>(
    useSchemaValidation: boolean,
    networkCall: () => Promise<AxiosResponse<D>>,
    Codec: z.ZodType<D>,
    modelName: string
  ) {
    return useSchemaValidation ? Validate.responseType(() => networkCall(), Codec, modelName) : Validate.unsafeResponse(() => networkCall())
  }

  static responseType<D>(networkCall: () => Promise<AxiosResponse<D>>, Codec: z.ZodType<D>, modelName: string) {
    return wrapNetworkCallSafely<D>(async () => {
      const response = await networkCall()
      const decodeResult = Codec.safeParse(response.data)
      if (!decodeResult.success && response.status !== 204) {
        throw new DecodeError({ error: decodeResult.error, response, modelName })
      }
      return response
    })
  }

  static unsafeResponse<D>(networkCall: () => Promise<AxiosResponse<D>>) {
    return wrapNetworkCallSafely<D>(() => networkCall())
  }

  static safeParse<D>(data: unknown, Codec: z.ZodType<D>): D | null {
    const result = Codec.safeParse(data)
    if (result.success) {
      return result.data
    }
    return null
  }
}

async function wrapNetworkCallSafely<D>(networkCallFunction: () => Promise<AxiosResponse<D>>): Promise<Response<D>> {
  try {
    const response = await networkCallFunction()
    return { response, error: null }
  } catch (error) {
    return { response: null, error: <Error>error }
  }
}

export class DecodeError extends Error {
  constructor({ error, response, modelName }: { error: ZodError; response: AxiosResponse; modelName: string }) {
    const msg = `response from url "${response.config.url}" doesn't match model "${modelName}"`
    super(msg)
    console.error(msg, error)
  }
}
