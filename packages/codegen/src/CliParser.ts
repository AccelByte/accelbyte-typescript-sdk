/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import fs from 'fs'
import * as path from 'path'
import { Arguments, Argv } from 'yargs'
import { z } from 'zod'

const SwaggersConfig = z.array(z.array(z.string()))
type SwaggersConfig = z.TypeOf<typeof SwaggersConfig>

type CLIOptions = {
  config: string
  swaggersOutput: string
  output: string
  snippetOnly?: boolean
  snippetOutput?: string
  skipReactQuery?: boolean
  webSocketSchema?: string
}

export interface CliOption extends Argv<CLIOptions> {}

export class CliParser {
  private static _instance: CliParser
  public argv: CLIOptions

  constructor(yargs: CliOption) {
    this.argv = yargs.parse() as Arguments<CLIOptions>
  }

  public static createInstance = (yargs: CliOption) => {
    CliParser._instance = new CliParser(yargs)
    return CliParser._instance
  }

  private static instance = (yargs?: CliOption) => {
    if (!CliParser._instance && yargs) {
      return CliParser.createInstance(yargs)
    }
    return CliParser._instance
  }

  public static getConfigPath = () => {
    return CliParser.instance().argv.config
  }

  public static getConfigFile = (): SwaggersConfig => {
    const configPath = CliParser.getConfigPath()
    if (!configPath) throw new Error('Missing config file')
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    if (!SwaggersConfig.safeParse(config).success) {
      throw new Error('Wrong config file format')
    }
    return config
  }

  public static getOutputPath = () => {
    return CliParser.instance().argv.output
  }

  public static getSwaggersOutputPath = () => {
    return CliParser.instance().argv.swaggersOutput
  }

  public static getResolvedSwaggersOutputPath = () => {
    return path.resolve(CliParser.getSwaggersOutputPath())
  }

  public static getSnippetOutputPath = () => {
    return CliParser.instance().argv.snippetOutput
  }

  public static skipReactQuery = () => {
    return CliParser.instance().argv.skipReactQuery
  }

  public static isGenerateSnippetOnly = () => {
    return CliParser.instance().argv.snippetOnly
  }

  public static getWebSocketSchemaPath = () => {
    return CliParser.instance().argv.webSocketSchema
  }

  public static isGenerateWebSocket = () => {
    return !!CliParser.getWebSocketSchemaPath()
  }
}
