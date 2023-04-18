/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import * as React from 'react'

const GoogleTagManagerRaw = ({ googleTagManagerId }: { googleTagManagerId: string | undefined }) => {
  if (!googleTagManagerId) return null

  // Always do this inside `<Helmet>` tag.
  const script = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${googleTagManagerId}');`

  return <script>{script}</script>
}

export const GoogleTagManager = React.memo(GoogleTagManagerRaw)
