/*
 * Copyright (c) 2022-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { LegalHelper, RetrievePolicyPublicResponse, RetrieveUserEligibilitiesResponseArray } from '@accelbyte/sdk-legal'
import { describe, expect, test } from 'vitest'

import EligibilitiesJSON from '../fixtures/policies/eligibilities.json'
import PoliciesJSON from '../fixtures/policies/policies.json'
import { TEST_NAMESPACE } from '../../test/test-utils'

describe('getUnsignedPolicies', () => {
  const DEFAULT_LEGALS: RetrieveUserEligibilitiesResponseArray = EligibilitiesJSON

  test('not all have been accepted', () => {
    const result = [...DEFAULT_LEGALS]
    result[0] = { ...result[0] }
    result[0].policyVersions = [result[0].policyVersions![0]]
    expect(LegalHelper.getUnsignedPolicies(DEFAULT_LEGALS)).toEqual(result)
  })

  test('all already accepted', () => {
    const legals = [...DEFAULT_LEGALS]
    legals[0] = { ...legals[0] }
    legals[0].isAccepted = true

    expect(LegalHelper.getUnsignedPolicies(legals)).toEqual([])
  })
})

test('convertPoliciesToDisplayedPolicies', () => {
  const array: RetrievePolicyPublicResponse[] = PoliciesJSON

  expect(LegalHelper.convertPoliciesToDisplayedPolicies(array, TEST_NAMESPACE)).toEqual([
    {
      description: 'Try the feature',
      isMandatory: false,
      localizedPolicyVersionId: '95d9364c-f81c-4b4f-8fcd-79462e34012c',
      policyId: '70f318c8-499e-4321-b671-70f9c932833c',
      policyName: 'Mercury Test Legal at US',
      policyType: 'Legal Document',
      policyVersionId: '2fbf5e6e-409a-45ba-8b12-938dd37ef1fa'
    },
    {
      description: 'for test',
      isMandatory: false,
      localizedPolicyVersionId: '2e996caf-026d-4f7e-9649-64a2aa472508',
      policyId: '1686d634-2dba-4336-a37d-7a63cc759826',
      policyName: 'Mercury Test Marketing Preference',
      policyType: 'Marketing Preference',
      policyVersionId: 'd9b8e3c3-73a5-4a08-a29d-65e94321c764'
    },
    {
      description: 'hehe',
      isMandatory: true,
      localizedPolicyVersionId: '63e9aa1e-a528-41c4-8373-3cb798e14ed1',
      policyId: '53adbfe1-de26-44c9-a7fa-b94db440800d',
      policyName: 'Hello world',
      policyType: 'Legal Document',
      policyVersionId: '0f748c1e-ecca-4b06-b305-d8d189c86b3f'
    }
  ])
})

describe('createLegalURL', () => {
  test('valid legal web URL first parameter', () => {
    expect(LegalHelper.createLegalURL('https://demo.accelbyte.io/legal', '123e4567-e89b-12d3-a456-426614174000')).toBe(
      'https://demo.accelbyte.io/legal/123e4567-e89b-12d3-a456-426614174000'
    )
  })

  test('valid legal path first parameter', () => {
    expect(LegalHelper.createLegalURL(undefined, '123e4567-e89b-12d3-a456-426614174000')).toBe(
      '/legal/123e4567-e89b-12d3-a456-426614174000'
    )
  })

  test('no parameters passed', () => {
    expect(LegalHelper.createLegalURL()).toBe('/legal')
  })
})

test('getAcceptedPolicies', () => {
  const DEFAULT_LEGALS: RetrieveUserEligibilitiesResponseArray = EligibilitiesJSON

  expect(LegalHelper.getAcceptedPolicies(DEFAULT_LEGALS)).toEqual([
    {
      isAccepted: true,
      localizedPolicyVersionId: '167bc433-b3ec-4ed3-9f1c-7988ab9da2dd',
      policyId: '22a6f73d-fb57-40e0-9057-b6da55119738',
      policyVersionId: 'db108e17-a81a-4514-be89-442528223272'
    }
  ])
})
