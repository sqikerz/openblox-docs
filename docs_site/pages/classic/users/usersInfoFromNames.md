
# usersInfoFromNames
Gets information about multiple users from their usernames.


## Parameters
| Name                | Type                           | Description                                                                                         |
| :------------------ | :----------------------------- | :-------------------------------------------------------------------------------------------------- |
| usernames           | ArrayNonEmptyIfConst<Username> | The usernames of the users to get info about.                                                       |
| excludeBannedUsers? | boolean                        | Dictates if info about banned users should be excluded from the returned data. (defaults to false). |



## Example
```ts copy showLineNumbers
const { data: usersInfo } = await ClassicUsersApi.usersInfoFromNames({ usernames: ["MightyPart"] }); 
```


## Example Data
```ts copy showLineNumbers
{
  MightyPart: {
    hasVerifiedBadge: false,
    id: 45348281,
    name: "MightyPart",
    displayName: "MightyPart",
  },
} 
```


## Endpoint
```ansi
[38;5;117mPOST[0m[2;33m[0m /v1/usernames/users
```
  