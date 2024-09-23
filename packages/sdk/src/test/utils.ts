/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export const generateExpiresTime = (isExpired?: boolean) => {
  const date = new Date()
  date.setTime(date.getTime() + 10 * 60 * 1000)

  if (isExpired) {
    date.setFullYear(1970)
  }

  return date.toUTCString()
}

// Setting the "Set-Cookie" mocked response header
// will forward these cookies onto "document" as if they
// were sent from the server.
// Omit `HttpOnly; Secure; SameSite=None` to allow set cookie
export const generateSetCookie = (cookie: { access_token: string; refresh_token?: string | null }) => [
  `refresh_token=${cookie.refresh_token}; Path=/; Domain=localhost; Expires=${generateExpiresTime()};`,
  `access_token=${cookie.access_token}; Path=/; Domain=localhost; Expires=${generateExpiresTime()};`
]

export const generateExpireSetCookie = () => [
  `refresh_token=; Path=/; Domain=localhost; Expires=${generateExpiresTime(true)};`,
  `access_token=; Path=/; Domain=localhost; Expires=${generateExpiresTime(true)};`
]
