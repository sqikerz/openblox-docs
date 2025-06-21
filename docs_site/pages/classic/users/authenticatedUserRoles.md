
# authenticatedUserRoles
Gets the currently authenticated user's roles.



## Example
```ts copy showLineNumbers
const { data: roles } = await ClassicUsersApi.authenticatedUserRoles(); 
```


## Example Data
```ts copy showLineNumbers
["BetaTester"] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/authenticated/roles
```
  