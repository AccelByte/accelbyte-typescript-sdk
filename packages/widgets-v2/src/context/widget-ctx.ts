/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { DefaultWidgetLink } from '@od-components/components/WidgetLink/DefaultWidgetLink'
import React from 'react'

export interface WidgetCtxParams {
  Link: typeof DefaultWidgetLink
  NavLink: typeof DefaultWidgetLink
}

export const WidgetCtx = React.createContext<WidgetCtxParams>({
  Link: DefaultWidgetLink,
  NavLink: DefaultWidgetLink
})
