/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ParserUtils } from '../ParserUtils'

export const templateSdkSnippet = ({
  sdkName,
  serviceNameTitle,
  apiName,
  snippetMethod,
  snippetApiArgs: snippetApiArgsParam,
  isUMD
}: {
  sdkName: string
  serviceNameTitle: string
  apiName: string
  snippetMethod: string
  snippetApiArgs: string[]
  isUMD?: boolean
}) => {
  const methodArr = snippetMethod.split('//')
  const snippetApiArgs = ['sdk', ...snippetApiArgsParam]

  let normMethod = normalizeMethodSnippet(methodArr[0].trim(), 'data:')
  normMethod = normalizeMethodSnippet(normMethod, 'queryParams:')
  normMethod = normalizeMethodSnippet(normMethod, 'queryParams?:')
  normMethod += '\n\n//' + methodArr[1]

  const sdkAcronyms = ['Ams', 'Gdpr', 'Iam', 'Ugc']

  let sdkSnippet = `import { AccelByte } from '@accelbyte/sdk'
import { ${apiName} } from '@accelbyte/sdk-${sdkName.toLowerCase()}'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: '__DOMAIN__',
    clientId: '77f88506b6174c3ea4d925f5b4096ce8',
    namespace: 'accelbyte',
    redirectURI: 'http://localhost:3030'
  }
})

${apiName}(${snippetApiArgs.join(', ')})
  .${normMethod}`

  if (isUMD) {
    sdkSnippet = `<script src="https://unpkg.com/@accelbyte/sdk/dist/global/index.global.js"></script>
<script src="https://unpkg.com/@accelbyte/sdk-${sdkName.toLowerCase()}/dist/global/index.global.js"></script>
  
<script>

const sdk = AccelByteSDK.AccelByte.SDK({
  coreConfig: {
    baseURL: '__DOMAIN__',
    clientId: '77f88506b6174c3ea4d925f5b4096ce8',
    namespace: 'accelbyte',
    redirectURI: 'http://localhost:3030'
  }
})

AccelByteSDK_${sdkAcronyms.includes(serviceNameTitle) ? serviceNameTitle.toUpperCase() : serviceNameTitle}.${apiName}(${snippetApiArgs.join(', ')})
  .${normMethod}

</script>`
  }

  return sdkSnippet
}

const normalizeMethodSnippet = (methodInput: any, splitWord: string) => {
  const split1 = methodInput.split(splitWord)
  if (!split1[1]) {
    return methodInput
  }
  let split2 = split1[1].trim()
  split2 = ParserUtils.replaceAll(split2, '{', '')
  split2 = ParserUtils.replaceAll(split2, '})', '')
  split2 = split2.split(',')
  let params = ''
  split2.forEach(p => {
    params += '\n             ' + ParserUtils.replaceAll(p.trim(), ')', '') + ','
  })
  params = params.slice(0, -1) // remove last , char

  const result = split1[0] + splitWord + ' {' + params + '\n    })'
  return result
}
