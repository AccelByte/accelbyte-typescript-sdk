/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import cryptoJs from 'crypto-js'
import * as uuid from 'uuid'
import { z } from 'zod'

export class CodeChallenge {
  //
  static load = (): any => {
    return parseStoredState(localStorage.getItem('pp:pkce:cd') || '')
  }

  static save = (codeVerifier: any) => {
    localStorage.setItem('pp:pkce:cd', stringifyStoredState(codeVerifier))
  }

  static clear = () => {
    localStorage.removeItem('pp:pkce:cd')
  }

  static generateChallenge() {
    const verifier = base64URLEncode(cryptoJs.lib.WordArray.random(43))
    const challenge = base64URLEncode(cryptoJs.SHA256(verifier))
    return { verifier, challenge }
  }

  static generateCsrf(): string {
    return uuid.v4()
  }

  // helpers

  static stringifySentState(sentState: CodeChallengeSentState) {
    return JSON.stringify(sentState)
  }

  static parseSentState(stringifiedSentState: string) {
    try {
      const parsed = JSON.parse(stringifiedSentState)
      if (!CodeChallengeSentState.parse(parsed)) throw new Error(parsed)
      return {
        sentState: parsed,
        error: null
      }
    } catch (error) {
      console.error(error)
      return { sentState: null, error }
    }
  }
}

const CodeChallengeStoredState = z.object({
  csrf: z.string(),
  codeVerifier: z.string()
})
type CodeChallengeStoredState = z.infer<typeof CodeChallengeStoredState>

const CodeChallengeSentState = z.object({
  csrf: z.string().uuid(),
  payload: z.nullable(z.string())
})
type CodeChallengeSentState = z.infer<typeof CodeChallengeSentState>

const base64URLEncode = (code: cryptoJs.lib.WordArray) => {
  return cryptoJs.enc.Base64.stringify(code).replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '')
}

const parseStoredState = (stringifiedStoredState: string) => {
  try {
    const parsed = JSON.parse(stringifiedStoredState)
    if (!CodeChallengeStoredState.parse(parsed)) throw parsed
    return {
      storedState: parsed,
      error: null
    }
  } catch (error) {
    console.error(error)
    return { storedState: null, error }
  }
}

const stringifyStoredState = (storedState: CodeChallengeStoredState) => {
  return JSON.stringify(storedState)
}
