---
'@accelbyte/sdk-platform': minor
---

- Added numerous new admin endpoints for DLC config history, IAP Steam transactions, item references, rewards, user entitlements, wallet config, and fulfillment management
- Added optional query/body parameters to items deletion, disabling, and user entitlements retrieval
- Changed rewards endpoint success response from `200` to `201`
- Added new non-success responses `404` (DLC config item) and `409` (items deletion, revocation)