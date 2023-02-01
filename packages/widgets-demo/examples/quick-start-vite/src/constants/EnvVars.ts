/*
 * Copyright (c) 2018-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
export const getEnvVarMap = () =>
  ({
    NODE_ENV: {
      key: 'NODE_ENV',
      value: process.env.NODE_ENV
    },
    DEBUG_PROD: {
      key: 'DEBUG_PROD',
      value: process.env.DEBUG_PROD
    },
    BASE_URL: {
      key: 'JUSTICE_BASE_URL',
      value: process.env.JUSTICE_BASE_URL
    },
    PLAYERPORTAL_CLIENT_ID: {
      key: 'PLAYERPORTAL_CLIENT_ID',
      value: process.env.PLAYERPORTAL_CLIENT_ID
    },
    PLAYERPORTAL_REDIRECT_URI: {
      key: 'PLAYERPORTAL_REDIRECT_URI',
      value: process.env.PLAYERPORTAL_REDIRECT_URI
    },
    PLAYERPORTAL_BASE_PATH: {
      key: 'PLAYERPORTAL_BASE_PATH',
      value: process.env.PLAYERPORTAL_BASE_PATH
    },
    NAMESPACE: {
      key: 'JUSTICE_PUBLISHER_NAMESPACE',
      value: process.env.JUSTICE_PUBLISHER_NAMESPACE
    },
    SERVER_PORT: {
      key: 'PORT',
      value: process.env.PORT
    }
  } as const)

type Keys = keyof ReturnType<typeof getEnvVarMap>
type EnvKeys = ReturnType<typeof getEnvVarMap>[Keys]['key']

export const getAvailableEnvVars = () =>
  (() => {
    const envVarMap = getEnvVarMap()
    return Object.keys(envVarMap).reduce((obj, currentKey) => {
      const { key, value } = envVarMap[currentKey]

      if (value) obj[key] = value

      return obj
    }, {} as Record<EnvKeys, string>)
  })()
