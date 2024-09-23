import { PublicUserUpdateRequestV3, UserResponseV3, UsersApi } from '@accelbyte/sdk-iam'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormItem } from './components/Form'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { useGlobal } from './GlobalContext'
import { handleError } from './helpers'

export function UpdateMyProfile() {
  const { user, setUser, sdk } = useGlobal()
  const { register, handleSubmit, reset } = useForm<PublicUserUpdateRequestV3>({
    defaultValues: getDefaultValue(user)
  })
  const [updateUserResponse, setUpdateUserResponse] = useState<any>(null)

  useEffect(() => {
    if (!user) return

    reset(getDefaultValue(user))
  }, [user])

  const updateUserProfile = handleSubmit(async data => {
    try {
      const response = await UsersApi(sdk).updateUserMe_v3(data)

      setUpdateUserResponse(response.data)
      setUser(response.data)
    } catch (err) {
      handleError(err, setUpdateUserResponse)
    }
  })

  return (
    <Section>
      <Heading level={2}>Update my profile</Heading>

      <SectionContent>
        <Form onSubmit={updateUserProfile}>
          <FormItem label="Avatar URL" name="avatarUrl" placeholder="https://example.com" register={register} className="w-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 w-full gap-4">
            <FormItem label="Country" name="country" placeholder="USA" register={register} />

            <FormItem label="Date of birth" name="dateOfBirth" placeholder="1970-01-01" register={register} />

            <FormItem label="Display name" name="displayName" placeholder="Kai Doe" register={register} />

            <FormItem label="Language tag" name="languageTag" placeholder="en-US" register={register} />

            <FormItem label="Unique display name" name="uniqueDisplayName" placeholder="Kai Doe" register={register} />

            <FormItem label="User name" name="userName" placeholder="Kai Doe" register={register} />
          </div>

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Update profile
          </button>
        </Form>
      </SectionContent>

      <Section>
        <Heading level={3}>Response</Heading>

        <Snippet>{JSON.stringify(updateUserResponse, null, 2)}</Snippet>
      </Section>
    </Section>
  )
}

function formatDate(dateString: string | null | undefined) {
  const date = dateString ? new Date(dateString) : new Date()
  return `${date.getUTCFullYear()}-${padNumber(date.getUTCMonth() + 1)}-${padNumber(date.getUTCDate())}`
}

function padNumber(value: number) {
  return value.toString().padStart(2, '0')
}

function getDefaultValue(user: UserResponseV3 | null) {
  return {
    avatarUrl: user?.avatarUrl ?? '',
    country: user?.country ?? '',
    dateOfBirth: formatDate(user?.dateOfBirth),
    displayName: user?.displayName ?? '',
    uniqueDisplayName: user?.uniqueDisplayName ?? '',
    languageTag: 'en-US',
    userName: user?.userName ?? ''
  }
}
