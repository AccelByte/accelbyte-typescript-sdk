/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export class LauncherRouteUtils {
  static getV2WidgetAppPage(basePath: string, itemId?: string): string {
    return `${basePath}${itemId ? `?itemId=${itemId}` : ''}`
  }
}
