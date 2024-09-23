/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'

export const EcommerceAdminErrorTranslationMap = {
  30071: (
    <Trans i18nKey="adminServiceError.30071">This item cannot be deselected while the associated bundle/option box is still selected</Trans>
  ),
  30072: (
    <Trans i18nKey="adminServiceError.30072">This category cannot be deselected while there are still items selected within it.</Trans>
  ),
  30074: (
    <Trans i18nKey="adminServiceError.30074">This item cannot be deselected while the associated subscription is still selected</Trans>
  ),
  30075: <Trans i18nKey="adminServiceError.30075">This display cannot be deselected while the associated section is still selected</Trans>,
  30141: <Trans i18nKey="adminServiceError.30141">The draft store does not exist or deleted in namespace</Trans>,
  30326: <Trans i18nKey="adminServiceError.30326">Subscription item cannot be bundled</Trans>,
  30327: <Trans i18nKey="adminServiceError.30327">Invalid item trial price</Trans>,
  30374: <Trans i18nKey="adminServiceError.30374">SKU already exist. Please try again.</Trans>,
  31178: <Trans i18nKey="adminServiceError.31178">Entitlement out of time range</Trans>,
  33271: <Trans i18nKey="adminServiceError.33271">Payment configuration for the selected namespace and region already exists.</Trans>,
  34042: (
    <Trans i18nKey="adminServiceError.34042">
      Failed to update reward condition. Please remove or change any inactive or deleted items.
    </Trans>
  ),
  37171: <Trans i18nKey="adminServiceError.37171">Code Redemption Name already exists. Try again.</Trans>,
  37271: <Trans i18nKey="adminServiceError.37271">Key Group Name is already exists.</Trans>,
  37221: <Trans i18nKey="adminServiceError.37221">Upload file failed. It's either empty or file extension is not acceptable</Trans>,
  38122: <Trans i18nKey="adminServiceError.38122">Subscription end date required</Trans>,
  40141: <Trans i18nKey="adminServiceError.40141">Subscription does not exist</Trans>
}
