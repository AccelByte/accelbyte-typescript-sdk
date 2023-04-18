/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button } from '@od-components/components/Button/Button'
import { CircleCheckIcon } from '@od-components/components/Icons/CircleCheckIcon'
import { DangerIcon } from '@od-components/components/Icons/DangerIcon'
import React from 'react'

interface Props {
  isSuccess: boolean
  onClickButton: () => void
  title: string
  description: string
  buttonText: string
  titleDataQa?: string | null
  buttonDataQa?: string | null
  isLoading?: boolean
}

export class VerifyUserMessage extends React.Component<Props> {
  constructor(props: Props) {
    super(props)
  }

  render() {
    const { isSuccess, onClickButton, title, description, buttonText, buttonDataQa = null, titleDataQa = null, isLoading } = this.props
    return (
      <>
        <div className="flex justify-center">{isSuccess ? <CircleCheckIcon checked fill /> : <DangerIcon className="dangerIcon" />}</div>
        <div className="mb-4 text-center">
          <p className="messageTitle my-4" data-qa-id={titleDataQa}>
            {title}
          </p>
          <p className="messageDesc">{description}</p>
        </div>
        <Button
          loadingIndicator="SPINNER"
          className="btn btn-primary w-full"
          onClick={onClickButton}
          data-qa-id={buttonDataQa}
          isLoading={isLoading}>
          {buttonText}
        </Button>
      </>
    )
  }
}
