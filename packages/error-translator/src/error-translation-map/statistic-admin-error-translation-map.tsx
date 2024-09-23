/*
 * Copyright (c) 2019. AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'

export const StatisticAdminErrorTranslationMap = {
  12275: <Trans i18nKey="adminServiceError.12275">The default value must be within range of Min. Value & Max. Value</Trans>,
  20000: <Trans i18nKey="adminServiceError.20000">Something went wrong. Please contact Administrator.</Trans>,
  20002: <Trans i18nKey="adminServiceError.20002">Please correct the errors in the form to proceed</Trans>,
  70131: <Trans i18nKey="adminServiceError.70131">Configuration does not exist</Trans>,
  70132: <Trans i18nKey="adminServiceError.70132">Configuration already exist</Trans>,
  70330: <Trans i18nKey="adminServiceError.70330">Sorry, we are unable to process this request</Trans>,
  70331: <Trans i18nKey="adminServiceError.70331">Configuration does not exist</Trans>,
  70334: <Trans i18nKey="adminServiceError.70334">Statistic value is not decreasable.</Trans>,
  70335: <Trans i18nKey="adminServiceError.70335">User statistic item does not exist</Trans>,
  70336: <Trans i18nKey="adminServiceError.70336">User statistic item already exist</Trans>,
  70337: <Trans i18nKey="adminServiceError.70337">You've reached the max value for statistic</Trans>
}
