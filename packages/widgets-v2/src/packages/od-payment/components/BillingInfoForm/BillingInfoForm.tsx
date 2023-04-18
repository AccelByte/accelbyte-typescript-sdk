/*
 * Copyright (c) 2021-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { Button, ButtonStyle, ButtonType } from '@od-components/components/Button/Button'
import { Checkbox } from '@od-components/components/Form/Checkbox/Checkbox'
import { InputGroup } from '@od-components/components/Form/InputGroup/InputGroup'
import { Loading } from '@od-components/components/Loading/Loading'
import { AlertType } from '@od-shared/models/Alert'
import React, { ChangeEvent, useState } from 'react'
import { RequestType } from '../../models/Payment'
import { PaymentAlert } from '../PaymentAlert/PaymentAlert'
import './BillingInfoForm.scss'
import { useUserInfo } from '~/hooks/iam/useUserInfo'
import { UserProfilePrivateInfo } from '@accelbyte/sdk-basic'

interface Props {
  userProfile: UserProfilePrivateInfo | null
  onSubmit: (zipCode: string) => void
}

export function BillingInfoForm({ onSubmit, userProfile }: Props) {
  const [zipCode, setZipCode] = useState<string>(userProfile?.zipCode || '')
  const [isBillingInfoChecked, setIsBillingInfoChecked] = useState<boolean>(false)
  const [isZipCodeValid, setIsZipCodeValid] = useState(true)
  const [billingInfo, setBillingInfo] = useState<RequestType<UserProfilePrivateInfo | null>>({
    value: null,
    isLoading: false,
    error: null
  })

  const {
    mutations: { updateUserProfile }
  } = useUserInfo()

  const saveBillingInfo = async () => {
    if (billingInfo.isLoading) return
    setBillingInfo({ value: null, isLoading: true, error: null })

    const result = await updateUserProfile({
      zipCode
    })

    if (result?.data) {
      setBillingInfo({ value: result.data, isLoading: false, error: null })
      onSubmit(zipCode)
    } else {
      setBillingInfo({ error: result?.error || null, value: null, isLoading: false })
    }
  }

  const onFormSubmit = () => {
    isBillingInfoChecked ? saveBillingInfo() : onSubmit(zipCode)
  }

  const onZipCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setZipCode(value)
    setIsZipCodeValid(value.trim() === '')
  }

  const onSaveBillingInfoChange = () => {
    setIsBillingInfoChecked(!isBillingInfoChecked)
  }

  if (billingInfo.isLoading) {
    return <Loading />
  }

  if (billingInfo.error) {
    return (
      <PaymentAlert
        type={AlertType.warning}
        message={'Something went wrong, Please retry or contact our administrator if the problem persist'}
        onRetry={() => setBillingInfo({ value: null, isLoading: false, error: null })}
      />
    )
  }

  return (
    <div className="billing-info-form">
      <form
        onSubmit={e => {
          e.preventDefault()
        }}>
        <div className={`form-group ${!isZipCodeValid && 'error'}`}>
          <label>ZIP Code</label>
          <InputGroup type="text" value={zipCode} onChange={onZipCodeChange} placeholder="Input ZIP Code" className="form-control" />
          {!isZipCodeValid && <div className={'error-message'}>Zip Code is required</div>}
        </div>

        <div>
          <label className="save-checkbox">
            <Checkbox isChecked={isBillingInfoChecked} onChange={onSaveBillingInfoChange} />
            Save billing information for future transaction
          </label>
        </div>

        <Button onClick={onFormSubmit} buttonStyle={ButtonStyle.PRIMARY} buttonType={ButtonType.FLAT} disabled={!isZipCodeValid}>
          CONTINUE
        </Button>
      </form>
    </div>
  )
}
