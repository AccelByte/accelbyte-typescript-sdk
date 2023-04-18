/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import React from 'react'

type IconType = 'danger' | 'warning'

const Danger = () => (
  <svg className={'inline'} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#C55200" />
    </mask>
    <g mask="url(#mask0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.959415 16.8721L9.1392 2.17302C9.51467 1.49832 10.4866 1.49831 10.8621 2.17302L19.0419 16.8721C19.4068 17.5278 18.9318 18.3337 18.1804 18.3337H1.82086C1.06946 18.3337 0.594504 17.5278 0.959415 16.8721ZM9.34847 12.2578H10.6105L10.7555 6.25032H9.20958L9.34847 12.2578ZM9.39074 14.5566C9.24178 14.7209 9.16731 14.9296 9.16731 15.1827C9.16731 15.427 9.23977 15.6312 9.3847 15.7955C9.52963 15.9598 9.73494 16.042 10.0006 16.042C10.2663 16.042 10.4717 15.9598 10.6166 15.7955C10.7615 15.6312 10.834 15.427 10.834 15.1827C10.834 14.9296 10.7595 14.7209 10.6105 14.5566C10.4616 14.3878 10.2583 14.3035 10.0006 14.3035C9.74299 14.3035 9.53969 14.3878 9.39074 14.5566Z"
        fill="#C55200"
      />
    </g>
  </svg>
)

const Warning = ({ defaultColor = true }: { defaultColor?: boolean }) => (
  <svg className={'inline'} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="20" height="20">
      <rect width="20" height="20" fill="#A44400" />
    </mask>
    <g mask="url(#mask0)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.959415 16.8718L9.1392 2.17272C9.51467 1.49801 10.4866 1.49801 10.8621 2.17272L19.0419 16.8718C19.4068 17.5275 18.9318 18.3334 18.1804 18.3334H1.82086C1.06946 18.3334 0.594504 17.5275 0.959415 16.8718ZM9.34847 12.2575H10.6105L10.7555 6.25002H9.20958L9.34847 12.2575ZM9.39074 14.5563C9.24178 14.7206 9.16731 14.9293 9.16731 15.1824C9.16731 15.4267 9.23977 15.6309 9.3847 15.7952C9.52963 15.9595 9.73494 16.0417 10.0006 16.0417C10.2663 16.0417 10.4717 15.9595 10.6166 15.7952C10.7615 15.6309 10.834 15.4267 10.834 15.1824C10.834 14.9293 10.7595 14.7206 10.6105 14.5563C10.4616 14.3875 10.2583 14.3032 10.0006 14.3032C9.74299 14.3032 9.53969 14.3875 9.39074 14.5563Z"
        fill={defaultColor ? '#A44400' : ''}
      />
    </g>
  </svg>
)

const WarningOutline = () => (
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
    <title>warning</title>
    <path d="M15.709 5.25c0.127-0.229 0.456-0.229 0.583 0l11.067 19.921c0.123 0.222-0.037 0.495-0.291 0.495h-22.135c-0.254 0-0.415-0.273-0.291-0.495l11.067-19.921zM18.040 4.279c-0.889-1.6-3.19-1.6-4.079 0l-11.067 19.921c-0.864 1.555 0.261 3.467 2.040 3.467h22.135c1.779 0 2.904-1.911 2.040-3.467l-11.067-19.921zM15.254 20.025h1.769l0.203-8.692h-2.167l0.195 8.692zM15.313 21.887c-0.209 0.209-0.313 0.474-0.313 0.796 0 0.31 0.102 0.57 0.305 0.779s0.491 0.313 0.863 0.313 0.66-0.104 0.863-0.313c0.203-0.209 0.305-0.468 0.305-0.779 0-0.322-0.104-0.587-0.313-0.796-0.209-0.214-0.494-0.322-0.855-0.322s-0.646 0.107-0.855 0.322z" />
  </svg>
)

export const WarningIcon = ({
  className,
  type,
  outline,
  defaultColor
}: {
  className?: string
  type?: IconType
  outline?: boolean
  defaultColor?: boolean
}) => (
  <i className={className}>
    {type === 'danger' && <Danger />}
    {!type && outline ? <WarningOutline /> : <Warning defaultColor={defaultColor} />}
  </i>
)
