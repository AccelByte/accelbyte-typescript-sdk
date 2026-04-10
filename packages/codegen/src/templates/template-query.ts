/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ParserQueryUtils } from '../ParserQueryUtils'

export const generateImports = (body: string, className: string) => {
  const lines: string[] = []

  lines.push("import type { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'")

  const axiosTypes = ['AxiosError', 'AxiosResponse'].filter(t => body.includes(t))
  if (axiosTypes.length) {
    lines.push(`import type { ${axiosTypes.join(', ')} } from 'axios'`)
  }

  const rqValues = ['useMutation', 'useQuery'].filter(t => body.includes(t))
  if (rqValues.length) {
    lines.push(`import { ${rqValues.join(', ')} } from '@tanstack/react-query'`)
  }

  const rqTypes = ['UseMutationOptions', 'UseMutationResult', 'UseQueryOptions', 'UseQueryResult'].filter(t => body.includes(t))
  if (rqTypes.length) {
    lines.push(`import type { ${rqTypes.join(', ')} } from '@tanstack/react-query'`)
  }

  lines.push(`import { ${className} } from "../${className}.js"`)

  return lines.join('\n') + '\n'
}

export const templateQuery = (
  className: string,
  body: string,
  importStatements: string[],
  serviceNameTitle: string,
  returnMethods: string,
  paramImports: string[],
  sdkName: string
): string => {
  const classNameWithoutApi = className.replace('Api', '')
  const queryKeys = ParserQueryUtils.createQueryKeys(classNameWithoutApi, returnMethods, sdkName)
  const generatedImports = generateImports(body, className)

  const queryKeyBlock = `export const Key_${classNameWithoutApi} = {\n  ${queryKeys}\n} as const`

  return `/**
 * AUTO GENERATED
 */
${generatedImports}
${filterUsedImports(paramImports, body)}

${queryKeyBlock}

  ${body}
  `
}

function filterUsedImports(importArr, body) {
  return (
    importArr
      .filter(path => {
        const start = path.indexOf('{') + 1
        const end = path.indexOf('}')
        if (start > 0 && end > start) {
          const importName = path.slice(start, end).trim()
          // Check if the extracted className is used in the body
          return body.includes(importName)
        }
        return false
      })
      .map(path => path) // Direct mapping as there's no transformation needed
      .join('\n') + '\n'
  ) // Join the remaining imports with newlines
}
