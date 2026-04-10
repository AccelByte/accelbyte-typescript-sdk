/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

const Schema = z.object({
  $ref: z.string().nullish(),
  type: z
    .union([z.literal('array'), z.literal('object'), z.literal('file'), z.literal('string'), z.literal('boolean'), z.literal('integer')])
    .nullish(),
  items: z
    .object({
      $ref: z.string().nullish(),
      type: z.string().nullish()
    })
    .nullish(),
  properties: z.union([z.array(z.string()).nullish(), z.record(z.object({ type: z.string() })).nullish()]),
  description: z.string().nullish(),
  additionalProperties: z
    .object({
      type: z.string().nullish()
    })
    .nullish()
})

export type Schema = z.TypeOf<typeof Schema>

export const Definition = z.object({
  required: z.array(z.string()).nullish(),
  properties: z
    .record(
      z.object({
        type: z.string()
      })
    )
    .nullish()
})

export type Definition = z.TypeOf<typeof Definition>

export const Definitions = z.record(Definition)

export type Definitions = z.TypeOf<typeof Definitions>

const EndpointParametersType = z.enum(['apiKey', 'boolean', 'int', 'integer', 'number', 'string', 'array', 'file'])
const EndpointParametersIn = z.enum(['body', 'formData', 'header', 'path', 'query'])

const EndpointParameters = z.object({
  type: EndpointParametersType.nullish(),
  description: z.string().nullish(),
  name: z.string(),
  in: EndpointParametersIn,
  required: z.boolean().nullish(),
  schema: Schema.nullish(),
  default: z.union([z.boolean(), z.string(), z.number(), z.array(z.any())]).nullish(),
  enum: z.array(z.union([z.boolean(), z.string(), z.number()])).nullish(),
  items: z
    .object({
      type: z.string(),
      enum: z.array(z.any()).nullish()
    })
    .nullish()
})

export type EndpointParameters = z.TypeOf<typeof EndpointParameters>

export const Endpoint = z.object({
  description: z.string().nullish(),
  consumes: z.array(z.string()).nullish(),
  produces: z.array(z.string()).nullish(),
  tags: z.array(z.string()).nullish(),
  summary: z.string().nullish(),
  operationId: z.string(),
  deprecated: z.boolean().nullish(),
  responses: z.record(
    z.object({
      description: z.string().nullish(),
      schema: Schema.nullish(),
      content: z
        .object({
          'application/json': z.object({
            schema: Schema.nullish()
          })
        })
        .nullish()
    })
  ),
  parameters: z.array(EndpointParameters).nullish(),
  requestBody: z
    .object({
      required: z.boolean().nullish(),
      content: z
        .object({
          'application/json': z
            .object({
              schema: Schema.nullish()
            })
            .nullish()
        })
        .nullish()
    })
    .nullish(),
  // The proper type is z.array(z.record(z.array(z.string()))).nullish() but somehow there are endpoints with
  // an object type instead of an array type, so, yeah.
  //
  // Services with this error: sdk-iam, sdk-ugc.
  'x-security': z.any().nullish()
})
export type Endpoint = z.TypeOf<typeof Endpoint>

const Operation = z.object({
  get: Endpoint.nullish(),
  post: Endpoint.nullish(),
  patch: Endpoint.nullish(),
  delete: Endpoint.nullish(),
  put: Endpoint.nullish()
})
export type Operation = z.TypeOf<typeof Operation>
export type HttpMethod = keyof Operation

export const Paths = z.record(Operation)

export const OpenApiSpec = z.object({
  paths: Paths,
  definitions: Definitions,
  basePath: z.string(),
  info: z.object({
    description: z.string(),
    title: z.string(),
    contact: z.object({
      name: z.string(),
      url: z.string(),
      email: z.string()
    }),
    version: z.string()
  }),
  schemes: z.array(z.string()).nullish(),
  components: z
    .object({
      schemas: Definitions
    })
    .nullish()
})

export type OpenApiSpec = z.TypeOf<typeof OpenApiSpec>
