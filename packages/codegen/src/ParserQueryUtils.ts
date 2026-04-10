/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { capitalize } from './helpers/utils'

export class ParserQueryUtils {
  /**
   * convert csv 'aa,bb' into "aa = 'Sdk.Class.aa', bb = 'Sdk.Class.bb'"
   */
  static createQueryKeys(classNameWithoutApi: string, csvMethodNames: string, sdkName: string): string {
    const keys = csvMethodNames.split(',')
    const processedKeys = new Set<string>()

    const enumString = keys.reduce((acc, key, index) => {
      const trimmedKey = key.trim()
      if (trimmedKey) {
        // Remove known prefixes and any leading underscores or spaces
        const cleanedKey = trimmedKey.replace(/^(get|update|create|patch|delete|post|fetch)[_]?/, '')

        // Create the enum value only if it's not already added
        if (!processedKeys.has(cleanedKey)) {
          processedKeys.add(cleanedKey)
          acc += `${cleanedKey}: '${capitalize(sdkName)}.${classNameWithoutApi}.${cleanedKey}'`
          if (index < keys.length - 1) {
            acc += ',\n'
          }
        }
      }
      return acc
    }, '')

    return enumString
  }
}
