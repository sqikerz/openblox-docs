
# friendsList
Gets friends for a specified user.


## Parameters
| Name      | Type            | Description                                 |
| :-------- | :-------------- | :------------------------------------------ |
| userId    | Identifier      | The id of the user to get friends for.      |
| userSort? | FriendsUserSort | Specifies how to sort the returned friends. |



## Example
```ts copy showLineNumbers
const { data: friends } = await ClassicFriendsApi.friendsList({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    isOnline: true,
    presenceType: 1,
    isDeleted: false,
    friendFrequentScore: 0,
    friendFrequentRank: 1,
    hasVerifiedBadge: false,
    description: null,
    created: "0001-01-01T05:52:00Z",
    isBanned: false,
    externalAppDisplayName: null,
    id: 1999518862,
    name: "Ipsum",
    displayName: "Lorem",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/friends
```
  