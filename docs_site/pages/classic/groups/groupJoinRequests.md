
# groupJoinRequests
gets join requests.


## Parameters
| Name       | Type            | Description                                      |
| :--------- | :-------------- | :----------------------------------------------- |
| groupId    | Identifier      | The id of the group to get join requests for.    |
| limit?     | 10\|25\|50\|100 | The number of results to be returned.            |
| sortOrder? | SortOrder       | The order that the results are sorted in.        |
| cursor?    | string          | The paging cursor for the previous or next page. |



## Example
```ts copy showLineNumbers
const { data: joinRequests } = await ClassicGroupsApi.groupJoinRequests({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    requester: {
      hasVerifiedBadge: false,
      userId: 2655994471,
      username: "MightyPartJr",
      displayName: "MightyPartJr",
    },
    created: 2023-09-12T09:35:49.287Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/groups/{groupId}/join-requests
```
  