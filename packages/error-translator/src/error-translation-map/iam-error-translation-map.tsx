/*
 * Copyright (c) 2019-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'

export const IAMErrorTranslationMap = {
  10130: <Trans i18nKey="serviceError.10130">Sorry, we are unable to process this request</Trans>,
  10142: <Trans i18nKey="serviceError.10142">Sorry, your new password cannot be the same as the old one</Trans>,
  10143: (
    <Trans i18nKey="serviceError.10143">
      The password that you entered does not match. Please make sure you input the correct password
    </Trans>
  ),
  20022: <Trans i18nKey="serviceError.20022">Something went wrong. For more information please contact our support team</Trans>,
  10136: (
    // tslint:disable-next-line:max-line-length
    <Trans i18nKey="serviceError.10136">Sorry, you've entered the codes incorrectly too many times. Please request a new one</Trans>
  ),
  10137: <Trans i18nKey="serviceError.10137">Sorry, the code you entered is expired. Please request a new one.</Trans>,
  10138: <Trans i18nKey="serviceError.10138">Sorry, the 6-digits verification code you entered is invalid. Please try again.</Trans>,

  10154: <Trans i18nKey="serviceError.10154">Country does not exist</Trans>,
  10171: <Trans i18nKey="serviceError.10171">This email address is not registered</Trans>,
  10133: <Trans i18nKey="serviceError.10133">Sorry, you must enter a new email address</Trans>,
  10140: <Trans i18nKey="serviceError.10140">User is already verified</Trans>,
  10153: <Trans i18nKey="serviceError.10153">User already exists</Trans>,
  20007: <Trans i18nKey="serviceError.20007">You have requested too many codes. Please try again later.</Trans>,
  10170: <Trans i18nKey="serviceError.10170">Oops, you are already linked your email address to your account.</Trans>,
  10172: <Trans i18nKey="serviceError.10172">Sorry, your account is already linked.</Trans>,
  10173: <Trans i18nKey="serviceError.10173">Sorry, platform account has already linked with another user account.</Trans>,
  10139: (
    <Trans i18nKey="serviceError.10139">
      Oops, it seems you haven't play the game yet. Please play the game before proceed with this action
    </Trans>
  ),
  10174: (
    <Trans i18nKey="serviceError.10174">Oops, the platform you are trying to connect does not exist. Please try another platform.</Trans>
  ),
  10177: <Trans i18nKey="serviceError.10177">That username has been taken. Please choose another.</Trans>,
  10152: <Trans i18nKey="serviceError.10152">Something went wrong. For more information please contact our support team</Trans>,
  10149: <Trans i18nKey="serviceError.10149">Something went wrong. For more information please contact our support team</Trans>,
  10148: <Trans i18nKey="serviceError.10148">Something went wrong. For more information please contact our support team</Trans>,
  10180: <Trans i18nKey="serviceError.10180">The invitation link has expired. Please request a new link.</Trans>,
  10190: (
    <Trans i18nKey="serviceError.10190">
      QR Code expired. Please reload the page and repeat the process to enable the authenticator app.
    </Trans>
  ),
  10222: <Trans i18nKey="serviceError.10222">That display name has been taken. Please choose another.</Trans>
}
