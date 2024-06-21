/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

// More detail: https://github.com/AccelByte/go-restful-plugins/blob/master/pkg/auth/iam/event.go
export enum IamErrorCode {
  InternalServerError = 20000,
  UnauthorizedAccess = 20001,
  ValidationError = 20002,
  ForbiddenAccess = 20003,
  TooManyRequests = 20007,
  UserNotFound = 20008,
  TokenIsExpired = 20011,
  InsufficientPermissions = 20013,
  InvalidAudience = 20014,
  InsufficientScope = 20015,
  UnableToParseRequestBody = 20019,
  InvalidPaginationParameters = 20021,
  TokenIsNotUserToken = 20022,
  InvalidRefererHeader = 20023,
  SubdomainMismatch = 20030
}
