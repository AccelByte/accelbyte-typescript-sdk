/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AxiosError } from 'axios'
import { injectRequestInterceptors } from '../utils/Network'

const internalServiceMap = {
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
  '/matchmaking': 'justice-matchmaking', // sdk-matchmaking-v1
  '/odin-config': 'justice-odin-config-service',
  '/platform': 'justice-platform-service',
  '/qosm': 'justice-qos-manager-service',
  '/reporting': 'justice-reporting-service',
  '/seasonpass': 'justice-seasonpass-service',
  '/session': 'justice-session-service',
  '/sessionbrowser': 'justice-session-browser-service',
  '/social': 'justice-social-service',
  '/ugc': 'justice-ugc-service',
  '/config': 'justice-config-service'
} as const

export const injectInternalNetworkInterceptors = () => {
  injectRequestInterceptors(
    async config => {
      const { url } = config
      if (url) {
        // url example = "/iam/v1/..."
        const firstPath = url.split('/')[1]
        const internalServiceName: string | undefined = internalServiceMap[`/${firstPath}`]

        if (internalServiceName) {
          config.baseURL = `http://${internalServiceName}`
          // final url will be
          // http://${service-name}/{url}
        }
      }
      return config
    },
    (error: AxiosError) => {
      return Promise.reject(error)
    }
  )
}
