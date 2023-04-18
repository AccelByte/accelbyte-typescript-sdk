/*
 * Copyright (c) 2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import React from 'react'
import { Footer } from '@od-player-portal/components/Footer/Footer'

export interface FooterWidgetProps {
  areLinksHidden: boolean
  onChangeLanguage?: (value: string) => void
}

export function FooterWidget({ areLinksHidden, onChangeLanguage }: FooterWidgetProps) {
  return <Footer areLinksHidden={areLinksHidden} onChangeLanguage={onChangeLanguage} />
}
