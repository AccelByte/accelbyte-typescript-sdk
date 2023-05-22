/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export function getOffset(page: number | undefined): number {
  return page ? (page - 1) * getLimit() : 0
}

export function getLimit(pageSize?: number) {
  return pageSize || 16
}
