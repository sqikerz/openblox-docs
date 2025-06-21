
# inactiveFriends
Gets a list of all inactive friends for a specified user.


## Parameters
| Name   | Type       | Description                                     |
| :----- | :--------- | :---------------------------------------------- |
| userId | Identifier | The id of the user to get inactive friends for. |



## Example
```ts copy showLineNumbers
const { data: inactive } = await ClassicFriendsApi.inactiveFriends({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    isDeleted: false,
    friendFrequentScore: 0,
    friendFrequentRank: 201,
    hasVerifiedBadge: false,
    description: null,
    created: 0001-01-01T05:51:00.000Z,
    isBanned: false,
    externalAppDisplayName: null,
    id: 5275218436,
    name: "loremIpsum",
    displayName: "LoremIpsum",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/friends/inactive
```
  