
# findFriends
Gets a paginated list of all friends for the specified user.


## Parameters
| Name      | Type            | Description                                      |
| :-------- | :-------------- | :----------------------------------------------- |
| userId    | Identifier      | The id of the user to get friends for.           |
| userSort? | FriendsUserSort | Specifies how to sort the returned friends.      |
| limit?    | number          | The number of results to be returned             |
| cursor?   | string          | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: friends } = await ClassicFriendsApi.userfollowersCount({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  { id: 2820974191, hasVerifiedBadge: false },
  { id: 29992184, hasVerifiedBadge: true },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/friends/find
```
  