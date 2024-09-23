/*
 * Copyright (c) 2018-2019 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

const fs = require('fs')
const path = require('path')
const flatten = require('flat')
const { Parser } = require('i18next-scanner')
const JSON5 = require('json5')

const ts = require('typescript')

function findFilesInDirectory(startPath, filter) {
  let results = []
  if (!fs.existsSync(startPath)) {
    return
  }

  const files = fs.readdirSync(startPath)
  for (let index = 0; index < files.length; index++) {
    const filename = path.join(startPath, files[index])
    const stat = fs.lstatSync(filename)
    if (stat.isDirectory()) {
      results = results.concat(findFilesInDirectory(filename, filter))
    } else if (filename.indexOf(filter) >= 0) {
      results.push(filename)
    }
  }
  return results
}

function getTranslationFromFile(filePath) {
  let error
  let result
  try {
    const parser = new Parser({
      func: { list: ['i18next.t', 'i18n.t', 't', '_t', 'translation'] }
    })
    const content = fs.readFileSync(filePath, 'utf8')
    const compiled = ts.transpileModule(content, {
      compilerOptions: {
        target: 'es2018'
      },
      fileName: path.basename(filePath)
    }).outputText
    parser.parseFuncFromString(compiled).parseTransFromString(compiled)
    result = flatten(parser.get().en.translation)
  } catch (err) {
    console.error(err)
    error = err
  }
  return { error, result }
}

function getAllTranslations(files) {
  let translations = {}
  files.forEach(filePath => {
    const { err, result } = getTranslationFromFile(filePath)
    if (err) console.error(err)
    if (!result) console.warn(`Warning: cannot parse ${filePath}`)
    if (result) {
      translations = Object.assign(translations, flatten(result))
    }
  })
  return flatten(translations, { safe: true })
}

function getOldTranslationsMap(languages, directory) {
  const oldTranslationsMap = {}
  languages.forEach(lang => {
    try {
      const fileContent = fs.readFileSync(path.resolve(directory, `${lang}.json`), 'utf8')
      oldTranslationsMap[lang] = flatten(JSON5.parse(fileContent), {
        safe: true
      })
    } catch (error) {
      oldTranslationsMap[lang] = {}
    }
  })
  return oldTranslationsMap
}

function getUnusedKeysFromOldTranslations(oldTranslation, currentTranslation) {
  const keys = Object.keys(currentTranslation).reduce((keys, translationKey) => {
    keys.delete(translationKey)
    return keys
  }, new Set(Object.keys(oldTranslation)))
  keys.delete('_unused')
  return Array.from(keys)
}

function sortTranslationKeys(translation) {
  const keys = Object.keys(translation)
  keys.sort()
  return keys.reduce((sorted, key) => {
    sorted[key] = translation[key]
    return sorted
  }, {})
}

function writeTranslationMap(oldTranslationsMap, translationsMap, directory) {
  Object.entries(translationsMap).forEach(([lang, translation]) => {
    const oldJSON = JSON.stringify(sortTranslationKeys(oldTranslationsMap[lang] || {}), null, 2)
    const newJSON = JSON.stringify(sortTranslationKeys(translation), null, 2)
    if (oldJSON !== newJSON) {
      fs.writeFileSync(path.resolve(directory, `${lang}.json`), newJSON, 'utf8')
    }
  })
}

function startBuild({ languages, files, directory }) {
  const translations = getAllTranslations(files)
  const oldTranslationsMap = getOldTranslationsMap(languages, directory)
  const newTranslationMap = {}
  languages.forEach(lang => {
    const oldTranslation = oldTranslationsMap[lang] || {}
    const unusedKeys = getUnusedKeysFromOldTranslations(oldTranslation, translations)
    const newTranslation = Object.assign({}, translations, oldTranslation, {
      _unused: unusedKeys.length > 0 ? unusedKeys : undefined
    })
    newTranslationMap[lang] = newTranslation
  })
  writeTranslationMap(oldTranslationsMap, newTranslationMap, directory)
}

function run({ files, languages, directory }) {
  if (languages.length > 0) {
    startBuild({
      languages,
      files,
      directory
    })
  } else {
    console.warn('Language not yet set')
  }
}
const tsxFiles = findFilesInDirectory(path.resolve(__dirname, '../src'), '.tsx')
run({
  files: tsxFiles,
  languages: ['en-US', 'zh-CN'],
  directory: path.resolve(__dirname, '../src/translations')
})
