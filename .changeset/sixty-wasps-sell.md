---
'@accelbyte/sdk-challenge': minor
---

- Added new optional query parameters `keyword` and `tags` to admin and public challenges listing
- Added new optional query parameters `challengeCode` and `goalProgressionId` to user rewards endpoints
- Added new optional query parameters `tags` and `sortBy` to challenge goals endpoints
- Added new endpoints for challenge item references, challenge goals schedules, and challenge schedules (both admin and public namespaces)
- Added non-success `400` response to challenges listing endpoints (admin and public)