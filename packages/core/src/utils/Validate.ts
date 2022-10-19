/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AxiosResponse } from 'axios'
import { z, ZodError } from 'zod'
import { Logger } from './Logger'

export type IResponseError =
  | Error
  | {
      name: string
      message: string
      stack?: string
      // AxiosError type
      code?: string
      status?: string
      // eslint-disable-next-line @typescript-eslint/ban-types
      toJSON: () => object
    }

// AxiosResponse
export type IDataStatus<D> = {
  data: D
  status: number
}

export type IResponse<D> =
  | {
      response: IDataStatus<D>
      error: null
    }
  | {
      response: null
      error: IResponseError
    }

export type IResponseWithSync<D> =
  | {
      response: IDataStatus<D>
      error: null
      onSync: (syncedData: (_: IResponse<D>) => void) => void
    }
  | {
      response: null
      error: IResponseError
      onSync: (syncedData: (_: IResponse<D>) => void) => void
    }

export class Validate {
  //
  static responseType<D>(networkCall: () => Promise<AxiosResponse<D>>, Codec: z.ZodType<D>) {
    return wrapNetworkCallSafely<D>(async () => {
      const response = await networkCall()
      const decodeResult = Codec.safeParse(response.data)
      if (!decodeResult.success) {
        throw new DecodeError(decodeResult.error, response)
      }
      return response
    })
  }

  static safeParse<D>(data: unknown, Codec: z.ZodType<D>): D | null {
    const result = Codec.safeParse(data)
    if (result.success) {
      return result.data
    }
    return null
  }
}

async function wrapNetworkCallSafely<D>(networkCallFunction: () => Promise<AxiosResponse<D>>): Promise<IResponse<D>> {
  try {
    const response = await networkCallFunction()
    // Cleanup so we avoid polluting the response
    // @ts-ignore
    delete response.headers // perhaps this may be required?
    // @ts-ignore
    delete response.statusText
    // @ts-ignore
    delete response.config // axios specific
    delete response.request
    return { response, error: null }
  } catch (error) {
    return { response: null, error: <Error>error }
  }
}

export class DecodeError extends Error {
  constructor(error: ZodError, response: AxiosResponse) {
    super(error.stack)
    Logger.error(`url "${response.config.url}", data "${JSON.stringify(response.data, null, 2)}"`, error.stack || error.toString())
  }
}
