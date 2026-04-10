import fs, { readFileSync, writeFileSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/* node ./packages/codegen/scripts/get-swaggers-configs.mjs */

const rootDir = path.resolve(path.join(__dirname, '../../'))

function findSwaggerFiles(dir) {
  const files = fs.readdirSync(dir)
  const swaggerFiles = []

  files.forEach(file => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory() && file.startsWith('sdk-')) {
      const swaggerPath = path.join(filePath, 'swaggers.json')
      if (fs.existsSync(swaggerPath)) {
        swaggerFiles.push(swaggerPath)
      }
    }
  })

  return swaggerFiles
}

function parseSwaggerFiles(swaggerFiles) {
  const result = {}

  swaggerFiles.forEach(swaggerPath => {
    const dirName = swaggerPath.match(/\/(sdk-[^\/]*)\//)?.[1]
    const content = JSON.parse(readFileSync(swaggerPath, 'utf8'))

    result[dirName] = content[0]
  })

  return result
}

function writeSwaggersConfigToFile(data) {
  const filePath = path.resolve('./packages/codegen/src/helpers/test-resources/swaggersConfig.ts')
  const fileContent = `const swaggersConfig = ${JSON.stringify(data, null, 2)};\n\nexport default swaggersConfig;\n`

  writeFileSync(filePath, fileContent, 'utf8')
  console.log(`swaggersConfig.js file created successfully at ${filePath}`)
}

const swaggerFiles = findSwaggerFiles(rootDir)
const parsedData = parseSwaggerFiles(swaggerFiles)
writeSwaggersConfigToFile(parsedData)
