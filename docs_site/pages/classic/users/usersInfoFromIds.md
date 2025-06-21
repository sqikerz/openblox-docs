
# usersInfoFromIds
Gets information about multiple users from their ids.


## Parameters
| Name                | Type                         | Description                                                                                         |
| :------------------ | :--------------------------- | :-------------------------------------------------------------------------------------------------- |
| userIds             | ArrayNonEmptyIfConst<UserId> | The ids of the users to get info about.                                                             |
| excludeBannedUsers? | boolean                      | Dictates if info about banned users should be excluded from the returned data. (defaults to false). |



## Example
```ts copy showLineNumbers
const { data: usersInfo } = await ClassicUsersApi.usersInfoFromIds({ userIds: [45348281] }); 
```


## Example Data
```ts copy showLineNumbers
{
  "45348281": {
    hasVerifiedBadge: false,
    name: "MightyPart",
    displayName: "MightyPart",
  },
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/users
```
  