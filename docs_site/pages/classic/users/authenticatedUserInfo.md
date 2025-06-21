
# authenticatedUserInfo
Gets information about the currently authenticated user.



## Example
```ts copy showLineNumbers
const { data: userInfo } = await ClassicUsersApi.authenticatedUserInfo(); 
```


## Example Data
```ts copy showLineNumbers
{ id: 45348281, name: "MightyPart", displayName: "MightyPart" } 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/authenticated
```
  