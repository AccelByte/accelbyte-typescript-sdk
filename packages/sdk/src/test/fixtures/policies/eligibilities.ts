import { RetrieveUserEligibilitiesResponseArray } from '@accelbyte/sdk-legal'

export const notAcceptedEligibility = {
  policyName: 'Test Policy',
  policyType: 'Legal Document',
  namespace: 'sdk',
  countryCode: 'IT',
  baseUrls: ['https://cdn.development.accelbyte.io/', 'https://accelbyte-dev-justice-legal-service.s3.amazonaws.com/'],
  policyVersions: [
    {
      id: 'db108e17-a81a-4514-be89-442528223272',
      createdAt: '2022-09-08T01:10:43.427Z',
      updatedAt: '2022-09-08T01:10:43.427Z',
      displayVersion: '1.0.0b',
      description: '',
      status: 'ACTIVE',
      localizedPolicyVersions: [
        {
          id: '167bc433-b3ec-4ed3-9f1c-7988ab9da2dd',
          createdAt: '2022-09-08T01:11:00.853Z',
          updatedAt: '2022-09-08T01:11:00.853Z',
          localeCode: 'en-US',
          contentType: 'text/markdown',
          attachmentLocation: 'legal-attachments/test/test-policy/IT/1.0.0b/en-US/5c153ea251924b5dbe9081b3d037ea98',
          attachmentChecksum: 'fb6c508498f4a2f754a81ef8e7bffeae',
          attachmentVersionIdentifier: '',
          description: '',
          isDefaultSelection: true
        },
        {
          id: '167bc433-b3ec-4ed3-9f1c-7988ab9da2dd',
          createdAt: '2022-09-08T01:11:00.853Z',
          updatedAt: '2022-09-08T01:11:00.853Z',
          localeCode: 'en-US',
          contentType: 'text/markdown',
          attachmentLocation: 'legal-attachments/accelbyte/test-policy/IT/1.0.0b/en-US/5c153ea251924b5dbe9081b3d037ea98',
          attachmentChecksum: 'fb6c508498f4a2f754a81ef8e7bffeae',
          attachmentVersionIdentifier: '',
          description: '',
          isDefaultSelection: false
        }
      ],
      isCommitted: true,
      isInEffect: true
    }
  ],
  policyId: '22a6f73d-fb57-40e0-9057-b6da55119738',
  isMandatory: true,
  isAccepted: false
}

export const acceptedEligibility = {
  policyName: 'Test Policy 2',
  policyType: 'Legal Document',
  namespace: 'sdk-2',
  countryCode: 'IT',
  baseUrls: ['https://cdn.development.accelbyte.io/', 'https://accelbyte-dev-justice-legal-service.s3.amazonaws.com/'],
  policyVersions: [
    {
      id: 'db108e17-a81a-4514-be89-442528223272',
      createdAt: '2022-09-08T01:10:43.427Z',
      updatedAt: '2022-09-08T01:10:43.427Z',
      displayVersion: '1.2.0b',
      description: '',
      status: 'ACTIVE',
      localizedPolicyVersions: null,
      isCommitted: false,
      isInEffect: true
    }
  ],
  policyId: '22a6f73d-fb57-40e0-9057-b6da55119738',
  isMandatory: true,
  isAccepted: true
}

export const eligibilities: RetrieveUserEligibilitiesResponseArray = [notAcceptedEligibility, acceptedEligibility]
