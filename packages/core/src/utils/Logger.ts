/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
// TODO replace with Winston
export class Logger {
  static info(message: string | undefined, object: unknown | null = ''): void {
    _log('info:', message, object)
  }

  static warn(message: string | undefined, object: unknown | null = ''): void {
    _log('warn:', message, object)
  }

  static error(message: string | undefined, object: unknown | null = ''): void {
    _log('error:', message, object)
  }
}

const _log = (type: string, message: string | undefined = '', object: unknown | null = '') => {
  if (type === 'error:') {
    console.error('\x1b[31m%s\x1b[0m', type, message, object)
  } else {
    console.log('\x1b[34m%s\x1b[0m', type, message, object) // blue
  }
}
