/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Button, ButtonStyle, ButtonType } from '../Button/Button'
import './ErrorLayout.scss'

interface Props {
  icon?: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  message?: React.ReactNode
  buttonAction?: () => void
  buttonText?: string
}

export const ErrorLayout = (props: Props) => {
  const { title, description, message, buttonAction, buttonText, icon } = props
  return (
    <div className="errorPage">
      <div className="wrapper">
        {typeof icon === 'string' && <img src={icon} className="icon" loading="lazy" />}
        {typeof icon !== 'string' && icon}
        <div className="message">
          <div className="primary">{title}</div>
          <div className="description">{description}</div>
          {!!message && <div className="secondary">{message}</div>}
        </div>
        {buttonAction && (
          <Button className="button" onClick={buttonAction} buttonStyle={ButtonStyle.PRIMARY} buttonType={ButtonType.FLAT}>
            {buttonText?.toUpperCase()}
          </Button>
        )}
      </div>
    </div>
  )
}
