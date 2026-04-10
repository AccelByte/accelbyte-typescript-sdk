/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
const getImportableVarMap = () => ({
  '@accelbyte/sdk': ['CodeGenUtil', 'Response', 'Validate', 'SdkSetConfigParam'],
  axios: ['AxiosResponse'],
  zod: ['z']
})

const makeNewImportVarMap = () => ({
  axios: ['AxiosInstance', 'AxiosRequestConfig']
})

const CLASS_TYPE_ONLY_VARS = new Set(['AxiosInstance', 'AxiosRequestConfig', 'AxiosResponse', 'SdkSetConfigParam', 'Response'])

export const generateImports = (
  body: string,
  importStatements: string[],
  makeNewImportVarMap: Record<string, string[]>,
  getImportableVarMap: Record<string, string[]>,
  typeOnlyVars: Set<string> = new Set()
) => {
  const usedImportVarMap = makeNewImportVarMap
  const importableVarMap = getImportableVarMap

  for (const [moduleSource, importableVars] of Object.entries(importableVarMap)) {
    for (const importableVar of importableVars) {
      const importVarRegex = new RegExp(`(?<![\\d\\w_])${importableVar}(?![\\d\\w_])`)
      if (body.match(importVarRegex)) {
        usedImportVarMap[moduleSource] = [...(usedImportVarMap[moduleSource] || []), importableVar]
      }
    }
  }

  const importLines: string[] = []
  for (const moduleSource of Object.keys(usedImportVarMap).sort()) {
    const allVars: string[] = usedImportVarMap[moduleSource]
    const valueVars = allVars.filter(v => !typeOnlyVars.has(v)).sort()
    const typeVars = allVars.filter(v => typeOnlyVars.has(v)).sort()

    if (valueVars.length > 0) {
      importLines.push(`import { ${valueVars.join(', ')} } from '${moduleSource}'`)
    }
    if (typeVars.length > 0) {
      importLines.push(`import type { ${typeVars.join(', ')} } from '${moduleSource}'`)
    }
  }

  const generatedImports = importLines.join('\n')
  return `${generatedImports}\n${importStatements.sort().join('\n')}`
}

export const templateClass = (className: string, body: string, importStatements: string[]): string => {
  const attributes = {
    definitions: ['private axiosInstance: AxiosInstance', 'private namespace: string', 'private useSchemaValidation: boolean'],
    assignments: ['this.axiosInstance = axiosInstance', 'this.namespace = namespace', 'this.useSchemaValidation = useSchemaValidation']
  }
  let namespaceConstructor = 'namespace'

  if (!body.includes(".replace('{namespace}', this.namespace)")) {
    namespaceConstructor = '_namespace'
    attributes.definitions.splice(1, 1)
    attributes.assignments.splice(1, 1)
  }

  return `/**
 * AUTO GENERATED
 */
${generateImports(body, importStatements, makeNewImportVarMap(), getImportableVarMap(), CLASS_TYPE_ONLY_VARS)}

export class ${className} {
  ${attributes.definitions.join('\n')}

  constructor(axiosInstance: AxiosInstance, ${namespaceConstructor}: string, useSchemaValidation = true) {
    ${attributes.assignments.join('\n')}
  }

  ${body}
}
  `
}
