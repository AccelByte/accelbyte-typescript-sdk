/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import * as fs from 'fs'
import * as https from 'https'
import * as path from 'path'
import { CliParser } from './CliParser'

/**
 * This file iterates over intended API configs and downloads the swagger files to target location from --swaggersOutput argument
 *
 * e.g
 *  /packages
 *    /od-config
 *      /codegen
 *        /swaggers
 *          serviceName.json --> example "iam.json"
 */
export class SwaggerDownloader {
  static getDestFile = (targetFileName: string) => {
    const destPath = CliParser.getResolvedSwaggersOutputPath()
    const destFile = path.join(destPath, targetFileName)
    if (fs.existsSync(destFile)) return destFile
    if (!fs.existsSync(destPath)) fs.mkdirSync(destPath)
    fs.writeFileSync(destFile, '')
    return destFile
  }

  // session-api.json contains illegal URL encoded character that breaks the codegen
  // e.g. "$ref": "#/definitions/map%5Bstring%5Dinterface%20%7B%7D"
  static postSanitizeDownloadedFile = filePath => {
    const searchStr = ['%5B', '%5D', '%20', '%7B', '%7D'] // url encoded
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) throw err
      // Replace all occurrences of the search string with the replace string
      let result = data
      result = result
        .replace(new RegExp('map%5Bstring%5Dinterface%20%7B%7D', 'g'), '__dictionary__')
        .replace(new RegExp('map\\[string\\]interface \\{\\}', 'g'), '__dictionary__')
        .replace(new RegExp('map\\[string\\]any', 'g'), '__dictionary__')
      searchStr.forEach(s => {
        result = result.replace(new RegExp(s, 'g'), ' ')
      })
      // Write the updated contents to the file
      fs.writeFile(filePath, result, 'utf8', err => {
        if (err) throw err
        console.log('File updated successfully.')
      })
    })
  }

  static downloadFile = async (targetFileName: string, url: string) => {
    const destFile = SwaggerDownloader.getDestFile(targetFileName)
    let data = ''

    return new Promise(resolve => {
      const request = https.get(url, function (response) {
        response.on('data', chunk => {
          data += chunk
        })
        response.on('end', () => {
          if (response.statusCode !== 200) {
            console.log(`SwaggerDownload error with status code: ${response.statusCode}`)
          } else {
            fs.writeFileSync(destFile, JSON.stringify(JSON.parse(data), null, 2), 'utf-8')
            SwaggerDownloader.postSanitizeDownloadedFile(destFile)
            console.log(`SwaggerDownload ${url} completed with status code: ${response.statusCode}`)
          }

          resolve(undefined)
        })
      })
      request.on('error', (err: Error) => {
        console.log(`SwaggerDownloader failed for "${targetFileName}" and "${url}"`, err)
      })
    })
  }

  static main = async () => {
    const swaggers = CliParser.getConfigFile()
    for (const ref in swaggers) {
      const targetFileName = swaggers[ref][2]
      const url = swaggers[ref][3]
      await SwaggerDownloader.downloadFile(targetFileName, url)
    }
  }
}
