# Input Validation

## Overview

Input Validation is a library used for validating string inputs, the library consist of:
- _Validation Class_, used to initialize validation object, see example below for more detail
- _Validation utility functions_, collection of functions that when being passed a string, will return the error type for that string for a specific function (e.g 'empty' when given empty string, 'invalidFormat' when the string is not in an expected format, etc)
- _Validation error types_, collection of error type for each utility function. e.g for validatelength, the error type can be empty, lessThanLengthLimit, exceedLengthLimit.

## List of Utility Functions
- _validateAlphanumeric_, with _ValidateAlphanumericErrorType_ for the error type.
- _validateComplexPassword_, with _ValidateComplexPasswordErrorType_ for the error type.
- _validateCpuSize_, with _ValidateCpuSizeErrorType_ for the error type.
- _validateDisplayName_, with _ValidateDisplayNameErrorType_ for the error type.
- _validateDockerImage_, with _ValidateDockerImageErrorType_ for the error type.
- _validateEmail_, with _ValidateEmailErrorType_ for the error type.
- _validateLength_, with _ValidateLengthErrorType_ for the error type.
- _validateMemorySize_, with _ValidateMemorySizeErrorType_ for the error type.
- _validateNumeric_, with _ValidateNumericErrorType_ for the error type.
- _validateOrderNumber_, with _ValidateOrderNumberErrorType_ for the error type.
- _validatePath_, with _ValidatePathErrorType_ for the error type.
- _validatePermissionResource_, with _ValidatePermissionResourceErrorType_ for the error type.
- _validateTag_, with _ValidateTagErrorType_ for the error type.
- _validateTemplateSlug_, with _ValidateTemplateSlugErrorType_ for the error type.
- _validateTopic_, with _ValidateTopicErrorType_ for the error type.
- _validateUrl_, with _ValidateUrlErrorType_ for the error type.
- _validateUserDisplayName_, with _ValidateUserDisplayNameErrorType_ for the error type.
- _validateUuidV4WithoutHyphen_, with _ValidateUuidV4WithoutHyphenErrorType_ for the error type.
- _validateChannelName_, with _ValidateChannelNameErrorType_ for the error type.
    - maximum length 64
    - lowercase (a-z) and number (0-9)
    - No white-space
    - separator using hyphens (-)
    - Should start and end in alphanumeric, not the symbols
- _validateStatisticTag_, with _ValidateStatisticTagErrorType_ for the error type.
    - maximum length 36
    - lowercase (a-z), uppercase (A-Z), and number (0-9)
    - No white-space
    - separator using underscore (_)
    - Should start and end in alphanumeric, not the symbols
- _validateStatisticCode_, with _ValidateStatisticCodeErrorType_ for the error type.
    - lowercase (a-z), and number (0-9)
    - No white-space
    - separator using hyphens (-)
- _validateBase64_, with _ValidateBase64ErrorType_ for the error type.
    - lowercase (a-z), uppercase (A-Z), number (0-9), and symbols (+/)
    - allow equal symbol (=) 0 to 2 at the end of the string
    - No white-space
 - _validateFile_, with _validateFileErrorType_ for the error type.
- _validateDockerImageVersion_, with _ValidateDockerVersionErrorType_ for the error type.
    - maximum length 256
    - lowercase (a-z), uppercase (A-Z), and number (0-9)
    - No white-space
    - separator using dash (-), dot (.) and underscore (_)

The functionality of each function is as what is implied in the function name, e.g validateAlphanumeric will validate if a string is a valid Alphanumeric only string.

Run `yarn doc`, to generate a html documentation from the code and automatically open it in a browser.

## Usage Example
In this example, we have a username input field that we will need to validate. More explanation will be in-line in the example code below.
```
import { 
  Validation, // the validation class
  validateUserDisplayName, // validation function for User Display Name
  ValidateUserDisplayNameErrorType, // error type for User Display Name
} from "@accelbyte/validator"

class Component extends React.Component {
  // Declare validation as class property 
  private validation: Validation<{
    username: ValidateUserDisplayNameErrorType;
  }>;
  constructor(){
    // set username input value as state
    this.state = ({ 
      username: "",
    })

    // Initiate validation class, specifying the type of fields that need validation, and give each its validation error type.
    this.validation = new Validation()
    
    // add listener so the component wil re-render whenever the validation object is updated
    this.validation.listen(() => this.setState({}))
  }
  
  onUsernameChange(username: string){
    // update username value state
    this.setState({
        username,    
    })
    // validate and set validation value for username
    this.validation.set("username", validateUserDisplayName(username))
  }

  // method that handle errors based on errorType
  renderErrorType(errorType: string) {
    if (errorType === ValidateUserDisplayNameErrorType.empty) {
        return 'Username is empty and it is required'
    }
    if (errorType === ValidateUserDisplayNameErrorType.invalidFormat) {
        return 'Username format is invalid'
    }
    // etc
    return null;
  }
  
  render(){
    return (
      <div>
        <input onChange={this.onUsernameChange} value={this.state.username}/>
        // render the error if username validation has any error
        {renderErrorType(validation.get("username")}
      </div>
    )
  }
}
```

### Third Party Packages

#### XRegExp
XRegExp provides augmented (and extensible) JavaScript regular expressions. You get modern syntax and flags beyond what browsers support natively. XRegExp is also a regex utility belt with tools to make your grepping and parsing easier

This package used in ValidateDisplayName to validate display and filter special character name in various type of language alphabet (ex: 日本語, русский, 中文, عربى. etc)
 
 Example
```
// Test the Unicode category L (Letter)
const unicodeWord = XRegExp('^\\pL+$');
unicodeWord.test('Русский'); // -> true
unicodeWord.test('日本語'); // -> true
unicodeWord.test('العربية'); // -> true
```
