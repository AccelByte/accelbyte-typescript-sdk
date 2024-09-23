### 0.2.14 - 2023-09-22

- fix wrong validation on `validateUrl` should not trim value 

### 0.2.13 - 2023-09-21

- fix space should not be allow on `validateUrl`
- fix validation on allow space no repeat space and only midle space allowed and add default value to  maxRepeatingSpecialCharacter `validateDisplayName`

### 0.2.12 - 2023-09-12

- fix wrong validation on validate display name when all special character active and max repeating char exist `validateDisplayName`

### 0.2.11 - 2023-09-12

- fix wrong validation on check special Character Location on the middle at `validateDisplayName`

### 0.2.10 - 2023-09-11

- fix regex that consider ":" as special char
- fix error when using  "-" at the start of the input validation password special char list
- fix cannot use only Unicode characters in Display Name when set location as middle 

### 0.2.9 - 2023-09-09

- Adding default value for propreties `allowSpace`, `specialCharacters` on `validateDisplayName` to avoid breaking changes 

### 0.2.8 - 2023-09-09

- Fix No error validation when special characters are disabled but the user inputs a password with special characters
- Fix No error validation when special characters are disabled but the user input a displayName with specific special characters
- Fix Unable to use non alphanumeric when input username
- Fix Cannot use only Unicode characters in Display Name if not set special characters location as anywhere

### 0.2.7 - 2023-09-06

- Fix missing validation for max repeating special character on display name and password 
- Fix missing validation for maximum and minimum length character on email 
- Fix Unable to input unicode characters for Display Name
- Fix No error validation when special characters are disabled but the user inputs a password with special characters
- Fix Unable to edit Display Name field when add specific combination of allowed special character

### 0.2.6 - 2023-08-22

- Fix Allow Space for `validatePassword` validation error

### 0.2.5 - 2023-08-15

- Add Age Gating Validator

### 0.2.4 - 2023-07-14

- IAM Input Validation on Display and User Name not reflect properly on PP

### 0.2.3 - 2023-06-21

- Fix Allow Space for `validateUserName` validation error

### 0.2.2 - 2023-05-12

- Add Password Validator

### 0.2.1 - 2023-04-27

- Bump from script

### 0.2.1-experimental.1 - 2023-04-27

- Bump from script

### 0.2.1-experimental.0 - 2023-04-27

- Bump from script

### 0.2.0-beta.4 - 2023-04-13

- Add PageTitle Error Validator

### 0.2.0-beta.3 - 2023-04-12

- Display-name validation causing browser to become unresponsive

### 0.2.0-beta.2 - 2023-02-23

- Add `.js` extensions to the validator imports

### 0.2.0-beta.1 - 2023-02-22

- Add "sideEffects": false in package.json

### 0.2.0-beta.0 - 2023-02-20

- Enable tree-shaking for @accelbyte/validator

### 0.1.1-alpha.57 - 2023-02-15

- Export validateSeasonPassCode

### 0.1.1-alpha.56 - 2023-02-09

- Added License file

### 0.1.1-alpha.55 - 2023-01-24

- Don't use ESM-only build yet for validator

### 0.1.1-alpha.54 - 2023-01-20

- Initial commit
