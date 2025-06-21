
# authenticatedUserUniverses
Gets a list of universes for the authenticated user.


## Parameters
| Name        | Type                  | Description                                             |
| :---------- | :-------------------- | :------------------------------------------------------ |
| isArchived? | boolean               | Whether or not to return archived games.                |
| limit?      | 10 \| 25 \| 50 \| 100 | The number of results per request.                      |
| cursor?     | string                | The paging cursor for the previous or next page.        |
| sortOrder?  | SortOrder             | The order to sort the results in. Sorted by universeId. |



## Example
```ts copy showLineNumbers
const { data: universes } = await ClassicDevelopApi.universesForGroup({ groupId: 5850082 }); 
```


## Example Data
```ts copy showLineNumbers
[
  {
    id: 43387735,
    name: "parrrty's Place Number: 2",
    description: "parrrty's Place",
    isArchived: false,
    rootPlaceId: 122862800,
    isActive: false,
    privacyType: "Private",
    creatorType: "User",
    creatorTargetId: 45348281,
    creatorName: "MightyPart",
    created: 2013-11-01T13:47:47.813Z,
    updated: 2019-04-04T13:32:49.633Z,
  },
] 
```


## Endpoint
```ansi
[38;5;156mGET[0m[2;33m[0m /v1/user/universes
```
  