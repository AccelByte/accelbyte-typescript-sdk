# Service Error Translator

## Overview

Service Error Translator is a library that can be used to turn Justice standard error codes into 
user-friendly error message. It contains a React component that accepts a standard error response 
from Justice backend services.

## Usage Example

```ts
import { 
  ServiceErrorTranslator,  
} from "@accelbyte/error-translator"

class Component extends React.Component {
  // Declare validation as class property 
  constructor(){
    // set username input value as state
    this.state = ({ 
      errorMessage: null,
    })
  }
  
  async fetchUsers = () => {
     try {
        const response = await api.fetchUsers();
        // ...
     } catch (error) {
        // assuming error is an object with properties ErrorCode and ErrorMessage
        this.setState({
          errorMessage: <ServiceErrorTranslator error={error} />
        });
     }
  }
  
  render(){
// ...
  }
}
```
