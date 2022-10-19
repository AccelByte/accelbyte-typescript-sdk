/* Copyright (c) 2022 AccelByte Inc. All Rights Reserved.
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const MFADataResponse = z.object({
  mfa_token: z.string(),
  factors: z.array(z.string()),
  default_factor: z.string()
})
export type MFADataResponse = z.infer<typeof MFADataResponse>

export interface Verify2FAParam {
  factor: string | null
  code: string | null
  rememberDevice: boolean | null
  mfaToken?: string | null
}

export const AuthenticatorSecretKey = z.object({
  secretKey: z.string(),
  uri: z.string()
})
export type AuthenticatorSecretKey = z.infer<typeof AuthenticatorSecretKey>
