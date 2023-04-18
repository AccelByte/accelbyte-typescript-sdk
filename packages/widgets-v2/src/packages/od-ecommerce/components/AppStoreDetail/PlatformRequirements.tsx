/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { Tabs, TabStyles } from '@od-components/components/Tabs/Tabs'
import classNames from 'classnames'
import React, { useState } from 'react'
import { Trans } from 'react-i18next'
import './PlatformRequirements.scss'
import { AppInfo, Requirement } from '@accelbyte/sdk-platform'

interface RequirementItemListProps {
  requirements: Requirement[]
}

const RequirementItemList = (props: RequirementItemListProps) => {
  const { requirements } = props
  return (
    <div className="requirementItemList">
      {requirements.map((requirement, index) => (
        <div key={`${index} ${requirement.label}`}>
          <div className="itemLabel">{requirement.label}</div>
          <ul>
            <RequirementItem
              title={<Trans i18nKey="PlatformRequirements.requirements.osVersion">OS Version</Trans>}
              value={requirement.osVersion}
            />
            <RequirementItem
              title={<Trans i18nKey="PlatformRequirements.requirements.processor">Processor</Trans>}
              value={requirement.processor}
            />
            <RequirementItem title={<Trans i18nKey="PlatformRequirements.requirements.ram">RAM</Trans>} value={requirement.ram} />
            <RequirementItem
              title={<Trans i18nKey="PlatformRequirements.requirements.graphics">Graphics Card</Trans>}
              value={requirement.graphics}
            />
            <RequirementItem
              title={<Trans i18nKey="PlatformRequirements.requirements.directXVersion">Direct X Version</Trans>}
              value={requirement.directXVersion}
            />
            <RequirementItem
              title={<Trans i18nKey="PlatformRequirements.requirements.diskSpace">Disk Space</Trans>}
              value={requirement.diskSpace}
            />
            <RequirementItem
              title={<Trans i18nKey="PlatformRequirements.requirements.soundCard">Sound Card</Trans>}
              value={requirement.soundCard}
            />
            {requirement.additionals && (
              <RequirementItem
                title={<Trans i18nKey="PlatformRequirements.requirements.additionals">Additional Requirements</Trans>}
                value={requirement.additionals}
              />
            )}
          </ul>
        </div>
      ))}
    </div>
  )
}

interface RequirementItemProps {
  title: React.ReactNode
  value?: string | null
}

const RequirementItem = (props: RequirementItemProps) => {
  const { title, value } = props
  return (
    <li className="requirementItem">
      <span className="itemTitle">{title}</span>
      <span className="itemContent">{value || '-'}</span>
    </li>
  )
}

interface Props {
  additionalAppInfo: AppInfo
  className?: string
}

interface State {
  selectedRequirementKey: null | string
}

export const PlatformRequirements = ({ additionalAppInfo, className }: Props) => {
  const [state, setState] = useState<State>({
    selectedRequirementKey: Object.keys(additionalAppInfo?.platformRequirements || {})[0] || null
  })
  const platformRequirements = additionalAppInfo?.platformRequirements
  if (!platformRequirements) return null

  const platformsKeys = Object.keys(platformRequirements)

  if (!state.selectedRequirementKey) return null
  const requirements = platformRequirements[state.selectedRequirementKey]
  if (!requirements) return null

  return (
    <div className={classNames('gamePlatformRequirements', className)}>
      <h3 className="requirementTitle">
        <Trans i18nKey="PlatformRequirements.systemRequirement">System Requirements</Trans>
      </h3>

      <Tabs>
        {platformsKeys.map(key => (
          <span
            className={classNames(TabStyles.tab, key === state.selectedRequirementKey && TabStyles.active)}
            onClick={() =>
              setState(oldState => ({
                ...oldState,
                selectedPlatformKey: key
              }))
            }
            key={key}>
            {key}
          </span>
        ))}
      </Tabs>
      <RequirementItemList requirements={requirements} />
    </div>
  )
}
