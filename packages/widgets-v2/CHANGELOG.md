### 0.2.0-beta.21 - 2023-04-19

- Fix inside The Option Box item display wrong item
- Fix click Cancel Order button doesn't cancel the transaction
- Fix User will be failed to claim a reward after finishing Twitch Authorization

### 0.2.0-beta.20 - 2023-04-17

- Bump SDK versions

### 0.2.0-beta.19 - 2023-04-17

- Some store detail can't be accessed due to error Minified React error
- Get Launcher button still displayed on the header even though it's disabled from Feature Flag
- See account history in My Profile page redirect user to error page if display name or email or password changed
- Adjust alignment of AccountDeletionSuccessWidget
- See account history in My Profile page redirect user to error page if display name or email or password changed

### 0.2.0-beta.18 - 2023-04-10

- Adjust LegalUtils to allow customization of Legal V2 path

### 0.2.0-beta.17 - 2023-04-06

- Hide Keys tab from Purchased Items in Single Game template
- Implement hooks and mocks for Payment Widget
- Migrate payment to widget-v2

### 0.2.0-beta.16 - 2023-04-05

- Migrate Personal Data to widget-v2

### 0.2.0-beta.15 - 2023-04-04

- Migrate Legal Agreements, Delete Account to widget-v2

### 0.2.0-beta.14 - 2023-04-03

- Add Purchased Items
- Add order history
- Migrate Purchased Items, Order History, Redeem Code to widget-v2

### 0.2.0-beta.13 - 2023-03-31

- Add Link Platform Accounts and Verify User

### 0.2.0-beta.12 - 2023-03-30

- Add account overview
- Add password & security
- Implement Store Detail
- Add homepage

### 0.2.0-beta.11 - 2023-03-28

- Remove AbortController uses and cleanup hook calls
- Add Profile widget

### 0.2.0-beta.10 - 2023-03-24

- Cleanup dependencies, throw better error when running Storybook without some files built first

### 0.2.0-beta.9 - 2023-03-16

- Create new exported utility RouteUtils

### 0.2.0-beta.8 - 2023-03-16

- Fix build, don't use preserveModules

### 0.2.0-beta.7 - 2023-03-16

- Add ts-node to dev dependencies

### 0.2.0-beta.6 - 2023-03-06

- Add Homepage widget

### 0.2.0-beta.5 - 2023-03-06

- Improve Storybook dependency optimization, fix Storybook run in Chrome

### 0.2.0-beta.4 - 2023-03-02

- Add alias for react-router-dom

### 0.2.0-beta.3 - 2023-03-02

- Add Footer widget

### 0.2.0-beta.2 - 2023-03-01

- Add Storybook

### 0.2.0-beta.1 - 2023-02-28

- Add od-component

### 0.2.0-beta.0 - 2023-02-21

- Replace moment with date-fns

### 0.1.1-alpha.59.19 - 2022-01-31

- PoC remix SSR

### 0.1.1-alpha.59 - 2022-01-11

- Fixed od-shared dependency error

### 0.1.1-alpha.58 - 2022-12-23

- Remove the company logo from all error pages

### 0.1.1-alpha.57 - 2023-01-04

- Fix postbuild script not removing the classname divider

### 0.1.1-alpha.56 - 2023-01-03

- Update dependency versions

### 0.1.1-alpha.55 - 2022-12-30

- Click See my Optionbox after successful transaction, redirect user to hidden page

### 0.1.1-alpha.54 - 2022-12-27

- Remove the company logo from all error pages

### 0.1.1-alpha.53 - 2022-12-22

- Fix wrong fields in package.json being deleted

### 0.1.1-alpha.52 - 2022-12-22

- Make dependencies exist in Widgets when publishing
- Add callback on PaymentWidget when payment is successful

### 0.1.1-alpha.51 - 2022-12-21

- Fix LoginWidget not updating `previousUser` attribute, fix `onUpdateUser` not being able to pass `null`

### 0.1.1-alpha.50 - 2022-12-21

- Update styling on Payment Widget

### 0.1.1-alpha.49 - 2022-12-21

- Disable preflight when building widgets
- Add `onUpdateUser` to LoginWidget's `componentDidMount`

### 0.1.1-alpha.48 - 2022-12-21

- Add `onUpdateUser` to LoginWidget

### 0.1.1-alpha.47 - 2022-12-21

- Add @accelbyte/sdk to the widgets' dependencies

### 0.1.1-alpha.46 - 2022-12-20

- Fix wrong entry point for widgets

### 0.1.1-alpha.45 - 2022-12-19

- Fix built CSS

### 0.1.1-alpha.44 - 2022-12-15

- Fix Checkout payment aggregator integration

### 0.1.1-alpha.43 - 2022-12-09

- Fix peer dependencies

### 0.1.1-alpha.42 - 2022-12-08

- Attempt fix build (1)

### 0.1.1-alpha.41 - 2022-12-02

- Enable versioning of widgets

### 2022-11-30

- Restructure widgets folder

### 2022-11-28

- Create independent Payment Widget and Order page widget

### 2022-11-24

- Publish Web Widgets

### 2022-11-23

- Prettify config files

### 2022-11-21

- Add plain class on every component that use CSS module