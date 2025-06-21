
# usernameHistory
Gets a users previous usernames.


## Parameters
| Name       | Type            | Description                                         |
| :--------- | :-------------- | :-------------------------------------------------- |
| userId     | Identifier      | The id of the user to get the username history for. |
| limit?     | 10\|25\|50\|100 | The number of results to be returned.               |
| sortOrder? | SortOrder       | The order that the results are sorted in.           |
| cursor?    | string          | The paging cursor for the previous or next page.    |



## Example
```ts copy showLineNumbers
const { data: previousUsernames } = await ClassicUsersApi.usernameHistory({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
["NamelessGuy2005", "parrrty"] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/username-history
```
  