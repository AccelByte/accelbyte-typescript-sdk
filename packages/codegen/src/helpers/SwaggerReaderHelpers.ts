/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { CodegenConfig } from '../CodegenConfig'
import { ParserUtils } from '../ParserUtils'
import { Endpoint, OpenApiSpec } from '../Swagger'
import { templateApiMethod } from '../templates/template-api-method'
import { templateMethod } from '../templates/template-method'
import { templateQueryMethod } from '../templates/template-query-method'
import { templateSdkSnippet } from '../templates/template-sdk-snippet'
import { extractDescription, getPermission, getPermissionType } from './utils'

const GIT_URL = 'https://github.com/AccelByte/accelbyte-typescript-sdk/blob/main/packages'

export type Methods = 'get' | 'post' | 'put' | 'delete' | 'patch'
type SnippetMap = {
  [K in Methods]?: {
    web?: string
    webUMD?: string
    webGit?: string
    shell?: string
  }
}

interface Result {
  // 'Users V4': 'createUserInvite,createUser,patchUserMe,createTestUser,updateUserMeEmail,deleteUserMeMfaDevice,getUsersMeMfaFactor,postUserMeMfaFactor,getUsersMeMfaBackupCode,createUserMeMfaBackupCode,createUserMeMfaEmailCode,createUserMeHeadlesVerify,postUserMeMfaEmailEnable,createUserMeMfaEmailDisable,createUserInvite_ByInvitationId,createUserMeHeadlesCodeVerify,createUserMeMfaAuthenticatorKey,createUserMeMfaBackupCodeEnable,deleteUserMeMfaBackupCodeDisable,getUsersMeMfaBackupCodeDownload,postUserMeMfaAuthenticatorEnable,deleteUserMeMfaAuthenticatorDisable,'
  tagToSdkFunctionNamesRecord: Record<string, string>
  // 'Users V4': '\n' +
  //   '  \n' +
  //   '  /**\n' +
  //   '   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace The invited users will also be assigned with &#34;User&#34; role by default.  \n' +
  //   '   */\n' +
  //   '  async function createUserInvite(data: PublicInviteUserRequestV4): Promise<InviteUserResponseV3> {\n' +
  //   '    const $ = new UsersV4$(Network.create(requestConfig), namespace, useSchemaValidation)\n' +
  //   '    const resp = await $.createUserInvite(data,)\n' +
  //   '    if (resp.error) throw resp.error\n' +
  //   '    return resp.response.data\n' +
  //   '  }\n' +
  //   '  \n' +
  //   '  \n' +
  //   '  /**\n' +
  tagToSdkClientRecord: Record<string, string>
  // 'Users V4': '\n' +
  //   '  /**\n' +
  //   '   * This endpoint is used to invite a game studio admin user with new namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Request body details: - emailAddress: email address of the user to be invited - namespace: new namespace of the user to be created - namespaceDisplayName: display name of the new namespace The invited users will also be assigned with &#34;User&#34; role by default.  \n' +
  //   '   */\n' +
  //   '  createUserInvite(data: PublicInviteUserRequestV4): Promise<IResponse<InviteUserResponseV3>> {\n' +
  //   '    const params = {} as SDKRequestConfig\n' +
  //   "    const url = '/iam/v4/public/users/invite'     \n" +
  //   '    const resultPromise = this.axiosInstance.post(url, data, {params})\n' +
  //   '\n' +
  //   "    return Validate.responseType(() => resultPromise, InviteUserResponseV3, 'InviteUserResponseV3')\n" +
  //   '  }\n' +
  //   '  \n' +
  //   '  /**\n'
  tagToEndpointClassesRecord: Record<string, string>
  // For example:
  // 'Users V4': [
  //   "import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '../definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'",
  //   "import { UserCreateFromInvitationRequestV4 } from '../definitions/UserCreateFromInvitationRequestV4.js'",
  //   "import { UpgradeHeadlessAccountRequestV4 } from '../definitions/UpgradeHeadlessAccountRequestV4.js'",
  //   "import { EmailUpdateRequestV4 } from '../definitions/EmailUpdateRequestV4.js'",
  //   "import { CreateTestUserRequestV4 } from '../definitions/CreateTestUserRequestV4.js'",
  //   "import { UserUpdateRequestV3 } from '../definitions/UserUpdateRequestV3.js'",
  //   "import { CreateUserRequestV4 } from '../definitions/CreateUserRequestV4.js'",
  //   "import { PublicInviteUserRequestV4 } from '../definitions/PublicInviteUserRequestV4.js'"
  // ]
  tagToSdkImportsRecord: Record<string, string[]>
  // UsersV4: {
  //   InviteUserResponseV3: "import { InviteUserResponseV3 } from '../definitions/InviteUserResponseV3.js'",
  //   CreateUserResponseV4: "import { CreateUserResponseV4 } from '../definitions/CreateUserResponseV4.js'",
  //   UserResponseV3: "import { UserResponseV3 } from '../definitions/UserResponseV3.js'",
  //   EnabledFactorsResponseV4: "import { EnabledFactorsResponseV4 } from '../definitions/EnabledFactorsResponseV4.js'",
  //   BackupCodesResponseV4: "import { BackupCodesResponseV4 } from '../definitions/BackupCodesResponseV4.js'",
  //   UserResponseV4: "import { UserResponseV4 } from '../definitions/UserResponseV4.js'",
  //   AuthenticatorKeyResponseV4: "import { AuthenticatorKeyResponseV4 } from '../definitions/AuthenticatorKeyResponseV4.js'"
  // }
  tagToClassImportsRecord: Record<string, Record<string, string>>
  // [ 'PublicThirdPartyPlatformInfoArray', 'GetUserMappingV3Array' ].
  arrayDefinitions: string[]
  // {
  //   '/some/path': {
  //     web: '',
  //     shell: '',
  //     webGit: ''
  //   }
  // }
  snippetMap: Record<string, SnippetMap>
  tagToEndpointQueryRecord: Record<string, string>
  /**
   * "Users V4": {
   *   "createUserInvite": "/** description here"
   * }
   */
  tagToSdkFunctionDescription: Record<string, Record<string, string>>
}

export class SwaggerReaderHelpers {
  private static getServicePrefix = (servicePaths: string[]) => servicePaths[servicePaths.length - 1].split('/')[1]

  static parseAllEndpoints = async ({
    api,
    sdkName,
    serviceName
  }: {
    api: OpenApiSpec
    sdkName: string
    serviceName: string
  }): Promise<{
    admin: Result
    public: Result
  }> => {
    const result: {
      admin: Result
      public: Result
    } = {
      admin: {
        arrayDefinitions: [],
        snippetMap: {},
        tagToClassImportsRecord: {},
        tagToEndpointClassesRecord: {},
        tagToSdkClientRecord: {},
        tagToSdkFunctionNamesRecord: {},
        tagToSdkImportsRecord: {},
        tagToEndpointQueryRecord: {},
        tagToSdkFunctionDescription: {}
      },
      public: {
        arrayDefinitions: [],
        snippetMap: {},
        tagToClassImportsRecord: {},
        tagToEndpointClassesRecord: {},
        tagToSdkClientRecord: {},
        tagToSdkFunctionNamesRecord: {},
        tagToSdkImportsRecord: {},
        tagToEndpointQueryRecord: {},
        tagToSdkFunctionDescription: {}
      }
    }
    const sortedPathsByLength = new Map(
      Object.entries(api.paths).sort((a, b) => {
        if (a[0].length === b[0].length) {
          return a[0].localeCompare(b[0])
        } else {
          return a[0].length - b[0].length
        }
      })
    )
    const sortedKeys = Array.from(sortedPathsByLength.keys())
    const servicePrefix = SwaggerReaderHelpers.getServicePrefix(sortedKeys)
    // This is to detect multiple naming conflicts, so we can append it with something else.
    const tagToClassMethodsMap: {
      admin: Record<string, Record<string, string>>
      public: Record<string, Record<string, string>>
    } = {
      admin: {},
      public: {}
    }

    for (const [path, operation] of sortedPathsByLength) {
      if (path.indexOf('/healthz') >= 0) {
        continue
      }

      const isAdminEndpoint = path.indexOf('/admin/') > -1

      const picked = isAdminEndpoint ? result.admin : result.public
      const {
        arrayDefinitions,
        snippetMap,
        tagToClassImportsRecord,
        tagToEndpointClassesRecord,
        tagToSdkClientRecord,
        tagToSdkFunctionNamesRecord,
        tagToSdkImportsRecord,
        tagToEndpointQueryRecord,
        tagToSdkFunctionDescription
      } = picked

      const tagToClassMethodsMapByType = isAdminEndpoint ? tagToClassMethodsMap.admin : tagToClassMethodsMap.public
      const generatedMethods = {} // { path_get: 'fetchSomething' }

      const httpMethods = Object.keys(operation)
      for (const httpMethod of httpMethods) {
        const endpoint = await Endpoint.parseAsync(operation[httpMethod]).catch(error => {
          console.error(JSON.stringify({ path, httpMethod }, null, 2))
          throw error
        })
        if (!endpoint.tags) continue

        const [tag] = endpoint.tags
        const configBasePath = CodegenConfig.getBasePath()
        const effectiveBasePath = configBasePath !== undefined ? configBasePath : (api.basePath ?? '')
        const pathWithBase = `${effectiveBasePath}${path}`
        const permissionType = getPermissionType(getPermission(endpoint))

        tagToClassMethodsMapByType[tag] = tagToClassMethodsMapByType[tag] ? tagToClassMethodsMapByType[tag] : {}
        const isForm = endpoint.consumes && endpoint.consumes[0] === 'application/x-www-form-urlencoded'
        const classMethod = ParserUtils.generateNaturalLangMethod({
          servicePrefix,
          path,
          httpMethod,
          isForm,
          existingMethods: tagToClassMethodsMapByType[tag],
          permissionType
        })

        tagToClassMethodsMapByType[tag][classMethod] = `${path} ${httpMethod}`
        generatedMethods[`${path} ${httpMethod}`] = `${classMethod}`

        if (!snippetMap[pathWithBase]) {
          // Initialize, if undefined.
          snippetMap[pathWithBase] = {}
        }

        const description = endpoint.description?.replace(/\s+/g, ' ') || ''

        const responseClasses = ParserUtils.get2xxResponses(endpoint.responses)
        const responseClass = responseClasses.length > 1 ? null : responseClasses?.[0]
        const { className, classGenName } = ParserUtils.generateClassName(tag, isAdminEndpoint)
        tagToClassImportsRecord[className] = tagToClassImportsRecord[className] ? tagToClassImportsRecord[className] : {}
        if (responseClass && responseClass !== '__dictionary__') {
          tagToClassImportsRecord[className][responseClass] =
            `import { ${responseClass} } from '../../generated-definitions/${responseClass}.js'`
        }
        if (responseClass && responseClass.endsWith('Array')) {
          arrayDefinitions.push(responseClass)
        }

        const queryParams = ParserUtils.filterQueryParameters(endpoint.parameters)
        const isFormUrlEncoded = ParserUtils.isFormUrlEncoded(httpMethod, endpoint.consumes)
        const pathParams = ParserUtils.filterPathParams(endpoint.parameters)
        let bodyParams = ParserUtils.filterBodyParams(endpoint.parameters)
        const deprecated = !!endpoint.deprecated

        // Handling requestBody in swagger v3 `templateMethod` expect `bodyParams` to be array, so for now we convert
        // requestBody format to array params
        if (endpoint.requestBody) {
          bodyParams = [
            {
              name: 'body',
              in: 'body',
              schema: endpoint.requestBody.content['application/json']?.schema
            }
          ]
        }

        // -- classes
        const { methodImpl, methodParams, methodParamsNoTypes, importStatements } = templateMethod({
          classMethod,
          description,
          httpMethod,
          path: pathWithBase,
          pathParams,
          bodyParams,
          queryParams,
          isFormUrlEncoded,
          responseClasses,
          deprecated
        })

        tagToEndpointClassesRecord[tag] = (tagToEndpointClassesRecord[tag] || '') + methodImpl
        const { apiGenName } = ParserUtils.generateApiName(tag, isAdminEndpoint)
        const queryMethodImpl = templateQueryMethod({
          classMethod,
          httpMethod,
          path: pathWithBase,
          pathParams,
          responseClasses,
          methodParams,
          apiGenName,
          deprecated,
          description
        })
        tagToEndpointQueryRecord[tag] = (tagToEndpointQueryRecord[tag] || '') + queryMethodImpl

        const fnDescription = extractDescription(description, { isDeprecated: deprecated, responseClasses })
        const tagFnDescriptions = tagToSdkFunctionDescription[tag]
        tagToSdkFunctionDescription[tag] = {
          ...tagFnDescriptions,
          [classMethod]: fnDescription
        }

        // -- apis
        const { generatedMethodString, snippetApiArgs, snippetMethod, snippetShell } = templateApiMethod({
          classMethod,
          httpMethod,
          path: pathWithBase,
          pathParams,
          bodyParams,
          responseClasses,
          classGenName,
          methodParams,
          methodParamsNoTypes,
          xSecurity: endpoint['x-security']
        })
        tagToSdkClientRecord[tag] = (tagToSdkClientRecord[tag] || '') + generatedMethodString
        tagToSdkFunctionNamesRecord[tag] = (tagToSdkFunctionNamesRecord[tag] || '') + classMethod + ','

        // -- dependencies
        tagToSdkImportsRecord[tag] = tagToSdkImportsRecord[tag]
          ? [...new Set([...importStatements, ...tagToSdkImportsRecord[tag]])]
          : [...new Set(importStatements)]

        const serviceNameTitle = ParserUtils.convertDashesToTitleCase(serviceName)
        const resultSnippet = templateSdkSnippet({
          sdkName,
          serviceNameTitle,
          apiName: apiGenName,
          snippetMethod,
          snippetApiArgs
        })

        const resultUMDSnippet = templateSdkSnippet({
          sdkName,
          serviceNameTitle,
          apiName: apiGenName,
          snippetMethod,
          snippetApiArgs,
          isUMD: true
        })

        // -- snippets
        const currentSnippetMap: SnippetMap[Methods] = {}
        snippetMap[pathWithBase][httpMethod as Methods] = currentSnippetMap
        currentSnippetMap.web = resultSnippet
        currentSnippetMap.webUMD = resultUMDSnippet
        const generatedDirName = isAdminEndpoint ? 'generated-admin' : 'generated-public'
        currentSnippetMap.webGit = GIT_URL + `/sdk-${sdkName}/src/${generatedDirName}/${apiGenName}.ts`
        // Put this last to preserve the previous order.
        currentSnippetMap.shell = snippetShell
      }
    }

    for (const key in result) {
      // De-duplicate.
      result[key as keyof typeof result].arrayDefinitions = Array.from(new Set(result[key as keyof typeof result].arrayDefinitions))
    }

    return result
  }
}
