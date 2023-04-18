/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { WidgetCtx } from '~/context/widget-ctx'
import { DefaultWidgetLink } from './DefaultWidgetLink'
import type { WidgetHistory } from '~/hooks/routes/useHistory'

export const matchPath = (..._params: any) => ''
export type RouteComponentProps<_T> = any

export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  component?: React.ComponentType<any>
  to: string | WidgetHistory['location']
  replace?: boolean
  innerRef?: React.Ref<HTMLAnchorElement>
}

export const Link = (props: LinkProps) => {
  const { Link: LinkCtx } = React.useContext(WidgetCtx)

  if (LinkCtx) {
    return <LinkCtx {...props}>{props.children}</LinkCtx>
  }

  return <DefaultWidgetLink {...props}>{props.children}</DefaultWidgetLink>
}

export const NavLink = (props: LinkProps & { exact?: boolean }) => {
  const { NavLink: NavLinkCtx } = React.useContext(WidgetCtx)

  if (NavLinkCtx) {
    return <NavLinkCtx {...props}>{props.children}</NavLinkCtx>
  }

  return <DefaultWidgetLink {...props}>{props.children}</DefaultWidgetLink>
}
