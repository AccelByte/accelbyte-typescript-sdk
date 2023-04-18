/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { WidgetHistory } from '~/hooks/routes/useHistory'

export const deletionDays = 28
export const LINK_STATUS_SEARCH_PARAM_KEY = 'link-account-status'
export enum LINK_ACCOUNT_STATUS_TYPE {
  'success' = 'success'
}

const AFTER_LINK_SUCCESS_REDIRECT_URL_PATH = '/'

export const redirectAfterSuccessLinkAccount = async (widgetHistory: WidgetHistory) => {
  const search = new URLSearchParams()
  search.append(LINK_STATUS_SEARCH_PARAM_KEY, LINK_ACCOUNT_STATUS_TYPE.success)
  widgetHistory.replace(`${AFTER_LINK_SUCCESS_REDIRECT_URL_PATH}?${search.toString()}`)
}

// ts-prune-ignore-next
export const removeLinkAccStatURLParam = async (widgetHistory: WidgetHistory) => {
  const { location } = widgetHistory
  const search = new URLSearchParams(location.search)
  search.delete(LINK_STATUS_SEARCH_PARAM_KEY)
  widgetHistory.replace(`${location.pathname}?${search.toString()}`)
}
