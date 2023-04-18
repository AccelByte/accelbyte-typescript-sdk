/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'
import { Button, ButtonProps, ButtonFontSize, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'

export const FlatTwitchPrimaryButton: React.FC<ButtonProps> = (props: ButtonProps) => {
  return <Button buttonType={ButtonType.FLAT} buttonFontSize={ButtonFontSize.MEDIUM} {...props} />
}

export const TextTwitchButton = (props: ButtonProps) => {
  return <Button buttonType={ButtonType.TEXT} buttonStyle={ButtonStyle.WHITE} buttonFontSize={ButtonFontSize.EXTRA_SMALL} {...props} />
}
