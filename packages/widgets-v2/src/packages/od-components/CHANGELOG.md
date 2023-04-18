### 2023-02-23

- OS-8782 - [PP] Fixing issue at EmailAuthSection, after close modal after too many request it doesn't show error at the main page, and alert not resetting. Also rename state to be more intuitive 
### 2023-02-21

- OS-8782 - [PP] Fixing show error alert at the wrong section when request email code at Enable Email Auth Section
- CW-1609 - Replace moment with date-fns

### 2023-02-20

- CW-1609 - Add DesktopChecker to the entry index

### 2023-02-16

- CW-2114 - [PP] Add feature flag to enable or disable legal

### 2023-02-06

- CW-2030 - [Dev][Login] Primary color and text color are not implemented on several Login Pages

### 2023-01-26

- CW-2031 - [Dev][Editor][Login] Title font is not applied to Link an Account title on both preview and login website

### 2023-01-24

- OS-8494 - Remove Stadia from Supported Platform, still show stadia if already linked and allow user to unlink but not allow user to link to stadia
- Don't use ESM-only build yet for validator

### 2023-01-23

- CW-2030 - [Dev][Login] Primary color and text color are not implemented on several Login Pages
- no-jira - Use zod for enums, bump validator

### 2023-01-17

- CW-1900 - [Dev][Single Game][Launcher] User can change App ID that is used on the launcher from the launcher itself

### 2023-01-13

- OS-8386 - [PP][Redeem code] Add Error mapping translation for error code 3179: Exceed max redeem count

### 2023-01-12

- OS-8386 [PP][Redeem code] Add details message for redeem code error

### 2023-01-05

- CW-1915 - [Dev][Editor][PP][Launcher] Delete UnlinkAccount experimental flag while on disabled states, not reverts unlink button condition to default states

### 2022-12-28

- CW-1868 - Add 3rd-party login config to hide/show it as the login option

### 2022-12-27

- CW-1857 - [Odin][Player Portal] Implement 3rd party platform linked account un-link experimental feature flag

### 2022-12-01

- OS-8201 - [Dev][PP] Fix there is no error alert after failed linking to existing account due to response type mismatch
- OS-8202 - [Dev][PP] Fix there is no error alert after failed email verification in link account with one time code page

### 2022-11-30

- OS-8126 OS-8128 - [Dev][PP] Add account linking with one time code page

### 2022-11-28

- CW-1229 - [Tech Debt] CSS classes should start with camelCase always
- CW-1668 - [Feature flags] Adjust the flags naming for Login, Legal & Payment

### 2022-11-23

- CW-1697 - Prettify config files

### 2022-11-17

- CW-1647 - [Dev][PP][Launcher] Optional legal document not appear on the privacy record after finish Upgrade Headless Account
- CW-1654 - [Dev][PP][Launcher] Most of secondary button turn into flat ones
- CW-1655 - [Dev][PP][Launcher] Standardize button label in pop up modal or dialog for using uppercase text
- OS-8112 - [PP][2FA Email] Email is not shown in the 2FA by Email
- OS-8117 - [PP][FE][2FA] Generate Date not correct when enable Backup Codes in Player Portal

### 2022-11-14

- CW-1413 - [Technical] Merge duplicate components in od-components

### 2022-11-11

- CW-1531 - [Legal] Add Feature Flag for the new Legal App
- CW-1513 - [STG][PP][Launcher][Redeem Code/Personal Data] The button is getting stretchy after delete inputted text.

### 2022-11-03

- OS-8052 - [PP][FE][2FA] Error message code expired when input email authentication does not match the design

### 2022-11-03

- OS-8041 - [PP][FE][2FA] User redirected to another page when refresh page on the Choose 2FA method page

### 2022-11-03

- OS-8032 - [PP][FE][2FA] Wording in the description of Email Authentication not translated into Chinese
- OS-8029 - [PP][FE][2FA] The input field is not reset when re-enabling Email Authentication after input an invalid code/expired code

### 2022-11-02

- OS-7909 - [PP][FE] Implement Two-Factor Authentication new authentication method menu "Email Authentication"

### 2022-11-02

- CW-1508 - [Login] Sync odin-login-app from new commits from justice-login-website (Reset locked reset password page, 7b2f1c6)

### 2022-10-20

- CW-1468 - [Dev][Launcher] Redeem and Send Request button not align with the input field

### 2022-10-19

- CW-1430 - [Dev][PP][Login Web] Click Back to Login will redirect to PP homepage instead of Login Web app

### 2022-10-18

- OS-7874 - [Dev][Launcher][PP] Update the criteria for required and optional policies in upgrade headless account page
- CW-1466 - [Dev][Launcher][PP] User unable to close Account Conflict notification at Linked Accounts page

### 2022-10-17
 
- CW-1454 - [Login] Render the Company logo into the same size for Login Web, Upgrade Headless Account and Link an Account

### 2022-10-12
 
- CW-1392 - [Tech] Replace "export default" with named "export" in Odin
- no-jira - Page Routes renaming and General Refactoring

### 2022-10-11

- CW-1444 - [Login] Adjust Logo on Upgrade Headless Account and Link an Account to using Company Logo from App Editor
- CW-1436 - [Dev][PP] Password meter bar appear too many on PP change password and 3rd party account registration form

### 2022-10-10

- CW-1432 - [Dev][Login Web][PP] Error notification not appear when user try to link 3rd party to existing account without internet connection
- CW-1423 - [PP][Twitch]: No error message shown and user stuck in link to Twitch page when Twitch account is already linked to headless account in game namespace

### 2022-10-06

- OS-7792 [AP][PP][Login Web] Wording incorrect password are inconsistent before & after counts remaining

### 2022-10-04

- CW-1353 - [Login] Login App integrates WebSDK

### 2022-10-05

- CW-1386 - [Dev][PP][Launcher][My Profile] Change email address stay at the same page after input valid verification code & new email address

### 2022-10-03

- OS-7676 [Feedback] [FE] [PP][Launcher] Add a warning password input attempt before the account been locked (link existing account).
- CW-1390 - [PP][Launcher][Password&Security] Error 400 while activate or deactivate Authenticator App and Bakup Code in 2FA
- CW-1393 - [Dev][PP][Launcher] User not redirect to Home page after successfully create account from old flow Upgrade Headless account

### 2022-09-30

- CW-1347 - [PP] Refrain from navigating to 404 page on general error

### 2022-09-28

- CW-1258 - [PP][Launcher] Accounts Password and Security sidebar link goes in two lines

### 2022-09-22

- OS-7626 - [PP][Link to Existing Account] Update error message on Link to Existing Account

### 2022-09-22

- CW-1257 - [PP][Upgrade Account] Infinite loading appear after user input email on Link to new account

### 2022-09-16

- CW-1223 - Use PageRoute for the routes
- OS-7302 - [Player Portal & Launcher] Handle too many failed login attempt at Link to existing account

### 2022-09-14

- CW-1208 - [Dev][PP][Launcher] Infinite loading on generate code & barcode while enable 2FA Authenticator App

### 2022-09-12

- CW-684 - [PP][Launcher] Reduce the time required to disabling 2FA and Backup Code

### 2022-09-11

- CW-1066 - [Dev][PP] Item image is not displayed at Order Detail

### 2022-09-09

- CW-1146 - [Dev][PP][Launcher] Accessing Payment Method page with Checkout enabled give error 400
- CW-1093 - Need to refresh user profile after update custom attribute

### 2022-09-07

- OS-7468 [Dev][PP][Launcher] Fix always get 409 on upgrading headless account

### 2022-09-07

- OS-7452 [Dev][PP][Launcher] Fix `sendVerificationCode` doesn't show alert when an error occurs
- CW-1145 Click Link to Twitch on the Twitch link screen will got 404 error
- CW-1142 Switch default 2FA login method not directly updated when user re-login
- CW-1143 Click Back to Login in 2FA Authentication then re-login will redirect to select verify method
- CW-701 [Dev][Login Web][Launcher] Fill username/email on Link to Existing Account input field then delete it not trigger error message: "Email or Username is required"

### 2022-09-06

- CW-1093 - update custom attribute after link with existing account and new account
- CW-496 - Convert components in package from useHooks functions to a class based components

### 2022-09-01

- OS-7370 [Dev][PP][Launcher] Add strength meter in `InputPassword` field

### 2022-09-01
- OS-7338 [DEV][PP][Feedback] show owned information of the item contained in option box

### 2022-08-26
- OS-7362 - [Dev][PP][Launcher] Add helper popover on email field in change email page

### 2022-08-26
- OS-7351 - [DEV][PP][Option Box] fix image thumbnail on optionbox dialog use product image instead first image

### 2022-08-25
- OS-7356 - [DEV][PP][Option Box] Item contained in the option box is not updated accordingly
- OS-7351 - [DEV][PP][Option Box] UI/UX issue in option box

### 2022-08-24

- CW-1080 - [Dev][PP][Launcher] Log out button doesn't have any function at Verify change email pop up
- CW-1091 - [Dev][Launcher] Not Now button doesn't have any function at Enter Verification Code Page

### 2022-08-23

- CW-1071 - [STG][PP] - Verification email - verify button become disable after user input wrong code or expired code
- CW-1082 - [Dev][PP][Launcher] Error notification not appear when spam click send code at change email

### 2022-08-23

- CW-964 - [PP][UX] Loading Text to `Please Wait...`

### 2022-08-22
- OS-7271 - [Dev][PP][Launcher] Add IAM validation for email in upgrade headless
- OS-7273 - [Dev][PP][Launcher] Add IAM validation for email in change email and link 3rd party to a new account

### 2022-08-16

- CW-994 - [WebSDK] Refactor IAM business logic to the Web SDK

### 2022-08-15

- CW-1039 - [Dev][PP][Launcher] Legal checklist missing on 3rd party new account registration page
### 2022-08-11

- CW-965 - [STG][PP] There is no successful message after changing the email in the Odin PP.

### 2022-08-09

- CW-979 [DEV][PP][Launcher] Fix 3rd Party Account linking Error Notification doesn't appear 

### 2022-08-05

- OS-7209 [Dev][Player Portal] Fix user is not logged out upon clicking `Not now` button in new account verification form

### 2022-08-04

- OS-7129 - [Dev][Player Portal] Add a redirection page for user verification through link

### 2022-08-03

- CEC-198 - [PP] Add account linking flow using Discord

### 2022-08-03

- CW-699 - [Launcher] Improve the transition from success input 2FA or Backup code to the home page

### 2022-07-29

- CW-695 - [Dev][Login Web][Launcher] Connection error notification not appear when try to input 2FA or Backup code without internet connection

### 2022-07-28

- CW-697 - [Dev][Login Web][Launcher] Wait 10 minutes on input code screen and then fill with valid code will trigger wrong error message
- CW-841 - [Dev][Editor][Launcher] Global Color: Text only applied to a class="logoLink"

### 2022-07-27

- CW-844 - [Dev][Editor][Launcher] Global Color: Card & Modal only applied to Setting and Exit pop up
- CW-901 - [Dev][Editor][Launcher] Text on primary button using secondary color instead of text color
- CW-906 - [Editor] Global Color transparency not applied to the launcher and Odin Editor preview

### 2022-07-25

- CW-840 - [Dev][Editor][Launcher] Global Color: Secondary not applied to Secondary/Ghost button and System icon
- CW-844 - [Dev][Editor][Launcher] Global Color: Card & Modal only applied to Setting and Exit pop up

### 2022-07-18

- CW-766 - [Dev][Stage][Demo][Bug] hide Odin Launcher Account Page sidebar wallet according to feature flags

### 2022-07-14

- CW-300 - [Technical] Audit and Remove unused NPM dependencies
