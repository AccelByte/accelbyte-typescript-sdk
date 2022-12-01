/*
 * Copyright (c) 2018-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { getAvailableEnvVars, getEnvVarMap } from './EnvVars'

const availableEnvVars = getAvailableEnvVars()
const ENV_VARS = getEnvVarMap()

const getEnv = (envVar: { key: string; value?: string }) => envVar.value

export class Env {
  static BASE_URL = getEnv(ENV_VARS.BASE_URL) as string
  static NAMESPACE = getEnv(ENV_VARS.NAMESPACE) as string

  static NODE_ENV = getEnv(ENV_VARS.NODE_ENV)
  static IS_DEV_MODE = getEnv(ENV_VARS.NODE_ENV) === 'development'
  static IS_PROD_MODE = getEnv(ENV_VARS.NODE_ENV) === 'production'
  static IS_DEBUG_PROD = getEnv(ENV_VARS.DEBUG_PROD) === 'true'

  static CLIENT_ID = getEnv(ENV_VARS.PLAYERPORTAL_CLIENT_ID) as string
  static BASE_PATH = getEnv(ENV_VARS.PLAYERPORTAL_BASE_PATH)
  static REDIRECT_URL = getEnv(ENV_VARS.PLAYERPORTAL_REDIRECT_URI) as string

  static failOnMissing(environmentVars: { key: string; value?: string }[] = []) {
    const missingEnvVars = environmentVars.reduce((missingEnvVars: string[], { key, value }) => {
      if (!value) {
        missingEnvVars.push(key)
      }
      return missingEnvVars
    }, [])
    if (missingEnvVars.length > 0) {
      throw Error(`Missing required env var \n${missingEnvVars.map(envVar => `❌ ${envVar}`).join('\n')}`)
    }
  }
}

if (Env.IS_DEV_MODE || Env.IS_DEBUG_PROD) {
  const loggedEnvVars = { ...availableEnvVars }
  // Prevent from leaking into console of sensitive info
  // @ts-ignore
  console.log('Env:', JSON.stringify(loggedEnvVars, null, 2).replace(/"/g, ''))
}
