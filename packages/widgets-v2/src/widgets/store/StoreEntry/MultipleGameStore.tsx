/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Tabs } from '@od-components/components/Tabs/Tabs'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useHistory } from '~/hooks/routes/useHistory'
import { WidgetLinkObject } from '~/models/links'

interface Props {
  tabLinks: WidgetLinkObject[]
  children: React.ReactNode
}

export const MultipleGameStore = ({ tabLinks, children }: Props) => {
  const {
    state: { location }
  } = useHistory()

  if (!location) return null

  return (
    <div>
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
