/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'

export const IAMAdminErrorTranslationMap = {
  10157: <Trans i18nKey="adminServiceError.10157">Role does not exist</Trans>,
  20022: <Trans i18nKey="adminServiceError.20022">Something went wrong. You've sent an invalid request.</Trans>,
  10156: <Trans i18nKey="adminServiceError.10156">Role does not exist</Trans>,
  10130: <Trans i18nKey="adminServiceError.10130">Age does not meet the age restriction</Trans>,
  10142: <Trans i18nKey="adminServiceError.10142">Sorry, your new password cannot be the same as the old one</Trans>,
  10143: (
    <Trans i18nKey="adminServiceError.10143">
      The password that you entered does not match. Please make sure you input the correct password
    </Trans>
  ),
  10154: <Trans i18nKey="adminServiceError.10154">Country does not exist</Trans>,
  10133: <Trans i18nKey="adminServiceError.10133">Email address is already taken</Trans>,
  10139: <Trans i18nKey="adminServiceError.10139">Platform account does not exist</Trans>,
  10158: <Trans i18nKey="adminServiceError.10158">Ban does not exist</Trans>,
  10145: <Trans i18nKey="adminServiceError.10145">Only Publisher Admin can perform this action</Trans>,
  10159: <Trans i18nKey="adminServiceError.10159">Only Role Manager can perform this action</Trans>,
  10160: <Trans i18nKey="adminServiceError.10160">User already has the role</Trans>,
  10161: <Trans i18nKey="adminServiceError.10161">User is already registered as role member</Trans>,
  10153: <Trans i18nKey="adminServiceError.10153">User already exists</Trans>,
  10152: <Trans i18nKey="adminServiceError.10152">Something went wrong. Please contact Administrator.</Trans>,
  10137: <Trans i18nKey="adminServiceError.10137">Verification code is expired</Trans>,
  // tslint:disable-next-line:max-line-length
  10136: (
    <Trans i18nKey="adminServiceError.10136">Sorry, you've entered the codes incorrectly too many times. Please request a new one</Trans>
  ),
  10138: <Trans i18nKey="adminServiceError.10138">Verification code does not match</Trans>,
  10170: <Trans i18nKey="adminServiceError.10170">User already has platform account</Trans>,
  10140: <Trans i18nKey="adminServiceError.10140">User is already verified</Trans>,
  10169: <Trans i18nKey="adminServiceError.10169">Age restriction does not exist</Trans>,
  10171: <Trans i18nKey="adminServiceError.10171">Email address is not registered</Trans>,
  10177: <Trans i18nKey="adminServiceError.10177">Username is already taken. Please try something different.</Trans>,
  // tslint:disable-next-line:max-line-length
  10190: (
    <Trans i18nKey="adminServiceError.10190">
      QR Code expired. Please reload the page and repeat the process to enable the authenticator app.
    </Trans>
  ),
  20007: <Trans i18nKey="adminServiceError.20007">You have requested too many codes. Please try again later.</Trans>,
  10365: <Trans i18nKey="adminServiceError.10365">Client does not exist</Trans>,
  10364: <Trans i18nKey="adminServiceError.10364">Client already exists</Trans>,
  10456: <Trans i18nKey="adminServiceError.10456">Role does not exist</Trans>,
  10467: <Trans i18nKey="adminServiceError.10467">Admin role must have at least 1 role manager</Trans>,
  10468: <Trans i18nKey="adminServiceError.10468">User already registered as role manager</Trans>,
  10457: <Trans i18nKey="adminServiceError.10457">Failed to add role member, the role is not an admin role</Trans>,
  10459: <Trans i18nKey="adminServiceError.10459">Only Role Manager can perform this action</Trans>,
  10469: <Trans i18nKey="adminServiceError.10469">User already registered as role member</Trans>,
  10148: <Trans i18nKey="adminServiceError.10148">Something went wrong. Please contact Administrator.</Trans>,
  10149: <Trans i18nKey="adminServiceError.10149">Something went wrong. Please contact Administrator.</Trans>,
  11621: <Trans i18nKey="adminServiceError.11621">API Key is invalid. Please try again with the correct one.</Trans>,

  // still orange in sheet, undecided
  10146: <Trans i18nKey="adminServiceError.10146">user id not match</Trans>,
  10466: <Trans i18nKey="adminServiceError.10466">invalid role members</Trans>
}
