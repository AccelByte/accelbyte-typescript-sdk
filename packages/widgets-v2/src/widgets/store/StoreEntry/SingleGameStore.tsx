/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Tabs } from '@od-components/components/Tabs/Tabs'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { WidgetLinkObject } from '~/models/links'

interface Props {
  tabLinks: WidgetLinkObject[]
  children: React.ReactNode
}

export function SingleGameStore({ tabLinks, children }: Props) {
  return (
    <div className="pb-6">
      <Tabs>
        {tabLinks.map((tabLink, idx) => (
          <NavLink key={idx} className={`tab ${tabLink.className}`} to={tabLink.link}>
            {tabLink.icon}
            {tabLink.label}
          </NavLink>
        ))}
      </Tabs>
      <div className="gridContainer">{children}</div>
    </div>
  )
}
