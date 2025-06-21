
# friendsSearch
Search through a users friends list.


## Parameters
| Name      | Type                                     | Description                                       |
| :-------- | :--------------------------------------- | :------------------------------------------------ |
| userId    | Identifier                               | The id of the user to get online friends for.     |
| query     | string                                   | The query to search for.                          |
| userSort? | Exclude<FriendsUserSort, "Alphabetical"> | Specifies how to sort the returned friends.       |
| limit?    | number                                   | The number of results to be returned per request. |
| cursor?   | string                                   | The paging cursor for the previous or next page.  |



## Example
```ts copy showLineNumbers
const { data: searchedFriend } = await ClassicFriendsApi.friendsSearch({ userId: 45348281, query: "b" }); 
```


## Example Data
```ts copy showLineNumbers
[
  { id: 2027974391, hasVerifiedBadge: false },
  { id: 176144016, hasVerifiedBadge: false },
  { id: 3116019601, hasVerifiedBadge: false },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/friends/search
```
  