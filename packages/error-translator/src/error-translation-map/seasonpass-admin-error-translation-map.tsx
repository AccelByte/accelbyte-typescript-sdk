/*
 * Copyright (c) 2021. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'

export const SeasonPassAdminErrorTranslationMap = {
  49122: <Trans i18nKey="adminServiceError.49122">Invalid time range</Trans>,
  49173: <Trans i18nKey="adminServiceError.49173">Reward code already exists in the Season</Trans>,
  49179: <Trans i18nKey="adminServiceError.49179">Failed to delete reward. The Reward is in use.</Trans>,
  49143: <Trans i18nKey="adminServiceError.49143">Season does not exist in namespace</Trans>,
  30142: <Trans i18nKey="adminServiceError.30142">Published store does not exist in namespace</Trans>,
  49141: <Trans i18nKey="adminServiceError.49141">Tier item does not exist in the store of namespace</Trans>,
  49142: <Trans i18nKey="adminServiceError.49142">Pass item does not exist in the store of namespace</Trans>,
  30341: (
    <Trans i18nKey="adminServiceError.30341">
      One or more of the included items are not active or published in your store. Please publish or remove them to continue
    </Trans>
  ),
  36141: <Trans i18nKey="adminServiceError.36141">Currency does not exist in namespace</Trans>,
  49144: <Trans i18nKey="adminServiceError.49144">Reward does not exist</Trans>,
  49171: <Trans i18nKey="adminServiceError.49171">Invalid season status</Trans>,
  49172: <Trans i18nKey="adminServiceError.49172">Season is already ended</Trans>,
  49175: <Trans i18nKey="adminServiceError.49175">Published season already exists in namespace</Trans>,
  49176: <Trans i18nKey="adminServiceError.49176">Rewards are not provided</Trans>,
  49177: <Trans i18nKey="adminServiceError.49177">Passes are not provided</Trans>,
  49178: <Trans i18nKey="adminServiceError.49178">Tiers are not provided</Trans>,
  49174: <Trans i18nKey="adminServiceError.49174">Pass already exists in the season</Trans>,
  49121: <Trans i18nKey="adminServiceError.49121">Default language required in localizations</Trans>,
  49145: <Trans i18nKey="adminServiceError.49145">Pass does not exist</Trans>
}
