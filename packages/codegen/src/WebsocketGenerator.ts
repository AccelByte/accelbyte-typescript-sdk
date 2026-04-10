import fs from 'fs'
import path from 'path'
import { CliParser } from './CliParser'
import { ParserUtils } from './ParserUtils'
import { templateWebsocketClass } from './templates/template-ws-class'
import { Schema, templateWebsocketDefinitions } from './templates/template-ws-defintions'

export class WebsocketGenerator {
  static srcFolder = () => CliParser.getOutputPath()

  static outputFolder = () => path.join(this.srcFolder(), 'generated-websocket')

  static schemaContent = () => {
    const fileContent: Schema = JSON.parse(fs.readFileSync(CliParser.getWebSocketSchemaPath(), 'utf8'))
    return fileContent
  }

  static prepareDirs = () => {
    ParserUtils.mkdirIfNotExist(this.outputFolder())
  }

  static main = () => {
    const { name, path: wsPath, definitions } = this.schemaContent()
    const templateDefinitions = templateWebsocketDefinitions(definitions)

    this.prepareDirs()

    const filePath = path.join(this.outputFolder(), 'WebSocketDefinitions.ts')
    fs.writeFileSync(filePath, templateDefinitions, 'utf8')

    const templateClass = templateWebsocketClass(name, wsPath, definitions)

    const filePathClass = path.join(this.outputFolder(), 'WebSocketClass.ts')
    fs.writeFileSync(filePathClass, templateClass, 'utf8')
  }
}
