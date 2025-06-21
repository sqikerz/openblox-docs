
# userFollowers
Gets the followers for a specific user.


## Parameters
| Name       | Type                        | Description                                      |
| :--------- | :-------------------------- | :----------------------------------------------- |
| userId     | Identifier                  | The id of the user to get the followers for.     |
| limit?     | 10 \| 18 \| 25 \| 50 \| 100 | The number of results to be returned.            |
| sortOrder? | SortOrder                   | The order that the results are sorted in.        |
| cursor?    | string                      | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: followersCount } = await ClassicFriendsApi.userfollowersCount({ userId: 45348281 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    isDeleted: false,
    friendFrequentScore: 0,
    friendFrequentRank: 201,
    hasVerifiedBadge: true,
    description: null,
    created: 0001-01-01T05:51:00.000Z,
    isBanned: false,
    externalAppDisplayName: null,
    id: 156,
    name: "builderman",
    displayName: "builderman",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/users/{userId}/followers
```
  