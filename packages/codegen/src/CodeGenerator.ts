/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import SwaggerParser from '@apidevtools/swagger-parser'
import fs from 'fs'
import path from 'path'
import { CliParser } from './CliParser'
import { CodegenConfig } from './CodegenConfig'
import { SwaggerReaderHelpers } from './helpers/SwaggerReaderHelpers'
import { ParserUtils } from './ParserUtils'
import { templateApiIndex } from './templates/template-api-index'
import { TemplateZod, TemplateZodArray } from './templates/template-zod'

// Patching is done in https://bitbucket.org/accelbyte/justice-codegen-sdk-spec

export class CodeGenerator {
  static srcFolder = () => CliParser.getOutputPath()

  static getGeneratedFolder = (isAdmin: boolean) =>
    isAdmin ? `${CodeGenerator.srcFolder()}/generated-admin` : `${CodeGenerator.srcFolder()}/generated-public`

  static getGeneratedSnippetsFolder = () => `${CliParser.getSnippetOutputPath()}/generated-snippets`

  static prepareDirs = (DIST_DEFINITION_DIR, DIST_DIR, DIST_DIR_ENDPOINTS, DIST_DIR_QUERIES) => {
    ParserUtils.mkdirIfNotExist(DIST_DEFINITION_DIR)
    ParserUtils.mkdirIfNotExist(DIST_DIR(true))
    ParserUtils.mkdirIfNotExist(DIST_DIR(false))
    ParserUtils.mkdirIfNotExist(DIST_DIR_ENDPOINTS(true))
    ParserUtils.mkdirIfNotExist(DIST_DIR_ENDPOINTS(false))
    ParserUtils.mkdirIfNotExist(DIST_DIR_QUERIES(true))
  }

  static main = async (nameArray: string[]): Promise<{ indexImports: Set<string>; queryImports: Set<string> }> => {
    const serviceName = nameArray[0]
    const sdkName = nameArray[1]
    const swaggerFile = nameArray[2]
    const parser = new SwaggerParser()
    const swaggerFilePath = `${CliParser.getSwaggersOutputPath()}/${swaggerFile}`
    const api = await parser.parse(swaggerFilePath)
    const serviceNameTitle = ParserUtils.convertDashesToTitleCase(serviceName)

    const indexImportsSet: Set<string> = new Set()
    const queryImportsSet = new Set<string>()
    const apiInfo = { ...api.info, 'x-version': api['x-version']?.version }
    console.log('----------\nGenerating API:', { title: apiInfo.title, version: apiInfo.version })

    // When split mode is active, each service writes into its own subfolder. targetSrcFolder
    // always stays at the root output path so that barrel-file import paths are correct
    // regardless of the mode (e.g. './iam/generated-public/...' vs './generated-public/...').
    const isSplitByService = CodegenConfig.splitOutputByServiceName()
    const srcFolder = isSplitByService ? path.join(CliParser.getOutputPath(), serviceName) : CliParser.getOutputPath()
    const targetSrcFolder = `${CliParser.getOutputPath()}/`

    if (!CliParser.isGenerateSnippetOnly()) {
      ParserUtils.writeXVersion(srcFolder, api['x-version'], api.info)
    }

    const parsedInformation = await SwaggerReaderHelpers.parseAllEndpoints({ api, sdkName, serviceName })

    if (CliParser.getSnippetOutputPath()) {
      try {
        ParserUtils.mkdirIfNotExist(CodeGenerator.getGeneratedSnippetsFolder())
        ParserUtils.writeSnippetFile(
          CodeGenerator.getGeneratedSnippetsFolder(),
          api.info.title,
          JSON.stringify(
            {
              ...parsedInformation.public.snippetMap,
              ...parsedInformation.admin.snippetMap
            },
            null,
            2
          )
        )
      } catch (err) {
        console.error('Error generating snippets', err)
      }
    }

    if (CliParser.isGenerateSnippetOnly()) {
      console.log('\nSuccessfully generate SDK snippets only\n----------\n\n')
      return
    }

    const DIST_DIR = (isAdmin: boolean) => path.join(srcFolder, isAdmin ? 'generated-admin' : 'generated-public')
    const DIST_DIR_ENDPOINTS = (isAdmin: boolean) => path.join(DIST_DIR(isAdmin), 'endpoints')
    const DIST_DIR_QUERIES = (isAdmin: boolean) => path.join(DIST_DIR(isAdmin), 'queries')
    const DIST_DEFINITION_DIR = path.join(srcFolder, 'generated-definitions')
    CodeGenerator.prepareDirs(DIST_DEFINITION_DIR, DIST_DIR, DIST_DIR_ENDPOINTS, DIST_DIR_QUERIES)

    const mainApiList = []
    const generatedDefinitions = []
    // ----
    const generatePublicOrAdmin = isAdmin => {
      const parsedInformationByType = isAdmin ? parsedInformation.admin : parsedInformation.public
      const {
        arrayDefinitions,
        tagToClassImportsRecord,
        tagToEndpointClassesRecord,
        tagToSdkClientRecord,
        tagToSdkFunctionNamesRecord,
        tagToSdkImportsRecord,
        tagToEndpointQueryRecord,
        tagToSdkFunctionDescription
      } = parsedInformationByType

      // creates Api And Endpoint classes
      const writeApiEndpointFiles = (isAdminEndpoint: boolean) => {
        const apiList = []
        for (const tag in tagToEndpointClassesRecord) {
          const { className, classGenName } = ParserUtils.generateClassName(tag, isAdminEndpoint)
          const classBuffer = tagToEndpointClassesRecord[tag]
          const imports = [...new Set([...tagToSdkImportsRecord[tag], ...Object.values(tagToClassImportsRecord[className])])]
          const apiImports = [...new Set([...tagToSdkImportsRecord[tag], ...Object.values(tagToClassImportsRecord[className])])]
          apiImports.push(`import { ${classGenName} } from './endpoints/${classGenName}.js'`)

          ParserUtils.writeClassFile(DIST_DIR_ENDPOINTS(isAdminEndpoint), classGenName, classBuffer, imports)
          const { apiGenName } = ParserUtils.generateApiName(tag, isAdminEndpoint)
          const queryBuffer = tagToEndpointQueryRecord[tag]

          // If react query skipped, do not write query files
          const queryFileName =
            !CliParser.skipReactQuery() &&
            ParserUtils.writeQueryFile(
              DIST_DIR_QUERIES(isAdminEndpoint),
              apiGenName,
              queryBuffer,
              apiImports,
              serviceNameTitle,
              tagToSdkFunctionNamesRecord[tag],
              imports,
              sdkName
            )

          const apiBuffer = tagToSdkClientRecord[tag]

          ParserUtils.writeApiFile(DIST_DIR(isAdminEndpoint), apiGenName, apiBuffer, imports, tagToSdkFunctionDescription[tag])
          apiList.push(apiGenName)

          // For endpoint classes, we need to append `$`.
          indexImportsSet.add(
            ParserUtils.getRelativePathToWebSdkSrcFolder(path.join(DIST_DIR_ENDPOINTS(isAdminEndpoint), `${classGenName}`), targetSrcFolder)
          )
          indexImportsSet.add(
            ParserUtils.getRelativePathToWebSdkSrcFolder(path.join(DIST_DIR(isAdminEndpoint), `${apiGenName}`), targetSrcFolder)
          )

          queryFileName &&
            queryImportsSet.add(
              ParserUtils.getRelativePathToWebSdkSrcFolder(
                path.join(DIST_DIR(isAdminEndpoint), 'queries', `${queryFileName}`),
                targetSrcFolder
              )
            )
        }
        mainApiList.push(...apiList)
        if (CodegenConfig.shouldProduceIndexFiles()) {
          indexImportsSet.add(ParserUtils.getRelativePathToWebSdkSrcFolder(path.join(srcFolder, serviceNameTitle), targetSrcFolder))
        }
      } // end of writeApiEndpointFiles

      // creates the definition files
      const writeDefinitions = api => {
        const duplicates = new Map<string, string>()
        const definitions = api?.components?.schemas || api.definitions
        for (const ref in definitions) {
          if (ref === '__dictionary__') continue

          const definition = definitions[ref]
          const fileName = ParserUtils.parseRefType(ref)
          const fileExist = fs.existsSync(path.join(DIST_DEFINITION_DIR, `${fileName}.ts`))
          if (fileExist) {
            const duplicateName = ParserUtils.toCamelCaseWord(ref).replace('.', '').replace('.', '')
            duplicates.set(ref, duplicateName)
          }
          const { buffer } = new TemplateZod().render(fileName, definition, new Map())
          generatedDefinitions.push(fileName)
          ParserUtils.writeDefinitionFile(DIST_DEFINITION_DIR, fileName, buffer)
          indexImportsSet.add(ParserUtils.getRelativePathToWebSdkSrcFolder(path.join(DIST_DEFINITION_DIR, fileName), targetSrcFolder))
        }

        // TODO BROKEN DEFINITION, this pefix dups with Model<Name>.js causing NOT FOUND, commented out
        // rerun, find duplicates and write again the fixed dup name
        // for (const ref in definitions) {
        //   const definition = definitions[ref]
        //   const fileName = ParserUtils.parseRefType(ref)
        //   const { buffer, duplicateFound } = new TemplateZod().render(fileName, definition, duplicates)
        //   if (duplicateFound) {
        //     ParserUtils.writeDefinitionFile(DIST_DEFINITION_DIR, fileName, buffer)
        //     indexImportsSet.add(ParserUtils.getRelativePathToWebSdkSrcFolder(path.join(DIST_DEFINITION_DIR, fileName), targetSrcFolder))
        //   }
        // }

        for (const arrayClass of arrayDefinitions) {
          const buffer = new TemplateZodArray().render(arrayClass)
          generatedDefinitions.push(arrayClass)
          ParserUtils.writeDefinitionFile(DIST_DEFINITION_DIR, arrayClass, buffer)
          indexImportsSet.add(ParserUtils.getRelativePathToWebSdkSrcFolder(path.join(DIST_DEFINITION_DIR, arrayClass), targetSrcFolder))
        }
      } // end of writeDefinitions

      writeApiEndpointFiles(isAdmin)
      writeDefinitions(api)
    }

    generatePublicOrAdmin(true) // create Admin classes
    generatePublicOrAdmin(false) // create Public classes

    if (CodegenConfig.shouldProduceIndexFiles()) {
      const isGenerateWebSocket = CliParser.isGenerateWebSocket()
      const apiIndexBuff = templateApiIndex(serviceNameTitle, mainApiList, isGenerateWebSocket)
      ParserUtils.writeApiMainFile(srcFolder, serviceNameTitle, apiIndexBuff)
    }

    console.log('\nCOMPLETED\n----------\n\n')
    return { indexImports: indexImportsSet, queryImports: queryImportsSet }
  } // end of main
}
