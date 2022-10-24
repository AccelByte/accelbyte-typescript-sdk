/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export class UrlHelper {
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
    paths.forEach(path => {
      if (typeof path !== 'string') {
        throw new Error('combinePaths error: one of the path is not a string')
      }
    })
    return (
      paths
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        .map(path => this.trimSlashFromStringEdges(path))
        .map(path => path.split('/'))
        .reduce((path, nextPath) => path.concat(nextPath), [])
        .filter(Boolean)
        .join('/')
    )
  }

  static combineURLPaths(urlString: string, ...paths: string[]) {
    const url = new URL(urlString)
    const { origin } = url
    const pathname = UrlHelper.combinePaths(url.pathname, ...paths)
    return new URL(pathname, origin).toString()
  }
}
