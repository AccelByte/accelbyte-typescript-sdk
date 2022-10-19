/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export const PLATFORM = {
  LINUX: 'linux',
  WINDOWS: 'win32'
}

export const ARCH: { [arch: string]: string } = {
  X32: 'x32',
  IA32: 'ia32',
  X64: 'x64'
}

export const BUILDINFO_PLATFORM_ID: { [platformId: string]: string } = {
  LINUX_GENERIC: 'linux-generic',
  LINUX32: 'linux-ia32',
  LINUX64: 'linux-amd64',
  WINDOWS: 'windows',
  WIN32: 'win32',
  WIN64: 'win64'
}

export interface PlatformMatchMap {
  arch: string[]
  platform: string
  targetPlatform: string[]
}

export const AvailablePlatform: PlatformMatchMap[] = [
  {
    platform: PLATFORM.LINUX,
    arch: [ARCH.X32, ARCH.IA32],
    targetPlatform: [BUILDINFO_PLATFORM_ID.LINUX32, BUILDINFO_PLATFORM_ID.LINUX_GENERIC]
  },
  {
    platform: PLATFORM.LINUX,
    arch: [ARCH.X64],
    targetPlatform: [BUILDINFO_PLATFORM_ID.LINUX64, BUILDINFO_PLATFORM_ID.LINUX_GENERIC, BUILDINFO_PLATFORM_ID.LINUX32]
  },
  {
    platform: PLATFORM.WINDOWS,
    arch: [ARCH.X32, ARCH.IA32],
    targetPlatform: [BUILDINFO_PLATFORM_ID.WIN32, BUILDINFO_PLATFORM_ID.WINDOWS]
  },
  {
    platform: PLATFORM.WINDOWS,
    arch: [ARCH.X64],
    targetPlatform: [BUILDINFO_PLATFORM_ID.WIN64, BUILDINFO_PLATFORM_ID.WINDOWS, BUILDINFO_PLATFORM_ID.WIN32]
  }
]

export enum LogLevel {
  'DEBUG' = 'DEBUG',
  'INFO' = 'INFO'
}
