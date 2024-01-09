/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export class UrlHelper {
  static isCompleteURLString = (urlString: string) => {
    try {
      const url = new URL(urlString)
      return url.hostname !== ''
    } catch (error) {}
    return false
  }

  static trimSlashFromStringEnd(pathString: string) {
    let newString = pathString
    while (newString[newString.length - 1] === '/') {
      newString = newString.slice(0, -1)
    }
    return newString
  }

  static trimSlashFromStringStart(pathString: string) {
    let newString = pathString
    while (newString[0] === '/') {
      newString = newString.slice(1)
    }
    return newString
  }

  static trimSlashFromStringEdges(pathString: string) {
    return UrlHelper.trimSlashFromStringStart(this.trimSlashFromStringEnd(pathString))
  }

  static combinePaths(...paths: string[]) {
    const completePath = paths.join('/')
    // Replace 2 or more consecutive slashes with a single slash.
    // This is also the behavior from Node's `path.join`.
    return completePath.replace(/\/{2,}/g, '/')
  }

  static combineURLPaths(urlString: string, ...paths: string[]) {
    const url = new URL(urlString)
    const { origin } = url
    const pathname = UrlHelper.trimSlashFromStringEdges(UrlHelper.combinePaths(url.pathname, ...paths))
    return new URL(pathname, origin).toString()
  }

  static removeQueryParam(fullUrlString: string, param: string) {
    const url = new URL(fullUrlString)
    const params = url.searchParams
    const pathname = this.trimSlashFromStringEnd(url.pathname)

    // Remove the query parameter
    params.delete(param)

    // Preserving other URL attributes
    let newUrlString: string
    if (params.toString() === '') newUrlString = `${url.origin}${pathname}${url.hash}`
    else newUrlString = `${url.origin}${pathname}?${params.toString()}${url.hash}`

    return newUrlString
  }
}
