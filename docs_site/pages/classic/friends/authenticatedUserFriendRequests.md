
# authenticatedUserFriendRequests
Gets friends requests sent to the authenticated user.


## Parameters
| Name       | Type                        | Description                                       |
| :--------- | :-------------------------- | :------------------------------------------------ |
| limit?     | 10 \| 18 \| 25 \| 50 \| 100 | The number of results to be returned per request. |
| sortOrder? | SortOrder                   | The order that the results are sorted in.         |
| cursor?    | string                      | The paging cursor for the previous or next page.  |



## Example
```ts copy showLineNumbers
const { data: requests } = await ClassicFriendsApi.authenticatedUserFriendRequests({ limit: 10 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    friendRequest: {
      sentAt: 2024-03-24T02:25:33.095Z,
      senderId: 5635371081,
      sourceUniverseId: 2549415383,
      originSourceType: "InGame",
      contactName: null,
    },
    mutualFriendsList: [],
    hasVerifiedBadge: false,
    description: "",
    created: 2024-03-04T15:20:32.033Z,
    isBanned: false,
    externalAppDisplayName: null,
    id: 5635371081,
    name: "loremIpsum",
    displayName: "loremIpsum",
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/my/friends/requests
```
  