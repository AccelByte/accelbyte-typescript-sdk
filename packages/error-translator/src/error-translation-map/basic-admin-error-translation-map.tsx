/*
 * Copyright (c) 2019-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'
import { Trans } from 'react-i18next'

export const BasicAdminErrorTranslationMap = {
  11234: <Trans i18nKey="adminServiceError.11234">The country already registered in another region</Trans>,
  11233: <Trans i18nKey="adminServiceError.11233">Region does not exist</Trans>,
  11337: <Trans i18nKey="adminServiceError.11337">Namespace does not exist</Trans>,
  11440: <Trans i18nKey="adminServiceError.11440">User profile does not exist</Trans>,
  11469: <Trans i18nKey="adminServiceError.11469">User does not exist</Trans>,
  11540: <Trans i18nKey="adminServiceError.11540">User profile does not exist</Trans>,
  11132: <Trans i18nKey="adminServiceError.11132">You've reached the maximum upload limit.</Trans>,
  11235: <Trans i18nKey="adminServiceError.11235">Region already exists</Trans>,
  11336: <Trans i18nKey="adminServiceError.11336">Namespace already exists</Trans>,
  11339: <Trans i18nKey="adminServiceError.11339">Invalid namespace name</Trans>,
  20000: <Trans i18nKey="adminServiceError.20000">Something went wrong. Please contact Administrator.</Trans>,
  20001: <Trans i18nKey="adminServiceError.20001">Sorry, you are not authorized for selected action</Trans>,
  20002: <Trans i18nKey="adminServiceError.20002">Please correct the errors in the form to proceed</Trans>,
  20008: <Trans i18nKey="adminServiceError.20008">User does not exist</Trans>,
  20013: <Trans i18nKey="adminServiceError.20013">Sorry, you have no permission to do this action or access this page</Trans>,
  20019: <Trans i18nKey="adminServiceError.20019">Something went wrong. Please contact Administrator.</Trans>,
  20006: <Trans i18nKey="adminServiceError.20006">The item is already updated by another admin. Please refresh the page.</Trans>,
  20017: (
    <Trans i18nKey="adminServiceError.20017">The user must be linked to the item's namespace before entitled to the selected item</Trans>
  )
}
