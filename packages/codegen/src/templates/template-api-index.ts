/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export const templateApiIndex = (serviceNameTitle: string, apiList: string[], isGenerateWebSocket: boolean = false): string => {
  let imports = ''
  let returnStatement = ''
  for (const cl of apiList) {
    // We have to exclude AdminApi as it was the title of the section
    // in swagger, but it has public/admin version of the endpoint too
    const dir = cl.toLowerCase().includes('admin') && cl !== 'AdminApi' ? 'generated-admin' : 'generated-public'
    imports += `\nimport { ${cl} } from './${dir}/${cl}.js'`
    returnStatement += `\n${cl}, `
  }

  if (isGenerateWebSocket) {
    imports += `\nimport { WebSocketClass } from './generated-websocket/WebSocketClass.js'`
    returnStatement += `\nWebSocket: WebSocketClass, `
  }

  return `/**
 * AUTO GENERATED
 */
${imports}
import { author, name, version } from '../package.json'

console.log(\`\${name}@\${version}\`)

const apis = {
${returnStatement}
  version: () => console.log({
    version,
    name,
    author
  })
}

export const ${serviceNameTitle} = apis
  `
}
