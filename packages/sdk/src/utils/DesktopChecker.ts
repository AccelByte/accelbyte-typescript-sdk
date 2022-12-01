/*
 * Copyright (c) 2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export class DesktopChecker {
  private static desktopApp = DesktopChecker.isElectron()

  static isDesktopApp() {
    return DesktopChecker.desktopApp && !DesktopChecker.isInIframe()
  }

  private static isInIframe() {
    try {
      return window.self !== window.top
    } catch (error) {
      return true
    }
  }

  // borrowed from https://github.com/cheton/is-electron
  private static isElectron() {
    // @ts-ignore Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
      return true
    }
    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
      return true
    }
    // Detect the user agent when the `nodeIntegration` option is set to false
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
      return true
    }
    return false
  }
}
