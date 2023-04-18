/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

interface Props {
  icon: JSX.Element
  description: string
  onClick: () => void
}

export const MethodOption = (props: Props) => {
  const { icon, description, onClick } = props
  return (
    <div className="methodOption" onClick={onClick}>
      {icon}
      <p>{description}</p>
    </div>
  )
}
