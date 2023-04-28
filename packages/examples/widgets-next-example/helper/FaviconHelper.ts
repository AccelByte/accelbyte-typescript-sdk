/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

// Common MIME types. Source: https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types.
const MIME_TYPES_EXTENSION_MAP: Record<string, string> = {
  ico: 'image/vnd.microsoft.icon',
  jpeg: 'image/jpeg',
  jpg: 'image/jpeg',
  gif: 'image/gif',
  png: 'image/png'
}

export function getMimeType(href: string) {
  const url = parsePathname(href)

  const extensionIdx = url.pathname.lastIndexOf('.') + 1
  const extension = url.pathname.slice(extensionIdx)
  return MIME_TYPES_EXTENSION_MAP[extension]
}

function parsePathname(href: string) {
  try {
    const url = new URL(href)
    // Succcessfully parsed the href, which is a complete URL.
    return { pathname: url.pathname }
  } catch (err) {
    // The path is possibly relative path (without origin), so it throws an error.
    return { pathname: href }
  }
}
