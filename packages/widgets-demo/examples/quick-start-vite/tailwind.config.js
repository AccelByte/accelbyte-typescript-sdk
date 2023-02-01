/*
 * Copyright (c) 2018-2022 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
function withOpacityValue(variable) {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `rgb(var(${variable}))`
    }
    return `rgb(var(${variable}), ${opacityValue})`
  }
}

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  variants: {
    extend: {
      backgroundColor: ['responsive', 'hover', 'disabled'],
      borderColor: ['responsive', 'hover', 'disabled'],
      textColor: ['responsive', 'hover', 'disabled']
    }
  },
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      branding: {
        10: withOpacityValue('--branding-10'),
        30: withOpacityValue('--branding-30'),
        40: withOpacityValue('--branding-40'),
        60: withOpacityValue('--branding-60'),
        70: withOpacityValue('--branding-70')
      },
      dark: {
        20: withOpacityValue('--dark-20'),
        40: withOpacityValue('--dark-40'),
        60: withOpacityValue('--dark-60'),
        80: withOpacityValue('--dark-80'),
        100: withOpacityValue('--dark-100'),
        120: withOpacityValue('--dark-120')
      },
      primary: {
        20: withOpacityValue('--primary-20'),
        40: withOpacityValue('--primary-40'),
        60: withOpacityValue('--primary-60'),
        80: withOpacityValue('--primary-80'),
        100: withOpacityValue('--primary-100'),
        120: withOpacityValue('--primary-120')
      },
      neutral: {
        0: withOpacityValue('--neutral-0'),
        10: withOpacityValue('--neutral-10'),
        20: withOpacityValue('--neutral-20'),
        30: withOpacityValue('--neutral-30'),
        40: withOpacityValue('--neutral-40'),
        60: withOpacityValue('--neutral-60'),
        80: withOpacityValue('--neutral-80'),
        100: withOpacityValue('--neutral-100'),
        120: withOpacityValue('--neutral-120'),
        140: withOpacityValue('--neutral-140')
      },
      green: {
        l3: '#CAFDF4',
        20: withOpacityValue('--green-20'),
        40: withOpacityValue('--green-40'),
        60: withOpacityValue('--green-60'),
        80: withOpacityValue('--green-80'),
        100: withOpacityValue('--green-100'),
        120: withOpacityValue('--green-120')
      },
      periwinkle: {
        10: withOpacityValue('--periwinkle-10'),
        20: withOpacityValue('--periwinkle-20')
      },
      violet: {
        60: withOpacityValue('--violet-60')
      },
      blue: {
        20: withOpacityValue('--blue-20'),
        40: withOpacityValue('--blue-40'),
        60: withOpacityValue('--blue-60'),
        80: withOpacityValue('--blue-80'),
        100: withOpacityValue('--blue-100'),
        120: withOpacityValue('--blue-120'),

        // OLD color
        l3: '#E6F5FF',
        90: '#002359',
        70: '#0046B1',
        50: '#0B6CFF',
        30: '#85B5FF',
        0: '#D6E6FF'
      },
      yellow: {
        20: withOpacityValue('--yellow-20'),
        40: withOpacityValue('--yellow-40'),
        60: withOpacityValue('--yellow-60'),
        80: withOpacityValue('--yellow-80'),
        90: withOpacityValue('--yellow-90'),
        100: withOpacityValue('--yellow-100'),
        120: withOpacityValue('--yellow-120')
      },
      // orange: {
      //   60: withOpacityValue('--orange-60')
      // },
      red: {
        l3: '#FCEDEC',
        20: withOpacityValue('--red-20'),
        40: withOpacityValue('--red-40'),
        60: withOpacityValue('--red-60'),
        80: withOpacityValue('--red-80'),
        100: withOpacityValue('--red-100'),
        120: withOpacityValue('--red-120')
      },

      // OLD color
      black: '#000000',
      white: '#FFFFFF',
      grayD1: '#131313',
      gray: {
        l3: '#EFEFEF',
        d1: '#131313',
        100: '#1C1C1C',
        90: '#262626',
        80: '#3A3A3A',
        70: '#4D4D4D',
        60: '#4E5B6D',
        55: '#757575',
        50: '#7A7A7A',
        20: '#B5B5B5',
        10: '#CCCCCC',
        0: '#E5E5E5'
      },
      purple: {
        l3: '#F2F2FD',
        60: '#4A44DF'
      },
      orange: {
        l3: '#FFEDE0',
        40: '#EB6200',
        50: '#C55200',
        60: '#A44400'
      },
      gold: {
        10: '#FEF9EE',
        20: '#ECAE0E',
        60: '#F7BC49',
        100: '#B17707'
      },
      platform: {
        twitch: '#9146FF'
      }
    },
    fontFamily: {
      body: 'var(--font-body)',
      title: 'var(--font-title)'
    },
    fontSize: {
      '3tiny': 'var(--font-size-3tiny)',
      '2tiny': 'var(--font-size-2tiny)',
      tiny: 'var(--font-size-tiny)',
      xs: 'var(--font-size-xs)',
      '2sm': 'var(--font-size-2sm)',
      sm: 'var(--font-size-sm)',
      md: 'var(--font-size-md)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
      xxl: 'var(--font-size-xxl)'
    },
    extend: {
      opacity: {
        65: '.65'
      },
      screens: {
        xl: '1200px'
      },
      height: {
        9: '2.25rem'
      },
      width: {
        400: '400px',
        28: '7rem',
        680: '680px',
        552: '552px'
      },
      typography: theme => ({
        DEFAULT: {
          css: {
            code: {
              padding: theme('spacing.1'),
              borderRadius: theme('spacing.1'),
              fontWeight: 600,
              color: theme('colors.primary.80'),
              backgroundColor: theme('colors.neutral.20')
            },
            'code::before': false,
            'code::after': false
          }
        }
      })
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '1rem',
        lg: '2rem',
        xl: '2rem'
      }
    }
  }
}
