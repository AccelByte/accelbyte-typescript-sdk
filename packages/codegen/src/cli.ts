/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import path from 'path'
import yargs from 'yargs'
import { CliOption, CliParser } from './CliParser'
import { CodeGenerator } from './CodeGenerator'
import { CodegenConfig, CodegenConfigOptions } from './CodegenConfig'
import { ParserUtils } from './ParserUtils'
import { SwaggerDownloader } from './SwaggerDownloader'
import { WebsocketGenerator } from './WebsocketGenerator'

export { CodegenConfigOptions }

const generateSdk = async () => {
  const arrayOfSets = await Promise.all(CliParser.getConfigFile().map(config => CodeGenerator.main(config)))

  if (CliParser.isGenerateSnippetOnly()) {
    return
  }

  if (CliParser.isGenerateWebSocket()) {
    WebsocketGenerator.main()
  }

  if (!CodegenConfig.shouldProduceIndexFiles()) {
    // Skip generating barrel files. This is ideally only happening when we generate inside a repo,
    // not for a publishable SDK in npm or other registries.
    return
  }

  const indexImportsSet = new Set<string>()
  const queryImportsSet = new Set<string>()
  const filenamesSet = new Set<string>()

  for (const set of arrayOfSets) {
    set.indexImports.forEach(value => {
      const fileName = path.basename(value)

      if (!filenamesSet.has(fileName)) {
        indexImportsSet.add(value)
        filenamesSet.add(fileName)
      }
    })
    set.queryImports.forEach(value => {
      const fileName = path.basename(value)

      if (!filenamesSet.has(fileName)) {
        queryImportsSet.add(value)
      }
    })
  }

  const outputPath = CliParser.getOutputPath()
  const indexImportsArray = Array.from(indexImportsSet).sort()
  const queryImportsArray = Array.from(queryImportsSet).sort()
  const filesToImport = indexImportsArray.map(fileToImport => {
    return `export * from '${fileToImport.replace('\\', '/')}.js'`
  })
  const queryFilesToImport = queryImportsArray.map(fileToImport => {
    return `export * from '${fileToImport.replace('\\', '/')}.js'`
  })

  ParserUtils.writeAllImportsFile(outputPath, filesToImport.join('\n'))
  ParserUtils.writeAllQueryImportsFile(outputPath, queryFilesToImport.join('\n'))
}

// eslint-disable-next-line no-unused-expressions
yargs
  .command('download-swaggers', 'Download swaggers JSON files', (yargs: CliOption) => {
    CliParser.createInstance(yargs)
    SwaggerDownloader.main()
  })
  .command('generate-code', 'Generate code based on downloaded swagger files', async (yargs: CliOption) => {
    // validate options
    yargs.check(({ output, snippetOnly, snippetOutput }) => {
      if (!output?.trim() && !snippetOnly) {
        throw new Error('output is required for generate-code')
      }

      if (snippetOnly && !snippetOutput) {
        throw new Error('snippetOutput is required when generating snippets.')
      }

      return true
    })

    CliParser.createInstance(yargs)

    await CodegenConfig.loadConfig(path.dirname(path.resolve(CliParser.getConfigPath())))

    await generateSdk()
  })
  .option('config', {
    description: 'Path to the config file with backend service URLs.',
    type: 'string',
    demandOption: true
  })
  .option('swaggersOutput', {
    description: 'Directory to save the downloaded Swagger JSON files.',
    type: 'string',
    demandOption: true
  })
  .option('output', {
    description: 'Directory for the generated code. Required when using the generate-code command.',
    type: 'string'
  })
  .option('skipReactQuery', {
    description: 'Disable React Query code generation.',
    type: 'boolean'
  })
  .option('snippetOnly', {
    description: 'Generate only code snippets.',
    type: 'boolean'
  })
  .option('snippetOutput', {
    description: 'Directory for the generated code snippets. Required when generating snippets.',
    type: 'string'
  })
  .option('webSocketSchema', {
    description: 'Path to the WebSocket schema file (schema.json). If provided, WebSocket methods will be generated based on the schema.',
    type: 'string'
  })
  .demandCommand(1)
  .help().argv
