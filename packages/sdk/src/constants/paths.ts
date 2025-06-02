/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export const BASE_PATHS = [
  '/achievement',
  '/basic',
  '/buildinfo',
  '/chat',
  '/cloudsave',
  '/content-management',
  '/differ',
  '/dsmcontroller',
  '/event',
  '/game-telemetry',
  '/gdpr',
  '/group',
  '/iam',
  '/leaderboard',
  '/agreement',
  '/lobby',
  '/match2',
  '/matchmaking',
  '/odin-config',
  '/platform',
  '/qosm',
  '/reporting',
  '/seasonpass',
  '/session',
  '/sessionbrowser',
  '/social',
  '/ugc',
  '/config'
] as const

export type BasePath = (typeof BASE_PATHS)[number] | (string & {})

export const INTERNAL_SERVICES = {
  '/achievement': 'justice-achievement-service',
  '/basic': 'justice-basic-service',
  '/buildinfo': 'justice-buildinfo-service',
  '/chat': 'justice-chat-service',
  '/cloudsave': 'justice-cloudsave-service',
  '/content-management': 'justice-odin-content-management-service',
  '/differ': 'justice-differ',
  '/dsmcontroller': 'justice-dsm-controller-service',
  '/event': 'justice-event-log-service',
  '/game-telemetry': 'analytics-game-telemetry-api',
  '/gdpr': 'justice-gdpr-service',
  '/group': 'justice-group-service',
  '/iam': 'justice-iam-service',
  '/leaderboard': 'justice-leaderboard-service',
  '/agreement': 'justice-legal-service', // sdk-legal
  '/lobby': 'justice-lobby-server',
  '/match2': 'justice-matchmaking-v2', // sdk-matchmaking
  '/odin-config': 'justice-odin-config-service',
  '/platform': 'justice-platform-service',
  '/qosm': 'justice-qos-manager-service',
  '/reporting': 'justice-reporting-service',
  '/seasonpass': 'justice-seasonpass-service',
  '/session': 'justice-session-service',
  '/social': 'justice-social-service',
  '/ugc': 'justice-ugc-service',
  '/config': 'justice-config-service'
} as const
