/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Checkbox } from '@od-components/components/Form/Checkbox/Checkbox'
import classnames from 'classnames'
import React from 'react'
import { Trans } from 'react-i18next'
import { EnabledFactorsResponseV4 } from '@accelbyte/sdk-iam'

interface Props {
  icon: React.ReactNode
  title: React.ReactNode
  description: React.ReactNode
  enabledFactors: EnabledFactorsResponseV4 | null
  checkBoxLabel: string
  onClickCheckbox?: () => void
  isCheckboxDisabled: boolean
  isFactorEnabled: boolean
  onEnable: () => void
  onDisable: () => void
  FactorValue: string
  isFirstSection?: boolean
  isPreviewMode?: boolean
}

export const FactorSectionComponent = (props: Props) => {
  const {
    icon,
    title,
    description,
    enabledFactors,
    checkBoxLabel,
    onClickCheckbox,
    isCheckboxDisabled,
    isFactorEnabled,
    onEnable,
    onDisable,
    FactorValue,
    isFirstSection
  } = props
  const isInEditor = props.isPreviewMode

  return (
    <div className={classnames('mb-4 flex items-center justify-between', isFirstSection && `border-gray-70 border-b pb-4`)}>
      <div className="flex w-5/6 items-center">
        <div className="mr-5">{icon}</div>
        <div className="w-3/4">
          <div className="mb-2 flex items-center">
            <div className="mr-3">{title}</div>
            <div
              className={classnames(
                'flex items-center rounded-full px-3 py-0.5 text-sm text-[color:rgb(var(--od-rgba-text))]',
                isFactorEnabled ? 'bg-green-80 ' : 'bg-gray-55'
              )}>
              {isFactorEnabled ? 'On' : 'Off'}
            </div>
          </div>
          <div className="mb-2 text-[color:rgb(var(--od-rgb-text),0.65)]">{description}</div>
          {enabledFactors && enabledFactors.enabled.includes(FactorValue) && (
            <Checkbox
              label={checkBoxLabel}
              isChecked={enabledFactors.default === FactorValue}
              isLabelFirst={false}
              onChange={onClickCheckbox}
              isDisabled={isCheckboxDisabled}
            />
          )}
        </div>
      </div>
      <div className="w-1/6">
        {!isFactorEnabled ? (
          <Button className="btn btn-primary w-full" onClick={!isInEditor ? onEnable : undefined}>
            <Trans i18nKey="AccountPasswordSecurity.2fa.btnEnable">Enable</Trans>
          </Button>
        ) : (
          <Button
            className="btn btn-ghost w-full"
            buttonType={ButtonType.TEXT}
            buttonStyle={ButtonStyle.NONE}
            onClick={!isInEditor ? onDisable : undefined}>
            <Trans i18nKey="AccountPasswordSecurity.2fa.btnDisable">Disable</Trans>
          </Button>
        )}
      </div>
    </div>
  )
}
