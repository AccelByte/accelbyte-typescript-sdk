/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import fs from 'fs'
import path from 'path'
import { Endpoint } from '../Swagger'

export const capitalize = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}

export function isObject(o) {
  return o instanceof Object && o.constructor === Object
}

export const getPermission = (endpoint: Endpoint) => {
  const xSecurity = endpoint['x-security'] as Array<{ userPermissions?: string; groupPermissions?: string }> | { userPermission?: string }
  let xSecurityPerm: string = undefined

  if (Array.isArray(xSecurity)) {
    for (const obj of xSecurity) {
      if (obj?.userPermissions) {
        xSecurityPerm = obj.userPermissions
      }

      if (obj?.groupPermissions) {
        xSecurityPerm = obj.groupPermissions
      }
    }
  } else if (isObject(xSecurity)) {
    xSecurityPerm = xSecurity?.userPermission
  }

  return xSecurityPerm
}

export type PermissionType = 'READ' | 'CREATE' | 'DELETE' | 'UPDATE' | null

const PermissionRegex = /\[(\w+)\]/

export const getPermissionType = (permission?: string | string[]): PermissionType => {
  if (!permission) return null

  if (Array.isArray(permission)) {
    const perm = permission?.[0]
    if (!perm) return null

    const [_, type] = perm?.match(PermissionRegex)

    return (type || null) as PermissionType
  }

  const [_, type] = permission?.match(PermissionRegex)

  return (type || null) as PermissionType
}

/**
 * Append data to a file in the root directory.
 *
 * @param {string} data - The data to append to the file.
 * @param {string} fileName - The name of the file in the root directory.
 */
export const appendToRootFile = (data: string, fileName: string) => {
  // Calculate the path to the root directory file
  const rootFilePath = path.resolve(__dirname, '../../../../', fileName)

  try {
    // Append the data to the file in the root directory
    fs.appendFileSync(rootFilePath, data, 'utf8')
    console.log(`Data appended to ${rootFilePath} successfully.`)
  } catch (err) {
    console.error(`Failed to append data: ${err}`)
  }
}

export const removeAdminPrefix = (name: string) => (name.startsWith('Admin') && name !== 'Admin' ? name.replace(/^Admin/, '') : name)

export const escapeComment = (string: string) => string.replace(/\*\//g, '*\\/').replace(/\n/g, '\n   * ')

const generateJsDoc = ({ indentation = 4, lines }: { indentation: number; lines: string[] }): string => {
  const indent = ' '.repeat(indentation)

  const formattedLines = lines
    .filter(Boolean)
    .map(line => `${indent} * ${line}`)
    .join('\n')

  return `${indent}/**\n${formattedLines}\n${indent} */`
}

export const extractDescription = (
  description: string,
  options?: { isDeprecated?: boolean; responseClasses?: string[]; other?: string[]; indentation?: number }
) => {
  const { indentation = 2, responseClasses, other, isDeprecated } = options
  return description
    ? generateJsDoc({
        lines: [
          isDeprecated ? '@deprecated' : '',
          escapeComment(description),
          ...(responseClasses.length > 1 ? [' ', '#### Response type:', ...responseClasses.map(val => `- \`${val}\``)] : ''),
          ...(options?.other ? other : '')
        ],
        indentation
      })
    : ''
}

export const getResponseType = ({
  responseClasses,
  defaultType = 'unknown'
}: {
  responseClasses: string[]
  defaultType?: string
}): { responseType: string; responseTypeInAxiosResponse: string; responseTypeInResponse: string } => {
  const responseClass = responseClasses.length === 1 ? responseClasses?.[0] : 'unknown'
  const rawResponseType = responseClass !== 'unknown' ? responseClasses?.[0] : defaultType
  const responseType = rawResponseType === '__dictionary__' ? 'Record<string, any>' : rawResponseType
  return {
    responseType,
    responseTypeInAxiosResponse: `Promise<AxiosResponse<${responseType}>>`,
    responseTypeInResponse: `Promise<Response<${responseType}>>`
  }
}
