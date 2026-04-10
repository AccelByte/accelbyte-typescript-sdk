/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { capitalize, extractDescription, getResponseType } from '../helpers/utils'
import { ParserUtils } from '../ParserUtils'
import { EndpointParameters } from '../Swagger'

/* Table query doesn't have permission, will revisit later */
const POST_FETCH_INCLUDES_PATH = ['/table-query/']

export const templateQueryMethod = ({
  classMethod,
  httpMethod,
  path,
  pathParams,
  responseClasses,
  methodParams,
  apiGenName,
  description,
  deprecated
}: {
  classMethod: string
  httpMethod: string
  path: string
  pathParams: EndpointParameters[]
  responseClasses: string[]
  methodParams: string
  apiGenName: string
  description: string
  deprecated: boolean
}) => {
  const isPostFetch = httpMethod === 'post' && (POST_FETCH_INCLUDES_PATH.some(p => path.includes(p)) || path.endsWith('/list'))

  const isFetch = classMethod.startsWith('fetch')
  const isGet = httpMethod === 'get' || isPostFetch || isFetch

  const queryMethod = isGet ? 'useQuery' : 'useMutation'
  let mParams = ''
  let mParamsNoTypes = ''
  let newPath = `'${path}'`

  const sortedPathParams = ParserUtils.sortPathParamsByPath(pathParams, path)
  for (const pathParam of sortedPathParams) {
    const type = ParserUtils.parseType(pathParam)
    if (pathParam.name !== 'namespace') {
      mParams += pathParam.name + `:${type}` + ', '
      mParamsNoTypes += pathParam.name + ', '
    }
    const pName = pathParam.name === 'namespace' ? 'this.namespace' : pathParam.name
    if (path.match(`{${pathParam.name}}`)) {
      if (type === 'string') {
        newPath = `${newPath}.replace('{${pathParam.name}}', ${pName})`
      } else {
        newPath = `${newPath}.replace('{${pathParam.name}}', String(${pName}))`
      }
    }
  }

  const { responseType } = getResponseType({ responseClasses })
  let _methodName = convertMethodNameToHook({ classMethod, apiGenName, isGet })
  const _methodParams = methodParams && methodParams.length > 0 ? `& { ${methodParams} }` : ''
  const _methodParamsImpl = convertToMethodImplArgs(methodParams)
  const queryKey = createQueryKey(apiGenName, classMethod)
  const descriptionText = extractDescription(description, {
    isDeprecated: deprecated,
    responseClasses,
    other: [' ', '#### Default Query Options', 'The default options include:', '```', '{', `   queryKey: [${queryKey}, input]`, '}', '```']
  })

  const queryMethodImpl = `\n
${descriptionText}
export const ${_methodName} = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ${_methodParams},
    options?: Omit<UseQueryOptions<${responseType}, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<${responseType}>) => void
  ): UseQueryResult<${responseType}, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof ${_methodName}>[1]
  ) => async () => {
      const response = 
            (await ${apiGenName}(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                ${classMethod}(${_methodParamsImpl}))
      callback?.(response)
      return response.data
  }
  
  return ${queryMethod}<${responseType}, AxiosError<ApiError>>({
    queryKey: [${queryKey}, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}\n  
  `

  const mutationMethodImpl = `\n
  ${descriptionText}
export const ${_methodName} = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<${responseType}, AxiosError<ApiError>, SdkSetConfigParam ${_methodParams}>, 'mutationKey'>,
    callback?: (data: ${responseType}) => void
  ): UseMutationResult<${responseType}, AxiosError<ApiError>, SdkSetConfigParam ${_methodParams}> => { 
  
  const mutationFn = async (input: SdkSetConfigParam ${_methodParams}) => {
      const response = 
            (await ${apiGenName}(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                ${classMethod}(${_methodParamsImpl}))
      callback?.(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [${queryKey}],
    mutationFn,
    ...options
  })
}\n  
  `

  return isGet ? queryMethodImpl : mutationMethodImpl
}

function versionMutationSuffixMethodName(baseMethodName: string): string {
  // Use regex to split the method name at the last occurrence of a version pattern
  const parts = baseMethodName.split(/(_v\d+)$/)
  const name = parts[0] // The base name without the version
  const versionSuffix = parts[1] || '' // The version suffix or empty if not present

  // Insert the version suffix after "Mutation" correctly, even if it's deeply embedded
  const res = `${name}Mutation${versionSuffix}`
  return res
}

/*
 * Converts "SomethingApi.get|post|etcWhatever" to "Something.Whatever"
 */
function createQueryKey(className, methodName) {
  const prefixRegex = /^(get|create|update|delete|patch|post|fetch)[_]?/i
  const cleanedMethodName = methodName.replace(prefixRegex, '').trim()
  const finalMethodName = cleanedMethodName.charAt(0).toUpperCase() + cleanedMethodName.slice(1)
  return `Key_${className.replace('Api', '')}.${finalMethodName}`
}

const prefixMappings = {
  get: 'use',
  create: 'useCreate',
  patch: 'usePatch',
  update: 'useUpdate',
  delete: 'useDelete',
  post: 'usePost',
  fetch: 'useFetch'
} as const

function convertMethodNameToHook({ classMethod, apiGenName, isGet }: { classMethod: string; apiGenName: string; isGet: boolean }) {
  for (const [originalPrefix] of Object.entries(prefixMappings)) {
    if (classMethod.startsWith(originalPrefix)) {
      const methodName = !isGet ? versionMutationSuffixMethodName(classMethod) : classMethod
      return `use${apiGenName}_${capitalize(methodName)}`
    }
  }
  return classMethod
}

/**
 * Converts "data: UpgradeHeadlessAccountV3Request, queryParams?: etc"
 * To: "input.data, input.queryParams"
 */
function convertToMethodImplArgs(methodArgs) {
  // Split the input string on commas to separate each property
  const properties = methodArgs
    .split(/,\s*(?![^{}]*\})/)
    .map(prop => prop.trim())
    .filter(Boolean)

  // Initialize an array to hold the formatted properties
  const formattedProperties = []

  // Process each property
  properties.forEach(prop => {
    // Check if the property includes an object (detecting a colon followed by a curly brace)
    if (prop.includes(': {')) {
      // Extract the property name, considering optional '?'
      const propertyName = prop.split(': {')[0].replace('?', '').trim()
      formattedProperties.push(`input.${propertyName}`)
    } else {
      // Regular property (no object)
      const colonIndex = prop.indexOf(':')
      const propertyName = prop.substring(0, colonIndex).replace('?', '').trim()
      formattedProperties.push(`input.${propertyName}`)
    }
  })

  // Join the formatted property names with ', '
  return formattedProperties.join(', ')
}
