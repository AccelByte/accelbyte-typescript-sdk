/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
// Usage Example:
// adding a notification

// import { notificationFacade } from '{{filepath}}'
// notificationFacade.addNotification({
//   title: "Hello,",
//   message: "World"
// })

// For all methods, see NotificationFacade interface below
// For more reference, see https://github.com/igorprado/react-notification-system

import React from 'react'
import NotificationSystem from 'react-notification-system'

let notificationSystemSingleton: any | undefined
const notificationBackgroundColor = '#131010'
const notificationTitleColor = '#FFFFFF'
const notificationTextColor = '#8C958B'
const notificationColorScheme = {
  success: '#13A786',
  info: '#3794F3',
  warning: '#FF9600',
  error: '#F71641'
}

const globalNotificationItemProperties = {
  boxShadow: 'rgba(0, 0, 0, 0.25) 0px 2px',
  borderTop: 'none',
  borderLeft: '1px solid'
}

const Styles: NotificationSystem.Style = {
  Containers: {
    DefaultStyle: {
      margin: '85px 25px 0 0',
      paddingRight: 0,
      zIndex: 99999
    }
  },
  NotificationItem: {
    DefaultStyle: {
      paddingTop: '11px',
      paddingBottom: '10px',
      paddingRight: '35px',
      paddingLeft: '10px',
      color: notificationTextColor,
      fontSize: '11px'
    },
    success: {
      ...globalNotificationItemProperties,
      backgroundColor: notificationBackgroundColor,
      color: notificationColorScheme.success
    },
    error: {
      ...globalNotificationItemProperties,
      backgroundColor: notificationBackgroundColor,
      color: notificationColorScheme.error
    },
    warning: {
      ...globalNotificationItemProperties,
      backgroundColor: notificationBackgroundColor,
      color: notificationColorScheme.warning
    },
    info: {
      ...globalNotificationItemProperties,
      backgroundColor: notificationBackgroundColor,
      color: notificationColorScheme.info
    }
  },
  Title: {
    DefaultStyle: {
      fontSize: '12px',
      marginBottom: '0',
      fontWeight: 500
    },
    success: {
      color: notificationTitleColor
    },
    info: {
      color: notificationTitleColor
    },
    warning: {
      color: notificationTitleColor
    },
    error: {
      color: notificationTitleColor
    }
  },
  Dismiss: {
    DefaultStyle: {
      top: '10px',
      right: '20px',
      background: 'transparent',
      fontSize: '16px',
      color: '#8C958B',
      fontWeight: 'normal'
    }
  },
  MessageWrapper: {
    DefaultStyle: {
      color: notificationTextColor,
      fontSize: '11px',
      lineHeight: '17px'
    }
  }
}

// ts-prune-ignore-next
interface NotificationFacade {
  safe(func: () => void): any

  addNotification(notification: any): any

  editNotification(notification: any, newNotification: any): any

  removeNotification(notification: any): any

  clearNotifications(): any
}

// ts-prune-ignore-next
export const notificationFacade: NotificationFacade = {
  safe(func: () => void) {
    if (notificationSystemSingleton) {
      return func()
    }
    return undefined
  },
  addNotification(notification: any) {
    return this.safe(() => {
      return notificationSystemSingleton.addNotification(notification)
    })
  },
  editNotification(notification: any, newNotification: any) {
    return this.safe(() => {
      return notificationSystemSingleton.editNotification(notification, newNotification)
    })
  },
  removeNotification(notification: any) {
    return this.safe(() => {
      return notificationSystemSingleton.removeNotification(notification)
    })
  },
  clearNotifications() {
    return this.safe(() => {
      return notificationSystemSingleton.clearNotifications()
    })
  }
}

export class NotificationSystemContainer extends React.Component<any> {
  ref?: NotificationSystem.System

  componentDidMount() {
    notificationSystemSingleton = this.ref
  }

  componentWillUnmount() {
    notificationSystemSingleton = undefined
  }

  render() {
    return <NotificationSystem style={Styles} ref={(notificationSystem: any) => (this.ref = notificationSystem)} {...this.props} />
  }
}
