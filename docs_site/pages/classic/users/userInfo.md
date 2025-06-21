
# userInfo
Gets information about a user from their id.


## Parameters
| Name   | Type   | Description                                    |
| :----- | :----- | :--------------------------------------------- |
| userId | UserId | The id of the user to get detailed info about. |



## Example
```ts copy showLineNumbers
const { data: userInfo } = await ClassicUsersApi.userInfo({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
{
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
  created: 2013-07-13T07:50:00.083Z,
  isBanned: false,
  externalAppDisplayName: null,
  hasVerifiedBadge: false,
  id: 45348281,
  name: "MightyPart",
  displayName: "MightyPart",
} 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}
```
  