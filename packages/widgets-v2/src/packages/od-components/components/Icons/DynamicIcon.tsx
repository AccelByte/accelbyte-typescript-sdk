/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { IconProps, Loader, AlertCircle, Check } from 'react-feather'

const feather = { Loader, AlertCircle, Check }

export type IconName = keyof typeof feather

export interface DynamicIconProps extends IconProps {
  name: IconName | undefined
}

export const DynamicIcon = ({ name, ...rest }: DynamicIconProps) => {
  if (name === undefined) {
    return null
  }

  const IconComponent = feather[name]
  return <IconComponent {...rest} />
}
