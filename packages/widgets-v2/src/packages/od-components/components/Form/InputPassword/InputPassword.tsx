/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { t } from '@od-components/i18n/i18n'
// import { FeUtils } from '@od-shared/utils/FeUtils'
import { zxcvbn, zxcvbnOptions } from '@zxcvbn-ts/core'
import classNames from 'classnames'
import { passwordGraph, unsafePassword } from '@accelbyte/validator'
import React from 'react'
import { z } from 'zod'
import EyeIcon from '../../Icons/EyeIcon'
import { InputGroup, InputGroupProps } from '../InputGroup/InputGroup'
import styles from './InputPassword.module.scss'

export interface InputGroupPasswordProps extends InputGroupProps {
  // TODO: since all `InputGroupPassword` uses `togglePassword`, maybe we can remove this prop entirely?
  togglePassword?: boolean
  isPasswordVisibleByDefault?: boolean
  hasStrengthMeter?: boolean
  passwordStrengthMeterDataQa?: {
    bars?: string
    strengthText?: string
  }
}

interface State {
  showPassword: boolean
  passwordStrengthScore: number | null
}

// const CALCULATE_PASSWORD_STRENGTH_INTERVAL = 100
export const PASSWORD_STRENGTH_METER = z.enum(['veryWeak', 'weak', 'fair', 'strong', 'veryStrong'])

export class InputGroupPassword extends React.Component<InputGroupPasswordProps, State> {
  constructor(props: InputGroupPasswordProps) {
    super(props)
    this.state = {
      showPassword: props.isPasswordVisibleByDefault || false,
      passwordStrengthScore: null
    }
  }

  componentDidMount() {
    const options = {
      dictionary: {
        password: unsafePassword
      },
      graphs: passwordGraph
    }
    zxcvbnOptions.setOptions(options)
  }

  componentDidUpdate(prevProps: InputGroupPasswordProps) {
    const { hasStrengthMeter, value } = this.props
    if (!hasStrengthMeter) return

    if (typeof value === 'string' && (value !== prevProps.value || hasStrengthMeter !== prevProps.hasStrengthMeter)) {
      // this.debounceCalculatePasswordStrength(value)
    }
  }

  getStrengthLevelBasedOnScore = (score: number | null) => {
    switch (score) {
      case 0:
        return PASSWORD_STRENGTH_METER.enum.veryWeak
      case 1:
        return PASSWORD_STRENGTH_METER.enum.weak
      case 2:
        return PASSWORD_STRENGTH_METER.enum.fair
      case 3:
        return PASSWORD_STRENGTH_METER.enum.strong
      case 4:
        return PASSWORD_STRENGTH_METER.enum.veryStrong
      default:
        return PASSWORD_STRENGTH_METER.enum.veryWeak
    }
  }

  calculatePasswordStrength = (password: string) => {
    if (!password) return this.setState({ passwordStrengthScore: null })
    const { score } = zxcvbn(password)
    this.setState({ passwordStrengthScore: score })
  }

  // debounceCalculatePasswordStrength = FeUtils.debounce(this.calculatePasswordStrength, CALCULATE_PASSWORD_STRENGTH_INTERVAL)

  togglePassword = () => {
    this.setState({ showPassword: !this.state.showPassword })
  }

  renderStrengthMeter = () => {
    const { hasStrengthMeter, passwordStrengthMeterDataQa } = this.props
    const { passwordStrengthScore } = this.state
    const strengthLevelText = this.getStrengthLevelBasedOnScore(passwordStrengthScore)
    if (!hasStrengthMeter || passwordStrengthScore === null) return

    return (
      <div className={styles.passwordStrengthMeter}>
        <div className={classNames('strengthMeterBar', strengthLevelText)} data-qa-id={passwordStrengthMeterDataQa?.bars}>
          {PASSWORD_STRENGTH_METER.options.map((strengthLevel, index) => (
            <div key={`bar-${strengthLevel}`} className={classNames('bar', { fill: index <= passwordStrengthScore })} />
          ))}
        </div>
        <span className="text-xs text-[color:rgb(var(--od-rgb-text),0.65)]">{t('password.strength.label')}</span>
        <span className={classNames('strengthMeterLevel', strengthLevelText)} data-qa-id={passwordStrengthMeterDataQa?.strengthText}>
          {generatePasswordStrengthText(strengthLevelText)}
        </span>
      </div>
    )
  }

  render() {
    const { showPassword } = this.state
    const {
      togglePassword,
      className,
      type,
      hasStrengthMeter,
      // Extract unused props from input group so there's no warnings in development mode.
      isPasswordVisibleByDefault: _isPasswordVisibleByDefault,
      passwordStrengthMeterDataQa: _passwordStrengthMeterDataQa,
      ...inputGroupProps
    } = this.props
    return (
      <>
        <InputGroup
          className={classNames(styles.inputGroupPassword, className)}
          {...inputGroupProps}
          type={showPassword ? 'text' : 'password'}
          afterElement={
            (togglePassword && (
              <span className={styles.eyeIconContainer} onClick={this.togglePassword}>
                <EyeIcon open={showPassword} />
              </span>
            )) ||
            null
          }
        />
        {hasStrengthMeter && this.renderStrengthMeter()}
      </>
    )
  }
}

// Helper functions.
function generatePasswordStrengthText(level: string) {
  switch (level) {
    case 'fair':
      return t('password.strength.level.fair')
    case 'strong':
      return t('password.strength.level.strong')
    case 'veryStrong':
      return t('password.strength.level.veryStrong')
    case 'veryWeak':
      return t('password.strength.level.veryWeak')
    case 'weak':
      return t('password.strength.level.weak')
    default:
      return ''
  }
}
