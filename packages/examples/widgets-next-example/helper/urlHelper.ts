/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export function trimSlashFromStringEnd(pathString: string) {
  let newString = pathString
  while (newString[newString.length - 1] === '/') {
    newString = newString.slice(0, -1)
  }
  return newString
}

export function trimSlashFromStringStart(pathString: string) {
  let newString = pathString
  while (newString[0] === '/') {
    newString = newString.slice(1)
  }
  return newString
}

export function trimSlashFromStringEdges(pathString: string) {
  return trimSlashFromStringStart(trimSlashFromStringEnd(pathString))
}

export const getStudioNamespaceFromSubdomain = (): string => {
  const currentUrl = new URL(location.href)
  const subdomain = currentUrl.hostname.split('.').slice(0, 1).join('')
  return subdomain
}

export function prependUrlWithNamespace(url: URL, namespace: string) {
  const newUrl = new URL(url.toString())
  newUrl.hostname = `${namespace}.${url.hostname}`
  return newUrl
}

export function combineWithJusticeApiUrl(...paths: string[]): string {
  const url = new URL(combinePaths(...paths), process.env.NEXT_JUSTICE_BASE_URL)
  const loginNamespace = getStudioNamespaceFromSubdomain()
  if (loginNamespace) {
    return prependUrlWithNamespace(url, loginNamespace).toString()
  }
  return url.toString()
}

export function combinePaths(...paths: string[]) {
  paths.forEach(path => {
    if (typeof path !== 'string') {
      throw new Error('combinePaths error: one of the path is not a string')
    }
  })
  return paths
    .map(path => trimSlashFromStringEdges(path))
    .map(path => path.split('/'))
    .reduce((path, nextPath) => path.concat(nextPath), [])
    .join('/')
}
