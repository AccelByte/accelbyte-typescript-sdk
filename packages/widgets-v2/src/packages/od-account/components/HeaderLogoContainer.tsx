/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AppName } from '@od-shared/constants/ShConstants'
import React from 'react'
import { useCompanyLogo } from '~/hooks/odin-config/useCompanyLogo'

interface HeaderLogoProps {
  logo?: string
}

export const HeaderLogoContainer = ({ logo }: HeaderLogoProps) => {
  const { companyLogo: companyLogoState } = useCompanyLogo(AppName.PP, 'header')

  const companyLogo = logo ?? companyLogoState
  return (
    <div className="logoContainer flex flex-shrink-0 flex-grow-0 items-center justify-center">
      <div className="logo">
        {companyLogo && <img src={companyLogo} className="h-[54px] w-[256px] object-contain" alt="logo" loading="lazy" />}
      </div>
    </div>
  )
}
