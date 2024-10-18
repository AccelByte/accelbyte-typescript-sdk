import { AccelByte } from '@accelbyte/sdk'
import { IamUserAuthorizationClient, OAuth20V4Api, TokenResponseV3, UsersApi } from '@accelbyte/sdk-iam'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormItem } from './components/Form'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { useGlobal } from './GlobalContext'
import { BASE_SDK_CORE_CONFIG, handleError } from './helpers'

export function Login() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      deviceId: 'example-device-id'
    }
  })
  const [tokenResponse, setTokenResponse] = useState<any>(null)
  const { sdkCoreConfig, setUser, sdk: globalSdk, setSdk } = useGlobal()

  const sdkForExchangeToken = useMemo(() => {
    // For logging in, we always want to use the base URL (without namespace).
    // If you are a Private Cloud customer, you don't have to worry about this.
    return AccelByte.SDK({ coreConfig: sdkCoreConfig })
  }, [sdkCoreConfig])

  const loginWithDeviceID = handleSubmit(async data => {
    try {
      const response = await OAuth20V4Api(globalSdk, {
        axiosConfig: {
          request: {
            headers: {
              Authorization: `Basic ${btoa(`${globalSdk.assembly().coreConfig.clientId}:`)}`
            }
          }
        }
      }).postTokenOauth_ByPlatformId_v4('device', {
        device_id: data.deviceId
      })
      setTokenResponse(response.data)

      const cloned = globalSdk.clone()

      if (import.meta.env.PROD) {
        // Only use token in Prod, because in Prod we don't have proxy.
        const parsedTokenResponse = TokenResponseV3.parse(response.data)
        cloned.setToken({ accessToken: parsedTokenResponse.access_token, refreshToken: parsedTokenResponse.refresh_token })
      }

      setSdk(cloned)

      const userResponse = await UsersApi(cloned).getUsersMe_v3()
      setUser(userResponse.data)
    } catch (err) {
      handleError(err, setTokenResponse)
    }
  })

  const loginWithTokenExchange = handleSubmit(() => {
    try {
      const loginURL = new IamUserAuthorizationClient(sdkForExchangeToken).createLoginURL()
      window.location.href = loginURL
    } catch (err) {
      handleError(err, setTokenResponse)
    }
  })

  const loginWithTokenExchangeWithSharedCloudConfig = handleSubmit(() => {
    try {
      const sdk = AccelByte.SDK({ coreConfig: BASE_SDK_CORE_CONFIG })
      const loginURL = new IamUserAuthorizationClient(sdk).createLoginURL()
      window.location.href = loginURL
    } catch (err) {
      handleError(err, setTokenResponse)
    }
  })

  // A hack so that in local, it doesn't exchange code twice.
  const hasExchangedToken = useRef(false)

  useEffect(() => {
    async function exchangeToken() {
      const { code, error, state } = Object.fromEntries(new URL(window.location.href).searchParams)
      if (!code || !state || hasExchangedToken.current) return

      hasExchangedToken.current = true

      try {
        const result = await new IamUserAuthorizationClient(sdkForExchangeToken).exchangeAuthorizationCode({ code, error, state })
        const tokenResponse = result?.response?.data
        setTokenResponse(tokenResponse)

        const cloned = globalSdk.clone()

        if (import.meta.env.PROD) {
          // Only use token in Prod, because in Prod we don't have proxy.
          const parsedTokenResponse = TokenResponseV3.parse(tokenResponse)
          cloned.setToken({ accessToken: parsedTokenResponse.access_token, refreshToken: parsedTokenResponse.refresh_token })
        }

        setSdk(cloned)

        const userResponse = await UsersApi(cloned).getUsersMe_v3()
        setUser(userResponse.data)
      } catch (err) {
        handleError(err, setTokenResponse)
      } finally {
        // Remove the query params.
        window.history.pushState({}, document.title, window.location.pathname)
      }
    }

    exchangeToken()
  }, [sdkForExchangeToken, globalSdk])

  return (
    <Section>
      <Heading level={2}>Log in to AGS</Heading>

      <SectionContent>
        <p>You can log in using either:</p>

        <ul>
          <li>
            Device ID (no account required). Follow the setup guide{' '}
            <a href="https://docs.accelbyte.io/gaming-services/getting-started/implement-login-with-device-id/">here</a>.
          </li>
          <li>
            OAuth Flow (via Login Website) using your AGS account. You can log in using the current SDK config or using a template SDK
            config.
          </li>
        </ul>

        <p>
          Logging in is required to access the other features. For more details on AGS web authentication, visit the{' '}
          <a href="https://docs.accelbyte.io/gaming-services/services/access/authentication/account-integration/#integration">
            Documentation Portal
          </a>
          .
        </p>

        <Form onSubmit={loginWithDeviceID}>
          <div className="flex flex-row items-end gap-x-2">
            <FormItem label="Device ID" name="deviceId" placeholder="91964d4871994f41a57428867fe3afa3" register={register} />

            <button
              type="submit"
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Log in with Device ID
            </button>
          </div>
        </Form>

        <div className="relative">
          <hr className="border-dashed border-black w-[200px]" />

          <div className="absolute -top-[13.5px] left-[75px] bg-slate-50 px-2">or</div>
        </div>

        <div>
          <button
            onClick={loginWithTokenExchange}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Log in via Login Website (using current SDK config)
          </button>
        </div>

        <div className="relative">
          <hr className="border-dashed border-black w-[200px]" />

          <div className="absolute -top-[13.5px] left-[75px] bg-slate-50 px-2">or</div>
        </div>

        <div>
          <button
            onClick={loginWithTokenExchangeWithSharedCloudConfig}
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Log in to AGS Shared Cloud via Login Website (using template SDK config)
          </button>
        </div>
      </SectionContent>

      <Section>
        <Heading level={3}>Response</Heading>

        <Snippet>{JSON.stringify(tokenResponse, null, 2)}</Snippet>
      </Section>
    </Section>
  )
}
