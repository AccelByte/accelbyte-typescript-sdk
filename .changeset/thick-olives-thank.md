---
'@accelbyte/sdk-iam': minor
---

- Added multiple new IAM admin endpoints for platform client domain patch, tags CRUD, user cursor and state, and OAuth MFA verification
- Added new optional query/formData parameters across various IAM endpoints (`pidType`, `selectedFields`, `tagIds`, `redirectUri`, `state`, `blockedPlatformId`, `loginWebBased`, `nonce`, `scope`)
- Added several new public and auth-related endpoints for user link, forgot password, OAuth token, user info, and headless code verification
- Introduced new IAM v4 endpoints for OAuth token and public platform user info retrieval