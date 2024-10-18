import { AccelByte } from '@accelbyte/sdk'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormItem } from './components/Form'
import { SectionContent } from './components/Section'
import { CONFIG_STORAGE_KEY, useGlobal } from './GlobalContext'
import { createSdkConfig } from './helpers'

interface Props {
  tier: 'shared' | 'private'
}

interface FormValues {
  baseURL: string
  clientId: string
  namespace: string
  redirectURI: string
}

export function DevTools({ tier }: Props) {
  const { setSdk, setSDKCoreConfig, sdkCoreConfig } = useGlobal()

  const { handleSubmit, register } = useForm<FormValues>({
    defaultValues: sdkCoreConfig
  })
  const [isPanelShown, setIsPanelShown] = useState(false)

  const onSubmit = handleSubmit(data => {
    setSDKCoreConfig(data)
    setSdk(AccelByte.SDK(createSdkConfig(data)))
    setIsPanelShown(false)

    window.sessionStorage.setItem(CONFIG_STORAGE_KEY, JSON.stringify(data))
  })

  return (
    <div>
      <div className="fixed bottom-6 right-6">
        <button
          className="flex items-center gap-x-2 rounded-md border border-black p-2 bg-slate-200 hover:bg-slate-100 shadow-md"
          onClick={() => setIsPanelShown(!isPanelShown)}>
          <GearIcon /> Configure SDK
        </button>
      </div>

      <div hidden={!isPanelShown} className="fixed right-6 bottom-20 border border-slate-500 rounded-md p-2 z-10 bg-slate-100">
        <SectionContent>
          <Form onSubmit={onSubmit}>
            {(tier === 'private' || import.meta.env.PROD) && (
              <FormItem label="AGS Base URL" name="baseURL" placeholder="https://prod.gamingservices.accelbyte.io" register={register} />
            )}

            <FormItem label="Client ID" name="clientId" placeholder="91964d4871994f41a57428867fe3afa3" register={register} />

            {((import.meta.env.PROD && tier === 'shared') || tier === 'private') && (
              <FormItem label="Namespace" name="namespace" placeholder="accelbyte" register={register} />
            )}

            <FormItem label="Redirect URI" name="redirectURI" placeholder="http://localhost:3000" register={register} />

            <button
              type="submit"
              className="w-full rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Initialize SDK
            </button>
          </Form>
        </SectionContent>
      </div>
    </div>
  )
}

function GearIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="feather feather-settings">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  )
}
