# Permission Guard

## Overview

Permission Guard is a library that can be used to limit user access based on user's roles/namespace roles
This library consist of:
- _PermissionGuard Class_, used to initialize permission guard object, see example below for more detail
- _Permission and Namespace Role utility functions_, collection of functions that can help determine user's permission and roles.

## Requirements
- Required params:
  - `user: AdminUser | null`: The user who will be checked for their permissions
- Optional params, depend on the permission resource, we may need to provide these params:
  - `currentNamespace: string`: Current selected namespace
  - `clientId: string`: Current selected clientId (e.g Admin Portal's Oauth Client page)

## Usage Example

### Basic usage

```tsx
import {
  PermissionGuard,
  CrudType,
} from "@accelbyte/validator"
import { AdminUser } from "./user";

class Component extends React.Component {
  permissionGuard: PermissionGuard;

  constructor(props: { user: AdminUser, currentNamespace?: string, clientId?: string }) {
    super()
    // Initialize PermissionGuard
    this.permissionGuard = new PermissionGuard({
      user: props.user,
      currentNamespace: props.currentNamespace,
      clientId: props.clientId
    })
  }

  adminCanCreateUser = () => ({
    resource: "NAMESPACE:{namespace}:USER",
    action: CrudType.CREATE,
  })

  render() {
    return (
      <div>
        <button
          hidden={this.permissionGuard.hasPermission(this.adminCanCreateUser())}>Create
          user
        </button>
      </div>
    );
  }
}
```

### Usage with subscriber
If by any chance you can't provide the required data on component constructor, you can always set it later with the help of PermissionGuard listener.

```tsx
import {
  PermissionGuard,
  CrudType,
} from "@accelbyte/validator"
import { AdminUser } from "./user";

class Component extends React.Component {
  permissionGuard: PermissionGuard;

  constructor(props: { user: AdminUser, currentNamespace?: string, clientId?: string }) {
    super()
    this.setState({
      user: null,
      currentNamespace: "",
      clientId: ""
    })
    // Initialize PermissionGuard
    this.permissionGuard = new PermissionGuard();
    this.permissionGuard.listen(() => this.setState({}));
  }
  
  componentDidMount() {
    this.fetchData()
  }

  fetchData = async () => {
    // Async call to fetch user/namespace/clientId
    this.setState({ user, currentNamespace, clientId }, () => {
      // when data ready, set required data
      this.permissionGuard.setUser(user);
      this.permissionGuard.setCurrentNamespace(currentNamespace);
      this.permissionGuard.setClientId(clientId);
    });
  }
  
  componentWillUnmount() {
    this.permissionGuard.unlisten(() => this.setState({}));
  }

  adminCanCreateUser = () => ({
    resource: "NAMESPACE:{namespace}:USER",
    action: CrudType.CREATE,
  })

  render() {
    return (
      <div>
        <button
          hidden={this.permissionGuard.hasPermission(this.adminCanCreateUser())}
        >
          Create user
        </button>
      </div>
    );
  }
}
```
