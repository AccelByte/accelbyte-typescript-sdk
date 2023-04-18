/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import './Tabs.scss'

export const TabStyles = {
  tab: 'tab',
  active: 'active'
}

export const Tabs = (props: { children: React.ReactNode }) => <div className="tabs">{props.children}</div>
