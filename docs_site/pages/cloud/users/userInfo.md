
# userInfo
Gets information about a user from their id.


## Parameters
| Name   | Type   | Description                                    |
| :----- | :----- | :--------------------------------------------- |
| userId | UserId | The id of the user to get detailed info about. |



## Example
```ts copy showLineNumbers
const { data: userInfo } = await UsersApi.userInfo({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{
  path: "users/45348281",
  createTime: 2013-07-13T07:50:00.083Z,
  id: "45348281",
  name: "MightyPart",
  displayName: "Mighty",
  about: "football nothing to is push sudden national",
  locale: "en_us",
  premium: true,
  idVerified: true,
  socialNetworkProfiles: { visibility: "EVERYONE" },
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v2/users/{userId}
```
  